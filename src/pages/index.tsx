import React from 'react'

import PageHead from '@/components/PageHead'

import { Greeting, Footer } from '@/styles/pages/Home'

import Logo from '../assets/earth.svg'

const Home: React.FC = () => {
  return (
    <div className='app'>
      <PageHead title='Home' />
      <header>
        <nav>
          <div className='container'>
            <Logo />
            <span>Brand</span>
          </div>
        </nav>
        <div className='container'>
          <p>Header</p>
        </div>
      </header>
      <main>
        <div className='container'>
          <Greeting>Hello, World!</Greeting>
        </div>
      </main>
      <Footer>
        <div className='container'>
          <p>Proudly powered by {'Thiago Silva'}</p>
        </div>
      </Footer>
    </div>
  )
}

export default Home
