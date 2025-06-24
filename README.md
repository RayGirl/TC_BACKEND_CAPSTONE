FashionTube
A RESTful API built with Node.js, Express, and MongoDB to support *FashionTube*, a web platform that offers curated fashion education to users with limited access to physical fashion schools.


 *Features*
- User registration & login with JWT authentication
-Role-based Access Control(RBAC)
-Password Reset functionality
-Email notifications
-Profile Management
-Input validation
-Error Handling
- Secure password hashing with bcrypt
- Browse fashion courses (videos, PDFs)
- Track progress per user per course
- Modular, ES Module (ECMA) compliant backend


 *Tech Stack*
- Node.js
- Express
-Express-Validator
- MongoDB with Mongoose
- bcryptjs
- JSON Web Tokens
-Crypto
-Multer
-Nodemailer
-Swagger
- dotenv, cors

---

 *Project Structure*
/src
├── controllers/       # Business logic
├── models/            # Mongoose schemas
├── routes/            # API endpoints
├── middlewares/       # Auth & error handling
|── services           # Email service
├── server.js          # App entry point
├── .env               # Environment variables
```

---

 *Setup Instructions*

1. Clone the repository: https://github.com/RayGirl/TC_BACKEND_CAPSTONE
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---
*API Endpoints*

*Auth*
- `POST /api/auth/register`
- `POST /api/auth/login`

*Courses*
- `GET /api/courses`
- `GET /api/courses/:id`

*Progress*
- `GET /api/progress` (requires token)
- `POST /api/progress/update` (requires token)

---

 *Contributors*

We welcome contributions from all developers!  
Here’s how to get started:

1. Fork the repo
2. Create your feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

Please ensure your code is clean and well-commented before submitting.

---

This project is This project is developed and maintained by:

   Mutmainah Raymond: 
   Victoria O. Akinwumi: victoriaoakinwumi@gmail.com
   Owolabi Samuel: samuelsnofts@gmail.com
   Wambua Mutuku: mutukuwambua400@gmail.com
   Sosanya Oluwadamisi Emmanuel: damisiemma@gmail.com
   Wasiu Soliu: wasiusoliu@gmail.com
   Olatunde Israel: 