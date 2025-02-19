# MERN NKC Chat Application

![Chat App Screenshot](https://res.cloudinary.com/dsjbd8hqv/image/upload/v1739963359/nkc_chat_app_screenshot_ucx7gk.png)

A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to register, log in, and chat in real-time with other users. The application is deployed on Render and can be accessed live [here](https://mern-nkc-chat-app.onrender.com/login).

---

## Features

- **User Authentication**: Register and log in with secure password hashing using bcryptJS and JSON Web Tokens (JWT).
- **Real-Time Chat**: Real-time messaging powered by Socket.IO.
- **Cloudinary Integration**: Upload and store profile pictures using Cloudinary.
- **Responsive Design**: Built with Tailwind CSS for a clean and responsive UI.
- **State Management**: Zustand for lightweight and efficient state management.
- **Notifications**: React Hot Toast for toast notifications.
- **Environment Variables**: Secure configuration using `.env` files.
- **Deployment**: Deployed on Render for seamless hosting.

---

## Live Demo

You can access the live application here:  
👉 [MERN Chat App](https://mern-nkc-chat-app.onrender.com/login)

---

## Technologies Used

### Frontend

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.
- **Socket.IO Client**: Real-time communication with the backend.
- **Lucide React**: Icon library for React.
- **React Hot Toast**: Toast notifications for user feedback.
- **React Router DOM**: Routing for single-page applications.
- **Zustand**: Lightweight state management library.
- **ESLint**: Linting tool for code quality.

### Backend

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and chat data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Socket.IO**: Real-time, bidirectional communication.
- **bcryptJS**: Password hashing for secure authentication.
- **JSON Web Tokens (JWT)**: Secure user authentication.
- **Cloudinary**: Image upload and storage.
- **Cookie-Parser**: Parse HTTP request cookies.
- **CORS**: Enable Cross-Origin Resource Sharing.
- **dotenv**: Load environment variables from `.env` files.

### Dev Dependencies

- **Nodemon**: Automatically restart the server during development.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud-based)
- Cloudinary account (for image uploads)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the `backend` folder and add the following:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

4. **Run the Application**

   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`.

---

## Deployment

The application is deployed on Render. To deploy your own version:

1. Create a Render account.
2. Connect your GitHub repository to Render.
3. Set up environment variables in the Render dashboard.
4. Deploy the application.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Render](https://render.com) for hosting the application.
- [Tailwind CSS](https://tailwindcss.com) for the amazing utility-first CSS framework.
- [Socket.IO](https://socket.io) for enabling real-time communication.
- [Cloudinary](https://cloudinary.com) for image storage.

---
