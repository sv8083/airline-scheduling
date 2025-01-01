# Airline Scheduling Service API

Welcome to the Airline Scheduling Service API! 
1. This API allows enterprises to optimize flight crew scheduling using graph theory and flow algorithms. The service models flights, cities, and crew requirements as a network flow problem to calculate optimal crew allocations.


## Base URL 
https://api.airline-scheduling.com/v1


## Authentication
All endpoints require an API key for authentication. Include it in the `Authorization` header as:


## API Endpoints

### 1. **Upload Flight Data**
**Endpoint:**  

POST /flights/
**Description:**  
Create flight details including departure/arrival cities and crew requirements.

**Request Body:**  
```json
{
  "flights": [
    {
      "flight_id": "FL123",
      "departure_city": "CityA",
      "arrival_city": "CityB",
      "crew_required": 5
    },
    {
      "flight_id": "FL124",
      "departure_city": "CityB",
      "arrival_city": "CityC",
      "crew_required": 3
    }
  ]
}
```

**Response Body:**  
```json
{
  "status": "success",
  "message": "Flight data uploaded successfully."
}
```

### 2. **Get Optimal Crew Allocation**
**Endpoint:**  
POST /schedule/optimal

Calculate the minimum crew allocation to operate all flights.
**Request Body:**  
```json
{
  "base_city": "CityA",
  "destination_cities": ["CityB", "CityC"]
}
```
**Response Body:**  
```json
{
  "total_crew_required": 8,
  "crew_allocation": [
    {
      "flight_id": "FL123",
      "crew_assigned": 5
    },
    {
      "flight_id": "FL124",
      "crew_assigned": 3
    }
  ]
}
```

### 3. **Calculate Weighted Schedule**
**Endpoint:**  
POST /schedule/weighted

Generate a crew schedule prioritizing certain cities based on importance.
**Request Body:**  
```json
{
  "base_city": "CityA",
  "city_weights": {
    "CityB": 10,
    "CityC": 5
  }
}
```

**Response Body:**  
```json
{
  "total_crew_required": 6,
  "schedule": [
    {
      "city": "CityB",
      "priority": 10,
      "crew_assigned": 4
    },
    {
      "city": "CityC",
      "priority": 5,
      "crew_assigned": 2
    }
  ]
}
```

### 4. **Retrieve Flight Graph**
**Endpoint:**  
GET /flights/graph
Retrieve the directed graph representation of all uploaded flights.

**Response Body:**  
```json
{
  "graph": {
    "vertices": ["CityA", "CityB", "CityC"],
    "edges": [
      {
        "departure_city": "CityA",
        "arrival_city": "CityB",
        "crew_required": 5
      },
      {
        "departure_city": "CityB",
        "arrival_city": "CityC",
        "crew_required": 3
      }
    ]
  }
}
```