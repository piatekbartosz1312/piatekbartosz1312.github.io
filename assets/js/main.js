/* Main JS for the demo site:
   - language switch (EN/PL)
   - simple client-only form validation + demo success messages
   - local randomization of demo prices */

(function () {
  const MESSAGES = {
    en: {
      "ui.language": "Language",
      "nav.home": "Home",
      "nav.prices": "Prices",
      "nav.news": "Updates",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.privacy": "Privacy",
      "nav.signin": "Sign in",
      "hero.kicker": "Student project • Bootstrap 5",
      "hero.title": "Cryptocurrency Price Tracker (Demo)",
      "hero.subtitle.html":
        "Explore a responsive Bootstrap layout with <strong>fake demo prices</strong>, components, and utilities. Built to practice the grid system, UI patterns, and deployment basics.",
      "hero.ctaPrimary": "View demo prices",
      "hero.ctaSecondary": "Open sign-in modal",
      "hero.note": "Note: This page does not fetch real market data.",
      "hero.widgetTitle": "Today’s demo snapshot",
      "hero.widgetFootnote": "Randomized locally on refresh",
      "hero.refresh": "Refresh",
      "hero.security": "No login data is saved.",
      "prices.title": "Demo crypto prices",
      "prices.subtitle": "Cards below use the Bootstrap grid and utilities. Values are fake and for learning only.",
      "prices.badge": "Bootstrap cards + grid",
      "prices.cardNote": "Store-of-value narrative",
      "prices.cardNote2": "Smart contract platform",
      "prices.cardNote3": "High-throughput chain",
      "prices.cardNote4": "Payments focus",
      "prices.cardNote5": "Exchange ecosystem",
      "prices.disclaimer": "Fake number; not investment advice.",
      "prices.learnTitle": "What this section demonstrates",
      "prices.learn1": "Bootstrap grid: .container, .row, .col-*",
      "prices.learn2": "Components: Navbar, Cards, Modal, Accordion, Carousel",
      "prices.learn3": "Utilities: spacing, typography, flex, colors, shadows, borders",
      "quote.text": "Bitcoin is a technological tour de force.",
      "quote.author": "Bill Gates (attributed)",
      "news.title": "Updates & tips",
      "news.subtitle": "Carousel is an advanced Bootstrap component (requires Bootstrap JS).",
      "news.cta": "Ask a question",
      "news.slide1.title": "Mobile-first layout",
      "news.slide1.text": "Resize the window to see how the grid and navbar adapt from phone to desktop.",
      "news.slide2.title": "Components in action",
      "news.slide2.text": "Cards, carousel, accordion and modal demonstrate production-ready UI patterns.",
      "news.slide3.title": "Keep it lightweight",
      "news.slide3.text": "Use CDNs, compress assets, and keep scripts minimal for fast loading.",
      "faq.title": "FAQ",
      "faq.subtitle": "Accordion is another advanced Bootstrap component.",
      "faq.q1": "Are these real crypto prices?",
      "faq.a1": "No. All numbers are fake demo values to practice layouts, components, and basic JavaScript.",
      "faq.q2": "What Bootstrap features are used?",
      "faq.a2": "Grid system, navbar, cards, carousel, modal, accordion, and many utility classes for spacing, typography, flex, and color.",
      "faq.q3": "Do you store form data?",
      "faq.a3": "No. This site is a student project. Any “submission” is handled only in your browser and is not stored.",
      "about.title": "About this demo",
      "about.text": "This project exists to demonstrate front‑end production basics: responsive layout, clean structure, and deployable static files.",
      "about.privacyBtn": "Read privacy info",
      "about.contactBtn": "Contact section",
      "about.tech": "Built with Bootstrap 5 + Font Awesome via CDN. Custom styles in assets/css/styles.css.",
      "contact.title": "Contact",
      "contact.subtitle": "For the assignment: form uses Bootstrap controls. Submissions are not stored.",
      "contact.gdprBadge": "GDPR/Privacy transparency",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.validation.name": "Please enter your name.",
      "contact.validation.email": "Please enter a valid email.",
      "contact.validation.message": "Please enter a message.",
      "contact.submit": "Send (demo)",
      "contact.privacy": "Privacy info",
      "contact.notice": "No data is stored.",
      "contact.success": "Thanks! This is a demo — nothing was sent.",
      "gdpr.title": "Privacy / GDPR (short)",
      "gdpr.li1": "This website is a student project for learning Bootstrap.",
      "gdpr.li2": "No personal data is collected or stored on a server.",
      "gdpr.li3": "Contact form inputs (if used) remain only in your browser and are not retained.",
      "gdpr.li4": "Read the full details on the Privacy page.",
      "footer.madeBy": "Made by",
      "footer.note": "Bootstrap + Font Awesome via CDN • No tracking",
      "footer.home": "Home",
      "footer.privacy": "Privacy",
      "modal.title": "Sign in (demo)",
      "modal.note": "No credentials are saved.",
      "modal.success": "Signed in (demo). No data was sent.",
      "form.username.label": "Username",
      "form.password.label": "Password",
      "form.username.validation": "Please enter a username.",
      "form.password.validation": "Please enter a password.",
      "form.button": "Sign In"
    },

    pl: {
      "ui.language": "Język",
      "nav.home": "Strona główna",
      "nav.prices": "Ceny",
      "nav.news": "Aktualizacje",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.privacy": "Prywatność",
      "nav.signin": "Logowanie",
      "hero.kicker": "Projekt studencki • Bootstrap 5",
      "hero.title": "Tracker cen kryptowalut (demo)",
      "hero.subtitle.html":
        "Poznaj responsywny układ Bootstrap z <strong>fikcyjnymi cenami</strong>, komponentami i utilami. Strona służy do ćwiczeń siatki, UI oraz podstaw wdrożenia.",
      "hero.ctaPrimary": "Zobacz ceny demo",
      "hero.ctaSecondary": "Otwórz modal logowania",
      "hero.note": "Uwaga: strona nie pobiera prawdziwych danych rynkowych.",
      "hero.widgetTitle": "Dzisiejszy podgląd demo",
      "hero.widgetFootnote": "Losowane lokalnie po odświeżeniu",
      "hero.refresh": "Odśwież",
      "hero.security": "Dane logowania nie są zapisywane.",
      "prices.title": "Ceny kryptowalut (demo)",
      "prices.subtitle": "Karty pokazują siatkę Bootstrap i utilsy. Wartości są fikcyjne i tylko do nauki.",
      "prices.badge": "Karty + siatka Bootstrap",
      "prices.cardNote": "Narracja store-of-value",
      "prices.cardNote2": "Platforma smart kontraktów",
      "prices.cardNote3": "Wysoka przepustowość",
      "prices.cardNote4": "Płatności",
      "prices.cardNote5": "Ekosystem giełdy",
      "prices.disclaimer": "Fikcyjna liczba; to nie porada inwestycyjna.",
      "prices.learnTitle": "Co pokazuje ta sekcja",
      "prices.learn1": "Siatka Bootstrap: .container, .row, .col-*",
      "prices.learn2": "Komponenty: Navbar, Cards, Modal, Accordion, Carousel",
      "prices.learn3": "Utility: odstępy, typografia, flex, kolory, cienie, obramowania",
      "quote.text": "Bitcoin to technologiczny wyczyn.",
      "quote.author": "Bill Gates (przypisywane)",
      "news.title": "Aktualizacje i tipy",
      "news.subtitle": "Karuzela to zaawansowany komponent Bootstrap (wymaga Bootstrap JS).",
      "news.cta": "Zadaj pytanie",
      "news.slide1.title": "Mobile-first",
      "news.slide1.text": "Zmień rozmiar okna i zobacz, jak siatka i navbar dopasowują się do ekranu.",
      "news.slide2.title": "Komponenty w praktyce",
      "news.slide2.text": "Karty, karuzela, accordion i modal pokazują gotowe wzorce UI.",
      "news.slide3.title": "Lekka strona",
      "news.slide3.text": "CDN, kompresja zasobów i minimum skryptów pomagają w szybkim ładowaniu.",
      "faq.title": "FAQ",
      "faq.subtitle": "Accordion to kolejny zaawansowany komponent Bootstrap.",
      "faq.q1": "Czy to są prawdziwe ceny?",
      "faq.a1": "Nie. Wszystkie liczby są fikcyjne, aby ćwiczyć layouty, komponenty i proste JS.",
      "faq.q2": "Jakie funkcje Bootstrap są użyte?",
      "faq.a2": "Siatka, navbar, karty, karuzela, modal, accordion oraz wiele klas utility.",
      "faq.q3": "Czy zapisujecie dane z formularzy?",
      "faq.a3": "Nie. To projekt studencki. Wysłanie jest tylko „na pokaz” i odbywa się lokalnie w przeglądarce.",
      "about.title": "O tym demo",
      "about.text": "Projekt pokazuje podstawy produkcji front‑endu: responsywność, strukturę i statyczne pliki gotowe do wdrożenia.",
      "about.privacyBtn": "Polityka prywatności",
      "about.contactBtn": "Sekcja kontaktu",
      "about.tech": "Bootstrap 5 + Font Awesome z CDN. Style własne w assets/css/styles.css.",
      "contact.title": "Kontakt",
      "contact.subtitle": "W ramach zadania: formularz używa kontrolek Bootstrap. Zgłoszenia nie są zapisywane.",
      "contact.gdprBadge": "Transparentność RODO/Prywatność",
      "contact.name": "Imię",
      "contact.email": "E‑mail",
      "contact.message": "Wiadomość",
      "contact.validation.name": "Wpisz imię.",
      "contact.validation.email": "Wpisz poprawny e‑mail.",
      "contact.validation.message": "Wpisz wiadomość.",
      "contact.submit": "Wyślij (demo)",
      "contact.privacy": "Prywatność",
      "contact.notice": "Dane nie są zapisywane.",
      "contact.success": "Dzięki! To demo — nic nie zostało wysłane.",
      "gdpr.title": "Prywatność / RODO (krótko)",
      "gdpr.li1": "To strona studencka do nauki Bootstrap.",
      "gdpr.li2": "Nie zbieramy ani nie przechowujemy danych osobowych na serwerze.",
      "gdpr.li3": "Dane z formularza (jeśli użyte) zostają tylko w przeglądarce i nie są utrwalane.",
      "gdpr.li4": "Szczegóły znajdziesz na stronie Prywatność.",
      "footer.madeBy": "Autorzy",
      "footer.note": "Bootstrap + Font Awesome z CDN • Bez śledzenia",
      "footer.home": "Start",
      "footer.privacy": "Prywatność",
      "modal.title": "Logowanie (demo)",
      "modal.note": "Dane logowania nie są zapisywane.",
      "modal.success": "Zalogowano (demo). Dane nie zostały wysłane.",
      "form.username.label": "Login",
      "form.password.label": "Hasło",
      "form.username.validation": "Wpisz login.",
      "form.password.validation": "Wpisz hasło.",
      "form.button": "Zaloguj"
    }
  };

  let currentLang = "en";

  function t(key) {
    return (MESSAGES[currentLang] && MESSAGES[currentLang][key]) ? MESSAGES[currentLang][key] : key;
  }

  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n-key]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n-key"));
    });

    document.querySelectorAll("[data-i18n-html-key]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html-key"));
    });
  }

  // Simple demo "prices" randomizer
  const base = {
    BTC: 84728.0,
    ETH: 2760.99,
    SOL: 129.38,
    XRP: 1.92,
    BNB: 831.65
  };

  function jitter(value, pct) {
    const r = (Math.random() * 2 - 1) * pct;
    return value * (1 + r);
  }

  function fmtUSD(n) {
    return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function refreshPrices() {
    const btc = jitter(base.BTC, 0.015);
    const eth = jitter(base.ETH, 0.02);
    const sol = jitter(base.SOL, 0.03);
    const xrp = jitter(base.XRP, 0.04);
    const bnb = jitter(base.BNB, 0.02);

    setText("priceBTC", fmtUSD(btc));
    setText("priceETH", fmtUSD(eth));
    setText("priceSOL", fmtUSD(sol));
    setText("priceXRP", fmtUSD(xrp));
    setText("priceBNB", fmtUSD(bnb));

    setText("snapBTC", fmtUSD(btc).replace(".00", ""));
    setText("snapETH", fmtUSD(eth).replace(".00", ""));
    setText("snapSOL", fmtUSD(sol).replace(".00", ""));
    setText("snapXRP", fmtUSD(xrp).replace(".00", ""));
  }

  // Bootstrap-like validation for forms, but no network calls
  function wireDemoForm(formId, successId) {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      form.classList.remove("was-validated");
      form.reset();

      if (success) {
        success.classList.remove("d-none");
        window.setTimeout(() => success.classList.add("d-none"), 4500);
      }
    });
  }

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", () => applyTranslations(langSelect.value));
    }

    applyTranslations("en");
    refreshPrices();

    const refreshBtn = document.getElementById("refreshPricesBtn");
    if (refreshBtn) refreshBtn.addEventListener("click", refreshPrices);

    wireDemoForm("contactForm", "contactSuccess");
    wireDemoForm("signinForm", "signinInfo");
  });
})();
