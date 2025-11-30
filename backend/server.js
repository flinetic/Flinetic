import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ---- SUBMIT TO GOOGLE SHEET ----
app.post("/submit", async (req, res) => {
  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxHKNJsq2Bm76skPcudrxyr-0XmYOHct8Z5ZVV7-PzBfkucWTDPN0gyQWNvM38vMIos/exec";

    await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: true }); // Even if sheet fails you said sheet still saves
  }
});

// ---- SEND EMAIL USING RESEND ----
app.post("/send-email", async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Flinetic <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Resend Response:", response);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log("Resend Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
