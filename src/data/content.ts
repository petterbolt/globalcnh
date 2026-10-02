// Conteúdo da landing page. Edite os textos e imagens aqui, sem tocar no JSX.
//
// ASSETS PROVISÓRIOS: os arquivos marcados com "PLACEHOLDER" foram recortados da imagem
// de referência (baixa resolução). Substitua-os pelos originais em alta resolução
// mantendo o mesmo caminho/nome em /public/images.

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const IMAGES = {
  // Asset fornecido: Lisboa + bandeira portuguesa (fundo do Hero e do CTA final).
  lisboa: "/images/lisboa-bandeira.webp",
  // PLACEHOLDER: pessoa do Hero segurando a CNH (idealmente PNG/WebP com fundo transparente).
  heroPessoa: "/images/hero-pessoa.webp",
  // PLACEHOLDER: composição globo + bandeiras + arquitetura portuguesa.
  about: "/images/about-global.webp",
  // PLACEHOLDER: emblema do logo (idealmente SVG).
  logoEmblema: "/images/logo-emblema.webp",
} as const;

export type BenefitIcon = "shield" | "house" | "users" | "globe";

export const HERO_BENEFITS: { icon: BenefitIcon; lines: [string, string] }[] = [
  { icon: "shield", lines: ["Processo seguro", "e confiável"] },
  { icon: "house", lines: ["Sem precisar", "voltar ao Brasil"] },
  { icon: "users", lines: ["Atendimento", "personalizado"] },
];

export const FINAL_CTA_BENEFITS: { icon: BenefitIcon; lines: [string, string] }[] = [
  { icon: "shield", lines: ["Processo seguro", "e confiável"] },
  { icon: "users", lines: ["Atendimento", "personalizado"] },
  { icon: "globe", lines: ["Brasileiros em Portugal", "e em toda a Europa."] },
];

export type ServiceIcon = "document" | "folder" | "user" | "check";

export const SERVICES: { icon: ServiceIcon; title: string; description: string }[] = [
  {
    icon: "document",
    title: "Orientação completa",
    description: "Te explicamos todos os documentos necessários.",
  },
  {
    icon: "folder",
    title: "Cuidamos da burocracia",
    description: "Nossa equipe resolve toda a parte no Brasil.",
  },
  {
    icon: "user",
    title: "Acompanhamento total",
    description: "Você recebe atualizações em cada etapa.",
  },
  {
    icon: "check",
    title: "CNH renovada",
    description: "Você recebe sua CNH renovada no seu endereço na Europa.",
  },
];

export type StepIcon = "whatsapp" | "document" | "gear" | "card";

export const STEPS: { icon: StepIcon; title: string; description: string }[] = [
  { icon: "whatsapp", title: "Entre em contato", description: "Fale com nossa equipe pelo WhatsApp." },
  { icon: "document", title: "Envie seus dados", description: "Nós orientamos quais documentos enviar." },
  {
    icon: "gear",
    title: "Cuidamos de tudo",
    description: "Nossa equipe faz o processo no Brasil e te mantém informado.",
  },
  { icon: "card", title: "Receba sua CNH", description: "Você recebe sua CNH renovada na Europa." },
];

// Prints reais do grupo de clientes no WhatsApp. Telefones, sobrenomes, fotos de perfil e
// dados das CNHs foram borrados (LGPD). Ao adicionar novos prints, borre esses dados antes.
// Proporção dos prints: 923 × ~1712 px (o carrossel se ajusta à quantidade).
export const GALLERY = [
  { src: "/images/registros/registro-01.webp", alt: "Print do WhatsApp: cliente conta que a CNH já foi atualizada, categoria AB" },
  { src: "/images/registros/registro-02.webp", alt: "Print do WhatsApp: cliente agradece por ter recebido a carteira" },
  { src: "/images/registros/registro-03.webp", alt: "Print do WhatsApp: cliente mostra a CNH renovada e agradece o excelente trabalho" },
  { src: "/images/registros/registro-04.webp", alt: "Print do WhatsApp: cliente mostra a CNH renovada e recomenda o serviço" },
  { src: "/images/registros/registro-05.webp", alt: "Print do WhatsApp: cliente conta que a CNH digital saiu em 35 dias" },
  { src: "/images/registros/registro-06.webp", alt: "Print do WhatsApp: cliente agradece por renovar a CNH dela e a do marido sem voltar ao Brasil" },
];

// Depoimentos de exemplo da referência — substitua por depoimentos reais de clientes.
export const TESTIMONIALS = [
  {
    quote: "Processo muito prático e rápido. Recomendo!",
    name: "Juliana M.",
    location: "Lisboa, Portugal",
    avatar: "/images/depoimentos/juliana.webp", // PLACEHOLDER
  },
  {
    quote: "Não precisei voltar ao Brasil. Excelente atendimento!",
    name: "Rafael S.",
    location: "Porto, Portugal",
    avatar: "/images/depoimentos/rafael.webp", // PLACEHOLDER
  },
  {
    quote: "Equipe atenciosa e profissional. Resolveu tudo sem dor de cabeça.",
    name: "Camila A.",
    location: "Braga, Portugal",
    avatar: "/images/depoimentos/camila.webp", // PLACEHOLDER
  },
];

// TODO: revisar as respostas com a equipe Global antes de publicar.
export const FAQ_ITEMS = [
  {
    question: "Preciso voltar ao Brasil para renovar minha CNH?",
    answer:
      "Não. A Global cuida de toda a parte do processo no Brasil enquanto você continua na Europa. Nossa equipe orienta cada etapa pelo WhatsApp.",
  },
  {
    question: "Quais categorias de CNH podem ser renovadas?",
    answer:
      "Atendemos a renovação das categorias de habilitação brasileira. Fale com um especialista para confirmar as condições do seu caso.",
  },
  {
    question: "Quanto tempo leva o processo?",
    answer:
      "O prazo varia conforme o estado de emissão da sua CNH e a documentação. Logo no primeiro contato informamos a estimativa para o seu caso.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "A lista depende da sua situação. Nossa equipe te envia exatamente o que é necessário e confere tudo antes de dar entrada no processo.",
  },
  {
    question: "Vocês atendem outros países da Europa?",
    answer:
      "Sim. Somos sediados em Portugal e atendemos brasileiros que vivem em toda a Europa.",
  },
];
