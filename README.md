# 🛒 OneCart – E-Commerce Website

OneCart is a full-stack **MERN-based e-commerce web application** designed to provide a smooth and user-friendly online shopping experience.

The platform allows users to browse products, manage their cart, place orders, make secure payments, and manage their accounts. It also includes backend APIs for handling users, products, orders, authentication, and payments.

---

## 🚀 Features

### 👤 User Features
- User registration and login
- Secure authentication using JWT
- Password hashing with bcrypt
- User profile management
- Browse and search products
- View detailed product information
- Add products to cart
- Update cart quantity
- Remove products from cart
- Place orders
- View order history
- Secure online payment

### 🛍️ Product Features
- Product listing
- Product details
- Product categories
- Product images
- Product search
- Product stock management
- Product price and description management

### 💳 Payment
- Razorpay payment integration
- Secure payment processing
- Order creation after successful payment

### ☁️ Image Management
- Image upload using Multer
- Cloudinary integration for cloud-based image storage

### 🔐 Security
- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Environment variables for sensitive credentials

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt

### Database
- MongoDB
- Mongoose

### Other Tools & Services
- Razorpay
- Cloudinary
- Multer
- Git & GitHub
- Postman

---

## 📂 Project Structure

```text
OneCart/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

> The exact folder structure may vary depending on the current version of the project.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shami700/OneCart.git
```

### 2. Navigate to the Project

```bash
cd OneCart
```

### 3. Install Dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory and add the required credentials.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> Never upload your `.env` file or secret credentials to GitHub.

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

The backend will normally run on:

```text
http://localhost:5000
```

---

## 🔄 Application Workflow

```text
User
  ↓
Register / Login
  ↓
Browse Products
  ↓
View Product Details
  ↓
Add to Cart
  ↓
Checkout
  ↓
Razorpay Payment
  ↓
Order Created
  ↓
Order History
```

---

## 🔌 API Modules

The backend provides REST APIs for major application operations such as:

| Module | Purpose |
|---|---|
| Authentication | Register, Login, Logout |
| Users | User profile management |
| Products | Create, read, update and delete products |
| Cart | Add, update and remove cart items |
| Orders | Create and manage orders |
| Payments | Process Razorpay payments |
| Uploads | Upload product images |

---

## 🗄️ Database

OneCart uses **MongoDB** as its primary database.

Main collections/models include:

- Users
- Products
- Cart
- Orders

Mongoose is used to define schemas and communicate with MongoDB.

---

## 📸 Screenshots

Add your project screenshots here:

```text
screenshots/
├── home.png
├── products.png
├── product-details.png
├── cart.png
├── checkout.png
├── orders.png
└── login.png
```

Example:

```markdown
![Home Page](screenshots/home.png)
```

---

## 🎯 Project Objectives

The main objectives of OneCart are:

- Build a complete full-stack e-commerce application
- Understand MERN stack development
- Implement RESTful APIs
- Learn authentication and authorization
- Work with MongoDB and Mongoose
- Integrate online payment services
- Implement cloud-based image storage
- Develop a responsive and user-friendly interface

---

## 🔮 Future Improvements

- Admin dashboard
- Product reviews and ratings
- Wishlist functionality
- Advanced product filtering
- Order tracking
- Email notifications
- Discount and coupon system
- AI-based product recommendations
- Improved payment and order management

---

## 👨‍💻 Developer

**Md Shami Arzoo**

B.Tech – Computer Science & Engineering  
SOA University, ITER

GitHub: [@shami700](https://github.com/shami700)

---

## 📄 License

This project is developed for **educational and portfolio purposes**.

---

⭐ If you find this project useful, consider giving it a star on GitHub!
