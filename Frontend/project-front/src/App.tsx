import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home'
import Admin from './Admin/admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ui from './Ui/ui'
import UiOrders from './Ui/components/orders'
import UiProducts from './Ui/components/products'
import UiDashboard from './Ui/components/dashboard'
import Orders from './Admin/components/orders'
import Products from './Admin/components/products'
import Dashboard from './Admin/components/dashboard'
import Register from './UserService/Register'
import Login from './UserService/Login'
import { useEffect, useState } from 'react'

/*
!!!!!!!!!!!
refresh token eklenecek 
!!!!!!!!!!!
*/ 


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const token:any = localStorage.getItem('token');

  useEffect(() => {
    
    // if (token) {

    //   const decodedToken = jwtDecode(token);
    //   if (decodedToken) {
    //     setIsAuthenticated(true);
    //   } else {
    //     setIsAuthenticated(false);
    //   }
    // } else {
    //   setIsAuthenticated(false);
    // }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          {isAuthenticated}(
            <Route path="/admin/*" element={<Admin />}>
              <Route path="order" element={<Orders />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<Products token={token}/>} />
            </Route>
          {/* ) : isAuthenticated ? ( */}
          ) : (
            <Route path="/ui/*" element={<Ui />}>
              <Route path="order" element={<UiOrders />} />
              <Route path="dashboard" element={<UiDashboard />} />
              <Route path="product" element={<UiProducts />} />
            </Route>
          )
          {/* ) : (
            // Redirect unauthenticated users to login page
            <Navigate to="/login" />
          ) */}
        </Routes>
      </BrowserRouter>
    </>
  ); 

  // return (
  //   <>
  //     <BrowserRouter>
  //       {/* <AdminNavbar /> */}
  //       <Routes>
  //         <Route path='/' element={<Home />} />
          
  //         <Route path='/register' element={<Register/>}/>
  //         <Route path='/login' element={<Login/>}/>

  //         <Route path='/admin'element={<Admin />}>
  //           <Route path='/admin/order' element={<Orders />} />
  //           <Route path='/admin/dashboard' element={<Dashboard />} />
  //           <Route path='/admin/product' element={<Products token={localStorage.getItem("token")}/>} />
  //         </Route>

  //         <Route path='/ui' element={<Ui />} > 
  //           <Route path='/ui/order' element={<UiOrders/>} />
  //           <Route path='/ui/dashboard' element={<UiDashboard/>} />
  //           <Route path='/ui/product' element={<UiProducts/>} />
  //         </Route>

  //       </Routes>

  //     </BrowserRouter>

  //   </>
  // )
}

export default App
