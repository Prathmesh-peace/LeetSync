# 🚀 LeetSync

Automatically synchronize, organize, and version your accepted **LeetCode** solutions on **GitHub**.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-19-blue)
![WXT](https://img.shields.io/badge/WXT-Extension-orange)
![Express](https://img.shields.io/badge/Express-5.x-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Version](https://img.shields.io/badge/Version-v2.0.0-success)

---

## ✨ Features

### 🔄 Automatic Synchronization

- ✅ Detect accepted LeetCode submissions
- ✅ Wait for final LeetCode verdict before synchronization
- ✅ Fetch complete problem details
- ✅ Fetch accepted solution code
- ✅ Automatic GitHub OAuth authentication
- ✅ Automatically create GitHub repository
- ✅ One-click synchronization

### 📁 Smart Repository Generation

- ✅ Generate problem README
- ✅ Generate solution metadata
- ✅ Generate repository README
- ✅ Generate repository statistics
- ✅ Organize by Topics
- ✅ Organize by Languages
- ✅ Organize by Difficulty

### 🕒 Solution Versioning (New)

- ✅ Language-based solution directories
- ✅ Independent metadata for every language
- ✅ Automatic archive before overwrite
- ✅ Preserve every accepted solution
- ✅ Complete solution history

### ⚡ Smart Features

- ✅ Unique problem detection
- ✅ Language-specific duplicate detection
- ✅ Incremental synchronization
- ✅ Persistent repository updates
- ✅ Clean repository structure

---

## 📂 Repository Structure

```text
leetcode/
│
├── README.md
├── stats.json
│
├── problems/
│   └── 0001-two-sum/
│       ├── README.md
│       │
│       ├── java/
│       │   ├── Solution.java
│       │   ├── metadata.json
│       │   └── history/
│       │       └── 2026-07-10_18-42-31_2050639394/
│       │           ├── Solution.java
│       │           └── metadata.json
│       │
│       └── python3/
│           ├── Solution.py
│           └── metadata.json
│
├── topics/
├── languages/
└── difficulty/
```

---

## 🕒 Solution Versioning

LeetSync automatically preserves your previous accepted solution before replacing it.

Each archived solution stores:

- Source Code
- Runtime
- Memory Usage
- Submission Timestamp
- Submission ID

This allows you to track your coding journey without losing previous accepted solutions.

---

## 🌍 Multi-Language Support

Solve the same problem in multiple programming languages.

Each language maintains:

- Latest Solution
- Metadata
- Independent Version History

Repository statistics continue to count **unique solved problems**, regardless of how many languages you use.

---

## 🛠 Tech Stack

### Extension

- WXT
- React
- TypeScript
- Chrome Extension API

### Backend

- Express
- TypeScript
- GitHub REST API

---

## 🚀 Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Extension

```bash
cd extension
npm install
npm run dev
```

Load the generated extension into Chrome.

---

## ⚙️ Environment Variables

```env
PORT=5000

GITHUB_CLIENT_ID=YOUR_CLIENT_ID

GITHUB_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

---

## 🗺️ Roadmap

### ✅ v1.0.0

- Automatic synchronization
- GitHub OAuth
- Automatic repository creation
- Problem README generation
- Metadata generation

### ✅ v1.1.0

- Repository statistics
- Repository README
- Topics generator
- Languages generator
- Difficulty generator
- Duplicate detection
- Incremental repository updates

### ✅ v2.0.0

- Language-based solution organization
- Automatic solution versioning
- Multi-language support
- Solution history
- Independent language metadata
- Smarter duplicate detection

### 🚀 Future

- AI-generated explanations
- Personal notes
- Company tags
- Progress dashboard
- Support for additional coding platforms

---

## 👨‍💻 Author

**Prathmesh**

GitHub: https://github.com/Prathmesh-peace

---

## 📄 License

This project is licensed under the **MIT License**.