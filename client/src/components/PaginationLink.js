import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const CustomizedPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: right;
  }
`;

const PaginationLink = ({ totalCount }) => {
  const page = useSelector(state => state.page);
  return (
    <CustomizedPagination
      sx={{ justifyContent: 'right' }}
      size="large"
      variant="outlined"
      shape="rounded"
      page={parseInt(page.curPage)}
      count={Math.ceil(totalCount / page.itemsPerPage)}
      renderItem={item => <PaginationItem component={Link} to={`/Products/${item.page}`} {...item} />}
    />
  );
};

export default PaginationLink;
