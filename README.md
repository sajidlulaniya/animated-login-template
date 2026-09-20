# Animated Login Template

A modern, responsive, and customizable login page built with **HTML, CSS, and vanilla JavaScript**. The template combines animated gradient visuals, light/dark themes, polished form interactions, responsive layouts, and accessible UI details in a lightweight frontend with no framework dependency.

Created by **Sajid** as a reusable starting point for websites, dashboards, SaaS products, admin panels, internal tools, and other web applications.

> **Important:** This repository provides the frontend login interface only. It does not authenticate users or store credentials. Connect it to your own secure authentication backend or identity provider before using it in production.

---

## Preview

The interface includes a two-panel desktop layout with an animated visual section and a focused sign-in form. On smaller screens, the layout adapts automatically for mobile devices.

To publish a live preview, enable **GitHub Pages** for this repository. See [Deploy with GitHub Pages](#deploy-with-github-pages).

---

## Features

- Modern two-panel login layout
- Animated gradient/glow background
- Light and dark themes
- Theme preference saved with `localStorage`
- Soft green/teal gradient input fields
- Username/email and password form validation
- Show/hide password control
- Remember-me checkbox UI
- Loading state on form submission
- Success toast notification
- Responsive desktop, tablet, and mobile layouts
- Keyboard-friendly focus states
- `prefers-reduced-motion` support
- Semantic HTML and ARIA attributes
- Automatic copyright year
- No JavaScript framework required
- Easy-to-customize CSS variables

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and semantic markup |
| CSS3 | Layout, themes, responsive design, gradients, and animations |
| JavaScript | Theme switching, validation, password visibility, and UI states |
| Google Fonts | Inter font family |

---

## Project Structure

```text
animated-login-template/
├── index.html
├── styles.css
├── script.js
└── README.md
```

If you add screenshots or other assets later, a clean structure would be:

```text
animated-login-template/
├── assets/
│   └── images/
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE
```

---

## Getting Started

No package manager, build step, or framework is required.

### 1. Clone the repository

```bash
git clone https://github.com/sajidlulaniya/animated-login-template.git
cd animated-login-template
```

### 2. Open the template

Open `index.html` directly in your browser.

For local development, using a small local web server is recommended. For example, with VS Code you can use the **Live Server** extension.

### 3. Test the demo form

The included JavaScript accepts:

- Any non-empty username or email
- A password containing at least 6 characters

After validation, the template displays a simulated loading state and success notification. No credentials are sent anywhere.

---

## Customization

### Branding

Update the brand name and supporting copy in `index.html`.

For example:

```html
<div class="brand-name">
  <strong>YOUR BRAND</strong>
  <span>WORKSPACE</span>
</div>
```

You can also replace the inline SVG logo with your own SVG, image, or brand mark.

### Theme Colors

The main colors are defined as CSS custom properties near the top of `styles.css`:

```css
:root {
  --primary: #06a79c;
  --primary-dark: #057c75;
  --primary-soft: #dff8f4;
  --text: #111827;
  --page: #edf3f8;
}
```

Dark-mode values are defined separately under:

```css
html[data-theme="dark"] {
  /* Dark theme variables */
}
```

Changing these variables is the easiest way to adapt the template to another product or brand.

### Input Gradients

The login fields use dedicated gradient variables:

```css
--field-gradient: ...;
--field-gradient-hover: ...;
--field-gradient-focus: ...;
```

Modify these values in both the light and dark theme sections to create a different field appearance.

### Animation Speed

The main background movement is controlled by the `.glow::before` and `.glow::after` animation duration and the `drift` keyframes in `styles.css`.

```css
.glow::before,
.glow::after {
  animation: drift 4.2s ease-in-out infinite alternate;
}
```

Increase `4.2s` for slower movement or decrease it for faster movement.

---

## Connecting Real Authentication

The current submit handler in `script.js` is intentionally a frontend demonstration. For a real application, replace the simulated timeout with a request to your authentication service.

A typical flow is:

1. Validate the form on the client.
2. Send credentials to your authentication endpoint over HTTPS.
3. Validate credentials securely on the server.
4. Establish a secure session or return an appropriate authentication token.
5. Handle invalid credentials and server errors without exposing sensitive information.
6. Redirect the authenticated user to the intended application page.

### Production Security Checklist

Before using the template with real user accounts:

- Use HTTPS in production.
- Never hard-code real credentials in HTML or JavaScript.
- Never treat frontend validation as authentication.
- Validate and sanitize relevant input on the server.
- Use secure session handling or a trusted authentication provider.
- Prefer secure, `HttpOnly`, `SameSite` cookies when appropriate for session authentication.
- Add CSRF protection where required by your authentication architecture.
- Apply login rate limiting and brute-force protection on the server.
- Return generic authentication errors instead of revealing whether an account exists.
- Implement a real password-reset flow for the **Forgot password?** link.
- Connect the **Need help?** link to your support or help center.
- Configure an appropriate Content Security Policy and other security headers for your deployment.

---

## Theme Behavior

The template supports light and dark themes.

On first visit, it checks the visitor's system preference using `prefers-color-scheme`. When the theme button is used, the selected theme is stored in the browser with `localStorage` and restored on future visits.

The current storage key is:

```text
nexus-theme
```

You can rename this key in `script.js` if you rebrand the template.

---

## Accessibility

The template includes several accessibility-oriented details:

- Semantic form labels
- ARIA labels for interactive icon buttons
- Live regions for validation/status messaging
- Visible keyboard focus states
- Password visibility button labeling
- Responsive text and layouts
- Reduced-motion support through `prefers-reduced-motion`

Accessibility requirements vary by product and jurisdiction, so perform your own accessibility testing before production deployment.

---

## Responsive Design

The layout is designed to work across:

- Desktop displays
- Tablets
- Mobile phones

Responsive behavior is handled with CSS media queries, including dedicated adjustments below `780px` and `420px`.

---

## Browser Compatibility

The template is designed for current versions of modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Because the design uses modern CSS features such as `color-mix()`, users on significantly older browsers may not receive identical styling.

---

## Deploy with GitHub Pages

Because this is a static HTML/CSS/JavaScript project, it can be hosted directly with GitHub Pages.

1. Push the project to your `animated-login-template` repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the configuration.

GitHub will provide the public URL after deployment. It will normally follow this structure:

```text
https://<your-github-username>.github.io/animated-login-template/
```

---

## Contributing

Contributions are welcome. If you would like to improve the template:

1. Fork the repository.
2. Create a new branch for your change.
3. Make and test your changes.
4. Commit with a clear message.
5. Push the branch to your fork.
6. Open a pull request describing what changed and why.

For larger changes, consider opening an issue first so the proposed approach can be discussed.

---

## Suggested Roadmap

Possible future additions include:

- Sign-up page
- Forgot-password page
- Reset-password page
- Social sign-in buttons
- Two-factor authentication screen
- Additional color themes
- Reusable authentication components
- Framework versions for React, Vue, or other ecosystems

---

## License

If you want other people to freely use, modify, and distribute this template, add an open-source license to the repository.

The **MIT License** is a common choice for reusable frontend templates because it permits commercial and personal use, modification, and redistribution while retaining the copyright and license notice.

> A public GitHub repository is not automatically open source. Without an explicit license, normal copyright restrictions still apply.

If you choose MIT, add a `LICENSE` file at the repository root with your copyright information.

---

## Author

**Sajid**

If this template is useful to you, consider starring the repository. Contributions, improvements, and feedback are welcome.

---

## Disclaimer

This project is provided as a user-interface template. The included form behavior is for demonstration purposes and is **not a complete authentication system**. Security, backend authentication, account management, data handling, authorization, and production deployment remain the responsibility of the application integrating this template.
