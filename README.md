# ITI Node.js Track Repository

Welcome to the official repository for the **ITI Node.js Track**. This repository contains daily labs, exercises, TypeScript NestJS implementations, and production-ready backend services.

<p align="left">
  <a href="https://blog-api-project-eta.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Blog_API-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <a href="https://github.com/Z-Haneen/blog-api-project" target="_blank">
    <img src="https://img.shields.io/badge/Blog_API_Repo-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://github.com/Z-Haneen/ITI-NodeJS-Track/tree/main/day%2020/task" target="_blank">
    <img src="https://img.shields.io/badge/Day_20_NestJS_Task-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  </a>
</p>

---

## 📂 Repository Structure

```plaintext
.
├── day 1 - day 19/        # Core Node.js, Express.js, MongoDB Atlas & Auth Labs
├── day 20 - day 21/       # TypeScript Fundamentals & NestJS Architecture Labs
├── Gen Ai 1 - Gen Ai 2/   # Generative AI Integrations & Tasks
└── README.md              # Track Documentation
🌟 Featured Project: Express Blog Application APIA production-ready RESTful Backend API for a full-featured Blog Application built with Node.js, Express.js, MongoDB Atlas, and ImageKit. Fully integrated with JWT Authentication, Role-Based Access Control (RBAC), and deployed on Vercel Serverless environment.🔑 Key FeaturesAuthentication & Authorization: JWT token-based auth with password hashing via bcrypt.Role-Based Access Control (RBAC): Distinct permissions across User, Admin, and SuperAdmin roles.Post Management: Complete CRUD operations for blog posts with media uploads using ImageKit SDK.Groups & Permissions: Community group creation, member management, and post restrictions.Clean Architecture: Modular MVC structure, Joi input schema validations, and global error handling.📌 API Endpoints ReferenceAuthenticationMethodEndpointDescriptionAuth RequiredPOST/auth/registerRegister a new user accountNoPOST/auth/loginLogin and receive JWT TokenNoPosts ManagementMethodEndpointDescriptionAuth RequiredGET/api/postsGet all posts (sorted by latest)NoPOST/api/postsCreate post (Multipart/form-data for images)YesDELETE/api/posts/:idDelete post (Owner or SuperAdmin only)YesGroupsMethodEndpointDescriptionAuth RequiredPOST/api/groupsCreate a new community groupYesUsersMethodEndpointDescriptionAuth RequiredGET/api/usersGet list of registered usersYesDELETE/api/users/:idDelete user accountSuperAdmin🛠️ Environment Variables SetupAn example of the .env configuration file:Code snippetPORT=3000
MONGODB_URI=your_mongodb_connection_string
TOKEN_SECRET_KEY=your_jwt_secret_key
SUPERADMIN_NAME=Super Admin
SUPERADMIN_EMAIL=superadmin@iti.com
SUPERADMIN_PASSWORD=SuperPassword123!
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=[https://ik.imagekit.io/your_id](https://ik.imagekit.io/your_id)
👤 AuthorHaneen Wael Ali ZarifaComputer Science Student | Backend & Database Developer