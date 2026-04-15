Experiment 9: Frontend Integration with Role-Based Access Control (React + Session-Based Authentication)

In this experiment, a React-based frontend was developed to integrate with an existing Role-Based Access Control (RBAC) backend API. The main objective was to implement secure authentication and authorization at the frontend level using session-based storage and role-based UI rendering.

The application begins with a Login Page, where users enter their username and password. These credentials are verified using backend APIs. Upon successful login, the user’s role (USER or ADMIN) is determined and stored in sessionStorage along with the username. Based on the role, the user is redirected to the appropriate dashboard.

Two separate dashboards were implemented:

User Dashboard: Accessible only to users with the USER role. It allows access to the /api/user/profile endpoint and displays user-specific data.
Admin Dashboard: Accessible only to users with the ADMIN role. It allows access to the /api/admin/dashboard endpoint and displays administrative statistics.

Role-based UI control is implemented in the frontend, where components and buttons are conditionally shown or hidden depending on the user’s role. Unauthorized users are restricted from accessing protected routes and are redirected to the login page.

A logout feature is also included, which clears the session using sessionStorage.clear(), effectively ending the user session.

This experiment demonstrates key concepts of modern web security, including authentication, authorization, session management, and role-based UI control using React and REST APIs.
