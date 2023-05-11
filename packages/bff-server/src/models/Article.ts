export interface Header {
  heading: string;
  image?: {
    url: string;
    thumbnailUrl: string;
    alt: string;
  };
}

interface Footer {
  content: string;
}

interface Section {
  id: string;
  index: number;
  header: {
    heading: string;
    anchor: string;
  };
  content: string;
  image?: {
    url: string;
    alt: string;
    placement?: 'left' | 'right';
  };
}

export interface ArticleSummary {
  id: string;
  author: string;
  summary: string;
  header: Header;
  uniqueSlug: string;
  publishAt: number;
  createdAt: number;
  updatedAt: number;
}

export interface Article {
  id: string;
  author: string;
  title: string;
  description: string;
  summary: string;
  header: Header;
  sections: Section[];
  footer?: Footer;
  version: number;
  uniqueSlug: string;
  published: boolean;
  publishAt: number;
  createdAt: number;
  updatedAt: number;
}
