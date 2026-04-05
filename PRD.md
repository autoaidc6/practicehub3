# Product Requirements Document (PRD): PracticeHub

## 1. Project Overview
**Product Name:** PracticeHub
**Status:** In Development / Beta
**Target Audience:** GCSE, KS3, and KS2 Students
**Core Value Proposition:** A centralized, organized hub for Maths, English, and Science revision, providing quick access to video explanations, practice questions, and solutions categorized by grade level, year group, or subject area.

---

## 2. Problem Statement
Students across different key stages often struggle to find high-quality, organized revision materials for multiple subjects. Resources are scattered across various websites, making it difficult to follow a structured revision path based on specific grades, years, or topics.

---

## 3. Goals & Objectives
- **Centralization:** Bring together videos, questions, and answers in one place for Maths, English, and Science.
- **Organization:** Categorize topics by GCSE grade (1-9), KS3 Year (7-9), or KS2 Level (Expected/Greater Depth) to allow targeted revision.
- **Accessibility:** Provide a clean, mobile-responsive interface for studying on any device.
- **Efficiency:** Reduce the time spent searching for resources and increase time spent practicing.
- **Scalability:** Build a framework that easily accommodates new subjects, exam boards, and key stages.

---

## 4. Target Audience & User Personas
- **GCSE Student (Primary):** Needs to practice specific topics they find difficult across Maths, English, and Science.
- **KS2/KS3 Student:** Preparing for SATs or end-of-year assessments in core subjects.
- **Parent:** Looking for a reliable, one-stop shop to help their child revise core subjects without navigating multiple confusing websites.
- **Tutor/Teacher (Secondary):** Wants a quick way to point students to specific resources for homework or in-class practice.

---

## 5. Functional Requirements

### 5.1. Home Page
- **Navigation Hub:** Links to different key stages (KS2, KS3, GCSE, A-Level).
- **Subject Selection:** Within each stage, users can select their chosen subject (Maths, English, Science).
- **Dynamic Cards:** Visual entry points for each stage and subject combination.
- **Footer:** Copyright information, social media links (YouTube, Twitter, Instagram, TikTok), and contact details.

### 5.2. GCSE Revision (Edexcel & AQA)
- **Subject-Specific Pages:** Separate pages for Maths, English, and Science for both Edexcel and AQA.
- **Topic List:** A comprehensive table of topics relevant to the specific subject and exam board.
- **Categorization:** Topics grouped by Grade (1, 2, 3, 4, 5, 6, 7, 8+).
- **Resource Linking:**
    - **Video Explanation:** Link to a YouTube video.
    - **Exam Questions:** Direct link to a PDF worksheet.
    - **Solutions:** Direct link to the corresponding PDF answers.
- **Revision Booklets (Maths only):** Quick access buttons for "The Ultimate Foundation Revision Booklet" and "The Ultimate Higher Revision Booklet".
- **Search & Filter:** Filter by Grade level and search by topic name.

### 5.3. KS3 Revision
- **Subject-Specific Pages:** Separate pages for Maths, English, and Science.
- **Topic List:** A comprehensive table of topics relevant to the specific subject.
- **Categorization:** Grouped by Year (7, 8, 9).
- **Resource Linking:** Video, Questions (PDF), and Solutions (PDF).
- **Search & Filter:** Filter by Year and search by topic name.

### 5.4. KS2 Revision
- **Subject-Specific Pages:** 
    - **Maths:** Comprehensive table of Maths topics.
    - **English (Reading):** Comprehensive table of Reading topics.
    - **English (GPS):** Comprehensive table of Grammar, Punctuation & Spelling topics.
- **Topic List:** A comprehensive table of topics relevant to the specific subject.
- **Categorization:** Grouped by Level (Expected, Greater Depth).
- **Resource Linking:** Video, Questions (PDF), and Solutions (PDF).
- **Search & Filter:** Filter by Level and search by topic name.

---

## 6. UI/UX Principles
- **Clarity:** Use of color-coded badges for grades/years (e.g., Red for Year 9, Blue for Year 7).
- **Consistency:** Uniform table layout across all revision pages to reduce cognitive load.
- **Subject Navigation:** Clear breadcrumbs or tabs to switch between subjects within a stage.
- **Feedback:** Hover states and scale animations on buttons to provide interactive feedback.
- **Mobile-First:** Ensuring touch targets are large enough for mobile users.

---

## 7. Non-Functional Requirements
- **Performance:** Fast loading times for the topic list (using optimized React state).
- **Responsiveness:** Must work seamlessly on mobile, tablet, and desktop.
- **Design:** Clean, professional aesthetic using a consistent color palette.
- **Maintainability:** Structured TypeScript code with clear interfaces for topics and navigation.

---

## 8. Tech Stack
- **Frontend:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (motion/react)
- **Deployment:** Cloud Run (via AI Studio Build)

---

## 9. Future Roadmap
- **Admin Dashboard:** Automate resource updates (e.g., via GitHub repo, CI/CD).
- **User Accounts:** Allow students to track their progress (mark topics as "completed").
- **Student Progress Reports:** Visual representation of revision coverage for students and parents.
- **Interactive Quizzes:** Built-in digital questions instead of just PDFs.
- **AI Tutor:** Integration with Gemini to answer specific questions based on the topics.
- **More Exam Boards:** Add OCR and IGCSE sections.

---

## 10. Success Metrics
- **User Engagement:** Number of PDF downloads and video clicks across all subjects.
- **Retention:** Students returning to the site throughout the exam season.
- **Feedback:** Positive sentiment from students regarding ease of use.
- **Coverage:** Percentage of topics with active (non-placeholder) links.
