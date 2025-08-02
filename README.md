# 🛍️ Localized Marketplace App

A full-stack web application that allows users to register, log in, create listings for items, browse nearby listings using a map interface, and interact in a secure and scalable environment. Built using **React**, **Node.js**, **Express**, **PostgreSQL**, and **Leaflet.js** for geolocation mapping.
---

## 🚀 Features

- 🔐 User authentication (register/login)
- 📦 Listing management (CRUD operations)
- 📍 Interactive map with Leaflet.js and OpenStreetMap
- 📷 Local image uploads using Multer
- 📡 Location-based listing discovery
- 📂 Clean backend/frontend separation
- 📬 JWT-secured routes

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express
- PostgreSQL + Sequelize
- JWT + bcryptjs
- Multer for image uploads

### Frontend
- React + Vite
- Tailwind CSS
- Leaflet.js with marker clustering
- Axios for API requests

---

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/marketplace_db
JWT_SECRET=your_strong_jwt_secret

## 💻 Local Setup

### Backend

cd backend
cp .env.example .env
npm install
npx sequelize db:create
node server.js

### frontend

cd frontend
cp .env.example .env
npm install
npm run dev

