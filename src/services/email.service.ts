import emailjs from "@emailjs/browser";

export interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = (params: Record<string, unknown>): Promise<"SUCCESS" | "FAILED"> => {
  return new Promise((resolve, reject) => {
    emailjs
      .send("service_p50cdyj", "template_jipafcj", params, {
        publicKey: "EonqZLiju7CRpOSGl"
      })
      .then(
        (response) => {
          resolve("SUCCESS");
        },
        (err) => {
          resolve("FAILED");
        }
      );
  });
};
