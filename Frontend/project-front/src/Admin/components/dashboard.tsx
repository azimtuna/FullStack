import { Container, ListGroup, Nav } from "react-bootstrap";
import '../../App.css'


const dashboard = () => {
    const routeList: string[] = ["order", "product"];

    return (
        <>
            <Container className="container-bg">
                <div>Admin</div>
                <ListGroup>
                    {routeList.map((item) => (
                        <Nav className="me-auto">
                            <Nav.Link href={`/admin/${item}`}>{item}</Nav.Link>
                        </Nav>
                    ))}

                </ListGroup>
            </Container>
        </>
    )
}

export default dashboard