const mongoose = require("mongoose");
const student = require("../models/student-model");
const sendMail = require("../controller/email");
const axios = require("axios");
const savestudents = async (req, res) => {
  const {
    name,
    registration_number,
    email,
    phone_number,
    Branch,
    Year,
    section,
    technical,
    nontechnical,
  } = req.body;
  //save to database
  try {
    const newstudent = new student({
      name,
      registration_number,
      email,
      phone_number,
      Branch,
      Year,
      section,
      technical,
      nontechnical,
      createdAt: Date.now(),
    });
    await newstudent.save();
    console.log("Student saved successfully to database");
    //save to excel
    try {
      await axios.post(process.env.SHEET_URL, null, {
        params: {
          name,
          registration_number,
          email,
          phone_number,
          Branch,
          Year,
          section,
          technical,
          nontechnical,
        },
      });
      console.log("Student saved successfully to excel");
    } catch (error) {
      console.log("Error saving to excel:", error);
    }

    //send mail
    try {
      await sendMail(
        email,
        name,
        registration_number,
        phone_number,
        Branch,
        Year,
        section,
        technical,
        nontechnical,
      );
      console.log("Email sent successfully");
    } catch (error) {
      console.log("Error sending email:", error);
    }

    res.status(201).json(newstudent);
  } catch (error) {
    console.log("Error saving student:", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { savestudents };
