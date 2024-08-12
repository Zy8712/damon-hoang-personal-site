
# ✉️ React Email Template: `ContactFormEmail.tsx`

This file defines a **React component-based HTML email template** using [`@react-email/components`](https://react.email) and styled with Tailwind CSS using [`@react-email/tailwind`](https://react.email/docs/integrations/tailwind). It's used to render the body of an email sent via a contact form.

---

## 🧩 Component Purpose

```tsx
export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps)
```

This component takes in a message and sender email address and returns a styled HTML email layout. It’s designed to work with the [Resend](https://resend.com) email service when using React-based email rendering.

---

## 📦 Imports

```tsx
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
```

- **@react-email/components**: A set of components that help construct semantic and cross-platform emails with React.
- **@react-email/tailwind**: Allows Tailwind CSS utility classes to be used directly in the email layout.

---

## 🔡 Props Type

```tsx
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
```

Defines the shape of the props passed into the email component.

---

## 🧱 Structure

```tsx
<Html>
  <Head />
  <Preview>...</Preview>
  <Tailwind>
    <Body>...</Body>
  </Tailwind>
</Html>
```

### 🔍 Key Sections

- `<Preview>`: The preview text that shows up in the email client next to the subject.
- `<Tailwind>`: Enables Tailwind classes in the content.
- `<Body>`: Main wrapper with a light gray background and black text.
- `<Container>`: Contains the email content.
- `<Section>`: Card-like element with padding, rounded corners, and white background.
- `<Heading>`: The main title informing about the received message.
- `<Text>`: Displays the message and sender’s email.
- `<Hr>`: Horizontal rule separating message and metadata.

---

## 🎨 Styling

All components are styled using Tailwind CSS classes, for example:

```tsx
<Body className="bg-gray-100 text-black">
<Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
```

Ensure that you have the Tailwind plugin configured correctly in your React Email project to make this styling effective.

---

## 🧪 Example Rendered Output

**Subject Preview:**  
> "New message from your portfolio site"

**Body:**  
```
You received the following message from the contact form

[User's message]

------------------------------

The sender's email is: [sender@example.com]
```

---

## ✅ Usage

This email is rendered and sent using the `sendEmail` server action:

```ts
react: React.createElement(ContactFormEmail, {
  message: message,
  senderEmail: senderEmail,
})
```

---

## 📁 File Location Example

```
project-root/
├── email/
│   └── contact-form-email.tsx
├── lib/
│   └── utils.ts
└── app/
    └── api/
        └── sendEmail/
            └── send.ts
```

---

## 📦 Dependencies

Install required packages:

```bash
npm install @react-email/components @react-email/tailwind
```

---

## 🛠️ Resources

- [React Email Documentation](https://react.email)
- [Tailwind Email Styling](https://react.email/docs/integrations/tailwind)
- [Resend Docs](https://resend.com/docs)

---

This file provides a clean and responsive HTML email using modern React best practices for transactional emails.
