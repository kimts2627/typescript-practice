type PageInfo = {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'hi' },
  about: { title: 'no' },
  contact: { title: 'yesy' }
}