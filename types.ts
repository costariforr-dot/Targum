
export type Language = 'he' | 'es';

export interface Content {
  nav: {
    services: string;
    prices: string;
    about: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    accent: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  aboutSection: {
    title: string;
    subtitle: string;
    content: string;
  };
  services: {
    label: string;
    title: string;
    items: {
      icon: string;
      title: string;
      desc: string;
      link: string;
    }[];
  };
  why: {
    title: string;
    points: {
      title: string;
      desc: string;
    }[];
    stats: {
      value: string;
      label: string;
    }[];
  };
  ready: {
    title: string;
    desc: string;
    cta1: string;
    cta2: string;
    responseTime: string;
    phoneLabel: string;
    countryLabel: string;
    docTypeLabel: string;
    directionLabel: string;
    directions: {
      heToEs: string;
      esToHe: string;
    };
    fileUploadLabel: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    contactTitle: string;
    links: string[];
    copy: string;
  };
}
