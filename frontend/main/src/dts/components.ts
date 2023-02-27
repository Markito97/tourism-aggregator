import { lazy } from 'react'
import { reactLazyComponentHoc } from '../withLazy'

export const AdminMf = {
  button: reactLazyComponentHoc(lazy(() => import('admin/Button'))),
}
