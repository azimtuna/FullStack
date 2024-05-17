import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
// import { number, object, string } from 'yup';

interface postedData {
  name: string;
  stock: number;
  price: number;
}

const AddProduct = ({ show, handleClose }: { show: any; handleClose: any }) => {
  const [productName, setProductName] = useState('');
  const [productStock, setProductStock] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState<File | null>(null); // State for storing the selected file
  const [error, setError] = useState('');


  // const productSchema = object({
  //   name: string().required().min(3),
  //   stock: number().required().moreThan(-1),
  //   price: number().required().moreThan(-1)
  // });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImage(e.target.files[0]);
    }
    console.log(productImage);
  };

  const handleAddProduct = async () => {
    try {
      
      const productData:postedData = {
        name: productName,
        stock: productStock,
        price: productPrice,
    };

        const response = await axios.post<any>('https://localhost:7270/api/Products', productData, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
        console.log(productImage);
        if (productImage) {
          console.log(productImage);

            const formDataImage = new FormData(); 
              formDataImage.append('file', productImage); 

            const responseImage = await axios.post<any>('https://localhost:7270/api/Products/UploadFile', formDataImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("RESPONSE IMAGE", responseImage);
        }

        setProductName('');
        setProductStock(0);
        setProductPrice(0);
        setProductImage(null);
        setError('');
        handleClose();
        console.log('Response:', response);
        window.location.reload();
    } catch (error) {
        console.error('Error:', error);
        setError('An unexpected error occurred. Please try again.');
    }
};


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(parseFloat(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="productImage">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProduct;
