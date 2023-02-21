import { Lakes } from '@components/Lakes/Lakes'
import { Titles } from '@components/Titles/Titles'
import { ACTIVITIES_TITLES } from '../app.consts'

export const Home = (): JSX.Element => {
  return (
    <>
      <Titles titles={ACTIVITIES_TITLES} />
      <Lakes />
    </>
  )
}
