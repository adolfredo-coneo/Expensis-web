import { Page } from '../models/Pages';

const Pages: Page[] = [
  {
    code: 'dashboard',
    title: 'Dashboard',
  },
  {
    code: 'accounts',
    title: 'Accounts',
  },
  {
    code: 'create-account',
    title: 'Create Account',
  },
  {
    code: 'edit-account',
    title: 'Edit Account',
  },
  {
    code: 'obligations',
    title: 'Obligations',
  },
];

export const getPage = (pageCode: string): Page => {
  const Page = Pages.find((page) => page.code === pageCode);
  if (Page) return Page;
  return {
    code: '',
    title: 'Not Found',
  };
};
