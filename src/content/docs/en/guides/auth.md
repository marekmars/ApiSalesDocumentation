---
title: Authentication
description: Login using JWT token provider
---
## 1. User Authentication
- **Admin Role:**
  - Admins have full access to all user-related endpoints, including adding, updating, and deleting users.

- **Employee Role:**
  - Employees have restricted access and can only retrieve information about users but cannot perform actions like adding, updating, or deleting users.

- If the email and password do not match, the server will respond with a 401 error.

- If the email and password match, the server will respond with a 200 OK and include the bearer token and the user including the role.

- The bearer token is a JWT that contains user information and has a duration of 150 hours.

- The bearer token must be included in the header of all requests.


### Request

- **Method:** `POST`
- **Endpoint:** `/users/login`
- **Body:**
  - `mail` (required): User email.
  - `password` (required): User password.

### Example

```http
POST /api/users/login
{
  "mail": "admin@example.com",
  "password": "adminpassword"
}
```

### Response

```json
{
  "success": 1,
  "message": "Bienvenido admin@example.com",
  "data": [
    {
  "success": 1,
  "message": "Bienvenido admin@example.com",
  "data": [
    {
       "correo": "admin@example.com",
       "rol": "Admin",
       "token": "qwewqdwqe6w78qewq78q8we892NJK98sanKLJOI0lkjKLJGYUGVI98797JKLHJKH79jki7"
    }
  ],
  "totalCount": 1
    }
  ],
  "totalCount": 1
}
```