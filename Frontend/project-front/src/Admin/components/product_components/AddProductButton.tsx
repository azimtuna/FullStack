import { useState } from 'react'
import { Button } from 'react-bootstrap';
import AddProduct from './AddProduct';

const AddProductButton = () => {
    const [showAddProductPopup, setShowAddProductPopup] = useState(false);

    const handleCloseAddProductPopup = () => setShowAddProductPopup(false);
    const handleShowAddProductPopup = () => setShowAddProductPopup(true);
    return (
      <div>
        <Button variant="primary" onClick={handleShowAddProductPopup}>
          Add Product
        </Button>
        
        <AddProduct 
          show={showAddProductPopup} 
          handleClose={handleCloseAddProductPopup} 
        />


      </div>
    );
}

export default AddProductButton