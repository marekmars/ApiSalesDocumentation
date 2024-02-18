---
title: Clients
description: All clients CRUD methods
---
## 1. Get Clients

### Request

- **Method:** `GET`
- **Endpoint:** `/clients`
- **Parameters:**
  - `filter` (optional): Filter clients by name, last name, or DNI.
  - `skip` (optional): Number of records to skip.
  - `limit` (optional): Maximum number of records to retrieve.
  - `orderBy` (optional): Property by which to order the results (e.g., "name", "lastname").
  - `desc` (optional): Set to true for descending order, false or omit for ascending order.

### Example

```http
GET /api/clients?filter=John&skip=0&limit=10&orderBy=name&desc=true
```

### Response

```json
{
  "success": 1,
  "message": "Clientes obtenidos correctamente",
  "data": [
    {
      "id": 1,
      "name": "John",
      "lastname": "Doe",
      "idcard": "123456789",
      "mail": "john.doe@example.com",
      "state": 1
    },
    // Additional client objects...
  ],
  "totalCount": 100
}
```

## 2. Get Client by ID

### Request

- **Method:** `GET`
- **Endpoint:** `/clients/{id}`
- **Parameters:**
  - `id` (required): ID of the client.

### Example

```http
GET /api/clients/1
```

### Response

```json
{
  "success": 1,
  "message": "Cliente obtenido correctamente",
  "data": [
    {
      "id": 1,
      "name": "John",
      "lastname": "Doe",
      "idcard": "123456789",
      "mail": "john.doe@example.com",
      "state": true
    }
  ],
  "totalCount": 1
}
```

## 3. Add Client

### Request

- **Method:** `POST`
- **Endpoint:** `/clients`
- **Body:**
  - `name` (required): First name of the client.
  - `lastname` (required): Last name of the client.
  - `idcard` (required): Id Card (identification number) of the client.
  - `mail` (required): Email address of the client.

### Example

```http
POST /api/clients
{
  "name": "Jane",
  "lastname": "Doe",
  "idcard": "987654321",
  "mail": "jane.doe@example.com"
}
```

### Response

```json
{
  "success": 1,
  "message": "Cliente creado correctamente",
  "data": [
    {
      "id": 101,
      "name": "Jane",
      "lastname": "Doe",
      "idcard": "987654321",
      "mail": "jane.doe@example.com",
      "state": true
    }
  ],
  "totalCount": 1
}
```

## 4. Update Client

### Request

- **Method:** `PATCH`
- **Endpoint:** `/clients`
- **Body:**
  - `id` (required): ID of the client to update.
  - Additional fields (optional): Updated values for `name`, `lastname`, `idcard`, or `mail`.

### Example

```http
PATCH /api/clients
{
  "id": 1,
  "name": "UpdatedName"
}
```

### Response

```json
{
  "success": 1,
  "message": "Cliente actualizado correctamente",
  "data": [
    {
      "id": 1,
      "name": "UpdatedName",
      "lastname": "Doe",
      "idcard": "123456789",
      "mail": "john.doe@example.com",
      "state": 1
    }
  ],
  "totalCount": 1
}
```

## 5. Delete Client (Logic)

### Request

- **Method:** `DELETE`
- **Endpoint:** `/clients/{id}`
- **Parameters:**
  - `id` (required): ID of the client to delete.

### Example

```http
DELETE /api/clients/1
```

### Response

```json
{
  "success": 1,
  "message": "Cliente eliminado correctamente",
  "data": null,
  "totalCount": 1
}
```

## 6. Full Delete Client

### Request

- **Method:** `DELETE`
- **Endpoint:** `/clients/fulldelete/{id}`
- **Parameters:**
  - `id` (required): ID of the client to fully delete (including database removal).

### Example

```http
DELETE /api/clients/fulldelete/1
```

### Response

```json
{
  "success": 1,
  "message": "Cliente eliminado correctamente",
  "data": null,
  "totalCount": 1
}
```

## Pagination and Filtering in Get Clients

When using the `Get Clients` endpoint, you can apply pagination and filtering to retrieve specific sets of data.

### Pagination

- Use the `skip` parameter to skip a certain number of records.
- Use the `limit` parameter to set the maximum number of records to retrieve.

**Example:**
```markdown
GET /api/clients?skip=10&limit=5
```
This will skip the first 10 records and retrieve the next 5 records.

### Filtering

- Use the `filter` parameter to filter clients by name, last name, or id card.
- Use the `orderBy` parameter to specify the property by which to order the results.
- Use the `desc` parameter to set the order as descending (true) or ascending (false).

**Example:**
```markdown
GET /api/clients?filter=Doe&orderBy=name&desc=false
```
This will filter clients with the last name "Doe" and order the results by the first name in ascending order.

## Data Model

| Attribute         | Type       | Description                                |
|------------------|------------|--------------------------------------------|
| id               | Long       | El ID del producto.                        |
| name             | String     | El name del producto.                    |
| last_name        | String     | La descripción del producto.               |
| id_card          | String     | El price del producto.                    |
| mail             | String     | La cantidad de stock del producto.         |
| state            | Byte       | La URL de la imagen del producto.          |

## Validations
- **Name:** Minimum length of 3 characters.
- **LastName:** Minimum length of 3 characters.
- **IdCard:** Must have 8 digits.
- **Mail:** Valid email address. Must not exist in the database for other clients with a different ID and a non-zero state.


