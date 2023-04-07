import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const BeerNew = ( {createBeer} ) => {
  const [newBeer, setNewBeer] = useState({
    name: "",
    abv: "",
    style: "",
    brewery: "",
    profile: "",
    image: ""
  })
  
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setNewBeer({...newBeer, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createBeer(newBeer)
    navigate("/beerindex")
  }

  return (
    <>
    <h1>NEW BREW</h1>
      <Form>
        <FormGroup row>
          <Label 
            for="name"
            sm={2}
          >
            BEER NAME
          </Label>
          <Col sm={10}>
          <Input 
            name="name" 
            placeholder="Name of Your Beer"
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
            placeholder="ABV % of Your Beer"
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
            placeholder="Style of Your Beer"
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
            placeholder="Brewery"
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
            placeholder="Beer Notes"
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
            placeholder="Image of Your Beer"
            type="url"
            onChange={handleChange}
          />
          </Col>
        </FormGroup>

        <Button 
          name="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default BeerNew