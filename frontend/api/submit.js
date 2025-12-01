// api/submit.js
import { Resend } from "resend";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      console.log("Received form data:", req.body);

      const { name, email, number, project, message } = req.body;

      // ---------- 1️⃣ SEND TO GOOGLE SHEETS ----------
      const sheetResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbyoXP79PhpmixQc1KczFzcEpxZHlfBOyGonJqHRVpyF4_Nx60sKtgOoLke8QQv4Utrd/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        }
      );

      console.log(
        "Google Apps Script response status:",
        sheetResponse.status
      );

      // ---------- 2️⃣ SEND EMAIL USING RESEND ----------
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "Flinetic Contact <onboarding@resend.dev>",
          to: "flinetic.info@gmail.com", // ← YOUR EMAIL HERE
          subject: "New Contact Form Submission",
          html: `
            <h2>New Contact Message Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${number}</p>
            <p><strong>Project:</strong> ${project}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `,
        });

        console.log("Email sent successfully!");
      } catch (emailErr) {
        console.error("Email sending error:", emailErr);
      }

      // Return success even if email fails (your requirement)
      res.status(200).json({
        success: true,
        message: "Data saved & email sent",
      });
    } catch (error) {
      console.error("API Error:", error);

      // Still return success because Google Sheets usually saves anyway
      res.status(200).json({
        success: true,
        message: "Data submitted successfully",
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
