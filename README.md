# 🚀 LeetSync

Automatically synchronize your accepted **LeetCode** solutions to **GitHub** with a single click.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-19-blue)
![WXT](https://img.shields.io/badge/WXT-Extension-orange)
![Express](https://img.shields.io/badge/Express-5.x-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Version](https://img.shields.io/badge/Version-v1.1.0-success)

---

## ✨ Features

### Automatic Synchronization

* ✅ Detect accepted LeetCode submissions
* ✅ Fetch submission code
* ✅ Fetch complete problem details
* ✅ Wait for final LeetCode verdict before synchronization
* ✅ Automatic GitHub OAuth authentication
* ✅ Automatically create GitHub repository
* ✅ Upload accepted solutions

### Repository Generation

* ✅ Generate problem README
* ✅ Generate metadata.json
* ✅ Generate repository README
* ✅ Generate repository statistics
* ✅ Organize by Topics
* ✅ Organize by Languages
* ✅ Organize by Difficulty

### Smart Features

* ✅ Persistent repository updates
* ✅ Duplicate submission detection
* ✅ Incremental synchronization
* ✅ Clean repository structure

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
│       ├── Solution.java
│       └── metadata.json
│
├── topics/
│
├── languages/
│
└── difficulty/
```

---

## 🛠 Tech Stack

### Extension

* WXT
* React
* TypeScript
* Chrome Extension API

### Backend

* Express
* TypeScript
* GitHub REST API

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

## 📸 Screenshots

### Extension

> Add popup screenshot

### Generated Repository

> Add GitHub repository screenshot

---

## 🗺️ Roadmap

### ✅ v1.0.0

* Automatic synchronization
* GitHub OAuth
* Automatic repository creation
* Problem README generation
* Metadata generation

### ✅ v1.1.0

* Repository statistics
* Repository README
* Topics generator
* Languages generator
* Difficulty generator
* Duplicate detection
* Incremental repository updates

### 🚀 v2.0.0

* AI-generated explanations
* Personal notes
* Company tags
* Progress dashboard
* Support for additional coding platforms

---

## 👨‍💻 Author

**Prathmesh**

GitHub: https://github.com/Prathmesh-peace

---

## 📄 License

This project is licensed under the **MIT License**.
