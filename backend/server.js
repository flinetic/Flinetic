import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

// Configure CORS to allow your frontend
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174', 
    'https://flinetic-3na7.vercel.app',
    'https://flinetic.vercel.app',
    /\.vercel\.app$/  // Allow all Vercel preview deployments
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ---- ROOT ROUTE (Health Check) ----
app.get("/", (req, res) => {
  res.json({ 
    status: "Backend is running! 🚀",
    endpoints: {
      submit: "/submit (POST)",
      sendEmail: "/send-email (POST)"
    }
  });
});

// ---- SUBMIT TO GOOGLE SHEET ----
app.post("/submit", async (req, res) => {
  try {
    console.log("📝 Received data:", JSON.stringify(req.body, null, 2));

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL ) {
      throw new Error("GOOGLE_SCRIPT_URL is missing from .env");
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const responseText = await response.text();
    console.log("📊 Google Sheets Response:", responseText);

    if (!response.ok) {
      throw new Error(`Google Sheets API returned status ${response.status}: ${responseText}`);
    }

    const result = JSON.parse(responseText);
    console.log("✅ Successfully submitted to Google Sheets");
    res.json(result);
  } catch (err) {
    console.error("❌ Error submitting to Google Sheets:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ---- SEND EMAIL USING RESEND ----
// ---- SEND EMAIL USING RESEND ----
app.post("/send-email", async (req, res) => {
  const { name, email, number, message, projectType, budget, timeline, package: pkg, formType } = req.body;

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    if (!process.env.RECEIVER_EMAIL) {
      throw new Error("RECEIVER_EMAIL is not configured");
    }

    console.log("Sending email to:", process.env.RECEIVER_EMAIL);

    let subject = "";
    let htmlBody = "";

    switch(formType) {
      case "contact":
        subject = "New Contact Form Submission";
        htmlBody = `
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Number:</strong> ${number}</p>
          <p><strong>Message:</strong> ${message}</p>
        `;
        break;

      case "webService": // Packages form
        subject = "New Web Service / Package Inquiry";
        htmlBody = `
          <h2>Web Service Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Package:</strong> ${pkg || 'Not selected'}</p>
          <p><strong>Description:</strong> ${description}</p>
        `;
        break;

       case "appService": // Packages form
        subject = "New App Service / Package Inquiry";
        htmlBody = `
          <h2>App Service Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>App Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Package:</strong> ${pkg || 'Not selected'}</p>
          <p><strong>Description:</strong> ${description}</p>
        `;
        break;  

      case "consultation":
        subject = "New Consultation Request";
        htmlBody = `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>Preferred Date/Time:</strong> ${timeline || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message}</p>
        `;
        break;

      default:
        throw new Error("Invalid formType provided");
    }

    const response = await resend.emails.send({
      from: "Flinetic <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject,
      html: htmlBody,
    });

    console.log("✅ Email sent successfully:", response);
    res.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

export default app;
