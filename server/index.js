require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend"); // 1. Changed import

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- EMAIL CONFIGURATION ---
// 2. Initialize Resend with the API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// --- ROUTES ---

// Test Route
app.get("/", (req, res) => {
  res.send("Arcy Digital API is running...");
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields." });
  }

  // 2. Send Email using Resend
  try {
    const data = await resend.emails.send({
      // 'onboarding@resend.dev' is the default free sender.
      // Once you buy a domain (e.g. arcydigital.com), you can change this to 'contact@arcydigital.com'
      from: "Arcy Website <onboarding@resend.dev>",

      // Where the email goes (You)
      to: [process.env.OWNER_EMAIL],

      // When you hit "Reply" in Gmail, it will go to the Client's email
      reply_to: email,

      subject: `New Lead: ${subject || "Website Inquiry"}`,
      html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #0ea5e9;">New Message from Arcy Digital Website</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #0ea5e9; border-radius: 4px;">
                    ${message}
                </div>
            </div>
        `,
    });

    console.log("Email sent successfully");
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error: Could not send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
