import "./style.css";

const whatsapp = "5491162747838";
const whatsappMessage =
  "Hola Dietética Rabanal, quería consultar por sus productos.";
const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const products = [
  "Yuyos y productos naturales",
  "Legumbres y cereales",
  "Harinas y alimentos saludables",
  "Miel y endulzantes",
  "Galletitas y dulces",
  "Productos de origen vegetal",
  "Proteínas",
  "Suplementos",
  "Opciones para celíacos",
  "Aceites orgánicos",
  "Cremas y cuidado personal",
  "Y mucho más",
];

const gallery = Array.from({ length: 33 }, (_, index) => {
  const number = index + 1;
  return `
    <button class="gallery-item" type="button" data-image="/images/foto${number}.jpg">
      <img
        src="/images/foto${number}.jpg"
        alt="Productos de Dietética Rabanal"
        loading="lazy"
      />
    </button>
  `;
}).join("");

const productsHtml = products
  .map(
    (product, index) => `
      <article class="product-card">
        <span class="product-card-number">${String(index + 1).padStart(
          2,
          "0"
        )}</span>
        <h3>${product}</h3>
        <p>Opciones seleccionadas para una alimentación consciente.</p>
      </article>
    `
  )
  .join("");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#inicio" aria-label="Dietética Rabanal">
        <img src="/images/logo.jpg" alt="Dietética Rabanal" />
      </a>

      <nav class="desktop-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#productos">Productos</a>
        <a href="#galeria">Galería</a>
        <a href="#visitanos">Visitanos</a>
      </nav>

      <a
        class="header-whatsapp"
        href="${whatsappUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-logo"><img src="/images/logo.jpg" alt="Dietética Rabanal" /></div>
      <div class="hero-overlay">
        <div class="hero-copy">
          <p class="eyebrow">Dietética · Pompeya · CABA</p>

          <h1>
            Elegí natural.<br />
            Elegí <em>Rabanal.</em>
          </h1>

          <p>
            Todo lo que buscás para una alimentación más natural,
            consciente y equilibrada, en un solo lugar.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#productos">
              Ver productos
            </a>

            <a
              class="button button-secondary"
              href="${whatsappUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>

          <a class="hero-scroll" href="#nosotros">
            Descubrí Rabanal ↓
          </a>
        </div>
      </div>
    </section>

    <section class="section intro-section" id="nosotros">
      <div class="intro-grid">
        <div class="intro-copy">
          <p class="section-label">Nuestra esencia</p>

          <div class="section-header">
            <h2>
              Natural no es una moda.
              <em>Es una elección.</em>
            </h2>
          </div>

          <p>
            En Dietética Rabanal buscamos acercarte productos que acompañen
            una forma de alimentarte mejor, con variedad y opciones para
            diferentes necesidades.
          </p>

          <p>
            Desde alimentos naturales y productos saludables hasta
            suplementos, opciones para celíacos, cuidado personal y mucho más.
          </p>

          <p>
            <strong>Te ayudamos a encontrar lo que necesitás.</strong>
          </p>
        </div>

        <div class="quote-box">
          <p>
            Elegir mejor también puede ser disfrutar de cada pequeño cambio.
          </p>
        </div>
      </div>
    </section>

    <section class="section feature-section">
      <div class="image-text">
        <div class="image-frame">
          <img
            src="/images/foto1.jpg" class="zoomable-image"
            alt="Productos naturales de Dietética Rabanal"
            loading="lazy"
          />
        </div>

        <div class="text-content">
          <p class="section-label">Alimentación consciente</p>

          <h2>
            Productos para acompañar
            <em>tu día.</em>
          </h2>

          <p>
            Encontrá alternativas para tus comidas, tus momentos de energía
            y tus hábitos diarios.
          </p>

          <ul>
            <li>Alimentos naturales</li>
            <li>Legumbres y cereales</li>
            <li>Harinas y productos saludables</li>
            <li>Opciones para diferentes estilos de alimentación</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section products-section" id="productos">
      <div class="section-header">
        <p class="section-label">Nuestro universo</p>

        <h2>
          Mucho más que una dietética.
          <em>Todo en un lugar.</em>
        </h2>

        <p>
          Una selección amplia para que encuentres productos naturales,
          saludables y opciones pensadas para vos.
        </p>
      </div>

      <div class="products-grid">
        ${productsHtml}
      </div>
    </section>

    <section class="section olive-section">
      <div class="image-text">
        <div class="text-content">
          <p class="section-label">Lo natural primero</p>

          <h2>
            Elegí ingredientes.
            <em>Elegí calidad.</em>
          </h2>

          <p>
            Descubrí opciones para incorporar a tus comidas y transformar
            pequeños hábitos en grandes cambios.
          </p>

          <ul>
            <li>Productos naturales</li>
            <li>Alternativas saludables</li>
            <li>Ingredientes para cocinar en casa</li>
            <li>Variedad para todos los días</li>
          </ul>
        </div>

        <div class="image-frame">
          <img
            src="/images/foto10.jpg" class="zoomable-image"
            alt="Productos de Dietética Rabanal"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="section feature-section">
      <div class="image-text">
        <div class="image-frame">
          <img
            src="/images/foto20.jpg" class="zoomable-image"
            alt="Productos y alimentos saludables"
            loading="lazy"
          />
        </div>

        <div class="text-content">
          <p class="section-label">Energía y bienestar</p>

          <h2>
            Opciones para acompañar
            <em>tu ritmo.</em>
          </h2>

          <p>
            También contamos con proteínas, suplementos y alternativas para
            quienes buscan complementar su alimentación y entrenamiento.
          </p>

          <ul>
            <li>Proteínas</li>
            <li>Suplementos</li>
            <li>Opciones prácticas</li>
            <li>Productos para diferentes objetivos</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section gallery-section" id="galeria">
      <div class="section-header">
        <p class="section-label">Conocé Rabanal</p>

        <h2>
          Una mirada a nuestros
          <em>productos.</em>
        </h2>

        <p>
          Tocá cualquier imagen para verla en tamaño completo.
        </p>
      </div>

      <div class="gallery-grid">
        ${gallery}
      </div>
    </section>

    <section class="section visit-section" id="visitanos">
      <div class="section-header">
        <p class="section-label">Encontranos</p>

        <h2>
          Vení a conocer
          <em>Dietética Rabanal.</em>
        </h2>

        <p>
          Estamos en Pompeya, CABA. Te esperamos.
        </p>
      </div>

      <div class="visit-grid">
        <div class="visit-card">
          <h2>Visitanos</h2>

          <p>
            <strong>Dirección</strong>
          </p>

          <p>
            Av. Int. Francisco Rabanal 1317<br />
            Pompeya, CABA
          </p>

          <p style="margin-top: 22px;">
            <strong>WhatsApp</strong>
          </p>

          <p>+54 9 11 6274-7838</p>

          <div class="visit-hours">
            <p>
              <span>Lunes a viernes</span>
              <strong>07:00 – 20:00</strong>
            </p>

            <p>
              <span>Sábados</span>
              <strong>08:00 – 20:00</strong>
            </p>

            <p>
              <span>Domingos</span>
              <strong>Cerrado</strong>
            </p>
          </div>

          <a
            class="button button-primary"
            href="https://www.google.com/maps/search/?api=1&query=Av.+Int.+Francisco+Rabanal+1317,+Pompeya,+CABA"
            target="_blank"
            rel="noopener noreferrer"
            style="margin-top: 25px;"
          >
            Cómo llegar
          </a>
        </div>

        <div class="visit-map">
          <iframe
            src="https://www.google.com/maps?q=Av.%20Int.%20Francisco%20Rabanal%201317%2C%20Pompeya%2C%20CABA&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación de Dietética Rabanal"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <div class="final-cta-inner">
        <img
          src="/images/logo.jpg"
          alt="Dietética Rabanal"
          loading="lazy"
        />

        <h2>Elegí natural.<br />Elegí Rabanal.</h2>

        <p>
          Consultanos por WhatsApp y descubrí todo lo que tenemos para vos.
        </p>

        <a
          class="button button-primary"
          href="${whatsappUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <strong>Dietética Rabanal</strong> · Pompeya, CABA
  </footer>

  <a
    class="floating-whatsapp"
    href="${whatsappUrl}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar a Dietética Rabanal por WhatsApp"
  >
    WA
  </a>

  <div class="lightbox" id="lightbox" aria-hidden="true">
    <button
      class="lightbox-close"
      id="lightbox-close"
      type="button"
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <img
      class="lightbox-image"
      id="lightbox-image"
      src=""
      alt="Imagen ampliada"
    />
  </div>
`;

const lightbox = document.querySelector<HTMLDivElement>("#lightbox");
const lightboxImage =
  document.querySelector<HTMLImageElement>("#lightbox-image");
const lightboxClose =
  document.querySelector<HTMLButtonElement>("#lightbox-close");

function closeLightbox() {
  lightbox?.classList.remove("open");
  lightbox?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");

  if (lightboxImage) {
    lightboxImage.src = "";
  }
}

document.querySelectorAll<HTMLButtonElement>(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.dataset.image;

    if (!image || !lightbox || !lightboxImage) return;

    lightboxImage.src = image;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  });
});

document.querySelectorAll<HTMLImageElement>(".zoomable-image").forEach((image) => {
  image.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = image.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
