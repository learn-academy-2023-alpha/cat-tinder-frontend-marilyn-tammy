import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from 'reactstrap'

const BeerIndex = ( { beers } ) => {
  return (
    <>
    <div className='card-flex'>
      {beers.map((beer, index) => {
        return (
          <>
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt={beer.name}
                src={beer.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {beer.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {beer.abv}
                </CardSubtitle>
                <CardText>
                  {beer.profile}
                </CardText>
                <Button>
                  <NavLink to={`/beershow/${beer.id}`}>
                    More info
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          </>
        )
      })}
    </div>
    </>
  )
}

export default BeerIndex