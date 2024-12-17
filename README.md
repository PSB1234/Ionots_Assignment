# Project Assignment Module

## Overview

The **Project Assignment Module** is a feature that allows users to assign, manage, and track project assignments within an organization or team. It is part of a larger project management system designed to enhance team collaboration, task tracking, and overall project workflow.

## Features

- **Create New Assignment**: Allows admins or managers to create new project assignments.
- **View Assignments**: Users can view details of their assigned projects, deadlines, and tasks.
- **Update Assignment**: Users and admins can update assignment details like progress, status, and comments.
- **Track Progress**: Provides a clear overview of the status of assignments.
- **Assign to Team Members**: Project managers can assign tasks to specific team members based on skillset and availability.
- **Deadline Management**: Assignments include start and end dates, with reminders for upcoming deadlines.

## Installation

### Prerequisites

- Node.js 
- MongoDB 

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/PSB1234/Ionots_Assignment.git
    ```

2. Navigate into the project directory:
    ```bash
    cd frontend
    ```
    and
    ```bash
    cd server
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables for database configuration (e.g., MongoDB URI).

5. Start the server:
    ```bash
    npm start
    ```

6. The application will be running on `http://localhost:5000`.

## Usage

Once the module is set up, the following endpoints will be available:

### API Endpoints

- **POST /User/assign**: Assigns a new task/assignment to a user.
    

- **GET /User/:userId**: Fetches all assignments for a specific user by their userId.
- **PUT /:assignmentId/progress**: Updates the progress of a specific assignment by its assignmentId.
- **PUT /:assignmentId/score**: Submits a score for a specific assignment by its assignmentId.
   

- **DELETE /assignments/:id**: Delete an assignment by ID.

### Frontend Usage

- The frontend UI allows users to view,  project assignments.


## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB 
