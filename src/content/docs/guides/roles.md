---
title: Roles
description: Method to retrieve the roles
---
## 1. Get Roles
### Request
- **Method:** `GET`
- **Endpoint:** `/roles`
### Example
``` 
http
GET /api/roles

```
### Response
``` json

{
  "success": 1,
  "message": "Roles retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Admin"
    },
    {
      "id": 2,
      "name": "Seller"
    },
    // Additional role objects...
  ],
  "totalCount": 5
}
```
## Data Model

| Attribute         | Type       | Description                                |
|------------------|------------|--------------------------------------------|
| id               | Long       | The id of the role.                        |
| name             | String     | The name of the role.                      |

