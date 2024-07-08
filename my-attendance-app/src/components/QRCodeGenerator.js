import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ sessionId }) => {
  const vercelURL = "https://your-vercel-url.vercel.app"; // Replace with your Vercel URL
  const url = `${vercelURL}/session/${sessionId}`;

  return (
    <div>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeGenerator;
