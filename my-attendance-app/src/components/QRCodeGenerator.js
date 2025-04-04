import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ qrCodeToken }) => {
  const vercelURL = "https://my-attendance-app-three.vercel.app"; // Replace with your actual domain
  const qrUrl = `${vercelURL}/attendance?token=${qrCodeToken}`;

  return (
    <div className="text-center mt-4">
      <h2 className="text-md font-semibold mb-2">
        Scan to Register Attendance
      </h2>
      <QRCode value={qrUrl} size={256} />
      <p className="mt-2 text-sm break-words">{qrUrl}</p>
    </div>
  );
};

export default QRCodeGenerator;
