# PracticeHub

A comprehensive maths revision platform for KS2, KS3, GCSE, and A-Level students.

## 🚀 Getting Started

This project is designed to be managed via a **GitOps** workflow. All educational content is stored as JSON files in the `src/data/` directory.

### Repository Structure

- `.github/workflows/deploy.yml`: CI/CD pipeline for automatic deployment to Cloud Run.
- `src/data/`: JSON data files for all subjects and levels.
  - `gcse_edexcel_maths.json`: GCSE Maths topics.
  - `ks3_assessments.json`: KS3 assessment links.
  - `ks2_past_papers.json`: KS2 past paper links.
  - `gcse_edexcel_past_papers.json`: GCSE past paper links.
- `src/pages/`: React components for each section of the app.

## 🛠 How to Update Content

1.  **Clone the repository** (after exporting from AI Studio).
2.  **Modify the JSON files** in `src/data/`.
3.  **Commit and Push** your changes to the `main` branch.
4.  The GitHub Action will automatically build and deploy the updated app.

## 📦 CI/CD Setup

To enable automatic deployment to Google Cloud Run:

1.  Create a Google Cloud Project.
2.  Set up a Service Account with "Cloud Run Developer" and "Service Account User" roles.
3.  Generate a JSON key for the Service Account.
4.  Add the following Secrets to your GitHub repository:
    - `GCP_CREDENTIALS`: The content of your Service Account JSON key.
    - `GEMINI_API_KEY`: Your Google Gemini API key.

## 🛡 License

Apache-2.0
