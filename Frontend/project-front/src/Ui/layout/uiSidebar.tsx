import {  ListGroup, Nav } from "react-bootstrap"

const uiSidebar = () => {

    const list: string[] = ["dashboard", "order", "product"];

    return (
        <>
            <div className="bg-light" style={{ width: '150px', minHeight: '100vh' }}>
                <ListGroup>
                    {list.map((item,index) => (
                        <Nav key={index} className="me-auto">
                            <Nav.Link href={`/ui/${item}`}>{item}</Nav.Link>
                        </Nav>
                    ))}

                </ListGroup>



            </div>

        </>
    )
}

export default uiSidebar