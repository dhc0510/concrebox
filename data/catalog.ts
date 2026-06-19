export type CatalogImage = {
  src: string;
  label: "Fachada" | "Interior" | "Plano";
};

export type CatalogModel = {
  id: number;
  name: string;
  area: string;
  eyebrow: string;
  images: CatalogImage[];
  features: string[];
  description: string;
  bedrooms: number;
  hasTerrace: boolean;
  compact: boolean;
};

export const catalogModels: CatalogModel[] = [
  {
    id: 1,
    name: "Casa Bangkok",
    area: "44 m²",
    eyebrow: "Compacta",
    images: [
      { src: "/images/catalog/bangkok-fachada.png", label: "Fachada" },
      { src: "/images/catalog/bangkok-plano.png", label: "Plano" },
    ],
    features: ["1 dormitorio", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Casa compacta, elegante y funcional, ideal para quienes buscan una vivienda acogedora, moderna y conectada con la naturaleza.",
    bedrooms: 1,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 2,
    name: "Casa Singapur",
    area: "44 m²",
    eyebrow: "Eficiente",
    images: [
      { src: "/images/catalog/singapur-fachada.png", label: "Fachada" },
      { src: "/images/catalog/singapur-plano.png", label: "Plano" },
    ],
    features: ["1 dormitorio", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Modelo compacto y bien distribuido, pensado para casas vacacionales, parejas o familias pequeñas que buscan eficiencia y comodidad.",
    bedrooms: 1,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 3,
    name: "Casa New York",
    area: "67 m²",
    eyebrow: "Práctica",
    images: [
      { src: "/images/catalog/new-york-fachada.png", label: "Fachada" },
      { src: "/images/catalog/new-york-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Cocina", "Terraza"],
    description:
      "Modelo práctico y moderno, con dos dormitorios y una terraza frontal amplia, ideal como residencia principal o casa vacacional.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 4,
    name: "Casa Dubái",
    area: "106 m²",
    eyebrow: "Familiar",
    images: [
      { src: "/images/catalog/dubai-fachada.png", label: "Fachada" },
      { src: "/images/catalog/dubai-plano.png", label: "Plano" },
    ],
    features: ["3 dormitorios", "2 baños", "Sala", "Cocina", "Cochera"],
    description:
      "Casa familiar amplia, sofisticada y funcional, con espacios bien distribuidos, cochera integrada y diseño residencial moderno.",
    bedrooms: 3,
    hasTerrace: false,
    compact: false,
  },
  {
    id: 5,
    name: "Casa Estambul",
    area: "119 m²",
    eyebrow: "Amplia",
    images: [
      { src: "/images/catalog/estambul-fachada.png", label: "Fachada" },
      { src: "/images/catalog/estambul-plano.png", label: "Plano" },
    ],
    features: ["3 dormitorios", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Modelo amplio con techo inclinado, espacios abiertos y terraza generosa, ideal para entornos naturales o proyectos familiares.",
    bedrooms: 3,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 6,
    name: "Casa París",
    area: "122 m²",
    eyebrow: "Sofisticada",
    images: [
      { src: "/images/catalog/paris-fachada.png", label: "Fachada" },
      { src: "/images/catalog/paris-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Cocina", "Terraza"],
    description:
      "Casa moderna y sofisticada, con distribución amplia, ventanales y espacios pensados para descanso, confort y conexión con el exterior.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 7,
    name: "Casa Londres",
    area: "132 m²",
    eyebrow: "Contemporánea",
    images: [
      { src: "/images/catalog/londres-fachada.png", label: "Fachada" },
      { src: "/images/catalog/londres-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Modelo contemporáneo con grandes ventanales, estructura elegante y terraza frontal, ideal para residencia principal o casa de descanso.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 8,
    name: "Casa Tokio",
    area: "99.23 m²",
    eyebrow: "Funcional",
    images: [
      { src: "/images/catalog/tokio-fachada.png", label: "Fachada" },
      { src: "/images/catalog/tokio-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Cocina", "Terraza"],
    description:
      "Casa de diseño contemporáneo, funcional y conectada con el entorno, ideal para quienes buscan amplitud, vistas y comodidad.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 9,
    name: "Casa Hawái",
    area: "72 m² + 12 m² de piscina",
    eyebrow: "Tropical",
    images: [
      { src: "/images/catalog/hawai-fachada.png", label: "Fachada" },
      { src: "/images/catalog/hawai-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "2 baños", "Cocina", "Terraza y piscina"],
    description:
      "Modelo tropical con terraza frontal y piscina privada, ideal para descanso, inversión vacacional o residencia en clima cálido.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
];
