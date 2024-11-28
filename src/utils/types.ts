export interface CodeExample {
  title: string;
  code: string;
  language?: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
}

export interface AdConfig {
  client: string;
  slots: {
    [key: string]: string;
  };
}