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

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxUX5xV3VZbf63tF12-W_Ks7QEfp6HhhCnuRa8C9ks2xL86rd9ppn1wgrEUYhOq1q9K4A/exec";

    const response = await fetch(scriptURL, {
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
app.post("/send-email", async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    // Check if environment variables are set
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    if (!process.env.RECEIVER_EMAIL) {
      throw new Error("RECEIVER_EMAIL is not configured");
    }

    console.log("Sending email to:", process.env.RECEIVER_EMAIL);

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
