import '../css/product.css'
import { useEffect, useState } from "react";
import ProductCards from "./prodcut_components/productCards";
import { Col } from 'react-bootstrap';
import axios from 'axios';

interface FetchedProduct{
  id:string,
  name:string,
  stock:number,
  price:number,
}
const uiProducts = () => {  
  const [product, setProduct] = useState<FetchedProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages,setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await axios.get(`https://localhost:7270/api/Products?page=${currentPage}`));
        setProduct(response.data.products);
        setTotalPages(response.data.totalCount);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, [currentPage]);




  return (
    <>
      <Col>
        <ProductCards products={product} />
      </Col>
      <div>
        <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage -1 )}>
          Previous
        </button>
        <div>{currentPage}</div>
        <button disabled={currentPage > (totalPages/6)-1} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

    </>
  )
}

export default uiProducts