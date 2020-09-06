import React from 'react'

import PageHead from '@/components/PageHead'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Article from '@/components/Article'

const Home: React.FC = ({ children }) => {
  return (
    <div className={'app'}>
      <PageHead title='Home' />
      <Nav />
      <Header />
      <main>
        <Article>
          {children}
        </Article>
      </main>
      <Footer />
    </div>
  )
}

export default Home
