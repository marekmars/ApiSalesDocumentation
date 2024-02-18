---
title: Users
description: All users CRUD methods
---
## 1. Get Users

### Request

- **Method:** `GET`
- **Endpoint:** `/users`
- **Parameters:**
  - `filter` (optional): Filter users by name, last name, or DNI.
  - `skip` (optional): Number of records to skip.
  - `limit` (optional): Maximum number of records to retrieve.
  - `orderBy` (optional): Property by which to order the results (e.g., "name", "lastname").
  - `desc` (optional): Set to true for descending order, false or omit for ascending order.

### Example

```http
GET /api/users?filter=John&skip=0&limit=10&orderBy=name&desc=true
```

### Response

```json
{
  "success": 1,
  "message": "Usuarios obtenidos correctamente",
  "data": [
    {
      "id": 1,
      "idRole": 1,
      "role": {
        "id": 1,
        "name": "Admin"
      },
      "mail": "admin@example.com",
      "name": "Admin",
      "password": "123456",
      "id_role": 2,
      "lastname": "User",
      "state": 1,
      "idcard": "1234567890"
    },
    // Additional user objects...
  ],
  "totalCount": 100
}
```

## 2. Get User by ID

### Request

- **Method:** `GET`
- **Endpoint:** `/users/{id}`
- **Parameters:**
  - `id` (required):

 ID of the user.

### Example

```http
GET /api/users/1
```

### Response

```json
{
  "success": 1,
  "message": "Usuario obtenido correctamente",
  "data": [
    {
      "id": 1,
      "idRole": 1,
      "role": {
        "id": 1,
        "name": "Administrador"
      },
      "mail": "admin@example.com",
      "password": "123456",
      "id_role": 2,
      "name": "Admin",
      "lastname": "User",
      "state": true,
      "idcard": "1234567890"
    }
  ],
  "totalCount": 1
}
```

## 3. Add User

### Request

- **Method:** `POST`
- **Endpoint:** `/users`
- **Body:**
  - `name` (required): First name of the user.
  - `lastname` (required): Last name of the user.
  - `idcard` (required): DNI (identification number) of the user.
  - `idrole` (required): Id of the selected role.
  - `main` (required): Email address of the user.
  - `password` (required): User password.

### Example

```http
POST /api/usuarios
{
  "name": "Jane",
  "lastname": "Doe",
  "password": "123456",
  "id_role": 2,
  "idcard": "987654321",
  "mail": "jane.doe@example.com",
  "password": "password123"
}
```

### Response

```json
{
  "success": 1,
  "message": "Usuario creado correctamente",
  "data": [
    {
      "id": 101,
      "idRole": 2,
      "role": {
        "id": 2,
        "name": "Usuario Estándar"
      },
      "mail": "jane.doe@example.com",
      "name": "Jane",
      "lastname": "Doe",
      "state": true,
      "idcard": "987654321"
    }
  ],
  "totalCount": 1
}
```

## 4. Update User

### Request

- **Method:** `PATCH`
- **Endpoint:** `/users`
- **Body:**
  - `id` (required): ID of the user to update.
  - Additional fields (optional): Updated values for `name`, `lastname`, `idcard`,`password`,`role`, or `mail`.

### Example

```http
PATCH /api/users
{
  "id": 1,
  "name": "UpdatedName"
}
```

### Response

```json
{
  "success": 1,
  "message": "Usuario actualizado correctamente",
  "data": [
    {
      "id": 1,
      "idRole": 1,
      "role": {
        "id": 1,
        "name": "Administrador"
      },
      "mail": "admin@example.com",
      "password": "123456",
      "id_role": 2,
      "name": "UpdatedName",
      "lastname": "User",
      "state": true,
      "idcard": "1234567890"
    }
  ],
  "totalCount": 1
}
```

## 5. Delete User (Logic)

### Request

- **Method:** `DELETE`
- **Endpoint:** `/users/{id}`
- **Parameters:**
  - `id` (required): ID of the user to delete.

### Example

```http
DELETE /api/users/1
```

### Response

```json
{
  "success": 1,
  "message": "Usuario eliminado correctamente",
  "data": null,
  "totalCount": 1
}
```

## 6. Full Delete User

### Request

- **Method:** `DELETE`
- **Endpoint:** `/clients/fulldelete/{id}`
- **Parameters:**
  - `id` (required): ID of the user to fully delete (including database removal).

### Example

```http
DELETE /api/users/fulldelete/1
```

### Response

```json
{
  "success": 1,
  "message": "Usuario eliminado correctamente",
  "data": null,
  "totalCount": 1
}
```

## Pagination and Filtering in Get Users

When using the `Get Users` endpoint, you can apply pagination and filtering to retrieve specific sets of data.

### Pagination

- Use the `skip` parameter to skip a certain number of records.
- Use the `limit` parameter to set the maximum number of records to retrieve.

**Example:**
```markdown
GET /api/Users?skip=10&limit=5
```
This will skip the first 10 records and retrieve the next 5 records.

### Filtering

- Use the `filter` parameter to filter users by name, last name, or id card.
- Use the `orderBy` parameter to specify the property by which to order the results.
- Use the `desc` parameter to set the order as descending (true) or ascending (false).

**Example:**
```markdown
GET /api/users?filter=Doe&orderBy=name&desc=1
```
This will filter users with the last name "Doe" and order the results by the first name in descending order.

## Data Model

| Attribute        | Type       | Description                            |
|-------------------|------------|----------------------------------------|
| id                | Long       | The ID of the user.                 |
| name              | String     | The name of the user.               |
| id_role           | Long       | The id role of the user |
| password          | String     | the password of the user |
| last_name         | String     | The last name of the user.        |
| id_card           | String     | The identification number of the user.              |
| mail              | String     | The email of the user. |
| state             | Byte       | The state of the user.          |


## Validations
- **IdRole:** Must be a positive integer and exist in the database.
- **Mail:** Valid email address. Must not exist in the database for other users with a different ID and a state of 1.
- **Password:** Minimum length of 6 characters.
- **Name:** Minimum length of 3 characters.
- **LastName:** Minimum length of 3 characters.
- **IdCard:** Must have 8 digits.
