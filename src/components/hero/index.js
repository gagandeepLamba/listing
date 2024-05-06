import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

function MainHeader({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1>Property Listings</h1>
      </div>
    </div>
  )
}

export default MainHeader