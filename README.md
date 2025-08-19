\# 💸 Expense Tracker



A full-stack expense tracker web application built with \*\*Spring Boot (Java)\*\* and \*\*vanilla JavaScript\*\*.



Track your expenses, categorize them, and manage your budget with a clean, responsive UI.



!\[Expense Tracker Demo](https://via.placeholder.com/800x400.png?text=Expense+Tracker+Demo)  

\*(Replace with a screenshot later!)\*



\## 🚀 Features



\- ✅ Add new expenses (description, amount, category, date)

\- ✅ View list of all expenses

\- ✅ Delete expenses

\- ✅ Data stored in \*\*PostgreSQL\*\*

\- ✅ Responsive design (works on mobile \& desktop)

\- ✅ Full CRUD via REST API



\## 🛠️ Tech Stack



| Layer | Technology |

|------|------------|

| \*\*Backend\*\* | Spring Boot, JPA, PostgreSQL |

| \*\*Frontend\*\* | HTML, CSS, JavaScript |

| \*\*Database\*\* | PostgreSQL |

| \*\*Build Tool\*\* | Maven |

| \*\*Hosting\*\* | Ready for Netlify + Railway |



\## 📦 Project Structure

Expense-Tracker-app/

├── backend/ → Spring Boot REST API

│ ├── src/

│ └── pom.xml

│

└── frontend/ → HTML/CSS/JS frontend

├── index.html

├── style.css

└── script.js





\## 🚀 How to Run Locally



\### 1. Run Backend (Spring Boot)



```bash

cd backend

mvnw spring-boot:run

Backend runs at: http://localhost:8080



2\. Run Frontend

cd frontend

npx http-server -p 3000

Frontend runs at: http://localhost:3000



🗄️ Database Setup

Install PostgreSQL

Create a database:

sql





1

CREATE DATABASE student\_db;

Update backend/src/main/resources/application.properties:

properties





1

2

3

spring.datasource.url=jdbc:postgresql://localhost:5432/student\_db

spring.datasource.username=postgres

spring.datasource.password=your\_password

🌐 API Endpoints

METHOD

ENDPOINT

DESCRIPTION

GET

/api/expenses

Get all expenses

POST

/api/expenses

Add a new expense

DELETE

/api/expenses/{id}

Delete an expense



📦 Deploy (Optional)

PART

PLATFORM

Frontend

Netlify

or Vercel

Backend

Railway

or Render



🤝 Contributing

Open to improvements! Feel free to fork, fix, or enhance.



📄 License

MIT

---



\### ✅ Step 2: Save and Commit



In CMD:



```bash

git add README.md

git commit -m "docs: add README with project details and setup guide"

git push origin main



Screenshots

\### FrontEnd

!\[Expense Tracker Demo](frontend/frontend.png)



\### Backend

!\[Expense Tracker Demo](frontend/backend.png)



