App Link : https://ieee-induction-2026.vercel.app/

Backend Url : https://ieee-induction-2026.onrender.com

IEEE Society Induction Registration Website

This repository contains the source code for the IEEE Society Induction Registration Website, built to manage student registrations for IEEE induction events.

The project is a full-stack web application where:

Frontend (UI) was developed by Sabyasachhe Sahoo using React.

Backend was developed and deployed by Biswajit Baliarsingh using Node.js, Express, and MongoDB and The website is fully hosted with both frontend and backend deployed online.

Frontend on : vercal https://ieee-induction-2026.vercel.app/

Backend on : https://ieee-induction-2026.onrender.com

---

#Project Overview

The main goal of this project is to:

Collect student registration details.

Store the data securely.

Send a confirmation email to each student with the relevant WhatsApp group links based on the events they selected.

---

Store user data in MongoDB.

Also store the same data in a Google Sheet.

Use Google Apps Script to:

Read the sheet

Automatically send confirmation emails

So instead of my backend sending emails, Google handles the mailing part.

Why This Approach Works

No need for paid email services.

No domain required.

Works reliably for small events.

Free for up to ~100 emails per day (Google quota).

---

Tech Stack

#Frontend

HTML, CSS, JavaScript

React (UI developed by my teammate)

#Backend

Node.js

Express.js

MongoDB

Google Sheets API

Google Apps Script

#Hosting

Frontend: Hosted online

Backend: Hosted on Render

Database: MongoDB Atlas + Google Sheets
