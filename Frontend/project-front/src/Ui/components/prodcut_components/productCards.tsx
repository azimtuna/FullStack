import { Button, Card, Col, Row } from "react-bootstrap"
import cardImage from "../../../assets/html-color-codes-color-tutorials-hero.jpg"


const productCards = ({ products }: { products:any }) => {


  return (
    <>
      <Row md={3} className="row-padding" >
        {products && products.map((item:any, index:number) => (
          <Col key={index} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={cardImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {item.name}
                </Card.Text>
                <Col>
                <Button variant="primary">Go somewhere</Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    
    </>
  )
}

export default productCards