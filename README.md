# Premium MERN Developer Portfolio

A pixel-perfect, premium, and modern developer portfolio website matching professional agency-level aesthetics. It features a dark purple/violet glowing aurora theme, glassmorphism UI components, dynamic GitHub calendar stats, and fully-functional email messaging via Express and Nodemailer.

---

## 🚀 Getting Started

To run this application locally, you need to run both the React frontend dev server and the Express backend email server.

### 1. Setup Backend (Nodemailer Email Server)

1. Navigate to the `server/` directory:
   ```bash
   cd server
   ```
2. Set up your environment variables by editing the `server/.env` file:
   * Set `EMAIL_USER` to your Gmail address (e.g., `vedantkumbhar82@gmail.com`).
   * Set `EMAIL_PASS` to a Gmail **App Password** (NOT your regular account password).
     * *Note: To generate a Gmail App Password, you must enable 2-Step Verification on your Google Account, then go to Google Account Settings -> Security -> App passwords and generate one.*
   * Set `EMAIL_TO` to the email where you want to receive contact form messages (defaults to `vedantkumbhar82@gmail.com`).
3. Start the backend dev server:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`.

### 2. Setup Frontend (Vite + React)

1. Open a new terminal window in the root directory.
2. Install frontend dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the frontend Vite dev server:
   ```bash
   npm run dev
   ```
   The React application will launch at `http://localhost:5173`.
   
---

## 🛠️ Technology Stack & Architecture

- **Frontend:**
  - React (Vite)
  - Tailwind CSS v4 (Compiled natively via Vite plugin)
  - Framer Motion (Smooth animations, page entries, and hover effects)
  - Swiper.js (Custom responsive touch-enabled slider for projects)
  - React Icons (Modern vector interface icons)
  - React GitHub Calendar (Real-time dynamic contribution charts)
- **Backend:**
  - Node.js & Express
  - Nodemailer (SMTP transporter configured for Gmail)
  - CORS & Dotenv
- **Proxy Configuration:**
  - Vite is configured with a development proxy in `vite.config.js` to route all `/api/*` fetch requests directly to `http://localhost:5000` during development, avoiding any CORS or routing resolution issues.
