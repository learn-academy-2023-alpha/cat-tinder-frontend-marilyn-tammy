import React from 'react'
import { CardBody, CardTitle, CardSubtitle, Card, CardText, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'


const BeerShow = ({ beers, deleteBeer }) => {

  const {id} = useParams()
  let selectedBeer = beers.find(beer => beer.id === +id)

  const handleDelete = () => {
    deleteBeer(selectedBeer, selectedBeer.id)
  }

  return (
    <>
    {selectedBeer && (
      <div className='card-show'>
      <Card
      style={{
        width: '50%'
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
        <div className='show-buttons'>
        <Button>
          <NavLink to="/beerindex" style={{color:"white", textDecoration:"none"}}
                activeStyle={{color:"black", textDecoration:"none"}}>
            Back to Index
          </NavLink>
        </Button>
        <Button>
          <NavLink to={`/beeredit/${selectedBeer.id}`} style={{color:"white", textDecoration:"none"}}
                activeStyle={{color:"black", textDecoration:"none"}}>
            Edit Beer
          </NavLink>
        </Button>
        <Button onClick={handleDelete}>
          <NavLink to="/beerindex" style={{color:"white", textDecoration:"none"}}
                activeStyle={{color:"black", textDecoration:"none"}}>
            Delete Beer
          </NavLink>
        </Button>
        </div>
      </CardBody>
    </Card>
    </div>
    )}
    </>
  )
}

export default BeerShow