// Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const path = require("path");
const { renderToString } = require("react-dom/server");
const React = require("react");
const resendModule = require("resend");

const errorHandler = require("./errorHandler.js");

require("dotenv").config();

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Read the API key from the environment variables
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}

const resend = new resendModule.Resend(resendApiKey);

app.post("/send-email", async (req, res) => {
  const { recipientName, recipientEmail, member, subject, templateData } =
    req.body;
  const { meetingLink, meetingId, passcode } = templateData;
  console.log("Received request from client");

  try {
    const WelcomeEmail = require("./src/emails/WelcomeEmail.jsx").default;

    const emailContent = renderToString(
      React.createElement(WelcomeEmail, {
        recipientName,
        meetingLink,
        meetingId,
        passcode,
        member,
      })
    );

    const { data, error } = await resend.emails.send({
      from: "Sababu Fund <NoReply@sababufund.org>",
      to: [recipientEmail],
      subject,
      html: emailContent,
    });

    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email", error });
      console.log(error.message);
    } else {
      res.status(200).json({ message: "Email sent successfully", data });
      console.log(data);
    }
  } catch (error) {
    console.error("Error rendering email content:", error.message);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

app.get("*", (req, res) => {
  const App = require("../src/App.jsx").default;
  const appString = renderToString(React.createElement(App));

  const indexFile = path.resolve("./index.html");
  const template = readFileSync(indexFile, "utf8");
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appString}</div>`
  );

  res.send(html);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
