# Zeerostock---Assignment

# 🛒 Inventory Search & Management System

This project consists of two parts:

- Part A: Inventory Search API with frontend UI  
- Part B: Inventory Database with backend APIs  

---

# 🚀 Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

Frontend (Part A):
- React (Vite)
- CSS (Responsive Design)

---

# 🅰️ PART A — Inventory Search

## Features

- Search products by name (case-insensitive)
- Filter by category
- Filter by price range
- Combine multiple filters
- Return all data when no filters are applied
- Responsive UI for mobile, tablet, and desktop
- Displays “No results found” when applicable

---

## Search Logic

- Uses case-insensitive matching
- Applies filters step-by-step
- Supports multiple filters together

---

## UI Design

- Search bar with button
- Sidebar filters
- Product cards with hover effects
- Responsive grid layout
- Clean and modern design

---

## Performance Improvements

- Debouncing search input
- Pagination for large datasets
- Database indexing for scalability

---

# 🅱️ PART B — Inventory Database + APIs

## Database Design

Supplier:
- id
- name
- city

Inventory:
- id
- supplier_id (reference to supplier)
- product_name
- quantity
- price

---

## Relationship

One supplier can have multiple inventory items (one-to-many relationship)

---

## API Endpoints

- Create supplier  
- Create inventory  
- Get all inventory  
- Get inventory summary grouped by supplier  

---

## Validation Rules

- Inventory must belong to a valid supplier  
- Quantity must be greater than or equal to zero  
- Price must be greater than zero  

---

## Aggregation Logic

- Groups inventory by supplier  
- Calculates total inventory value  
- Sorts suppliers by total value  

---

## Why MongoDB

- Flexible schema  
- Easy scalability  
- Works well with JSON data  
- Faster development  

---

## Optimization Suggestion

- Add indexing on supplier_id to improve query performance  

---

# 🧪 How to Run

- Install dependencies  
- Start backend server  
- Start frontend (for Part A)  

---

# 🧪 Testing

- Test all APIs using Postman  
- Verify filtering and validation  
- Check aggregation results  

---

# 🎯 Conclusion

This project demonstrates backend API development, database design, data validation, aggregation queries, and responsive UI design.
