import Header from "../../../shared/Header";
import { Footer } from "../../../shared/uu";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { addArticle } from "../../../Service/api";
import {useNavigate} from "react-router-dom";

const defaultValue ={
  title: "",
  category: "",
  content: ""
}


export const Compose=()=>{

  const [article,setArticle]=useState(defaultValue);
  
  const navigate = useNavigate();

const onValueChange =(e)=>{
  // console.log(e.target.name,e.target.value);
  setArticle(
    {
      ...article,[e.target.name]:e.target.value
    })
    console.log(article);
}

const addArticleDetail= async ()=>{
 await addArticle(article);
 navigate("/BlogArchive");
}


    return (<>
<Header fixed="top" />
<section id="blog-compose-section" class="container w-container">
    <section class="section-title-wrapper">
    <h2 class="section-title ">Create stories</h2>
    </section>

 {/*-------------- Form -------------------------*/}
<Container >
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Title">
          <Form.Control onChange={(e)=> onValueChange(e)} type="text" name="title" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Continent"
        >
          <Form.Select onChange={(e)=> onValueChange(e)} name="category" aria-label="Floating label select example">
            <option>select menu</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Antartica">Antartica</option>
            
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
<br></br>
    <Row className="g-2">
    <Col md>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control name="content" onChange={(e)=> onValueChange(e)} as="textarea" rows={7} />
      </Form.Group>
        </Col>
    </Row>

    <Button onClick={()=>addArticleDetail()} variant="primary" type="submit">
        Submit
      </Button>   
</Container>
    </section>   

<Footer />
    </>
 );
}