
# 🧑‍💻 DevJourney

Welcome to my DevJourney — a personal learning tracker and development playground.  
Click the badge below to visit the live GitHub Pages site:

[![Deploy](https://img.shields.io/github/deployments/Druaka/devjourney/github-pages?label=github%20pages)](https://druaka.github.io/devjourney/)

---

## ✅ Project Status

This is an actively developing monorepo project with a live frontend, connected backend, and clean CI/CD.

### What’s been accomplished so far:

- ✅ Angular frontend hosted on GitHub Pages
- ✅ Node.js + Express backend deployed to Render
- ✅ Frontend and backend communicate via public API
- ✅ Environment-aware service calls with provideHttpClient (Angular 18)
- ✅ Ping service integrated and visible on homepage
- ✅ GitHub Actions deploy workflow for Angular
- ✅ Clean monorepo structure with shared scripts and npm orchestration
- ✅ Working favicon and visual polish started

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

Feel free to explore, use, or contribute. This project grows as I grow.
