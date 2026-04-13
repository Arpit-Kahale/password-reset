# 🔐 Password Reset System (MERN Stack)

A full-stack password reset application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to securely reset their password using email verification and token-based authentication.

---

## 🚀 Features

* 🔑 Forgot Password functionality
* 📧 Email verification using Nodemailer
* 🔐 Secure token-based password reset
* ⏳ Token expiry for enhanced security
* 🗄 MongoDB database integration
* ⚛️ React frontend with responsive UI
* 🔄 Complete end-to-end working flow

---

## 🛠 Tech Stack

* **Frontend:** React.js, Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Email Service:** Nodemailer (Gmail SMTP)

---

## 🔄 Password Reset Flow

1. User enters email on the Forgot Password page
2. System checks if the user exists in the database
3. A secure token is generated and sent via email
4. Token is stored in the database with expiry time
5. User clicks the reset link from email
6. Token is verified
7. User sets a new password
8. Password is updated in the database and token is cleared

---

## 📁 Project Structure

```
password-reset-app/
│
├── backend/        # Node.js + Express API
├── frontend/       # React application
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/password-reset.git
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend/password-reset-frontend
npm install
npm start
```

---

## 🔐 Environment Variables (.env)

Create a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL=your_email@gmail.com
PASS=your_app_password
```

---

## 🌐 Deployment

* Frontend: Netlify
* Backend: Render

---

## 📌 Author

* **Arpit Kahale**

---

## 💯 Status

✔ Project Completed
✔ Fully Functional
✔ Ready for Deployment

---
