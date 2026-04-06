# 💰 Finance Data Processing & Access Control Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![API](https://img.shields.io/badge/API-RESTful-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

> A production-ready backend API for managing financial data with
> **secure authentication**, **role-based access control**, and
> **analytics dashboard**.

------------------------------------------------------------------------

## 📌 Table of Contents

-   Overview
-   Features
-   Architecture
-   Tech Stack
-   Project Structure
-   Authentication
-   Roles & Permissions
-   API Reference
-   Filtering
-   Dashboard
-   Database Schema
-   Environment Setup
-   Installation
-   Screenshots
-   Future Improvements
-   License

------------------------------------------------------------------------

## 📖 Overview

This backend system allows users to: - Manage **income & expenses** -
Enforce **secure access with JWT** - Control permissions via **user
roles** - Generate **financial insights**

Built with scalability and clean architecture in mind.

------------------------------------------------------------------------

## 🚀 Features

-   🔐 JWT Authentication
-   🛡️ Role-Based Authorization
-   💳 Financial Record CRUD
-   📊 Dashboard Insights
-   ♻️ Soft Delete (data safety)
-   🔍 Query Filtering
-   🕒 Recent Activity Tracking

------------------------------------------------------------------------

## 🏗️ Architecture

    Client (Postman / Frontend)
            │
            ▼
       Express Server
            │
            ├── Auth Middleware
            ├── Role Middleware
            ▼
         Controllers
            ▼
         MongoDB

------------------------------------------------------------------------

## 🛠️ Tech Stack

  Layer       Technology
  ----------- ------------
  Backend     Node.js
  Framework   Express.js
  Database    MongoDB
  ODM         Mongoose
  Auth        JWT
  Testing     Postman

------------------------------------------------------------------------

## 📁 Project Structure

    finance-backend/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── config/
    ├── server.js
    └── .env

------------------------------------------------------------------------

## 🔐 Authentication

All protected routes require JWT token:

    Authorization: Bearer <token>

### Flow

1.  Login
2.  Receive Token
3.  Use token in headers

------------------------------------------------------------------------

## 👥 Roles & Permissions

  Role      Access
  --------- --------------
  Admin     Full CRUD
  Analyst   Read data
  Viewer    Limited read

------------------------------------------------------------------------

## 🔗 API Reference

### Auth

**Register**

    POST /api/auth/register

**Login**

    POST /api/auth/login

------------------------------------------------------------------------

### Records

**Create**

    POST /api/records

**Get All**

    GET /api/records

**Update**

    PUT /api/records/:id

**Soft Delete**

    PATCH /api/records/soft-delete/:id

------------------------------------------------------------------------

## 🔍 Filtering

    /api/records?type=income
    /api/records?category=salary
    /api/records?date=2026-04-05

------------------------------------------------------------------------

## 📊 Dashboard

**Summary**

    GET /api/dashboard/summary

**Recent Activity**

    GET /api/dashboard/recent

------------------------------------------------------------------------

## 🗄️ Database Schema

### User

-   name
-   email
-   password
-   role

### Record

-   amount
-   type
-   category
-   date
-   createdBy
-   isDeleted

------------------------------------------------------------------------

## ⚙️ Environment Variables

    PORT=5000
    MONGO_URI=mongodb://localhost:27017/financeDB
    JWT_SECRET=your_secret_key

------------------------------------------------------------------------

## 🚀 Installation

``` bash
git clone https://github.com/Akshit-hub-byte/finance-backend
cd finance-backend
npm install
npm run dev
```

Server: http://localhost:5000

------------------------------------------------------------------------

## 🖼️ Screenshots

> Add inside `/screenshots`

    screenshots/
    ├── auth.png
    ├── create-record.png
    ├── dashboard.png

------------------------------------------------------------------------

## 📈 Future Improvements

-   Monthly analytics
-   Export reports
-   Frontend UI
-   Charts integration

------------------------------------------------------------------------

## 📄 License

MIT License

------------------------------------------------------------------------

## ⭐ Support

If helpful, give a ⭐ on GitHub!
