import React, { ReactNode, createRef, useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Titles } from '../Titles/Titles'
import { NavBarLinks } from '../NavBar/NavBarLinks'
const headerTitles = {
  title: 'Norway',
  subTitle: 'Explore',
  className: 'imageContent',
}

interface ITest {
  current: HTMLDivElement | null
}

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const mainContentRef = createRef<HTMLElement>()

  const hanldeScroll = (path: string): void => {
    mainContentRef.current?.scrollIntoView()
  }

  console.log('rerender')

  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <nav>
            <NavBarLinks handle={hanldeScroll} />
            <Titles titles={headerTitles} />
          </nav>
        </div>
      </header>
      <main ref={mainContentRef}>
        <div className="container">{children}</div>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
