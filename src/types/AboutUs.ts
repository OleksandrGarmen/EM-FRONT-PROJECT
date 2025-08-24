interface Section {
  section: string;
}

interface HeroSection extends Section {
  section: "hero";
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor: string;
}

interface HistorySection extends Section {
  section: "history";
  title: string;
  content: string;
}

interface ValuesSection extends Section {
  section: "values";
  title: string;
  content: string;
}

interface SpecialSection extends Section {
  section: "special";
  title: string;
  items: string[];
}

interface CallToActionSection extends Section {
  section: "callToAction";
  title: string;
  content: string;
}
