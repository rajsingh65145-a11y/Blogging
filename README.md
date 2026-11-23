# ✍️ Blogging — Share Your Thoughts With The World

A full-stack blogging platform where users can create, publish, explore, and manage blog posts. Built with Node.js, Express.js, MongoDB, and EJS, this project focuses on backend development, authentication, database management, and dynamic server-side rendering.

---

## 🚀 About The Project

**Blogging** is a dynamic web application designed to provide users with a platform to share their ideas and stories through blog posts.

The application allows users to authenticate, publish their thoughts, and explore content shared by others.

This project was developed to gain practical experience in full-stack web development, RESTful routing, server-side rendering, authentication, and database integration.

---

## ✨ Features

- 🔐 **User Authentication** — Secure user signup and login functionality.
- 📝 **Create Blogs** — Write and publish your own blog posts.
- 📖 **Explore Blogs** — Browse and read published blog posts.
- 👤 **User Profiles** — Associate blog posts with their authors.
- 🍪 **Cookie-Based Authentication** — Manage authenticated user sessions using cookies.
- 🗄️ **Database Integration** — Store users and blog posts using MongoDB.
- 📱 **Responsive Interface** — Access the application across different screen sizes.
- ⚡ **Dynamic Rendering** — Render pages dynamically using EJS.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | Database Modeling |
| EJS | Server-Side Rendering |
| JavaScript | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |
| Cookie Parser | Cookie Management |
| Git & GitHub | Version Control |
| Render | Deployment |

---

## 📂 Project Structure

```text
Blogging/
│
├── controllers/       # Application controllers
├── middlewares/       # Authentication middleware
├── models/            # MongoDB models
├── public/            # Static assets (CSS, images, etc.)
├── routes/            # Application routes
├── services/          # Application services
├── views/             # EJS templates
│
├── .env               # Environment variables
├── .gitignore         # Git ignored files
├── app.js             # Application entry point
├── package.json       # Dependencies and scripts
└── package-lock.json  # Dependency lock file
```

---

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Blogging
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

Add the following variables:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
```

Replace the MongoDB connection string with your own MongoDB Atlas connection URI.

### 5. Run the Application

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

https://blogging-5pzv.onrender.com
---

## 🔒 Environment & Security

- Environment variables are stored in `.env`.
- Sensitive credentials should never be committed to GitHub.
- `.env` and `node_modules` are excluded using `.gitignore`.
- Database credentials should be kept private.

---

## ☁️ Deployment

The application is deployed using **Render**, with MongoDB Atlas providing cloud database services.

The deployment workflow uses GitHub integration and automatic deployment on new commits.

```text
Local Development
       |
       v
     GitHub
       |
       v
  Render Deployment
       |
       v
  Live Application
       |
       v
   MongoDB Atlas
```

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience with:

- Building backend applications using Node.js and Express.
- Implementing authentication and cookie handling.
- Working with MongoDB and Mongoose.
- Organizing applications using routes, controllers, models, and middleware.
- Rendering dynamic web pages with EJS.
- Managing environment variables.
- Deploying full-stack applications.
- Using Git and GitHub for version control.

---

## 🔮 Future Improvements

- Blog search and filtering.
- Like and comment functionality.
- User profile customization.
- Rich text editor for blog creation.
- Pagination for blog listings.
- Image uploads.
- Improved content discovery.

---

## 👨‍💻 Developer

**Harsh Singh**

BCA Student | Full-Stack Developer

Passionate about building web applications, exploring backend technologies, and continuously improving development skills.

---

### ⭐ If you find this project interesting, consider giving the repository a star!