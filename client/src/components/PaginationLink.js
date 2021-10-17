import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const PaginationLink = () => {
  const page = useSelector((state) => state.page);
  return (
    <Pagination
      size="large" variant="outlined" shape="rounded"
      page={parseInt(page.curPage)}
      count={Math.ceil(page.totalItems/page.itemsPerPage)}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/Products/${item.page}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationLink;