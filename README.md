# 🚀 LeetSync

Automatically sync your accepted **LeetCode** solutions to GitHub.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-19-blue)
![WXT](https://img.shields.io/badge/WXT-Extension-orange)
![Express](https://img.shields.io/badge/Express-5.x-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✨ Features

- ✅ Detect accepted LeetCode submissions
- ✅ Fetch submission code
- ✅ Fetch problem details
- ✅ GitHub OAuth authentication
- ✅ Automatically create GitHub repository
- ✅ Upload solutions automatically
- ✅ Generate README for every problem
- ✅ Store metadata
- ✅ Organize by Topics
- ✅ Organize by Languages
- ✅ Generate repository statistics

---

## Repository Structure

```
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
└── languages/
```

---

## Tech Stack

### Extension

- WXT
- React
- TypeScript
- Chrome Extension APIs

### Backend

- Express
- TypeScript
- GitHub REST API

---

## Installation

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

Load the generated extension in Chrome.

---

## Environment

```env
PORT=5000

GITHUB_CLIENT_ID=YOUR_CLIENT_ID

GITHUB_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

---

## Screenshots

### Extension

(Add popup screenshot)

### Repository

(Add repository screenshot)

---

## Roadmap

### v1.0

- [x] Automatic sync
- [x] GitHub OAuth
- [x] Repository generation

### v1.1

- [ ] Better README
- [ ] Repository settings
- [ ] Duplicate detection

### v2.0

- [ ] AI explanations
- [ ] Notes
- [ ] Company tags
- [ ] Contest history

---
## Known Limitations (v1.0.0)

LeetSync v1.0.0 provides a complete end-to-end synchronization pipeline from LeetCode to GitHub.

### Current Limitation

Repository-wide files are generated using the latest synchronized submission only.

This affects:

* `README.md`
* `stats.json`
* `topics/`
* `languages/`

As a result, these files currently reflect the most recent submission instead of the cumulative repository history.

Problem-specific files are not affected:

* ✅ `Solution.java`
* ✅ `README.md` (inside each problem)
* ✅ `metadata.json`

### Planned for v1.1.0

The next feature release will introduce incremental repository updates.

Instead of regenerating repository-wide files from the current submission, LeetSync will:

* Read the existing repository state.
* Merge the new submission.
* Update statistics incrementally.
* Preserve existing topics and languages.
* Regenerate the root README with accurate cumulative information.

This enhancement will make repository-wide metadata fully consistent across all synchronized solutions.


## Author

**Prathmesh**

GitHub

https://github.com/Prathmesh-peace

---

## License

MIT
