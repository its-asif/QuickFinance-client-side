
# QuickFinance

**Streamline your finances and make informed decisions with this comprehensive finance and accounting software.**


## Table Of Content

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variable](#environment-variables)
- [Running Locally](#running-locally)
- [Backend Code](#backend)
- [Contributors](#contributors)

## Overview

QuickFinance empowers you to take control of your financial life, whether you're an individual, family, or business. It offers a suite of features designed to simplify financial management, provide insights, and guide you towards financial well-being.

## Key Features

- **Financial Management:** Effortlessly track income, expenses, accounts, and budgets.
- **Visualization:** Gain insights with dynamic graphs and charts.
- **Tax and Zakat:** Calculate and manage taxes and zakat obligations accurately.
- **Smart Notifications:** Stay on top of bills and expenses with timely alerts.
- **Financial Guidance:** Access expert advice through real-time chat.
- **Budget Planning:** Create and manage personalized budgets to reach your goals.
- **Asset Tracking:** Monitor your net worth with the asset calculator.
- **Financial Health Dashboard:** Get a snapshot of your overall financial health.
- **Personalized Financial Blogs:** Stay informed with financial tips and resources.
- **Invoicing:** Create and send professional invoices for payment.
- **Subscription Options:** Choose from Personal, Family, or Business plans.
- **Debt Management:** Track debt obligations and receive warnings to avoid late payments.
- **Business Features (Business Plan):** Manage products, inventory, sales, and multiple users.

## Technologies

Built with a powerful tech stack:

- JavaScript
- React
- Mongoose
- Express
- Firebase
- MongoDB
## Dependencies

    "aos": "^3.0.0-beta.6",
    "axios": "^1.6.6",
    "firebase": "^10.7.1",
    "localforage": "^1.10.0",
    "lucide-react": "^0.312.0",
    "match-sorter": "^6.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.21.2",
    "sort-by": "^1.2.0"

## Installation

**Prerequisites:**

- **Node.js:** Ensure you have Node.js (version 14 or higher) installed on your system. If not, download and install it from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/QuickFinance.git](https://github.com/your-username/QuickFinance.git)
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Access the application in your browser, typically at `http://localhost:5173/`.


### Environment Variables

1. Create a file named `.env.local` in the root directory of the project.
2. Add the following variables to the `.env.local` file, replacing the placeholder values with your own Firebase project information:

```.md
VITE_apiKey=AIzaSyDhkao-YNM81D03DmZb1wDoX5_wPGWYW1I
VITE_authDomain=quick-finance-45c24.firebaseapp.com
VITE_projectId=quick-finance-45c24
VITE_storageBucket=quick-finance-45c24.appspot.com
VITE_messagingSenderId=771991984708
VITE_appId=1:771991984708:web:95cbe57e29b19823c6ba11
```

- You can obtain these values from the Firebase console for your project.


## Backend 

- [Backend Server Repository](https://github.com/its-asif/QuickFinance-server-side)


## Contributors

* [Muddasir Faiyaj](https://github.com/muddasirfaiyaj66)
* [Tahmid Shawn](https://github.com/TahmidShawn)
* [Tahsin Zaman](https://github.com/Tahsin0909)
* [Md Hanif Biswas](https://github.com/mdhanifbiswas27)
* [Asif Hossain](https://github.com/its-asif)


