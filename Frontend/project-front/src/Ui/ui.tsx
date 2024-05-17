import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import UiSidebar from "./layout/uiSidebar"
import UiNavbar from "./layout/uiNavbar"
import { useState } from "react"

const ui = () => {
  const [isSlidebarOpen,setSlidebarOpen] = useState<boolean>(true);
  const toggleSlidebar = () => {
    setSlidebarOpen(!isSlidebarOpen);
  }
  return (
    <>
    <UiNavbar toggleSlidebar ={toggleSlidebar}/>
    <Container fluid>
      <Row >
        <Col>
        {isSlidebarOpen && <UiSidebar />}
        </Col>
        <Col xs={12} md={9}>
          <Outlet/> 
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ui