import React from 'react'
import Head from 'next/head'

interface PageProps {
  title: string
}

const Metadata: React.FC<PageProps> = ({ title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Let browser know webapp is optimized for mobile */}
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {/* SEO */}
        <meta name='author' content='Thiago Silva (dev.thiagosilva.cc)' />
        <meta name='copyright' content='© 2020 Thiago Silva' />
        <meta name='description' content='' />
        <meta name='keyword' content='' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        {/* Google Site Verification */}
        <meta name='google-site-verification' content='' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta httpEquiv='cache-control' content='max-age=31536000' />
        <meta httpEquiv='pragma' content='max-age=31536000' />
        <meta httpEquiv='refresh' content='3600;url=https://#/' />
        {/* Open Graph Markup: og */}
        <meta property='og:type' content='webapp' />
        <meta property='og:url' content='https://#/' />
        <meta property='og:title' content='' />
        <meta property='og:image' content='https://#/img.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1080' />
        <meta property='og:image:height' content='1080' />
        <meta property='og:image:alt' content='' />
        <meta property='og:description' content='' />
        <meta property='og:site_name' content='app' />
        <meta property='og:locale' content='pt_BR' />
        {/* Open Graph Markup: lp */}
        <meta property='lp:type' content='webapp' />
        <meta property='lp:url' content='https://#/' />
        <meta property='lp:title' content='' />
        <meta property='lp:image' content='https://#/img.png' />
        <meta property='lp:image:type' content='image/png' />
        <meta property='lp:image:width' content='1080' />
        <meta property='lp:image:height' content='1080' />
        <meta property='lp:image:alt' content='' />
        <meta property='lp:description' content='' />
        <meta property='lp:site_name' content='app' />
        <meta property='lp:locale' content='pt_BR' />
        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@app' />
        <meta name='twitter:site' content='@app' />
        <meta name='twitter:domain' content='#/' />
        <meta name='twitter:title' content='' />
        <meta name='twitter:description' content='' />
        {/* Page title */}
        <title>{title}</title>
      </Head>
    </>
  )
}

export default Metadata
