import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductList from "./components/ProductList";
import PaginationLink from './components/PaginationLink';
import PaginationSelector from './components/PaginationSelector';
import { setCurPage } from './reducers/pageSlice'
import { gql, useQuery } from '@apollo/client';

import items from './products.json';

const GET_PRODUCTS = gql`
  query GetProducts($offset: Number, $limit: Number) {
    products(offset: $offset, limit: $limit)
      @rest(type: "ProductPayload", path: "/list?{args}") {
      count
      next
      results @type(name: "Product") {
        id
        price
        productName
        description
        productImage
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

const Products = (props) => {

  const curPageNumber = props.match.params.page||1;
  const { loading, error, data = {} } = useQuery(GET_PRODUCTS, {
    variables: { offset: 0, limit: 8 },
  });
//  const {total} = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( 
      setCurPage(curPageNumber));
     }, [curPageNumber]);

  if (error) console.error(error);
  const { results: products, count: totalCount } = data.products || {};
  if (loading) return <p>Loading ...</p>;

  return (
    <Container sx={{bgcolor: '#f6f6f6'}} maxWidth={false}>
    <Grid container  >
      <Grid item xs={8}>
        <Title>
          <Typography variant="h6" gutterBottom component="div">All Products</Typography>
          <Typography>{totalCount} products</Typography>
        </Title>
      </Grid>
      <Grid item xs={4}>
        <Item><PaginationSelector /></Item>
      </Grid>
      <Grid item xs={12}>
        <ProductList items={products} />
      </Grid>
      <Grid item xs={12}>
        <Item><PaginationLink /></Item>
      </Grid>
    </Grid>
    </Container>
  );
};

export default Products;