# Project Overview

This project is a **Cryptocurrency Price Tracker** webpage built as a small showcase site in pure HTML and CSS. The page is a static prototype that presents example (“fake”) prices for several popular cryptocurrencies and demonstrates layout, navigation, and basic UI elements rather than real-time data.

The main goals of the page are:

* To practice semantic(ish) HTML structure and layout.
* To experiment with **flexbox** for horizontal alignment of “cards”.
* To create a visually engaging hero section with a gradient background and centered content.
* To prepare a structure that could later be extended with real API data and more advanced styling.

The project currently consists of a single file: `index.html`.

---

# HTML Structure Decisions

The HTML begins with the standard `<!doctype html>` declaration and a minimal `<head>`:

```html
<!doctype html>
<html>
  <head>
    <title>Cryptocurrency Price Tracker</title>
  </head>
  ...
</html>
```

The actual structure is organized into a few logical visual sections:

* **Navigation bar**
  A simple navigation bar is implemented as a plain unordered list:

  ```html
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
  ```

  The `<ul>` is later styled with flexbox to display the items horizontally. In a future iteration, this would be wrapped in a semantic `<header>` and `<nav>` element.

* **Login form (top-right box)**
  A small login box is placed on top of the page, using inline styles and absolute positioning:

  ```html
  <div style="position: absolute; top: 200px; right: 10px;
              background: white; padding: 10px; border: 1px solid #ddd;">
    <form>
      <label>Username:</label><br>
      <input type="text"><br>
      <label>Password:</label><br>
      <input type="Password"><br>
      <button type="submit">Sign In</button>
    </form>
  </div>
  ```

  This demonstrates use of form elements and basic overlay positioning. It’s not yet optimized for responsiveness, but it clearly separates the login UI from the rest of the content.

* **Hero section**
  The main heading and introductory text are centered using inline styles:

  ```html
  <h1 style="text-align: center;">
    The Most ADVANCED Cryptocurrency Price Tracker!
  </h1>
  <p style="text-align: center;">
    This website allows you to check live Crypto prices!
  </p>
  <hr>
  ```

  This acts as the “hero” area, introducing the purpose of the site.

* **Cryptocurrency list (example prices)**
  Example cryptocurrency prices are shown in a flex container:

  ```html
  <h3>Examples of cryptocurrencies with 'fake' prices!:</h3>
  <div class="container">
    <div>Ripple (XRP) : $1.92</div>
    <div>Solana (SOL) : $129.38</div>
    <div>Bitcoin (BTC) : $84,728.00</div>
    <div>Ethereum (ETH) : $2,760.99</div>
    <div>Binance Coin (BNB) : $831.65</div>
  </div>
  ```

  Each inner `<div>` functions as a “card” containing a single crypto and its price.

* **Quote section**
  A short quote about Bitcoin is displayed using `<blockquote>` for emphasis:

  ```html
  <blockquote>
    <p>Bitcoin is a technological tour de force.</p>
  </blockquote>
  <p>—Bill Gates,
    <cite>co-founder of Microsoft, investor, and philanthropist</cite>
  </p>
  ```

  This illustrates the use of semantic tags like `<blockquote>` and `<cite>`.

* **Download button and footer**
  At the bottom, there is a button that triggers printing (as a “download” stand-in) and a footer with credits:

  ```html
  <button onclick="download()">Download Page</button><br>

  <footer>
    <p style="font-size:12px; text-align:center; margin-top: 750px;">
      CREATED BY BARTOSZ PIĄTEK AND ALEXANDER GAWRYLO
    </p>
  </footer>
  ```

  The `download()` function simply calls `print()` in JavaScript.

Overall, the structure is more “practical” than fully semantic. A clear improvement would be to reorganize the content into `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` for better semantics and accessibility.

---

# CSS Strategy

The CSS is embedded in a `<style>` block in the HTML. There is no separate `style.css` file yet. The main design decisions are:

* **Reset basic body spacing**

  ```css
  body {
    margin: 0;
    padding: 0;
  }
  ```

  This removes default browser margins and padding, giving full control over layout. The `<body>` itself also uses an inline style for a background gradient:

  ```html
  <body style="background: linear-gradient(to right, #1b95a5, #fff);">
  ```

  This gradient gives the page a modern, tech-inspired feel.

* **Normalize spacing on headings and paragraphs**

  ```css
  h2, p {
    margin: 10px;
  }
  ```

  This is a simple way to keep text from sticking to the edges without writing many separate rules.

* **Navigation bar styling with flexbox**

  The unordered list is turned into a horizontal navigation bar:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #333333;
    display: flex;
  }

  ul li a {
    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
  }

  ul li a:hover {
    background-color: #111111;
  }
  ```

  Key choices:

  * Removing bullets and default padding.
  * Using `display: flex;` on the `<ul>` so the `<li>` items align horizontally.
  * Giving each link a block-level clickable area with padding.
  * Adding a darker hover state for better feedback and usability.

* **Cryptocurrency “card” layout with flexbox**

  The `.container` class organizes the crypto items:

  ```css
  .container {
    display: flex;
    background-color: DodgerBlue;
  }

  .container div {
    background-color: #f1f1f1;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
  }
  ```

  The parent `.container` uses `display: flex` to lay out the child `<div>`s in a row. The alternating background colors (blue container, light gray cards) create clear separation and visual hierarchy.

* **Inline styles for specific elements**

  Some styles (e.g., centered headings, the login box, the footer spacing) are applied as inline `style="..."` attributes. This is quick but not ideal for maintainability. A more scalable approach would move these into CSS classes.

Currently, `:root` CSS variables, custom fonts, and media queries are not yet used. They are good candidates for future improvements to make the design more systematic and responsive.

---

# Prompt Design

While building the page, prompts to AI tools and helpers were designed to be:

1. **Specific about structure and outcome**

   Example prompt styles:

   * “Generate a horizontal navigation bar using an unordered list and flexbox, with a dark background and white links.”
   * “Create a flex container with multiple cards showing cryptocurrency prices, including margin and padding.”

2. **Visual and goal-oriented rather than only code-oriented**

   Instead of just asking “give me CSS,” prompts focused on the result:

   * “I want a tech-style gradient background for the body.”
   * “Place a small login form box in the top-right corner, with a white background and light border.”

3. **Iterative**

   The workflow involved:

   * Generating an initial snippet (e.g., a basic nav bar).
   * Testing it in the browser.
   * Asking follow-up prompts to tweak spacing, hover effects, and alignment.

4. **Aligned with assignment goals**

   Prompts referenced the lab requirements, such as:

   * Using flexbox for layout.
   * Adding a gradient.
   * Including a navigation bar and footer.
   * Creating a simple showcase page around a chosen theme (in this case, cryptocurrencies).

This prompt design strategy helped keep the generated code close to the project’s learning objectives.

---

# Tool Usage

The main tools used for this project were:

* **Code editor**
  A browser-based or desktop editor (such as phcode.io or a similar HTML/CSS editor) was used to:

  * Write and format HTML and CSS.
  * Quickly edit and reload `index.html`.

* **Web browser + Developer Tools**

  * Opened `index.html` directly in the browser to see changes.
  * Used DevTools (Inspector) to:

    * Check how flexbox was laying out elements.
    * Adjust margins/padding on the fly.
    * Experiment with colors and positioning.

* **AI assistant / chat model**

  * Generated starter code for:

    * Navigation bar using flexbox.
    * Crypto cards layout and basic styling.
  * Answered conceptual questions like:

    * “Why are my flexbox items not centered?”
    * “How can I make a gradient background?”
  * Helped refine wording and structure for this `report.md`.

* **(Optional) Markdown previewer**

  For writing `report.md`, a Markdown preview (either in the editor or online) can be used to confirm that headings and lists render as expected.

---

# Challenges & Solutions

**1. Turning a list into a horizontal navigation bar**

* **Challenge:**
  By default, a `<ul>` renders as a vertical list with bullet points.
* **Solution:**

  * Removed `list-style-type`, margin, and padding.
  * Applied `display: flex;` to the `<ul>`.
  * Styled `<li> a` links as block elements with padding and hover effects.

---

**2. Positioning the login form in the top-right**

* **Challenge:**
  Placing a login box in the top-right corner without it interfering with other elements.
* **Solution:**
  Used inline CSS with `position: absolute; top: 200px; right: 10px;` on a wrapper `<div>`, plus `background`, `padding`, and `border` to make it readable.

  While this works visually, it’s not yet mobile-friendly and could overlap content on very small screens. This is planned for improvement with a more flexible layout.

---

**3. Maintaining readability on a gradient background**

* **Challenge:**
  Gradient backgrounds can sometimes make text hard to read.
* **Solution:**
  Kept the gradient relatively soft and placed important text (like the login form and crypto prices) inside solid-colored boxes (`white` or `#f1f1f1`). This preserves contrast and readability.

---

**4. Using flexbox correctly for the crypto cards**

* **Challenge:**
  Ensuring that all example prices align nicely in a row and look like separate cards.
* **Solution:**

  * Used `.container { display: flex; }` on the parent.
  * Applied consistent `margin`, `padding`, and `font-size` on the child `<div>` elements.
  * Tested and adjusted spacing in the browser until the layout looked balanced.

---

# Academic Sources

While working on this project, the following types of academic/technical sources were particularly helpful:

* **Mozilla Developer Network (MDN Web Docs)**

  * HTML reference (for tags like `<blockquote>`, `<cite>`, `<nav>`, `<footer>`).
  * CSS reference and guides for flexbox, margins, padding, and background gradients.

* **W3C and accessibility guidelines**

  * General best practices for semantic HTML and accessible content.
  * Tips on contrast and readable font sizes.

* **Web design tutorials and blogs**

  * Examples of navigation bars built with flexbox.
  * Tutorials on creating card layouts and simple gradients.

These resources informed both the technical code and the design decisions (navigation structure, layout, and basic accessibility).

---

# Future Improvements

There are several planned improvements for the next iteration of this project:

1. **Semantic HTML restructuring**

   * Wrap the navigation and hero content in `<header>` and `<nav>`.
   * Group the main crypto content in `<main>` with `<section>` and possibly `<article>`.
   * Use `<aside>` for the quote or for additional info/links.
   * Keep the credits inside a properly styled `<footer>`.

2. **External CSS and variables**

   * Move all styles into a separate `style.css` file.
   * Introduce `:root` CSS variables for colors, font sizes, and spacing (for example, `--primary-color`, `--accent-color`).
   * Reduce or remove inline styles to keep the HTML cleaner.

3. **Typography and accessibility**

   * Import a custom, readable web font.
   * Ensure sufficient color contrast for all text (especially over the gradient).
   * Standardize font sizes and line-heights for headings and body text.

4. **Responsive design**

   * Use media queries to adjust layout for smaller screens (e.g., stack nav items, move or resize the login box).
   * Allow the flexbox container to wrap, so crypto cards display nicely on mobile devices.
   * Avoid fixed large margins (like the large `margin-top` on the footer text) in favor of more fluid spacing.

5. **Functional upgrades**

   * Replace “fake” crypto prices with live data from a cryptocurrency API (using JavaScript and AJAX/fetch).
   * Improve the “Download Page” functionality (for example, using proper HTML to PDF tools instead of just `print()`).
   * Optionally add a “Reader Mode” or “High Contrast Mode” toggle that increases font size and contrast.

By implementing these improvements, the cryptocurrency price tracker can evolve from a static layout demo into a more semantically structured, responsive, and interactive web application.
