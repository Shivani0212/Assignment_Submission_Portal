
# Assignment Submission Portal

This is a backend system for an assignment submission portal where users can upload assignments, and admins can accept or reject them. The system uses **MongoDB** as the database and **Express.js** as the web framework.

## Features

- **User Functionality:**
  - Register and log in.
  - Upload assignments.
- **Admin Functionality:**
  - Register and log in.
  - View assignments tagged to the admin.
  - Accept or reject assignments.

---

## Prerequisites

Before running the project, make sure you have the following installed:

1. **Node.js**: [Download & Install Node.js](https://nodejs.org/)
2. **MongoDB**: [Download & Install MongoDB](https://www.mongodb.com/try/download/community)

You can also use a cloud MongoDB instance from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## Setup Instructions

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd assignment-portal
```

### 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project directory and add the following environment variables:

```
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

- Replace `<your-mongodb-connection-string>` with your MongoDB URI (local or cloud).
- Replace `<your-secret-key>` with a random secret key used for JWT authentication.

### 4. Start the Server

Run the server using:

```bash
npm start
```

By default, the server will run on `http://localhost:3000`.

---



## Testing the API

You can use [Postman](https://www.postman.com/) to test the API endpoints. Refer to the **Testing Workflow in Postman** section above for details on how to perform API calls.

---

