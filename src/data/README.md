# Data Management Strategy

To automate resource updates via GitHub and CI/CD, it is recommended to move from TypeScript-based data (`topics.ts`) to structured JSON files.

## Recommended Structure

```
src/data/
├── topics/
│   ├── gcse-maths.json
│   ├── ks3-science.json
│   └── ...
└── papers/
    ├── ks2-past-papers.json
    └── ...
```

## Automation Workflow (GitOps)

1. **Update Data:** Modify the relevant `.json` file in the `src/data/` directory.
2. **Push to GitHub:** Commit and push the changes to the `main` branch.
3. **CI/CD Trigger:** GitHub Actions detects the push and starts the `deploy.yml` workflow.
4. **Build:** The application is rebuilt, importing the fresh JSON data.
5. **Deploy:** The updated application is deployed to production.

## Benefits
- **No Code Changes:** Update content without touching the application logic.
- **Version Control:** Track every change to your resources.
- **Collaboration:** Multiple people can update resources via Pull Requests.
```
