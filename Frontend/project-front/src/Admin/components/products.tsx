import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import AddProductButton from "./product_components/AddProductButton";
import ProductCards from "./product_components/productCards";
import axios from "axios";

interface FetchedProduct {
  id: string,
  name: string,
  stock: number,
  price: number,
}
const adminProducts = (token:any) => {
  const [product, setProduct] = useState<FetchedProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages,setTotalPages] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      console.log("tokenn:",token.token);
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
        const response = (await axios.get(`https://localhost:7270/api/Products?page=${currentPage}`));
        setProduct(response.data.products);
        setTotalPages(response.data.totalCount);
      } catch (error:any) {
        if(error.response.status===401){
          //alert("UNAUTHORIZED");
          console.log(error);
        }
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      <Col className="d-flex justify-content-end">
        <AddProductButton />
      </Col>
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
  );
}

export default adminProducts