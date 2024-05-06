import * as React from 'react'

import {
  ListingsProvider,
  ListingsConsumer
} from '../../context/ListingProvider'

import DetailsPage from '../../components/detailsPage'
import Hero from '../../components/hero'

function Details({ listingId }) {
  return (
    <React.Fragment>
      <Hero miniHero/>
      <div className="container">
        <ListingsProvider>
          <ListingsConsumer>
            {({ getListingById }) => (
              <DetailsPage listing={getListingById(listingId)} />
            )}
          </ListingsConsumer>
        </ListingsProvider>
      </div>
    </React.Fragment>

  )
}

export default Details