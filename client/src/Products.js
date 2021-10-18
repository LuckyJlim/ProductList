import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductList from './components/ProductList';
import PaginationLink from './components/PaginationLink';
import PaginationSelector from './components/PaginationSelector';
import { setCurPage, setItemsPerPage } from './reducers/pageSlice';
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts($offset: Number, $limit: Number) {
    products(offset: $offset, limit: $limit) @rest(type: "ProductPayload", path: "/products?{args}") {
      count
      results @type(name: "Product") {
        id
        price
        name
        description
        imageUrl
      }
    }
  }
`;

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'right',
  color: theme.palette.text.secondary,
}));

const Title = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Products = props => {
  const curPageNumber = parseInt(props.match.params.page) || 1;
  const { itemsPerPage } = useSelector(state => state.page);
  const { loading, error, data = {} } = useQuery(GET_PRODUCTS, {
    variables: { offset: (curPageNumber - 1) * itemsPerPage, limit: itemsPerPage },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurPage(curPageNumber));
  }, [curPageNumber]);

  if (error) console.error(error);
  const { results: products, count: totalCount } = data.products || {};
  if (loading) return <p>Loading ...</p>;

  return (
    <Container sx={{ bgcolor: '#f6f6f6' }} maxWidth={false}>
      <Grid container>
        <Grid item xs={8} key="list-header-left">
          <Title>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="div">
              All Products
            </Typography>
            <Typography>{totalCount} products</Typography>
          </Title>
        </Grid>
        <Grid item xs={4} key="list-header-right">
          <Item>
            <PaginationSelector />
          </Item>
        </Grid>
        <Grid item xs={12} key="list-contents">
          <ProductList items={products} />
        </Grid>
        <Grid item xs={12} key="list-footer">
          <Item>
            <PaginationLink totalCount={totalCount} />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
