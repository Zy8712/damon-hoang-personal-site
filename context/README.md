
# 🧠 Context Providers: `ActiveSectionContext` & `ThemeContext`

This README documents two custom React context providers used in the application to manage global UI state: `ActiveSectionContext` for tracking the currently active section in the UI, and `ThemeContext` for managing dark/light theme preference.

---

## 📍 `ActiveSectionContext.tsx`

### Purpose
Tracks which section of the page is currently active, and when the last click occurred. This is useful for controlling navigation behavior, such as scroll tracking or highlighting menu items.

### 🧩 Types

```ts
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
```

- `activeSection`: Name of the currently active section (e.g., "Home", "About").
- `timeOfLastClick`: Used to temporarily disable scroll-based updates when a user clicks a link.

### ✅ Usage

Wrap the app or part of the app in the provider:

```tsx
<ActiveSectionContextProvider>
  <YourComponent />
</ActiveSectionContextProvider>
```

Access the context with the custom hook:

```tsx
const { activeSection, setActiveSection } = useActiveSectionContext();
```

---

## 🌗 `ThemeContext.tsx`

### Purpose
Provides a global theme toggle between **light** and **dark** modes. Reads from and writes to `localStorage` and respects system preferences on initial load.

### 🧩 Types

```ts
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
```

### 🎛 Features

- Stores selected theme in `localStorage`.
- Automatically applies theme by toggling `document.documentElement.classList`.
- Fallbacks to `prefers-color-scheme` on first load.

### ✅ Usage

Wrap the app or layout in the provider:

```tsx
<ThemeContextProvider>
  <App />
</ThemeContextProvider>
```

Access the theme context with:

```tsx
const { theme, toggleTheme } = useTheme();
```

### 🌍 DOM Class Strategy

The component adds/removes the `dark` class on `<html>`:
```js
document.documentElement.classList.add("dark");
```

---

## 🗂 File Structure Example

```
project-root/
└── context/
    ├── ActiveSectionContext.tsx
    └── ThemeContext.tsx
```

---

## 🛠️ Dependencies

- React 18+
- TypeScript

---

These contexts help modularize and globally control key UI states across your application while keeping component code clean and isolated from app-wide logic.
