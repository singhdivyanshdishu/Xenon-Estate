# Xenon Estate
`Xenon Estate` is a `MERN` stack real estate website designed to streamline property browsing, buying, and selling. It utilizes `MongoDB` for efficient data storage, `Express.js` for scalable server management, `React` for an intuitive and dynamic user interface, and `Node.js` for robust backend functionality. Enhanced with advanced authentication options, the platform supports `email-password login` as well as `Google authentication`. Additionally, `AI-driven` property `recommendations` ensure a personalized user experience, helping buyers and sellers make informed decisions. This modern, secure platform offers an optimized solution for seamless real estate transactions.  



## Features  

* **Fully Responsive :** Designed to adapt seamlessly to any screen size, providing a consistent and user-friendly experience across all devices.  
* **Advanced User Authentication :** Securely create accounts, log in, and log out with a streamlined and secure process.  
* **Email Verification :** Ensure account security by verifying your email before accessing advanced features.   
* **OAuth Integration :** Sign in with Google, Facebook, or other social media platforms for a faster and convenient experience.  
* **Lazy Loading :** Dynamically load property listings as you scroll, improving performance and reducing initial load times.  
* **Click Tracking :** Monitor and store user interactions with listings to better understand preferences and behaviors.  
* **AI-Powered Recommendations :** Utilize collected data to deliver personalized property suggestions, enhancing the user experience and relevance of search results.

## Technology Stack
* **Vite :** A fast build tool and development server for modern web projects.
* **Node.js :** JavaScript runtime for the backend server.
* **Express :** Web framework for Node.js to build RESTful APIs.
* **React :** Frontend library for building user interfaces.
* **MongoDB :** NoSQL database for storing property listings and user information.


## Installation Guide

Follow the steps below to set up the project locally:

### Clone the Repository
```bash
$ git clone <repository-link>
```

### Navigate to the Project Directory
```bash
$ cd Xenon-Estate
```

### Install Server Dependencies
```bash
$ npm install
```

### Install Client Dependencies
```bash
$ cd client
$ npm install
```

### Environment Configuration

#### Server Environment Variables
Create a `.env` file in the root directory and add the following configurations:
```
MONGO = "Your MongoDB URI"
JWT_SECRET = "Your JWT Secret"
```

#### Client Environment Variables
Create a `.env` file in the `client` directory and add the following configuration:
```
VITE_FIREBASE_API_KEY = "Your Firebase API Key"
```

### Start the Development Server

#### Start the Backend Server
```bash
$ npm run dev
```

#### Start the Frontend Server
```bash
$ cd client
$ npm run dev
```

Ensure all dependencies are installed and environment variables are correctly configured to run the application smoothly.

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/f94b1bff-4f5a-4a99-95ab-44926b08ea6a)

### Sign In / Sign Up
![image](https://github.com/user-attachments/assets/7d279134-67c7-406b-a8f4-016e13082e44)

### About
![image](https://github.com/user-attachments/assets/cab47b8a-a8de-4fbb-bbc5-6e102f6aa0f7)









