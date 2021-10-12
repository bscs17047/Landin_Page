import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './Cards.css'
import { FaBookReader } from "react-icons/fa";


const myURL = "https://longform.org/random"

export default function ResearchCards() {
    return (
        <div id="research" className="Cards">
            <CardGroup>
            <Card>
                <Card.Img style={{borderRadius:'5px'}} variant="top" src="https://images.unsplash.com/photo-1556306535-abccb1f2533c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                <Card.Body>
                <Card.Title>Article 1</Card.Title>
                <Card.Text>
                    TLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer", backgroundColor:"black",color:"white"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaBookReader /> Read More</small>
    </Card.Footer>
            </Card>
            <Card>
                <Card.Img style={{borderRadius:'5px'}} variant="top" src="https://images.unsplash.com/photo-1556306535-abccb1f2533c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                <Card.Body>
                <Card.Title>Article 2</Card.Title>
                <Card.Text>
                    TLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer", backgroundColor:"black",color:"white"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaBookReader /> Read More</small>
    </Card.Footer>
            </Card>
            <Card>
                <Card.Img  style={{borderRadius:'5px'}} variant="top" src="https://images.unsplash.com/photo-1556306535-abccb1f2533c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                <Card.Body>
                <Card.Title>Article 3</Card.Title>
                <Card.Text>
                    TLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer", backgroundColor:"black",color:"white"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaBookReader /> Read More</small>
    </Card.Footer>
            </Card>
            </CardGroup>
        </div>
    )
}
