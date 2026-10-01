import type { SVGProps } from "react";
import { Globe } from "lucide-react";
import type { BenefitIcon, StepIcon } from "@/data/content";

type IconProps = SVGProps<SVGSVGElement>;

const WHATSAPP_PHONE =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347";
const WHATSAPP_RING =
  "m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={WHATSAPP_PHONE + WHATSAPP_RING} />
    </svg>
  );
}

/** Balão verde do WhatsApp (header e etapa 1). */
export function WhatsAppBadge({ outlined = false, ...props }: IconProps & { outlined?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path
        d="M32 5C17.1 5 5 16.9 5 31.6c0 5 1.4 9.7 3.9 13.7L5 59l14.2-3.7c3.9 2.1 8.3 3.3 12.8 3.3 14.9 0 27-11.9 27-26.6S46.9 5 32 5Z"
        fill="#25d366"
        stroke={outlined ? "#111" : "none"}
        strokeWidth={outlined ? 4 : 0}
        strokeLinejoin="round"
      />
      <path d={WHATSAPP_PHONE} fill="#fff" transform="translate(3.4 3.2) scale(2.4)" />
    </svg>
  );
}

function ShieldCheckFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 1.5 3.5 4.8v6.3c0 5.4 3.6 10.3 8.5 11.4 4.9-1.1 8.5-6 8.5-11.4V4.8L12 1.5Z" fill="currentColor" />
      <path d="m8.2 12 2.6 2.6 5-5.2" fill="none" stroke="#0b1b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HouseFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5 1.5 11.6h3V21.5h5.6v-6.2h3.8v6.2h5.6V11.6h3L12 2.5Z" />
    </svg>
  );
}

function UsersFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="6.6" r="3.3" />
      <circle cx="5" cy="8.6" r="2.5" />
      <circle cx="19" cy="8.6" r="2.5" />
      <path d="M6.3 20.5c0-3.6 2.6-6.5 5.7-6.5s5.7 2.9 5.7 6.5Z" />
      <path d="M.6 19.3c0-2.8 1.9-5 4.4-5 1 0 1.9.3 2.6.9a8.4 8.4 0 0 0-2.4 4.1Z" />
      <path d="M23.4 19.3c0-2.8-1.9-5-4.4-5-1 0-1.9.3-2.6.9a8.4 8.4 0 0 1 2.4 4.1Z" />
    </svg>
  );
}

export function BenefitGlyph({ icon, ...props }: IconProps & { icon: BenefitIcon }) {
  switch (icon) {
    case "shield":
      return <ShieldCheckFilled {...props} />;
    case "house":
      return <HouseFilled {...props} />;
    case "users":
      return <UsersFilled {...props} />;
    case "globe":
      return <Globe strokeWidth={1.6} {...(props as object)} />;
  }
}

function DocumentFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path d="M14 4h26l14 14v40a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" fill="#111" />
      <path d="M40 4v11a3 3 0 0 0 3 3h11Z" fill="#555" />
      <rect x="18" y="14" width="14" height="8" rx="1" fill="#16c768" />
      <path d="M18 30h28M18 37h28M18 44h28M18 51h20" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

function GearFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path
        fill="#111"
        fillRule="evenodd"
        d="M27.4 3h9.2l1.5 7.6a22 22 0 0 1 5.6 2.3l6.4-4.3 6.5 6.5-4.3 6.4a22 22 0 0 1 2.3 5.6l7.6 1.5v9.2l-7.6 1.5a22 22 0 0 1-2.3 5.6l4.3 6.4-6.5 6.5-6.4-4.3a22 22 0 0 1-5.6 2.3L36.6 61h-9.2l-1.5-7.6a22 22 0 0 1-5.6-2.3l-6.4 4.3-6.5-6.5 4.3-6.4a22 22 0 0 1-2.3-5.6L1.8 35.4v-9.2l7.6-1.5a22 22 0 0 1 2.3-5.6l-4.3-6.4 6.5-6.5 6.4 4.3a22 22 0 0 1 5.6-2.3ZM32 21a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z"
      />
    </svg>
  );
}

function CardFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 80 64" aria-hidden="true" {...props}>
      <rect x="3" y="8" width="74" height="48" rx="6" fill="#111" />
      <rect x="3" y="17" width="74" height="7" fill="#fff" />
      <path d="M12 36h26M12 44h18" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" />
      <rect x="56" y="32" width="12" height="15" rx="2.5" fill="#f2c468" />
      <path d="M62 32v15M56 39.5h12" stroke="#b98a2e" strokeWidth="1.2" />
    </svg>
  );
}

export function StepGlyph({ icon, ...props }: IconProps & { icon: StepIcon }) {
  switch (icon) {
    case "whatsapp":
      return <WhatsAppBadge outlined {...props} />;
    case "document":
      return <DocumentFilled {...props} />;
    case "gear":
      return <GearFilled {...props} />;
    case "card":
      return <CardFilled {...props} />;
  }
}
