import { Lakes } from '@components/Lakes/Lakes'
import { Titles } from '@components/Titles/Titles'

export const ACTIVITIES_TITLES = {
  title: 'Lakes for Everyoune',
  subTitle: 'Beauties',
  className: 'Content',
}

const Home = (): JSX.Element => {
  return (
    <>
      <Titles titles={ACTIVITIES_TITLES} />
      <Lakes />
    </>
  )
}

export default Home
