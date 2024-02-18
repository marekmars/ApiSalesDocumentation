---
title: Sales
description: All sales CRUD methods
---
## 1. Get Sales

### Request

- **Method:** `GET`
- **Endpoint:** `/api/sales`
- **Parameters:**
  - `filter` (optional): Filter sales by client name, last name, or DNI.
  - `skip` (optional): Number of records to skip.
  - `limit` (optional): Maximum number of records to retrieve.
  - `orderBy` (optional): Property by which to order the results (e.g., "date", "total").
  - `desc` (optional): Set to true for descending order, false or omit for ascending order.

**Example**

```http
 GET /api/sales?filter=Juan&skip=0&limit=10&orderBy=date&desc=true
```

### Response

```json
  {
    "success": 1,
    "message": "Ventas obtenidas correctamente",
    "data": [
      {
        "id": 1,
        "idClient": 39,
        "client": {
          "id": 39,
          "name": "Juan",
          "lastname": "González",
          "idcard": "12345678A",
          "mail": "juan.gonzalez@example.com",
          "state": true
        },
        "date": "2024-01-18T11:17:58",
        "total": 840.00,
        "state": true,
        "concepts": [
          // Concept objects...
        ]
      },
      // Additional sale objects...
    ],
    "totalCount": 100
  }
  ```

## 2. Get Sale by ID

### Request

- **Method:** `GET`
- **Endpoint:** `/api/sales/{Id}`

**Example**

```http
GET /api/sales/1
```

### Response

```json
{
  "success": 1,
  "message": "Venta obtenida correctamente",
  "data": [
    {
      "id": 1,
      "idClient": 101,
      "date": "2024-02-15T10:30:00",
      "total": 150.00,
      "state": 1,
      "concepts": [
        {
          "id": 1,
          "quantity": 2,
          "unitaryPrice": 75.00,
          "import": 150.00,
          "idProduct": 201,
          "state": 1
        }
        // Additional concept objects...
      ]
    }
  ],
  "totalCount": 1
}
```

## 3. Add Sale

### Request

- **Method:** `POST`
- **Endpoint:** `/api/sales`
- **Body:**
  - `idClient` (required): ID of the client for the sale.
  - `concepts` (required): List of concepts for the sale, including `quantity`, `unitaryPrice`, `import`, `idProduct`.

### Example

```http
POST /api/sales
{
  "idClient": 101,
  "concepts": [
    {
      "quantity": 2,
      "unitaryPrice": 75.00,
      "import": 150.00,
      "idProduct": 201
    }
    // Additional concept objects...
  ]
}
```

### Response

```json
{
  "success": 1,
  "message": "Venta creada correctamente",
  "data": [
    {
      "id": 102,
      "idClient": 101,
      "date": "2024-02-15T12:45:00",
      "total": 300.00,
      "state": 1,
      "concepts": [
        {
          "id": 201,
          "quantity": 2,
          "unitaryPrice": 150.00,
          "import": 300.00,
          "idProduct": 301,
          "state": 1
        }
        // Additional concept objects...
      ]
    }
  ],
  "totalCount": 1
}
```

## 5. Update Sale

### Request

- **Method:** `PATCH`
- **Endpoint:** `/api/sales`
- **Body:**
  - `id` (required): ID of the sale to update.
  - Additional fields (optional): Updated values for `idClient`, `concepts`.

### Example

```http
PATCH /api/sales
{
  "id": 102,
  "concepts": [
    {
      "quantity": 3,
      "unitaryPrice": 100.00,
      "import": 300.00,
      "idProduct": 201
    }
    // Additional updated concept objects...
  ]
}
```

### Response

```json
{
  "success": 1,
  "message": "Venta actualizada correctamente",
  "data": [
    {
      "id": 102,
      "idClient": 101,
      "date": "2024-02-15T12:45:00",
      "total": 300.00,
      "state": 1,
      "concepts": [
        {
          "id": 201,
          "quantity": 3,
          "unitaryPrice": 100.00,
          "import": 300.00,
          "idProduct": 301,
          "state": 1
        }
        // Additional updated concept objects...
      ]
    }
  ],
  "totalCount": 1
}
```

## 6. Delete Sale (Logic)

### Request

- **Method:** `DELETE`
- **Endpoint:** `/api/sales/{Id}`
- **Parameters:**
  - `Id` (required): ID of the sale to delete.

### Example

```http
DELETE /api/sales/102
```

### Response

```json
{
  "success": 1,
  "message": "Venta eliminada correctamente",
  "data": null,
  "totalCount": 1
}
```

## 7. Full Delete Sale

### Request

- **Method:** `DELETE`
- **Endpoint:** `/api/sales/fulldelete/{Id}`
- **Parameters:**
  - `Id` (required): ID of the sale to fully delete.

### Example

```http
DELETE /api/sales/fulldelete/102
```

### Response

```json
{
  "success": 1,
  "message": "Venta eliminada permanentemente correctamente",
  "data": null,
  "totalCount": 1
}
```

## Pagination and Filtering in Get Sales

When using the `Get Sales` endpoint, you can apply pagination and filtering to retrieve specific sets of data.

### Pagination

- Use the `skip` parameter to skip a certain number of records.
- Use the `limit` parameter to set the maximum number of records to retrieve.

**Example:**
```markdown
GET /api/sales?skip=10&limit=5
```
This will skip the first 10 records and retrieve the next 5 records.

### Filtering

- Use the `filter` parameter to filter users by client name, client last name, date, or product name.
- Use the `orderBy` parameter to specify the property by which to order the results (date, client name or last name and total price).
- Use the `desc` parameter to set the order as descending (1) for descending order.

**Example:**
```markdown
GET /api/sales?filter=Doe&orderBy=date&desc=1
```
This will filter sales with the client last name "Doe" and order the results by the date in descending order.

## Data Model

### Sale

| Attribute | Type         | Description                                  | 
|-----------|--------------|----------------------------------------------|
| id        | Long         | ID of the sale                                | 
| idClient  | Long         | ID of the client for the sale.               | 
| concepts  | List         | List of concepts for the sale.               | 
| date      | DateTime     | Date of the sale.                            | 
| total     | Decimal      | Total amount of the sale.                    | 
| state     | Byte         | State of the sale.                           | 

### Concept

| Attribute    | Type         | Description                                  | 
|--------------|--------------|----------------------------------------------|
| id           | Long         | ID
| quantity     | Int          | Quantity of the product in the concept.      | 
| unitaryPrice | Decimal      | Unitary price of the product in the concept. | 
| import       | Decimal      | Total import of the concept.                 | 
| idProduct    | Long         | ID of the product in the concept.            | 
| state        | Byte         | State of the concept.                        | 

### Validations

- **idClient:** Must be a positive integer and exist in the database.
- **concepts:** Must have at least one concept with valid data.
- **quantity:** Must be a positive integer.
- **unitaryPrice:** Must be a positive decimal.
- **import:** Must be a positive decimal.
- **idProduct:** Must be a positive integer, exist in the database and have the requested stock.
- **state:** Must be a byte value.
