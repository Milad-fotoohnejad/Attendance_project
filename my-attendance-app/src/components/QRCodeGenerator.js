import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ sessionId }) => {
  const localIP = "172.22.13.150"; // Replace with your WSL IP address
  const url = `http://${localIP}:3000/session/${sessionId}`;

  return (
    <div>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeGenerator;
