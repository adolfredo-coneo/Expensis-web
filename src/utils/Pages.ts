import { Page } from '../models/Pages';

const Pages: Page[] = [
  {
    code: 'dashboard',
    title: 'Dashboard',
    breadcrumb: [],
  },
  {
    code: 'accounts',
    title: 'Accounts',
    breadcrumb: [],
  },
  {
    code: 'create-account',
    title: 'Create Account',
    breadcrumb: ['Accounts'],
  },
  {
    code: 'edit-account',
    title: 'Edit Account',
    breadcrumb: ['Accounts'],
  },
  {
    code: 'obligations',
    title: 'Obligations',
    breadcrumb: [],
  },
];

export const getPage = (pageCode: string): Page => {
  const Page = Pages.find((page) => page.code === pageCode);
  if (Page) return Page;
  return {
    code: '',
    title: 'Not Found',
    breadcrumb: [],
  };
};
