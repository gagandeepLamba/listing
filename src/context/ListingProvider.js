import * as React from 'react'

const DefaultState = {
  listingDetails: [],
  filter: {}
}

const ListingsContext = React.createContext(DefaultState)

export const ListingsConsumer = ListingsContext.Consumer

export class ListingsProvider extends React.Component {
  static applyFilter(listings, filter) {
    const { priceFrom, postcode, sortOrder } = filter
    let result = listings
    if (priceFrom) {
      const from = priceFrom
      result = result.filter(item => item.price >= from)
    }
    if (postcode) {
      result = result.filter(item => item.postcode.toLowerCase().startsWith(postcode))
    }
    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => b.price - a.price)
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => a.price - b.price)
      }
    }
    return result
  }

  state = DefaultState

  componentDidMount() {
    fetch('/server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ listingDetails: res })
      })
  }

  getListingById = listingId => {
    const { listingDetails } = this.state
    console.log(listingId)
    return listingDetails.find(listing => listing.id === Number(listingId))
  }

  updateFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { children } = this.props
    const { listingDetails, filter } = this.state

    const filteredListings = ListingsProvider.applyFilter(
      listingDetails,
      filter
    )

    return (
      <ListingsContext.Provider
        value={{
          allListings: listingDetails,
          listingDetails: filteredListings,
          updateFilter: this.updateFilter,
          getListingById: this.getListingById
        }}
      >
        {children}
      </ListingsContext.Provider>
    )
  }
}
