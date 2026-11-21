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

const galleryImages = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
  "/images/foto7.jpg",
  "/images/foto8.jpg",
  "/images/foto9.jpg",
  "/images/foto10.jpg",
  "/images/foto11.jpg",
  "/images/foto12.jpg",
  "/images/foto13.jpg",
  "/images/foto14.jpg",
  "/images/foto15.jpg",
  "/images/foto16.jpg",
  "/images/foto17.jpg",
  "/images/foto18.jpg",
  "/images/foto19.jpg",
  "/images/foto20.jpg",
  "/images/foto21.jpg",
  "/images/foto22.jpg",
  "/images/foto23.jpg",
  "/images/foto24.jpg",
  "/images/foto25.jpg",
  "/images/foto26.jpg",
  "/images/foto27.jpg",
  "/images/foto28.jpg",
  "/images/foto29.jpg",
  "/images/foto30.jpg",
  "/images/foto31.jpg",
  "/images/foto32.jpg",
  "/images/foto33.jpg",
  "/images/IMG-20261008-WA0041.jpg",
  "/images/IMG-20261008-WA0042.jpg",
  "/images/IMG-20261008-WA0043.jpg",
  "/images/IMG-20261008-WA0044.jpg",
  "/images/IMG-20261008-WA0045.jpg",
  "/images/IMG-20261008-WA0046.jpg",
  "/images/IMG-20261008-WA0047.jpg",
  "/images/IMG-20261008-WA0048.jpg",
  "/images/IMG-20261008-WA0049.jpg",
  "/images/IMG-20261008-WA0050.jpg",
  "/images/IMG-20261008-WA0051.jpg",
  "/images/IMG-20261008-WA0052.jpg",
  "/images/IMG-20261008-WA0053.jpg",
  "/images/IMG-20261008-WA0054.jpg",
  "/images/IMG-20261008-WA0055.jpg",
  "/images/IMG-20261008-WA0056.jpg",
  "/images/IMG-20261008-WA0057.jpg",
  "/images/IMG-20261008-WA0058.jpg",
  "/images/IMG-20261008-WA0059.jpg",
  "/images/IMG-20261008-WA0060.jpg",
  "/images/IMG-20261008-WA0061.jpg",
  "/images/IMG-20261008-WA0062.jpg",
  "/images/IMG-20261008-WA0063.jpg",
  "/images/IMG-20261008-WA0064.jpg",
  "/images/IMG-20261008-WA0065.jpg",
  "/images/IMG-20261008-WA0066.jpg",
  "/images/IMG-20261008-WA0067.jpg",
  "/images/IMG-20261008-WA0068.jpg",
  "/images/IMG-20261008-WA0069.jpg",
  "/images/IMG-20261008-WA0070.jpg",
  "/images/IMG-20261008-WA0071.jpg",
  "/images/IMG-20261008-WA0072.jpg",
  "/images/IMG-20261008-WA0073.jpg",
  "/images/IMG-20261008-WA0074.jpg",
  "/images/IMG-20261008-WA0075.jpg",
  "/images/IMG-20261008-WA0076.jpg",
  "/images/IMG-20261008-WA0077.jpg",
  "/images/IMG-20261008-WA0078.jpg",
  "/images/IMG-20261008-WA0079.jpg",
  "/images/IMG-20261008-WA0080.jpg",
  "/images/IMG-20261008-WA0081.jpg",
  "/images/IMG-20261008-WA0082.jpg",
  "/images/IMG-20261008-WA0083.jpg",
  "/images/IMG-20261008-WA0084.jpg",
  "/images/IMG-20261008-WA0085.jpg",
  "/images/IMG-20261008-WA0086.jpg",
  "/images/IMG-20261008-WA0087.jpg",
  "/images/IMG-20261008-WA0088.jpg",
  "/images/IMG-20261008-WA0089.jpg",
  "/images/IMG-20261008-WA0090.jpg",
  "/images/IMG-20261008-WA0091.jpg",
  "/images/IMG-20261008-WA0092.jpg",
  "/images/IMG-20261008-WA0093.jpg",
  "/images/IMG-20261008-WA0094.jpg",
  "/images/IMG-20261008-WA0095.jpg",
  "/images/IMG-20261008-WA0096.jpg",
  "/images/IMG-20261008-WA0097.jpg",
  "/images/IMG-20261008-WA0098.jpg",
  "/images/IMG-20261008-WA0099.jpg",
  "/images/IMG-20261008-WA0100.jpg",
  "/images/IMG-20261008-WA0101.jpg",
  "/images/IMG-20261008-WA0102.jpg",
  "/images/IMG-20261008-WA0103.jpg",
  "/images/IMG-20261008-WA0104.jpg",
  "/images/IMG-20261008-WA0105.jpg",
  "/images/IMG-20261008-WA0106.jpg",
  "/images/IMG-20261008-WA0107.jpg",
  "/images/IMG-20261008-WA0108.jpg",
  "/images/IMG-20261008-WA0109.jpg",
  "/images/IMG-20261008-WA0110.jpg",
  "/images/IMG-20261008-WA0111.jpg",
  "/images/IMG-20261009-WA0039.jpg",
  "/images/IMG-20261009-WA0040.jpg",
  "/images/IMG-20261009-WA0041.jpg",
  "/images/IMG-20261009-WA0042.jpg",
  "/images/IMG-20261009-WA0043.jpg",
  "/images/IMG-20261009-WA0044.jpg",
  "/images/IMG-20261009-WA0045.jpg",
  "/images/IMG-20261009-WA0046.jpg",
  "/images/IMG-20261009-WA0047.jpg",
  "/images/IMG-20261009-WA0048.jpg",
  "/images/IMG-20261009-WA0049.jpg",
  "/images/IMG-20261009-WA0050.jpg",
  "/images/IMG-20261009-WA0051.jpg",
  "/images/IMG-20261009-WA0052.jpg",
  "/images/IMG-20261009-WA0053.jpg",
  "/images/IMG-20261009-WA0054.jpg",
  "/images/IMG-20261009-WA0055.jpg",
  "/images/IMG-20261009-WA0056.jpg",
  "/images/IMG-20261009-WA0057.jpg",
  "/images/IMG-20261009-WA0058.jpg",
  "/images/IMG-20261009-WA0059.jpg",
  "/images/IMG-20261009-WA0060.jpg",
  "/images/IMG-20261009-WA0061.jpg",
  "/images/IMG-20261009-WA0062.jpg",
  "/images/IMG-20261009-WA0063.jpg",
  "/images/IMG-20261009-WA0064.jpg",
  "/images/IMG-20261009-WA0065.jpg",
  "/images/IMG-20261009-WA0066.jpg",
  "/images/IMG-20261009-WA0067.jpg",
  "/images/IMG-20261009-WA0068.jpg",
  "/images/IMG-20261009-WA0069.jpg",
  "/images/IMG-20261009-WA0070.jpg",
  "/images/IMG-20261009-WA0071.jpg",
  "/images/IMG-20261009-WA0072.jpg",
  "/images/IMG-20261009-WA0073.jpg",
  "/images/IMG-20261009-WA0074.jpg",
  "/images/IMG-20261009-WA0075.jpg",
  "/images/IMG-20261009-WA0076.jpg",
  "/images/IMG-20261009-WA0077.jpg",
  "/images/IMG-20261010-WA0011.jpg",
  "/images/IMG-20261010-WA0012.jpg",
  "/images/IMG-20261010-WA0013.jpg",
  "/images/IMG-20261010-WA0014.jpg",
  "/images/IMG-20261010-WA0015.jpg",
  "/images/IMG-20261010-WA0016.jpg",
  "/images/IMG-20261010-WA0017.jpg",
  "/images/IMG-20261010-WA0018.jpg",
  "/images/IMG-20261010-WA0019.jpg",
  "/images/IMG-20261010-WA0020.jpg",
  "/images/IMG-20261010-WA0021.jpg",
  "/images/IMG-20261010-WA0022.jpg",
  "/images/IMG-20261010-WA0023.jpg",
  "/images/IMG-20261010-WA0024.jpg",
  "/images/IMG-20261010-WA0025.jpg",
  "/images/IMG-20261010-WA0026.jpg",
  "/images/IMG-20261010-WA0027.jpg",
  "/images/IMG-20261010-WA0028.jpg",
  "/images/IMG-20261010-WA0029.jpg",
  "/images/IMG-20261010-WA0030.jpg",
  "/images/IMG-20261010-WA0031.jpg",
  "/images/IMG-20261010-WA0032.jpg",
  "/images/IMG-20261010-WA0033.jpg",
  "/images/IMG-20261010-WA0034.jpg",
  "/images/IMG-20261010-WA0035.jpg",
  "/images/IMG-20261010-WA0036.jpg",
  "/images/IMG-20261010-WA0037.jpg",
  "/images/IMG-20261010-WA0038.jpg",
  "/images/IMG-20261010-WA0039.jpg",
  "/images/IMG-20261010-WA0040.jpg",
  "/images/IMG-20261010-WA0041.jpg",
  "/images/IMG-20261010-WA0042.jpg",
  "/images/IMG-20261010-WA0043.jpg",
  "/images/IMG-20261010-WA0044.jpg",
  "/images/IMG-20261010-WA0045.jpg",
  "/images/IMG-20261010-WA0046.jpg",
  "/images/IMG-20261010-WA0047.jpg",
  "/images/IMG-20261010-WA0048.jpg",
  "/images/IMG-20261010-WA0049.jpg",
  "/images/IMG-20261016-WA0018.jpg",
  "/images/IMG-20261016-WA0019.jpg",
  "/images/IMG-20261016-WA0020.jpg",
  "/images/IMG-20261016-WA0021.jpg",
  "/images/IMG-20261016-WA0022.jpg",
  "/images/IMG-20261016-WA0023.jpg",
  "/images/IMG-20261016-WA0024.jpg",
  "/images/IMG-20261016-WA0025.jpg",
  "/images/IMG-20261016-WA0026.jpg",
  "/images/IMG-20261016-WA0027.jpg",
  "/images/IMG-20261016-WA0028.jpg",
  "/images/IMG-20261016-WA0029.jpg",
  "/images/IMG-20261016-WA0030.jpg",
  "/images/IMG-20261016-WA0031.jpg",
  "/images/IMG-20261016-WA0032.jpg",
  "/images/IMG-20261016-WA0033.jpg",
  "/images/IMG-20261016-WA0034.jpg",
  "/images/IMG-20261016-WA0035.jpg",
  "/images/IMG-20261016-WA0036.jpg",
  "/images/IMG-20261016-WA0037.jpg",
  "/images/IMG-20261016-WA0038.jpg",
  "/images/IMG-20261016-WA0039.jpg",
  "/images/IMG-20261016-WA0040.jpg",
  "/images/IMG-20261016-WA0041.jpg",
  "/images/IMG-20261016-WA0042.jpg",
  "/images/IMG-20261016-WA0043.jpg",
  "/images/IMG-20261016-WA0044.jpg",
  "/images/IMG-20261016-WA0045.jpg",
  "/images/IMG-20261016-WA0046.jpg",
  "/images/IMG-20261016-WA0047.jpg",
  "/images/IMG-20261016-WA0048.jpg",
  "/images/IMG-20261016-WA0049.jpg",
  "/images/IMG-20261016-WA0050.jpg",
  "/images/IMG-20261016-WA0051.jpg",
  "/images/IMG-20261016-WA0052.jpg",
  "/images/IMG-20261016-WA0053.jpg",
  "/images/IMG-20261016-WA0054.jpg",
  "/images/IMG-20261016-WA0055.jpg",
  "/images/IMG-20261016-WA0056.jpg",
  "/images/IMG-20261016-WA0057.jpg",
  "/images/IMG-20261016-WA0058.jpg",
  "/images/IMG-20261016-WA0059.jpg",
  "/images/IMG-20261016-WA0060.jpg",
  "/images/IMG-20261016-WA0061.jpg",
  "/images/IMG-20261016-WA0062.jpg",
  "/images/IMG-20261016-WA0063.jpg",
  "/images/IMG-20261016-WA0064.jpg",
  "/images/IMG-20261016-WA0065.jpg",
  "/images/IMG-20261016-WA0066.jpg",
  "/images/IMG-20261016-WA0067.jpg",
  "/images/IMG-20261016-WA0068.jpg",
  "/images/IMG-20261016-WA0069.jpg",
  "/images/IMG-20261016-WA0070.jpg",
  "/images/IMG-20261016-WA0071.jpg",
  "/images/IMG-20261016-WA0072.jpg",
  "/images/IMG-20261016-WA0073.jpg",
  "/images/IMG-20261016-WA0074.jpg",
  "/images/IMG-20261016-WA0075.jpg",
  "/images/IMG-20261016-WA0076.jpg",
  "/images/IMG-20261016-WA0077.jpg",
  "/images/IMG-20261016-WA0078.jpg",
  "/images/IMG-20261016-WA0079.jpg",
  "/images/IMG-20261016-WA0080.jpg",
  "/images/IMG-20261016-WA0081.jpg",
  "/images/IMG-20261016-WA0090.jpg",
  "/images/IMG-20261016-WA0091.jpg",
  "/images/IMG-20261016-WA0092.jpg",
  "/images/IMG-20261016-WA0093.jpg",
  "/images/IMG-20261016-WA0094.jpg",
  "/images/IMG-20261016-WA0095.jpg",
  "/images/IMG-20261016-WA0096.jpg",
  "/images/IMG-20261016-WA0097.jpg",
  "/images/IMG-20261016-WA0098.jpg",
  "/images/IMG-20261016-WA0099.jpg",
  "/images/IMG-20261016-WA0100.jpg",
  "/images/IMG-20261016-WA0101.jpg",
  "/images/IMG-20261016-WA0102.jpg",
  "/images/IMG-20261016-WA0103.jpg",
  "/images/IMG-20261016-WA0104.jpg",
  "/images/IMG-20261016-WA0105.jpg",
  "/images/IMG-20261112-WA0006.jpg",
  "/images/IMG-20261112-WA0007.jpg",
  "/images/IMG-20261112-WA0008.jpg",
  "/images/IMG-20261112-WA0009.jpg",
  "/images/IMG-20261112-WA0010.jpg",
  "/images/IMG-20261112-WA0011.jpg",
  "/images/IMG-20261112-WA0012.jpg",
  "/images/IMG-20261112-WA0013.jpg",
  "/images/IMG-20261112-WA0014.jpg",
  "/images/IMG-20261112-WA0015.jpg",
  "/images/IMG-20261112-WA0016.jpg",
  "/images/IMG-20261112-WA0017.jpg",
  "/images/IMG-20261112-WA0018.jpg",
  "/images/IMG-20261112-WA0019.jpg",
  "/images/IMG-20261112-WA0020.jpg",
  "/images/IMG-20261112-WA0021.jpg",
  "/images/IMG-20261112-WA0022.jpg",
  "/images/IMG-20261112-WA0023.jpg",
  "/images/IMG-20261112-WA0024.jpg",
  "/images/IMG-20261112-WA0025.jpg",
  "/images/IMG-20261112-WA0026.jpg",
  "/images/IMG-20261112-WA0027.jpg",
  "/images/IMG-20261112-WA0028.jpg",
  "/images/IMG-20261112-WA0029.jpg",
  "/images/IMG-20261112-WA0030.jpg",
  "/images/IMG-20261112-WA0031.jpg",
  "/images/IMG-20261112-WA0032.jpg",
  "/images/IMG-20261112-WA0033.jpg",
  "/images/IMG-20261112-WA0034.jpg",
  "/images/IMG-20261112-WA0035.jpg",
  "/images/IMG-20261112-WA0036.jpg",
  "/images/IMG-20261112-WA0037.jpg",
  "/images/IMG-20261112-WA0038.jpg",
  "/images/IMG-20261112-WA0039.jpg",
  "/images/IMG-20261112-WA0040.jpg",
  "/images/IMG-20261112-WA0041.jpg",
  "/images/IMG-20261112-WA0042.jpg",
  "/images/IMG-20261112-WA0043.jpg",
  "/images/IMG-20261112-WA0044.jpg",
  "/images/IMG-20261112-WA0045.jpg",
  "/images/IMG-20261112-WA0046.jpg",
  "/images/IMG-20261112-WA0047.jpg",
  "/images/IMG-20261112-WA0048.jpg",
  "/images/IMG-20261120-WA0018.jpg",
  "/images/IMG-20261120-WA0019.jpg",
  "/images/IMG-20261120-WA0020.jpg",
  "/images/IMG-20261120-WA0021.jpg",
  "/images/IMG-20261120-WA0023.jpg",
  "/images/IMG-20261120-WA0024.jpg",
  "/images/IMG-20261120-WA0026.jpg",
  "/images/IMG-20261120-WA0027.jpg",
  "/images/IMG-20261120-WA0028.jpg",
  "/images/IMG-20261120-WA0029.jpg",
  "/images/IMG-20261120-WA0030.jpg",
  "/images/IMG-20261120-WA0031.jpg",
  "/images/IMG-20261120-WA0032.jpg",
  "/images/IMG-20261120-WA0033.jpg",
  "/images/IMG-20261120-WA0034.jpg",
  "/images/IMG-20261120-WA0035.jpg",
  "/images/IMG-20261120-WA0036.jpg",
  "/images/IMG-20261120-WA0037.jpg",
  "/images/IMG-20261120-WA0038.jpg",
  "/images/IMG-20261120-WA0039.jpg",
  "/images/IMG-20261120-WA0040.jpg",
  "/images/IMG-20261120-WA0041.jpg",
  "/images/IMG-20261120-WA0042.jpg",
  "/images/IMG-20261120-WA0043.jpg",
  "/images/IMG-20261120-WA0044.jpg",
  "/images/IMG-20261120-WA0045.jpg",
  "/images/IMG-20261120-WA0046.jpg",
  "/images/IMG-20261120-WA0047.jpg",
  "/images/IMG-20261120-WA0048.jpg",
  "/images/IMG-20261120-WA0049.jpg",
  "/images/IMG-20261120-WA0050.jpg",
  "/images/IMG-20261120-WA0051.jpg",
  "/images/IMG-20261120-WA0052.jpg",
  "/images/IMG-20261120-WA0053.jpg",
  "/images/IMG-20261120-WA0054.jpg",
  "/images/IMG-20261120-WA0055.jpg",
  "/images/IMG-20261120-WA0056.jpg",
  "/images/IMG-20261120-WA0057.jpg",
  "/images/IMG-20261120-WA0058.jpg",
  "/images/IMG-20261120-WA0059.jpg",
  "/images/IMG-20261120-WA0060.jpg",
  "/images/IMG-20261120-WA0061.jpg",
  "/images/IMG-20261120-WA0062.jpg",
  "/images/IMG-20261120-WA0063.jpg",
  "/images/IMG-20261120-WA0064.jpg",
  "/images/IMG-20261120-WA0065.jpg",
  "/images/IMG-20261120-WA0066.jpg",
  "/images/IMG-20261120-WA0067.jpg",
  "/images/IMG-20261120-WA0068.jpg",
  "/images/IMG-20261120-WA0069.jpg",
  "/images/IMG-20261120-WA0070.jpg",
  "/images/IMG-20261120-WA0071.jpg",
  "/images/IMG-20261120-WA0072.jpg",
  "/images/IMG-20261120-WA0073.jpg",
  "/images/IMG-20261120-WA0074.jpg",
  "/images/IMG-20261120-WA0075.jpg",
  "/images/IMG-20261120-WA0076.jpg",
  "/images/IMG-20261120-WA0077.jpg",
  "/images/IMG-20261120-WA0078.jpg",
  "/images/IMG-20261120-WA0079.jpg",
  "/images/IMG-20261120-WA0080.jpg",
  "/images/IMG-20261120-WA0081.jpg",
  "/images/IMG-20261120-WA0082.jpg",
  "/images/logo.jpg"
];
const gallery = galleryImages.map((imagePath) => `
    <button class="gallery-item" type="button" data-image="${imagePath}">
      <img src="${imagePath}" alt="Productos de Dietética Rabanal" loading="lazy" />
    </button>
  `).join("");


const newMultivitamins = Array.from({ length: 39 }, (_, index) => {
  const number = String(index + 11).padStart(4, "0");
  const imagePath = `/images/IMG-20261010-WA${number}.jpg`;
  return `
    <article class="multivitamin-card">
      <button class="multivitamin-image" type="button" data-image="${imagePath}" aria-label="Ver multivitamínico en tamaño completo">
        <img src="${imagePath}" alt="Multivitamínico Dietética Rabanal" loading="lazy" />
      </button>
      <div class="multivitamin-info">
        <span>Multivitamínico</span>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Consultar</a>
      </div>
    </article>
  `;
}).join("");

const multivitamins = Array.from({ length: 110 }, (_, index) => {
  const date = index < 71 ? "20261008" : "20261009";
  const number = String(index < 71 ? index + 41 : index - 71 + 39).padStart(4, "0");
  const imagePath = `/images/IMG-${date}-WA${number}.jpg`;

  return `
    <article class="multivitamin-card">
      <button
        class="multivitamin-image"
        type="button"
        data-image="${imagePath}"
        aria-label="Ver multivitamínico en tamaño completo"
      >
        <img
          src="${imagePath}"
          alt="Multivitamínico Dietética Rabanal"
          loading="lazy"
        />
      </button>

      <div class="multivitamin-info">
        <span>Multivitamínico</span>
        <a
          href="${whatsappUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar
        </a>
      </div>
    </article>
  `;
}).join("");

const oct16Numbers = [
  ...Array.from({ length: 64 }, (_, i) => i + 18),
  ...Array.from({ length: 16 }, (_, i) => i + 90),
];

const oct16Multivitamins = oct16Numbers.map((number) => {
  const imagePath = `/images/IMG-20261016-WA${String(number).padStart(4, "0")}.jpg`;

  return `
    <article class="multivitamin-card">
      <button
        class="multivitamin-image"
        type="button"
        data-image="${imagePath}"
        aria-label="Ver suplemento en tamaño completo"
      >
        <img
          src="${imagePath}"
          alt="Suplemento Dietética Rabanal"
          loading="lazy"
        />
      </button>
      <div class="multivitamin-info">
        <span>Suplemento</span>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
          Consultar
        </a>
      </div>
    </article>
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
        <a href="#multivitaminicos">Multivitamínicos</a>
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


    <section class="section multivitamin-section" id="multivitaminicos">
      <div class="section-header">
        <p class="section-label">Nueva selección</p>

        <h2>
          Multivitamínicos.
          <em>149 opciones para descubrir.</em>
        </h2>

        <p>
          Conocé nuestra selección de multivitamínicos. Tocá cualquier producto
          para verlo en detalle y consultanos por WhatsApp.
        </p>
      </div>

      <div class="multivitamin-feature">
        <div class="multivitamin-feature-images">
          <button class="multivitamin-image" type="button"
            data-image="/images/IMG-20261008-WA0041.jpg">
            <img src="/images/IMG-20261008-WA0041.jpg"
              alt="Multivitamínico Dietética Rabanal" loading="lazy" />
          </button>

          <button class="multivitamin-image" type="button"
            data-image="/images/IMG-20261008-WA0042.jpg">
            <img src="/images/IMG-20261008-WA0042.jpg"
              alt="Multivitamínico Dietética Rabanal" loading="lazy" />
          </button>

          <button class="multivitamin-image" type="button"
            data-image="/images/IMG-20261008-WA0043.jpg">
            <img src="/images/IMG-20261008-WA0043.jpg"
              alt="Multivitamínico Dietética Rabanal" loading="lazy" />
          </button>
        </div>

        <div class="multivitamin-feature-copy">
          <span class="multivitamin-count">149 PRODUCTOS</span>

          <h3>Una selección completa de multivitamínicos.</h3>

          <p>
            Explorá nuestra colección y consultanos directamente para conocer
            disponibilidad, marcas y precios.
          </p>

          <a class="button button-primary" href="#catalogo-multivitaminicos">
            Ver los 149 productos
          </a>
        </div>
      </div>
    </section>

    <section class="section multivitamin-catalog-section"
      id="catalogo-multivitaminicos">

      <div class="section-header">
        <p class="section-label">Catálogo</p>

        <h2>
          Todos los
          <em>multivitamínicos.</em>
        </h2>

        <p>
          Seleccioná una imagen para verla en tamaño completo.
        </p>
      </div>

      <div class="multivitamin-grid">
        ${multivitamins}${newMultivitamins}${oct16Multivitamins}
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



document
  .querySelectorAll<HTMLButtonElement>(".multivitamin-image")
  .forEach((item) => {
    item.addEventListener("click", () => {
      const image = item.dataset.image;

      if (!image || !lightbox || !lightboxImage) return;

      lightboxImage.src = image;
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
