export interface FooterData {
  brand: {
    name: string;
    logo: string;
    languageSelector: string[];
  };
  subscribe: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
  menu: {
    title: string;
    url: string;
  }[];
  bottomLinks: {
    title: string;
    url: string;
  }[];
  socials: {
    platform: string;
    icon: string;
    url: string;
  }[];
  copyright: string;
}
