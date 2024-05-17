
import { Outlet } from "react-router-dom"
import AdminNavbar from "./layout/adminNavbar"
import { Col, Container, Row } from "react-bootstrap"
import AdminSidebar from "./layout/adminSidebar"
import { useState } from "react"


const admin = () => {

  const [isSlidebarOpen,setSlidebarOpen] = useState<boolean>(true);
  const toggleSlidebar = () => {
    setSlidebarOpen(!isSlidebarOpen);
  }
  return (
    <>
      <AdminNavbar toggleSlidebar ={toggleSlidebar}/>
      <Container fluid>
        <Row >

          <Col>
            {isSlidebarOpen && <AdminSidebar/>}
          </Col>
          <Col xs={12} md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default admin