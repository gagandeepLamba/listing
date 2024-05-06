import * as React from 'react'
import Listing from '../../components/listing'
import {
  ListingsProvider,
  ListingsConsumer
} from '../../context/ListingProvider'

import Hero from '../../components/hero'
import Filter from '../../components/filter'
import BaseLayout from '../../components/baseLayout'

function Home() {
  return (
    <BaseLayout>
      <div className="container">
        <ListingsProvider>
          <ListingsConsumer>
            {({ listingDetails, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={listingDetails.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <div className="columns">
                  {listingDetails.map( (listing,idx)  => (
                    <Listing listing={listing} key={idx}/>
                  ))}
                </div>
              </>
            )}
          </ListingsConsumer>
        </ListingsProvider>
      </div>
    </BaseLayout>
  )
}

export default Home