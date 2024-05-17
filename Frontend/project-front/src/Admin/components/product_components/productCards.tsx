import { Button, Card, Col, Row } from "react-bootstrap";
import cardImage from "../../../assets/html-color-codes-color-tutorials-hero.jpg";
import axios from "axios";
import { useState } from "react";

const ProductCards = ({ products }: { products: any}) => {
  
  const [alert, setAlert] = useState("");

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete<any>(`https://localhost:7270/api/Products/${id}`);
      setAlert(id);
      console.log("response deleted", response);
    } catch (error) {
      console.error(error);
      throw error;
    }
    window.location.reload();
  };

  
  return (
    <>
      <Row md={3} className="row-padding">
        {products && products.map((item: any, index: number) => (
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
                <Col>
                  <Button variant="danger" onClick={() => { handleDelete(item.id) }}>DELETE</Button>
                  {alert === item.id && (
                    <div className="alert alert-success" role="alert">
                      Deleted successfully!
                    </div>
                  )}
                </Col>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductCards;
