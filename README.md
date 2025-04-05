# 🧑‍💻 DevJourney

Welcome to my DevJourney — a personal learning tracker and development playground.  
Click the badge below to visit the live GitHub Pages site:

[![GitHub Page](https://img.shields.io/github/deployments/Druaka/devjourney/github-pages?label=GitHub%20Page)](https://druaka.github.io/devjourney/)

<picture><img src="https://img.shields.io/github/stars/Druaka/devjourney?style=social&label=Stars" alt="Stars"></picture>
<picture><img src="https://img.shields.io/github/contributors/Druaka/devjourney?label=Contributors" alt="Contributors"></picture>
<picture><img src="https://img.shields.io/github/license/Druaka/devjourney?label=License" alt="License"></picture>

---

## ✅ Project Status

<picture><img src="https://img.shields.io/github/actions/workflow/status/Druaka/devjourney/deploy-frontend.yml?branch=main&label=Build%20Status" alt="Build Status"></picture>
<picture><img src="https://img.shields.io/github/last-commit/Druaka/devjourney?label=Last%20Commit" alt="Last Commit"></picture>

This is an actively developing monorepo project with a live frontend, connected backend, and clean CI/CD.

### What’s been accomplished so far:

- ✅ Clean monorepo structure with shared scripts and npm orchestration
- ✅ Angular frontend hosted on GitHub Pages
- ✅ Node.js + Express backend deployed to Render
- ✅ Seamless frontend-backend integration with environment-aware service calls using provideHttpClient (Angular 18)
- ✅ GitHub Actions deploy workflow for Angular
- ✅ Render auto-deploys backend on Git push to `devjourney/backend`

---

## 📂 Project Structure

```
devjourney/
├── .github/        # GitHub Actions (Pages deployment)
├── frontend/       # Angular app
├── backend/        # Node.js + Express API
├── package.json    # Root scripts to manage both apps
```

---

## 🔧 How to Run Locally

From the project root:

1. Install dependencies for both frontend and backend:

```bash
npm run install:all
```

2. Start both apps locally (concurrently):

```bash
npm start
```

Frontend runs on http://localhost:4200  
Backend runs on http://localhost:8080

---

## 🌍 Live Links

- Frontend: [https://druaka.github.io/devjourney/](https://druaka.github.io/devjourney/)
- Backend: [https://devjourney-backend.onrender.com/api/ping](https://devjourney-backend.onrender.com/api/ping)

---

## 🚧 Next Steps

- Build out journal entry system (frontend + backend + DB)
- Add PostgreSQL integration on backend
- Optionally deploy backend to Fly.io

---

## 🤝 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/johan-van-wyk-0/)
[![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?style=for-the-badge&logo=Twitch&logoColor=white)](https://www.twitch.tv/druakah)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/@druakah)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/JohanvanWyk3525)

---

Feel free to explore, use, or contribute. This project grows as I grow.
