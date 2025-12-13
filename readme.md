## Project: Hire Heaven - Microservices Job Portal

A scalable, cloud-deployed job portal built on a microservices architecture, integrating advanced features like AI analysis and event-driven communication to handle high-volume traffic and diverse user roles (Job Seeker, Recruiter).

### 🛠️ Key Technologies & Architecture:

- **Frontend**: Developed a responsive, high-performance user interface using **Next.JS**.
- **Backend**: Designed and implemented multiple, loosely coupled microservices using **Node.JS** and **Express.JS**.
- **File Storage**: Integrated **Cloudinary** for secure and scalable storage and delivery of user files, specifically for handling resume uploads.
- **Data & Caching**: Utilized **Neon DB (PostgreSQL)** for robust transactional data and **Redis** for efficient caching and session management.
- **Event Streaming**: Implemented **Kafka** to handle asynchronous communication between services (e.g., application status updates, user notifications), ensuring system reliability and scalability.
- **Development Tools**: Ensured code integrity and maintainability using **TypeScript** end-to-end and leveraged **Docker** for consistent containerization.

### 🌐 Microservice Breakdown & Responsibilities:

- **Auth Service**: Managed all user authentication flows (registration, login, token management).
- **User Service**: Handled CRUD operations for individual user and recruiter profiles.
- **Job Service**: Managed job postings, recruiter actions, and centralized job feed presentation.
- **Payment Service**: Stored and managed all subscription and transaction payment details.
- **Utils Service**: Centralized utility functions, including handling cloud storage, **Generative AI** features (Resume Analyzer), and email notification features.

### 💻 API Implementation Details:

- **Core Endpoints (Auth Service)**: Implemented a key endpoint (`/register`) to handle user registration, including differentiating and assigning roles (**Job Seeker** / **Recruiter**) upon signup.
- **Middleware**: Utilized **Multer** for efficient handling of multi-part form data, receiving file uploads before processing and sending them to **Cloudinary** for storage.

### ✨ Key Features Implemented:

- **Generative AI Integration**: Developed an **AI Resume Analyzer** feature that provides users with an **ATS compatibility score**, customized strengths, and recommendations.
- **Subscription Management**: Integrated **RazorPay** to handle payment gateways for premium subscriptions and services.
- **Cloud Deployment**: Managed end-to-end deployment, scaling, and operational maintenance of the microservices ecosystem on **AWS**.
