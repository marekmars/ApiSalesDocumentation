---
title: Products
description: All products CRUD methods
---

## 1. Get Product by ID

- **Request**
  - **Method:** `GET`
  - **Endpoint:** `/products/{id}`

- **Parameters:**
  - `id` (required): ID of the product.

- **Example**
  ```http
  GET /api/products/1
  ```

- **Response**
  ```json
  {
    "success": 1,
    "message": "Product obtenido correctamente",
    "data": [
      {
        "id": 1,
        "name": "Product A",
        "description": "Descripción del Product A",
        "unitaryPrice": 650.5,
        "cost": 300,
        "stock":150,
        "state": 1,
        "image_url":"www.imgs/e2132ui13ksjha.jpg"
      }
    ],
    "totalCount": 1
  }
  ```

## 2. Get Products

- **Request**
  - **Method:** `GET`
  - **Endpoint:** `/products`

- **Parameters:**
  - `filter` (optional): Filter products by name or description.
  - `skip` (optional): Number of records to skip.
  - `limit` (optional): Maximum number of records to retrieve.
  - `orderBy` (optional): Property by which to order the results (e.g., "name", "price").
  - `desc` (optional): Set to true for descending order, false, or omit for ascending order.

- **Example**
  ```http
  GET /api/products?filter=Product&skip=0&limit=10&orderBy=name&desc=true
  ```

- **Response**
  ```json
  {
    "success": 1,
    "message": "Products obtenidos correctamente",
    "data": [
      {
        "id": 1,
        "name": "Product A",
        "description": "Descripción del Product A",
        "unitaryPrice": 650.5,
        "cost": 300,
        "stock":150,
        "state": 1,
        "image_url":"www.imgs/e2132ui13ksjha.jpg"
      },
      // Additional product objects...
    ],
    "totalCount": 100
  }
  ```

## 3. Add Product

- **Request**
  - **Method:** `POST`
  - **Endpoint:** `/products`

- **Body:**
  - `name` (required): Name of the product.
  - `description` (required): Description of the product.
  - `unitaryPrice` (required): Price of the product.
  - `cost`: (required): Cost of the product.,
  - `stock`:(required): Stock number of the product.,
  - `state`: (required): State of the product.,
  - `image_url`:(optional): Description of the product.

- **Example**
  ```http
  POST /api/products
  {
        "name": "Product A",
        "description": "Descripción del Product A",
        "unitaryPrice": 650.5,
        "cost": 300,
        "stock":150,
        "state": true,
        "image_url":"www.imgs/e2132ui13ksjha.jpg"
  }
  ```

- **Response**
  ```json
  {
    "success": 1,
    "message": "Product creado correctamente",
    "data": [
      {
        "id": 101,
        "name": "Product A",
        "description": "Descripción del Product A",
        "unitaryPrice": 650.5,
        "cost": 300,
        "stock":150,
        "state": true,
        "image_url":"www.imgs/e2132ui13ksjha.jpg"
      }
    ],
    "totalCount": 101
  }
  ```

## 4. Update Product

- **Request**
  - **Method:** `PATCH`
  - **Endpoint:** `/products`

- **Body:**
  - `id` (required): ID of the product to update.
  - Additional fields (optional): Updated values for `name`, `description`,  `unitaryPrice`,  `cost`: ,  `stock` , `image_url`.

- **Example**
  ```http
  PATCH /api/products
  {
    "id": 1,
    "name": "Product Actualizado"
  }
  ```

- **Response**
  ```json
  {
    "success": 1,
    "message": "Product actualizado correctamente",
    "data": [
      {
        "id": 1,
        "name": "Product Actualizado",
        "description": "Descripción del Product A",
        "unitaryPrice": 650.5,
        "cost": 300,
        "stock":150,
        "state": true,
        "image_url":"www.imgs/e2132ui13ksjha.jpg"
      }
    ],
    "totalCount": 1
  }
  ```

## 5. Delete Product

- **Request**
  - **Method:** `DELETE`
  - **Endpoint:** `/products/{id}`

- **Parameters:**
  - `id` (required): ID of the product to delete.

- **Example**
  ```http
  DELETE /api/products/1
  ```

- **Response**
  ```json
  {
    "success": 1,
    "message": "Product eliminado correctamente",
    "data": null,
    "totalCount": 1
  }
  ```

## 6. Full Delete Product

- **Request**
  - **Method:** `DELETE`
  - **Endpoint:** `/products/fulldelete/{id}`

- **Parameters:**
  - `id` (required): ID of the product to fully delete (including database removal).

- **Example**
  ```http
  DELETE /api/products/full/1
  ```

- **Response**
  ```json
  {
    "success": 1,
    "message": "Product eliminado correctamente",
    "data": null,
    "totalCount": 1
  }
  ```
## Pagination and Filtering in Get Products

When using the `Get Products` endpoint, you can apply pagination and filtering to retrieve specific sets of data.

### Pagination

- Use the `skip` parameter to skip a certain number of records.
- Use the `limit` parameter to set the maximum number of records to retrieve.

**Example:**
```markdown
GET /api/products?skip=10&limit=5
```
This will skip the first 10 records and retrieve the next 5 records.

### Filtering

- Use the `filter` parameter to filter users by name.
- Use the `min` parameter to add a min price value.
- Use the `max` parameter to add a max price value.
- Use the `orderBy` parameter to specify the property by which to order the results.
- Use the `desc` parameter to set the order as descending (true) or ascending (false).

**Example:**
```markdown
GET /api/products?filter=potatoes&orderBy=name&min=150&max=500&orderBy=price&desc=1
```
This will filter products with the word potato included in the name, between 150 and 500 and order the results by the price in descending order.

## Data Model

| Attribute         | Type       | Description                                |
|------------------|------------|--------------------------------------------|
| id               | Long       | ID of the product.                         |
| name             | String     | Name of the product.                       |
| description      | String     | La descripción of the product.             |
| unitary_price    | Decimal    | Price of the product.                      |
| cost             | Decimal    | Cost of the product.                       |
| stock            | Int        | Stock quantity of the product.             |
| state            | Byte       | State of the product                       |
| image_url        | String     | Image URL of the product.                  |


## Validations

- **IdRole:** Must be a positive integer and exist in the database.

- **Mail:** Valid email address. Must not exist in the database for other users with a different ID and a state of 1.

- **Password:** Minimum length of 6 characters.

- **Name:** Minimum length of 3 characters.

- **LastName:** Minimum length of 3 characters.

- **IdCard:** Must have 8 digits.