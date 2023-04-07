import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const BeerEdit = ( { beers, updateBeer, index}) => {
  console.log("From BeerEdit.js:", beers)
  const { id } = useParams()
  let currentBeer = beers?.find((beer) => beer.id === +id)
  
  const [editBeer, setEditBeer] = useState({
    name: currentBeer?.name,
    abv: currentBeer?.abv,
    style: currentBeer?.style,
    brewery: currentBeer?.brewery,
    profile: currentBeer?.profile,
    image: currentBeer?.image
  })  

  const navigate = useNavigate()

  const handleChange = (e) => {
    setEditBeer({ ...editBeer, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateBeer(editBeer, currentBeer?.id)
    navigate(`/beershow/${currentBeer.id}`)
  }

  return (
    <>
    <h1> EDIT BREW </h1>
    <Form>
        <FormGroup row>
          <Label 
            key={index}
            for="name"
            sm={2}
          >
            BEER NAME
          </Label>
          <Col sm={10}>
          <Input 
            name="name" 
            value= {editBeer?.name}
            type="text"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label 
            for="abv"
            sm={2}
          >
            ABV %
          </Label>
          <Col sm={10}>
          <Input 
            name="abv" 
            value= {editBeer?.abv}
            type="text"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label 
            for="style"
            sm={2}
          >
            BEER STYLE
          </Label>
          <Col sm={10}>
          <Input 
            name="style" 
            value= {editBeer?.style}
            type="text"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label 
            for="brewery"
            sm={2}
          >
            BREWERY
          </Label>
          <Col sm={10}>
          <Input 
            name="brewery" 
            value= {editBeer?.brewery}
            type="text"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label 
            for="profile"
            sm={2}
          >
            NOTES
          </Label>
          <Col sm={10}>
          <Input 
            name="profile" 
            value= {editBeer?.profile}
            type="text"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label 
            for="image"
            sm={2}
          >
            IMAGE URL
          </Label>
          <Col sm={10}>
          <Input 
            name="image" 
            value= {editBeer?.image}
            type="url"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>

        <Button 
          name="submit"
          onClick={handleSubmit}
        >
          Update Beer
        </Button>
      </Form>
    </>
  )
}

export default BeerEdit