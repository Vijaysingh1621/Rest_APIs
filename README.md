

---

# REST API for User Management

This project is a Node.js-based REST API for managing user data, including features like registration, login, updating user details, and deleting users. The API uses **MongoDB** as the database, **Express.js** for routing, and **JWT** for authentication.

## Features

- **User Registration**: Allows users to register by providing their name, email, and password.
- **User Login**: Authenticates users and provides a JWT token for session management.
- **Update User**: Enables users to update their name, email, or password.
- **Delete User**: Deletes a user from the database.
- **Secure Passwords**: Passwords are hashed using bcrypt for security.
- **Token-based Authentication**: JWT tokens are used to manage user sessions.

## Tech Stack

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing user data.
- **Mongoose**: ODM library for MongoDB.
- **Bcrypt**: For hashing passwords.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **Postman**: For API testing.

## API Endpoints

### **Base URL**: `http://localhost:5000/api/users`

#### 1. **Register User**
- **Endpoint**: `/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
      "_id": "64fc2ddf4fc2b7e5",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "token": "your.jwt.token"
  }
  ```

---

#### 2. **Login User**
- **Endpoint**: `/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
      "_id": "64fc2ddf4fc2b7e5",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "token": "your.jwt.token"
  }
  ```

---

#### 3. **Update User**
- **Endpoint**: `/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
      "name": "Updated Name",
      "email": "updated.email@example.com",
      "password": "newpassword456"
  }
  ```
- **Response**:
  ```json
  {
      "_id": "64fc2ddf4fc2b7e5",
      "name": "Updated Name",
      "email": "updated.email@example.com"
  }
  ```

---

#### 4. **Delete User**
- **Endpoint**: `/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
      "message": "User deleted successfully"
  }
  ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vijaysingh1621/Rest_APIs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rest_apis
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

## Testing

You can test the API using [Postman](https://www.postman.com/) or any HTTP client.

## Folder Structure

```
rest-api-user-management/
│
├── controllers/
│   └── userController.js    # Business logic for handling user routes
├── models/
│   └── userModel.js         # Mongoose schema and model for users
├── routes/
│   └── userRoutes.js        # API routes for user management
├── config/
│   └── db.js                # MongoDB connection setup
├── .env                     # Environment variables
├── server.js                # Entry point of the application
├── package.json             # Project metadata and dependencies
```

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as needed.

