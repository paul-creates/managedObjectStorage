# API Documentation

This document describes the RESTful API endpoints available in the Managed Object Storage application.

## Base URL

All API endpoints are prefixed with: `http://localhost:3001/api`

## Endpoints

### Objects

#### Get All Objects

```http
GET /objects
```

Returns a list of all stored objects.

**Response**

```json
[
  {
    "id": 1,
    "name": "example.txt",
    "type": "text/plain",
    "size": 1024,
    "created_at": "2024-03-20T10:00:00Z",
    "updated_at": "2024-03-20T10:00:00Z"
  }
]
```

#### Get Object by ID

```http
GET /objects/:id
```

Returns details for a specific object.

**Parameters**

- `id` (path parameter): The ID of the object to retrieve

**Response**

```json
{
  "id": 1,
  "name": "example.txt",
  "type": "text/plain",
  "size": 1024,
  "created_at": "2024-03-20T10:00:00Z",
  "updated_at": "2024-03-20T10:00:00Z"
}
```

#### Create Object

```http
POST /objects
```

Creates a new object.

**Request Body**

```json
{
  "name": "example.txt",
  "type": "text/plain",
  "size": 1024
}
```

**Response**

```json
{
  "id": 1,
  "name": "example.txt",
  "type": "text/plain",
  "size": 1024,
  "created_at": "2024-03-20T10:00:00Z",
  "updated_at": "2024-03-20T10:00:00Z"
}
```

### Metadata

#### Get Object Metadata

```http
GET /objects/:id/metadata
```

Returns all metadata for a specific object.

**Parameters**

- `id` (path parameter): The ID of the object

**Response**

```json
[
  {
    "id": 1,
    "object_id": 1,
    "key": "author",
    "value": "John Doe"
  }
]
```

#### Add Object Metadata

```http
POST /objects/:id/metadata
```

Adds metadata to a specific object.

**Parameters**

- `id` (path parameter): The ID of the object

**Request Body**

```json
[
  {
    "key": "author",
    "value": "John Doe"
  }
]
```

**Response**

```json
{
  "message": "Metadata added successfully"
}
```

## Error Responses

All endpoints may return the following error responses:

### 404 Not Found

```json
{
  "error": "Object not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Failed to fetch objects"
}
```

## Rate Limiting

Currently, there are no rate limits implemented on the API endpoints.

## Authentication

Currently, the API does not require authentication. This is planned for future implementation.
