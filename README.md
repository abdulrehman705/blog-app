# Blog App

## Description

The Blog App is a web application that allows users to create, read, and interact with blog posts. It provides a platform for users to express their thoughts, share knowledge, and engage with the community through comments and feedback.

### Key Features

- **User Authentication**: Users can register, log in, and manage their accounts.
- **Create and Edit Posts**: Users can create their blog posts, including text formatting and image uploads.
- **Responsive Design**: The app is built to be mobile-friendly, ensuring a good user experience on all devices.

## Tech Stack

- **Frontend**:

  - React.js
  - Next.js
  - TypeScript
  - Tailwind CSS

- **Backend**:

  - Firebase (Firestore for database)
  - Firebase Authentication for user management

- **Deployment**:
  - Vercel (for Next.js deployment)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app.git

   ```

2. Checkout to Repo Folder

   ```bash
   cd blog-app

   ```

3. Install Dependencies

   ```bash
   npm install

   ```

4. Add env File and Firebase keys

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

   ```

5. Run Blog App

   ```bash
   npm run dev
   ```
