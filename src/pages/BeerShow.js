import React from 'react'
import { useParams } from 'react-router-dom'
import { CardBody, CardTitle, CardSubtitle, Card, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const BeerShow = ({ beers, currentBeer }) => {
  const {id} = useParams()
  let selectedBeer = beers.find(beer => beer.id === +id)
  return (
    <>
    {selectedBeer && (
      <Card
      style={{
        width: '100%'
      }}
    >
      <img
        alt={selectedBeer.name}
        src={selectedBeer.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {selectedBeer.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {selectedBeer.abv}
        </CardSubtitle>
        <CardText>
          Notes: {selectedBeer.profile}
        </CardText>
        <Button>
          <NavLink to="/beerindex">
            Back to Index
          </NavLink>
        </Button>
        <Button>
          <NavLink to={`/beeredit/${selectedBeer.id}`} className="nav-link">
            Edit Beer
          </NavLink>
        </Button>
      </CardBody>
    </Card>
    )}
    </>
  )
}

export default BeerShow