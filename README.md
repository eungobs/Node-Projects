# Simple HTTP Server

This project is a basic HTTP server built using Node.js. It handles different routes and HTTP methods, providing responses for GET and POST requests.

## Table of Contents

- Installation
- Usage
- Routes
- Contributing
- License

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**
  
   git clone https://github.com/eungobs/Node-Projects.git
   mkdir node-server
   cd node-server
   
Install dependencies: This project does not have any external dependencies. However, ensure you have Node.js installed on your machine. You can download it from Node.js official website.
Usage
To start the server, run the following command in your terminal:

node server.js

The server will start and listen on port 3002. You can access it by navigating to http://localhost:3002/ in your web browser.

Routes
The server handles the following routes:

GET /: Returns a welcome message.
GET /about: Returns an about page message.
GET /*: Returns a 404 error message for any undefined routes.
POST /: Returns a message indicating a POST request was received.
Other Methods: Returns a 405 error message for any methods other than GET and POST.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
