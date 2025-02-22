# Employee-Management-App

## Overview

The Employee Management System is a comprehensive web application designed for efficient employee record management. Built using Next.js, TypeScript, Redux, Tailwind CSS, and ShadCN UI, it provides an intuitive interface for viewing, editing, and managing employee details. The system includes authentication, robust CRUD functionalities, form validation, and a responsive UI featuring a sidebar and navbar.

## Features & Functionality

### 1. Employee Card View

- Presents employees in an elegant card layout.
- Each card includes:
  - Profile Picture (default image if unavailable).
  - Employee Name (styled in bold).
  - Contact Details: Phone Number, Email, and Address.
- Optimized design ensuring proper alignment of images, text, and buttons.

### 2. Employee Table View

- Displays employee information in a structured table format.
- Provides action buttons for editing and deleting records.
- Supports  editing.
- Includes a delete confirmation prompt for data security.

### 3. Form Validation

- Implements stringent validation rules for creating and updating employee records.
- Provides real-time error messages for invalid inputs.

### 4. CRUD Operations

- **Create:** Add new employees through a form-based interface.
- **Read:** View employee details seamlessly in both Card and Table views.
- **Update:** Modify employee details directly within the Table View.
- **Delete:** Remove employee records securely with a confirmation prompt.

## User Interface & Experience

### 1. Sidebar Navigation

- Contains easy-access links to:
  - Employee Card View
  - Employee Table View
- Designed to be collapsible for an enhanced mobile experience.

### 2. Navbar (Top Bar)

- Displays application branding.
- Features a profile icon with a dropdown menu for user actions.

### 3. Employee Pages Design

#### Card View

- Modern and visually appealing display of employees.
- Includes subtle hover effects and smooth transitions for better interactivity.

#### Table View

- Neatly structured columns featuring Profile Picture, Name, Phone, Email, and Address.
- Supports inline and modal-based data modification.
- Features a delete button with a confirmation mechanism.

## UI/UX Enhancements

- Fully responsive design ensuring seamless usability across devices.
- Clear, concise error messages for improved form validation feedback.
- Loading indicators to enhance user experience when fetching data.

## Additional Features

- **Dark Mode:** Enables users to switch between light and dark themes.
- **Search Functionality:** Allows employees to be searched by name or email.
- **Filters:** Optionally filter employees by status or department.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI.
- **Storage:** Local Storage for persistent data management

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-management.git
   cd employee-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser to access the application.

## Deployment

The Employee Management System is deployed on Netlify.

- **Live Demo:** [ https://employee-management096.netlify.app/ ]




