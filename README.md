# Survey Platform

---

## Tech Stack

**Frontend**:

- React.js (created with Vite)
- CSS

**Backend**

- Node.js
- Express.js
- MySQL

---

## Project Structure

/survey-platform
│
├── /client # React frontend (Vite)
├── /server # Node.js backend (Express)
└── README.md

---

## Features

- Form submission with validation
- Age eligibility check (5 to 120 years)
- Favorite food and lifestyle questions

- Result analysis with:
  - Total survey submissions
  - Average age
  - Oldest and youngest participants
  - Food preferences percentages
  - Average rating in entertainment preferences
  - Error handlig for 404 status
  - Loader animations for better user experience

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/DeBoots-Nkuna/survey-app.git
```

### 2. Setup the Backend

    - cd backend
    - npm install
    - Create a `.env` file to place your MySQL config
    - npm start

### 3. Setup the Frontend

- cd frontend
- npm install
- npm run dev

### 4. Database setup

        - create a database name : survey_db
        - Run mysql schema provided to create the surveys table
        - Make sure your .env file in the backend contains :
                                                            - DB_HOST=localhost
                                                            - DB_USER=yourusername
                                                            - DB_PASSWORD=yourPassword
                                                            - DB_Name=survey_db

### Author

- Nhlalala Nkuna
