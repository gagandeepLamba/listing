import * as React from 'react'
import MainHeader from '../hero'

function BaseLayout({ children, miniHero = false }) {
  return (
    <>
      <main role="main" className="mb-3">
        <MainHeader miniHero={miniHero} />
        {children}
      </main>
      <footer className="text-center mb-5">
        Developed By
        {' '}
        <a
          href="https://github.com/gagandeepLamba/listing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gagandeep Lamba
        </a>
        , 2024
      </footer>
    </>
  )
}

export default BaseLayout
