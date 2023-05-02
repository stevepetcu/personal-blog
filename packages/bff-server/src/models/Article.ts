enum ImagePlacement {
  LEFT = 'left',
  RIGHT = 'right',
}

interface Header {
  heading: string;
  image?: {
    url: string;
    alt: string;
  };
}

interface Footer {
  content: string;
}

interface Section {
  id: string;
  index: number;
  heading: string;
  content: string;
  image?: {
    url: string;
    alt: string;
    placement?: ImagePlacement;
  };
}

export interface Article {
  id: string;
  index: number;
  author: string;
  title: string;
  description: string;
  summary: string;
  header: Header;
  sections: Section[];
  footer?: Footer;
  version: number;
  uniquePath: string;
  published: boolean;
  publishAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
