/* eslint-disable import/prefer-default-export */
import { lazy } from 'react';
import { reactLazyComponentHoc } from '../withLazy';

export const AdminMf = {
  button: reactLazyComponentHoc(
    lazy(() => {
      return import('admin/Button');
    }),
  ),
};
