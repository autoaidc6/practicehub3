import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Routes
  app.get("/api/data-files", async (req, res) => {
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const files = await fs.readdir(dataDir);
      const jsonFiles = files.filter(f => f.endsWith(".json"));
      res.json(jsonFiles);
    } catch (error) {
      res.status(500).json({ error: "Failed to list data files" });
    }
  });

  app.get("/api/data-files/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      if (!filename.endsWith(".json")) {
        return res.status(400).json({ error: "Only JSON files are allowed" });
      }
      const filePath = path.join(process.cwd(), "src", "data", filename);
      const content = await fs.readFile(filePath, "utf-8");
      res.json(JSON.parse(content));
    } catch (error) {
      res.status(500).json({ error: "Failed to read file" });
    }
  });

  app.post("/api/data-files/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      const content = req.body;
      if (!filename.endsWith(".json")) {
        return res.status(400).json({ error: "Only JSON files are allowed" });
      }
      const filePath = path.join(process.cwd(), "src", "data", filename);
      await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf-8");
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to write file" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
