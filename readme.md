## Project: Hire Heaven - Microservices Job Portal

A scalable, cloud-deployed job portal built on a microservices architecture, integrating advanced features like AI analysis and event-driven communication to handle high-volume traffic and diverse user roles (Job Seeker, Recruiter).

### 🛠️ Key Technologies & Architecture:

- **Frontend**: Developed a responsive, high-performance user interface using **Next.JS**.
- **Backend**: Designed and implemented multiple, loosely coupled microservices using **Node.JS** and **Express.JS**.
- **Event Streaming & Messaging**: Architected an **event-driven system using Kafka** and **KafkaJS** to decouple heavy tasks (like email dispatching) from core business logic, significantly reducing API latency.
- **File Storage**: Integrated **Cloudinary** for secure and scalable storage and delivery of user files, specifically for handling resume uploads.
- **Data & Caching**: Utilized **Neon DB (PostgreSQL)** for robust transactional data and **Redis** for efficient caching and session management.
- **Development Tools**: Ensured code integrity and maintainability using **TypeScript** end-to-end and leveraged **Docker** for consistent containerization.

### 🌐 Microservice Breakdown & Responsibilities:

- **Auth Service**: Managed all user authentication flows (registration, login, token management).
- **User Service**: Handled CRUD operations for individual user and recruiter profiles.
- **Job Service**: Managed job postings, recruiter actions, and centralized job feed presentation.
- **Payment Service**: Stored and managed all subscription and transaction payment details.
- **Utils/Mail Service**: Acted as a **Kafka Consumer** listening to the `send-mail` topic; utilized **Nodemailer** to process and send automated transactional emails asynchronously.

### 💾 Database Schema (PostgreSQL):

- **users**: Stores core user data including authentication details, role (ENUM: 'jobseeker'/'recruiter'), profile details, and file references (`resume`, `profile_pic`).
- **skills**: Simple lookup table for distinct skill names.
- **user_skills**: A junction table enforcing a **Many-to-Many relationship** between users and skills.

### 💻 API & Implementation Details:

- **Middleware**: Utilized **Multer** and the **datauri** npm package to handle file buffers, enabling the seamless transfer of multi-part form data to Cloudinary.
- **Asynchronous Processing**: Implemented a dedicated consumer group (`mail-service-group`) to ensure reliable email delivery without interrupting the user experience.

### ✨ Key Features Implemented:

- **Automated Notification System**: Integrated a Kafka-driven mailer to send real-time updates to users regarding job applications and account status.
- **Job Seeker Functionality**: Enabled users to search/filter job listings and manage resumes via Cloudinary.
- **Recruiter Workflow**: Implemented lifecycle management for job postings, including the ability to open/close applications.
- **Generative AI Integration**: Developed an **AI Resume Analyzer** providing an **ATS compatibility score** and customized recommendations.
- **Subscription Management**: Integrated **RazorPay** for handling secure premium service payments.
- **Cloud Deployment**: Managed end-to-end deployment of the microservices ecosystem on **AWS**.
