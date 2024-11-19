"use server";

import { generateEmailTemplate } from "./emailTemplate";
import { sendmail } from "./mail";

interface SendFuncProps {
  name?: any;
  email?: any;
  number?: any;
  service?: any;
}

export const send: React.FC<SendFuncProps> = async ({
  name,
  email,
  number,
  service,
}) => {
  const emailBody = generateEmailTemplate({
    name,
    email,
    number,
    service,
  });

  try {
    await sendmail({
      to: "ansariafroz720@gmail.com",
      name: "Axia Tech Services",
      subject: "Enquiry From Axia Tech Services",
      body: emailBody, // use the generated email template
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
