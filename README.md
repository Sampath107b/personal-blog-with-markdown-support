🚀 Dev Blog – Fullstack Blog Platform

Live:https://personal-blog-with-markdown-support.vercel.app

A fullstack MERN blog application where admins can create, edit, and delete posts, while users can explore posts by categories, slugs, and more.
This project is built to showcase modern React + Node.js + MongoDB development skills, including authentication, protected routes, and a rich markdown editor.

✨ Features

🔐 Authentication – JWT-based login system for admin

📝 CRUD Posts – Create, edit, delete, and manage blog posts

🗂 Categories & Tags – Organize posts by categories

📰 Markdown Support – Write posts with markdown formatting

📅 Published Date & Author shown for each post

📱 Responsive UI – Clean and mobile-friendly design

🛡 Protected Dashboard – Only admins can manage posts

🌐 Deployed – Easily accessible online demo

🛠 Tech Stack

Frontend

⚛ React (React Router, Hooks)

🎨 CSS (custom styling)

Backend

🌐 Node.js + Express

🗄 MongoDB (with Mongoose)

🔑 JWT Authentication

Others

🚀 Axios for API calls

📦 LocalStorage for token storage

📸 Screenshots
🏠 Homepage

[Add screenshot here]

📊 Admin Dashboard

[Add screenshot here]

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/Sampath107b/personal-blog-with-markdown-support
cd your-repo-name

2️⃣ Install dependencies
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

3️⃣ Setup environment variables

Create a .env file inside server folder:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000

4️⃣ Run the project
# Run backend
cd server
npm start

# Run frontend
cd client
npm start


The app should now be running at:

Frontend → http://localhost:3000

Backend → http://localhost:5000

🌐 Deployment

Frontend deployed on Vercel/Netlify

Backend deployed on Render/Heroku

MongoDB hosted on MongoDB Atlas

📌 Roadmap

 Add user registration

 Add comments feature

 Improve SEO with meta tags

 Dark mode support

🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

📄 License

This project is licensed under the MIT License.
