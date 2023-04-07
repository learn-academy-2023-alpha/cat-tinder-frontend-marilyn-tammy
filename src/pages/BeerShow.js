import React, { useState } from 'react'
import { CardBody, CardTitle, CardSubtitle, Card, CardText, Button } from 'reactstrap'
import { NavLink, useNavigate, useParams } from 'react-router-dom'


const BeerShow = ({ beers, deleteBeer }) => {

  const {id} = useParams()
  let selectedBeer = beers.find(beer => beer.id === +id)
  
  const [deletedBeer, setDeletedBeer] = useState({
    name: selectedBeer?.name,
    abv: selectedBeer?.abv,
    style: selectedBeer?.style,
    brewery: selectedBeer?.brewery,
    profile: selectedBeer?.profile,
    image: selectedBeer?.image
  })  

  const navigate = useNavigate()

  const handleDelete = () => {
    deleteBeer(deletedBeer, selectedBeer?.id)
    navigate('/beerindex')
  }

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
        <Button onClick={handleDelete}>
          <NavLink to="/beerindex">
            Delete Beer
          </NavLink>
        </Button>
      </CardBody>
    </Card>
    )}
    </>
  )
}

export default BeerShow