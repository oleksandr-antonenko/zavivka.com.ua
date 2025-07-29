"use server";
// import { mailer } from "@/lib/email";
import { sendNotification } from "@/lib/telegram/config";

type BaseFormData = {
  name?: string;
  namePopUp?: string;
  phone?: string;
  phonePopUp?: string;
  services?: string[];
  agreeToPrivacy?: boolean;
};

export const sendForm = async (data: BaseFormData) => {
  try {
    // Определяем тип формы и формируем данные
    const isBookingForm = "name" in data;
    const name = isBookingForm ? data.name : data.namePopUp;
    const phone = isBookingForm ? data.phone : data.phonePopUp;
    const services = data.services;
    const subject = isBookingForm
      ? "Нова заявка на запис"
      : "Нова заявка на консультацію";

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_UKR_NET_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_UKR_NET_EMAIL_USER,
      subject,
      html: `
        <h2>${subject}</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Номер телефону:</strong> ${phone}</p>
        ${
          services
            ? `<p><strong>Обрані послуги:</strong></p>
        <ul>
          ${services.map((service) => `<li>${service}</li>`).join("")}
        </ul>`
            : ""
        }
      `,
    };

    // Відправляємо email
    //await mailer.sendMail(mailOptions);

    // Відправляємо повідомлення в Telegram
    const telegramMessage = isBookingForm
      ? `
📝 Нова заявка на запис

👤 Ім'я: ${name}
📱 Телефон: ${phone}
${services ? `\n💇‍♀️ Обрані послуги:\n${services.map((service) => `- ${service}`).join("\n")}` : ""}
    `
      : `
📞 Нова заявка на консультацію

👤 Ім'я: ${name}
📱 Телефон: ${phone}
    `;

    await sendNotification(telegramMessage);

    return {
      success: true,
      message: isBookingForm
        ? "Заявку успішно відправлено!"
        : "Заявку на консультацію успішно відправлено!",
    };
  } catch (error) {
    console.error("Помилка при відправці заявки:", error);
    return {
      success: false,
      message: "Помилка при відправці заявки. Спробуйте пізніше.",
    };
  }
};
