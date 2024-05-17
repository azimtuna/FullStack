import { Container, ListGroup, Nav } from "react-bootstrap"

const uiDashboard = () => {
  
  const list: string[] = ["dashboard", "order", "product"];

  return (
    <>
     <Container className="container-bg">
                
                <div>Ui</div>
                
                <ListGroup>
                    {list.map((item) => (
                        <Nav className="me-auto">
                            <Nav.Link href={`/ui/${item}`}>{item}</Nav.Link>
                        </Nav>
                    ))}

                </ListGroup>
            </Container>
    </>
  )
}

export default uiDashboard