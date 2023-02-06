import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Titles } from '../Titles/Titles'

const headerTitles = {
  title: 'Norway',
  subTitle: 'Explore',
  className: 'imageContent',
}

interface HeaderProps {
  handleScroll: () => void
}

export const Header = ({ handleScroll }: HeaderProps): JSX.Element => {
  return (
    <>
      <NavBar handle={handleScroll} />
      <Titles titles={headerTitles} />
    </>
  )
}
