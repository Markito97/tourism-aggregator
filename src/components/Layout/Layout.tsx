import React, { createRef } from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Layout = (): JSX.Element => {
  const ref1 = createRef<HTMLElement>()

  const hanldeScroll = (): void => {
    ref1.current?.scrollIntoView()
  }

  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <Header handleScroll={hanldeScroll} />
        </div>
      </header>
      <main ref={ref1}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
