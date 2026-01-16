# Next.js + Node.js + MongoDB Application

This is a full-stack web application built with **Next.js**, **Node.js**, and **MongoDB**, and deployed on **Vercel**. The project supports server-side rendering, API routes, and a scalable cloud database.

---

## 🚀 Tech Stack

* **Frontend:** Next.js (React)
* **Backend:** Node.js (Next.js API Routes)
* **Database:** MongoDB (MongoDB Atlas)
* **Deployment:** Vercel
* **Package Manager:** npm or yarn

---

## 📁 Project Structure

```
├── pages/
│   ├── api/            # API routes (Node.js backend)
│   ├── _app.js
│   └── index.js
├── lib/
│   └── mongodb.js      # MongoDB connection helper
├── models/             # Mongoose models
├── public/             # Static assets
├── styles/             # CSS / styling
├── .env.local          # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key   # if using authentication
NEXTAUTH_URL=http://localhost:3000
```

> ⚠️ Never commit `.env.local` to version control.

---

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**

   ```
   http://localhost:3000
   ```

---

## 🧩 MongoDB Connection (Example)

```js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
```

---

## 📦 API Routes

Next.js API routes act as the backend:

```
/pages/api/*.js
```

Example:

```
GET /api/users
POST /api/users
```

---

## 🚀 Deployment on Vercel

1. Push your code to GitHub
2. Go to **[https://vercel.com](https://vercel.com)**
3. Import your GitHub repository
4. Add Environment Variables in Vercel Dashboard:

   * `MONGODB_URI`
   * Any other required secrets
5. Click **Deploy**

Vercel automatically builds and deploys your Next.js application.

---

## 🧪 Build for Production

```bash
npm run build
npm start
```

---

## 📌 Features

* Server-side rendering (SSR)
* API routes with Node.js
* MongoDB integration
* Environment-based configuration
* Easy Vercel deployment

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

* Next.js Documentation
* MongoDB Atlas
* Vercel Platform
* Node.js Community
