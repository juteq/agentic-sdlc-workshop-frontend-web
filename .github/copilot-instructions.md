# GitHub Copilot Instructions for Web (React, TypeScript)

## **Development Guidelines**

- Follow **React with Redux and TypeScript** for state management.
- Use **React Hooks** to manage component lifecycle and side effects.
- Implement **component-based architecture** with reusable UI components.
- Ensure API interactions follow **RESTful principles** with proper **error handling**.
- Prefer **Axios** for API requests and responses.
- Follow **Trunk-Based Development** methodology for code commits.

## **Testing Guidelines**

- Write **unit tests** using **Jest and React Testing Library**.
- Perform **end-to-end testing** using **Cypress**.
- Enforce **static analysis** with **ESLint and Prettier**.
- Testing disabled now.

## **Backend API & Integration**

- **API endpoints are defined via Swagger**.
- Backend follows **trunk-based deployment**, with release branches cut at sprint-end.
- Web frontend aligns with **backend-defined API contracts and feature flags**.
- API dependencies are defined **in real-time**, with collaboration across teams.
- Backend communicates with frontend with this https response structure
  {"Data":null,"Error":{"Message":"Amenity with ID 00000000-0000-0000-0000-000000000001 was not found","Error":"NOT_FOUND","StatusCode":404},"Success":false}

