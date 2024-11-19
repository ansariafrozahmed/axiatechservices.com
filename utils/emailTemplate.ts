export const generateEmailTemplate = ({
  name,
  email,
  number,
  service,
}: {
  name?: any;
  email?: any;
  number?: any;
  service?: any;
}) => {
  return `
        <div style="font-family: Arial, sans-serif; padding: 30px; background-color: #35797B; color: #ffffff;">          
          <p style="text-transform: capitalize;"><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ffffff;">${email}</a></p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>Service:</strong> ${service}</p>
          
          <hr style="border: 1px solid #ffffff;" />
          <p style="color: #ffffff; font-size: 12px;">
            This email was generated from the Axia Tech Services website. Please contact us if you have any questions.
          </p>
        </div>
        `;
};
