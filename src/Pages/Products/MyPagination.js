import { Pagination } from "react-bootstrap";
import React from 'react';
const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination className="me-5">
        {pageNumbers.map(number => (
          <Pagination.Item key={number} className='page-item'>
            <a onClick={() => paginate(number)} href={(`'#'${number}`)} className='page-link' >
              {number}
            </a>
          </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default Paginations;