
# Captain - Consultation System

**Captain** is a consultation platform that connects students with consultants.

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/OSYJON/Captain.git
   ```

2. Navigate to the `backend/` directory:
   ```bash
   cd Captain/backend/
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the backend:
   ```bash
   node app.js
   ```

5. Open `frontend/index.html` in your browser to view the site.

---

## 🛠️ Technologies Used

- **Backend**: Node.js with Express
- **Frontend**: HTML, CSS, JavaScript

---

### Project Structure

```
Captain/
│
├── backend/               # Backend code with Node.js
│   ├── controllers/       # Logic related to API
│   │   └── consultationController.js
│   ├── routes/            # API routes
│   │   └── consultationRoutes.js
│   ├── app.js             # Main server file
│   ├── package.json       # Dependencies
│   ├── .env               # Environment variable settings
│   └── .gitignore          # Files to ignore in git
│
├── frontend/              # Frontend code
│   ├── css/               # CSS files
│   │   └── style.css
│   ├── js/                # JavaScript files
│   │   └── main.js
│   ├── index.html         # Main HTML page
│   ├── assets/            # Static files (images, fonts)
│   │   └── logo.png
│   └── .gitignore         # Files to ignore in git
│
├── excel/                 # Excel files
│   └── data.xlsx          # Subject data
│
├── .gitignore             # Files to ignore in git
└── README.md              # Project documentation
```