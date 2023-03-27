import React from 'react'
import { Cart } from './pages/Cart'
import { Navbar } from './pages/Navbar'
import { Footer } from './pages/Footer'
import { Menu } from './pages/Menu'
import { Actions } from './pages/Actions'

export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Cart />
        <section>
          <Menu />
          <Actions />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
