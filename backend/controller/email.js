/*
 this function will  not work untill a verified domain is added
*/

const nodemailer = require("nodemailer");
const { Resend } = require("resend");
const sendMail = async (
  email,
  name,
  registration_number,
  phone_number,
  Branch,
  Year,
  section,
  technical,
  nontechnical,
) => {
  const resend = new Resend(process.env.RESEND_KEY);
  // Tech groups
  const techGroups = {
    Hackathon: "https://chat.whatsapp.com/TECH_EVENT_1",
    CodingContest: "https://chat.whatsapp.com/TECH_EVENT_2",
  };

  // Non-tech groups
  const nonTechGroups = {
    Debate: "https://chat.whatsapp.com/NONTECH_1",
    Quiz: "https://chat.whatsapp.com/NONTECH_2",
    Photography: "https://chat.whatsapp.com/NONTECH_3",
  };

  const techLink = techGroups[technical];
  const nonTechLink = nonTechGroups[nontechnical];

  //create a transporter inside sendMail//nodemailer
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // await transporter.sendMail({
  await resend.emails.send({
    from: "IEEE VSSUT <onboarding@resend.dev>",
    to: email,
    subject: "🎉 Induction Registration Confirmed",
    html: `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; padding:20px;">
        
        <h2 style="color:#2c3e50;">Hello ${name}, 👋</h2>
        
        <p>Your registration for the induction has been <b>successfully completed</b> ✅</p>
        
        <h3>📋 Your Registration Details</h3>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td><b>Registration No</b></td><td>${registration_number}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone_number}</td></tr>
          <tr><td><b>Branch</b></td><td>${Branch}</td></tr>
          <tr><td><b>Year</b></td><td>${Year}</td></tr>
          <tr><td><b>Section</b></td><td>${section}</td></tr>
          <tr><td><b>Technical Domain</b></td><td>${technical}</td></tr>
          <tr><td><b>Non-Technical Domain</b></td><td>${nontechnical}</td></tr>
        </table>

        <br>

        <p style="background:#f1f1f1; padding:10px;">
          👉 Join our WhatsApp group for announcements and updates:
          <br><br>
          <p>${technical} :</p>
          <a href="${techLink}"
             style="background:#25D366; color:white; padding:10px 15px; 
                    text-decoration:none; border-radius:5px;">
            Join WhatsApp Group
          </a>
          <br><br>
          <p>${nontechnical} :</p>
          <a href="${nonTechLink}"
             style="background:#25D366; color:white; padding:10px 15px; 
                    text-decoration:none; border-radius:5px;">
            Join WhatsApp Group
          </a>
        </p>

        <br>

        <p>
          Please keep this email for future reference.  
          Show this confirmation during event check-in.
        </p>

        <p style="margin-top:30px;">
          Regards,<br>
          <b>IEEE VSSUT Student Branch</b>
        </p>

      </div>
    `,
  });
};

module.exports = sendMail;
