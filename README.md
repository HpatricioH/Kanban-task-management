# Project Name

This personal project is all about learning and experimentation. I have crafted this API to gain hands-on experience with MongoDB, TypeScript, Prisma, and Vercel for deployment.

This API also collaborates with the Kanban Frontend project, serving as the backend that provides real-time data updates and functionality for the Kanban board.

## Table of Contents

* [Installation](#installation)
* [MongoDB Setup](#mongodb-setup)
* [Endpoints](#endpoints)
* [Built With](#built-with)

## Installation
To install the project, follow these steps:

1. Clone the repository to your local machine.
      ```sh
      git clone https://github.com/HpatricioH/Kanban-task-management.git
     ```
  
  2. Change to the repo directory
      ```sh
      cd Kanban-task-Management-api
      ```
  3. Run npm install to install the project dependencies.
      ```sh
      npm install
      ```
  4. Create a .env file in the root directory of the project.
  5. Add the following environment variables to the .env file:
      ```sh
      PORT=8080
      DATABASE_URL=<your MongoDB connection string>
      ```
  6. start the server.
      ```sh
      npm start
      ```

## MongoDB Setup
To set up MongoDB for local development, follow these steps:

1. Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas.
2. Create a new cluster and database.
3. Copy the connection string for your database.
4. Paste the connection string into the DATABASE_URL environment variable in your .env file.

## Endpoints
The following endpoints are available in the API:

**GET /tasks**
```
Returns a list of all tasks.
```

**GET /tasks/:id**
```
Returns a single task with the specified ID.
```

**POST /tasks**
```
Creates a new task.
```

Request body:
```json
{
  "title": "Task title",
  "description": "Task description",
  "columnId": "Column ID"
}
```

**PUT /tasks/:id**

Updates an existing task with the specified ID.

Request body:
```json
{
  "title": "New task title",
  "description": "New task description",
  "columnId": "New column ID"
}
```
DELETE /tasks/:id
```
Deletes an existing task with the specified ID.
```

## Built With

* Node.js
* Express.js
* TypeScript  
* MongoDB Atlas (for database)
* Playwright (for testing)
* Prisma (for ORM)
* Vercel (for deployment)
