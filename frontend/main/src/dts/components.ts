/* eslint-disable import/prefer-default-export */
import { lazy } from 'react';
import { reactLazyComponentHoc } from '../withLazy';

export const AdminMf = {
  AdminLayout: reactLazyComponentHoc(
    lazy(() => {
      return import('admin/Layout');
    }),
  ),
};
