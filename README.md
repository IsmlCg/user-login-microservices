# User Login Microservices

Microservices for User Login provide scalable and modular user authentication in a distributed environment. As a result of the microservices architecture, authentication-related functionalities are compartmentalized, making them flexible, maintainable, and easy to integrate into different applications.

## Features

- **User Authentication:** Secure and customizable user authentication supporting various mechanisms like email/password, social media logins, etc.

- **Token-based Authorization:** Stateless communication between services using token-based authentication for enhanced security.

- **User Management:** CRUD operations for user management, including user creation, retrieval, update, and deletion.

- **Password Hashing:** Implementation of robust password hashing techniques for securing user credentials.

## Technologies Used

- **Node.js:** Building lightweight and efficient microservices.

- **Express.js:** Creating a scalable and modular web application framework.

- **Firebase database:** Storing user data and authentication information in a flexible NoSQL database.

- **Docker:** Containerizing microservices for easy deployment and scalability.

- **JWT (JSON Web Tokens):** Implementing secure token-based authentication.

## Getting Started

1. **Clone the Repository:**
   ```bash
   
   git clone https://github.com/IsmlCg/user-login-microservices.git
   cd user-login-microservices
1. **install Dependencies:**
Install the necessary dependencies for each service.
# In each service directory
npm init -y
npm install express jsonwebtoken body-parser
npm audit fix
npm install express bcrypt jsonwebtoken
npm install bcrypt
# Install Firebase CLI
npm install -g firebase-tools 
firebase login
firebase init
2. **Run the Authentication Service:**
In the user-auth-service directory, run the authentication service:
node src/index.js
3. ** **