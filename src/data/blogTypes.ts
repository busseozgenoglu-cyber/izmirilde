// ===================== BLOG TİPLERİ =====================

export interface BlogSection {
  heading: string;
  content: string;
  image?: string;
  list?: string[];
  tip?: string;
  quote?: string;
}

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  author: string;
  publishDate: string;
  displayDate: string;
  tags: string[];
  intro: string;
  sections: BlogSection[];
  faqs?: BlogFAQ[];
  relatedIds?: string[];
}
