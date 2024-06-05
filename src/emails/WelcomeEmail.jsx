import React from "react";
require("dotenv").config();

// const logo = process.env.VITE_LOGO_URL; // Replace with your logo URL
const logo = "http://192.168.12.17:5173/public/images/sababu-logo.png";

const WelcomeEmail = ({
  recipientName,
  meetingLink,
  meetingId,
  passcode,
  member,
}) => {
  const styles = {
    body: {
      backgroundColor: "#fff",
      fontFamily: "sans-serif",
      padding: "0 0.5rem",
    },
    name: {
      color: "#255268",
    },
    container: {
      backgroundColor: "f8f8f8",
      border: "1px solid #eaeaea",
      borderRadius: "8px",
      margin: "40px auto",
      padding: "24px",
      maxWidth: "465px",
    },
    subject: {
      fontSize: "24px",
      fontWeight: "normal",
      textAlign: "center",
      margin: "20px auto",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "normal",
      margin: "30px auto",
    },
    text: {
      color: "black",
      fontSize: "14px",
      lineHeight: "24px",
    },
    button: {
      color: "#ffffff",
      backgroundColor: "#255268",
      borderRadius: "5px",
      border: "none",
      fontSize: "16px",
      textAlign: "center",
      padding: "10px 14px",
      textDecoration: "none",
      display: "inline-block",
      cursor: "pointer",
    },

    buttons: {
      textAlign: "center",
      marginTop: "32px",
      marginBottom: "32px",
    },

    hr: {
      border: ".5px solid #eaeaea",
      margin: "26px 0",
      width: "100%",
    },
    footerText: {
      color: "#666666",
      fontSize: "12px",
      lineHeight: "24px",
    },
    footerTextSmall: {
      borderRadius: "5px",
      padding: "4px",
      color: "#ffffff",
      fontSize: "10px",
      lineHeight: "24px",
      backgroundColor: "#255268",
      textAlign: "center",
      marginTop: "20px",
    },
    img: {
      display: "block",
      margin: "0 auto",
      width: "60px",
      height: "60px",
    },
    ol: {
      color: "black",
      fontSize: "14px",
      lineHeight: "24px",
    },
    link: {
      color: "#1D4ED8",
      textDecoration: "underline",
    },
    signature: {
      marginTop: "24px",
    },
  };

  return (
    <div style={styles.container}>
      <section style={{ marginTop: "32px" }}>
        <img src={logo} alt="Sababu logo" style={styles.img} />
        <div style={styles.subject}>
          Join{" "}
          <strong>
            <span style={styles.name}>Sababu Fund</span>
          </strong>{" "}
          on Zoom
        </div>
      </section>
      <section>
        <h2 style={styles.heading}>Welcome, {recipientName}!</h2>
        <p style={styles.text}>
          Thank you for signing up. We are excited to have you join the{" "}
          <strong>
            Sababu Fund's 2024 Mid Year Review Meeting on Sunday, July 7th
          </strong>
          , hosted on Zoom at 5:00 PM (Eastern Standard Time).
        </p>
      </section>
      <section>
        <div style={styles.text}>
          <strong>Meeting Details:</strong>
          <p style={styles.paragraph}>
            Members are admitted into the meeting 15 minutes prior to its start.
            Please click on the meeting link and enter the meeting ID and
            passcode when prompted.
          </p>
        </div>
        <ol style={styles.ol}>
          <li>
            Zoom meeting link:{" "}
            <a style={styles.link} href={meetingLink}>
              Click Me
            </a>
          </li>
          <li>
            Enter the Meeting ID: <strong>{meetingId}</strong>
          </li>
          <li>
            Enter the Passcode: <strong>{passcode}</strong>
          </li>
        </ol>
      </section>
      <section style={styles.buttons}>
        <a style={styles.button} href={meetingLink}>
          Join on Zoom
        </a>
      </section>
      <section style={styles.text}>
        Your contributions mean a lot to this organization. Let us have a
        session and discussion on how to improve and grow our community.
      </section>
      <p style={styles.signature}>
        Best regards,
        <br />
        The Sababu Team.
      </p>

      <hr style={styles.hr} />
      <section style={styles.footerText}>
        This invitation is intended for{" "}
        <span style={{ color: "black" }}>Members of the Sababu Fund Inc.</span>{" "}
        organization. If you received this invitation in error, please disregard
        this email.
      </section>
      <section style={styles.footerTextSmall}>
        Sababu Fund Inc. &copy; 2022.{" "}
        <a style={{ color: "#ffffff" }}>
          42344 Winsbury West Pl, Sterling VA. 20166.
        </a>
      </section>
    </div>
  );
};

export default WelcomeEmail;
