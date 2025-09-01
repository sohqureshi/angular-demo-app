# TestApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server
To install the dependancies
```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```
```bash
node server.js
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.


# Angular Feature Demo Web Application

## Project Features

- **Login & Authentication:**
   - Secure login page with Angular Material UI
   - Cookie-based authentication
   - Auth guard for protected routes
   - Logout functionality in a centralized header

- **Dashboard:**
   - Welcome message with user email
   - Navigation to list page

- **List Page:**
   - Lazy-loaded Angular module for performance
   - Fetches items from backend API
   - Uses Angular Component Store for state management
   - Loading spinner and error handling
   - Navigation back to dashboard

- **State Management:**
   - @ngrx/component-store for scalable, reactive state

- **UI/UX:**
   - Angular Material for forms, buttons, spinner, lists
   - Responsive, modern design

- **Backend (Node.js/Express):**
   - Handles `/api/login` and `/api/items` endpoints
   - Proxy setup for local development

## Angular Concepts Used

- Standalone components and modules
- Angular Material UI library
- @ngrx/component-store for state
- Route guards for authentication
- Lazy loading for feature modules
- RxJS for API calls and state
- Proxy configuration for API
- Modular folder structure

## Installation & Start Instructions

### 1. Install dependencies
```powershell
npm install
```

### 2. Start the backend server
```powershell
node server.js
```

### 3. Start the Angular frontend
```powershell
npm start
```
or
```powershell
ng serve --proxy-config proxy.conf.json
```

### 4. Access the app
Open your browser at [http://localhost:4200](http://localhost:4200)

### 5. Login credentials
- Email: `john@example.com`
- Password: `john@123`

## Folder Structure

- `src/app/auth/` — Auth service, guard, login component
- `src/app/dashboard/` — Dashboard component
- `src/app/list/` — List component, store
- `src/app/shared/` — Header, spinner, mock API interceptor
- `server.js` — Node.js backend API

## How to Extend
- Replace mock API with real endpoints in `auth.service.ts` and `list.store.ts`
- Add more features or modules as needed

---
For any questions, contact the repository owner.

## Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
