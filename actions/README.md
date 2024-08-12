
# 📬 Server Action: `sendEmail.ts`

This module defines a **server-only function** to handle sending emails from a contact form using the [Resend](https://resend.com) email service. It includes server-side validation, error handling, and the use of a custom React email component.

---

## 🔐 File Scope Declaration

```ts
"use server";
```

This directive tells Next.js that this file contains a [Server Action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions), meaning it will run only on the server and not be included in the client bundle.

---

## 📦 Imports

```ts
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
```

- `React`: Required to create JSX elements on the server.
- `Resend`: Official SDK for the Resend email service.
- `validateString`: Custom utility to validate form input (e.g. length checks).
- `getErrorMessage`: Safely extracts an error message from unknown error types.
- `ContactFormEmail`: A React component that renders the email body.

---

## 🛠️ Resend Client Setup

```ts
const resend = new Resend(process.env.RESEND_API_KEY);
```

Initializes the Resend client with an API key pulled from your environment variables. Be sure to set `RESEND_API_KEY` in your `.env.local` file:

```
RESEND_API_KEY=your_resend_api_key_here
```

---

## ✉️ `sendEmail` Server Action

```ts
export const sendEmail = async (formData: FormData) => {
  ...
};
```

This function processes the submitted form data, validates it, and sends an email using Resend.

---

### ✅ Step 1: Extract and Validate Input

```ts
const senderEmail = formData.get("senderEmail");
const message = formData.get("message");

if (!validateString(senderEmail, 500)) {
  return { error: "Invalid sender email" };
}

if (!validateString(message, 5000)) {
  return { error: "Invalid message" };
}
```

- Gets `senderEmail` and `message` values from the `FormData` object.
- Uses a `validateString()` utility to ensure the inputs are safe and not excessively long.

---

### 📤 Step 2: Send Email via Resend

```ts
data = await resend.emails.send({
  from: "Contact Form <onboarding@resend.dev>",
  to: "damon.h9752@gmail.com",
  subject: "Message from contact form",
  reply_to: senderEmail,
  react: React.createElement(ContactFormEmail, {
    message: message,
    senderEmail: senderEmail,
  }),
});
```

- Sends an email from a preset address.
- The `reply_to` field is set to the sender’s email so responses go directly to them.
- The email content is rendered using the `ContactFormEmail` React component, enabling styled and dynamic email content.

---

### ❌ Step 3: Handle Errors

```ts
} catch (error: unknown) {
  return {
    error: getErrorMessage(error),
  };
}
```

- Catches any error during the email sending process.
- Converts the unknown error to a human-readable message using `getErrorMessage()`.

---

### ✅ Step 4: Return Success Data

```ts
return { data };
```

Returns the response from Resend’s API on success.

---

## 🧪 Example Usage

This action is typically used with a form submission handler on the client:

```ts
const formData = new FormData(formElement);
const result = await sendEmail(formData);

if (result.error) {
  console.error("Failed to send email:", result.error);
} else {
  console.log("Email sent successfully:", result.data);
}
```

---

## 🛡️ Security Notes

- This function runs only on the server, so your API key is never exposed to the client.
- Consider adding rate limiting or CAPTCHA (e.g. hCaptcha or reCAPTCHA) to prevent spam or abuse.

---

## 🧩 Dependencies

Make sure these dependencies are installed:

```bash
npm install resend
```

---

## 📁 File Location Example

```
project-root/
│
├── app/
│   └── api/
│       └── sendEmail/
│           └── route.ts (or send.ts if used directly)
├── email/
│   └── contact-form-email.tsx
└── lib/
    └── utils.ts
```

---