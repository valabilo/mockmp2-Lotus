import React, { useState, useEffect } from 'react';
import AllPosts from './AllPosts';
import Pagination from './MyPagination';
import axios from 'axios'
import {Row, Col, Container} from 'react-bootstrap'


const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:5001/products');
      setProducts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container-fluid mt-5'>
      <AllPosts products={currentPosts} loading={loading} />
      <Container>
      <Row className="py-2 me-5">
        <Col md={9} sm={12} >
        </Col>
        <Col md={3}>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default App;
