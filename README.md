# e-auth-server-service

## Table of contents
- [Auth Server Service – Earnsome MVP](#auth-server-service–earnsome-mvp)
- [Tech Stack](#tech-stack)
- [The gateway table](#the-gateway-table)
- [Get Started](#get-started)
- [Contributions](#contributions)


## Auth Server Service – Earnsome MVP
The Auth Server Service is responsible for handling all authentication and identity-related functionality within the Earnsome platform. It serves as the central security component of the microservice architecture.

This service manages user login and registration, including support for basic email/password authentication as well as OAuth 2.0 integration (Google Login). It is also responsible for generating and validating JSON Web Tokens (JWT), which are used to secure communication between the frontend, API Gateway, and backend services.

The Auth Service does not store business or user profile data beyond authentication credentials, ensuring a clear separation of concerns. Its primary role is to provide a secure and standardized authentication layer for all other microservices in the system.


## Tech Stack
- Node.js
- Express.js
- http-proxy-middleware
- JSON Web Token (JWT)
- CORS
- Swagger docs  (documentation and slight testing internally)



## Get Started
1. Clone the repo:
```bash
 git clone https://github.com/hihassan1998/e-api-gateway-service.git
```
2. Move to the file:
```bash
 cd e-api-gateway-service
```
3. Intall all dependencies:
```bash
 npm install
```
4. GO to the web-browser and run 
```bash
 https://localhost:3001
```


## Contributions
This repository and its microservices are being developed as part of the research and development of the Earnsome fintech application, a real estate investment MVP platform.

The system is designed and implemented by Hassan Ishfaq Hussain, acting as the lead developer, with a focus on building a scalable microservice architecture for authentication, user management, business logic, and frontend integration.

Ibrahim Sohail Dar contributes as the accountant and business domain specialist, primarily responsible for defining and supporting the financial models, investment logic, and business rules that shape the core functionality of the platform.