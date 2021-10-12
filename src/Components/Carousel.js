import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ImageCarousel() {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://wowplus.net/wp-content/uploads/2021/01/ADVERTISING-DIGITAL-MARKETING-BRANDS.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500/800x400?text=First slide&bg=373940"
      alt="First slide"
      style={{  
                width:"640px",
                height:"400px",
                backgroundSize:"cover"
                }}
    />
    <Carousel.Caption>
      <h3>D A T A</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.similarweb.com/corp/wp-content/uploads/2021/04/Digital-Marketing-Metrics-.5.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdGlzdGljc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
      style={{  width:"640px",
                height:"400px",
                backgroundSize:"cover"}}/>
    <Carousel.Caption>
      <h3>A N A L Y T I C S</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.idgesg.net/images/article/2018/06/business-intelligence_data-visualization-tools_analytics-100761933-large.jpg?auto=webp?auto=compress&cs=tinysrgb&dpr=2&w=500/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
      style={{
                width:"640px",
                height:"400px",
                backgroundSize:"cover"
                }}
    /> 
    <Carousel.Caption>
      <h3>I N S I G H T S</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
