import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { setPage } from './reducers/pageSlice'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductList from "./components/ProductList";
import PaginationLink from './components/PaginationLink';
import PaginationSelector from './components/PaginationSelector';

import items from './products.json';
import { maxWidth } from "@mui/system";

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
  const initPageNumber = props.match.params.page||1;

  const [currentPage, setCurrentPage] = useState(initPageNumber);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalItems, setTotalItems] = useState([...items].length);

  // useEffect(() => {
  //   history.push(`${path}?page=${currentPage}`);
  // }, [currentPage, history, path]);

  const dispatch = useDispatch();
  //For Test
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...items].slice(indexOfFirstItem, indexOfLastItem);
  dispatch( 
    setPage({
      curPage: props.match.params.page,
      itemsPerPage: itemsPerPage,
      totalItems: totalItems
    }));


  return (
    <Container sx={{bgcolor: '#f6f6f6'}} maxWidth={false}>
    <Grid container  >
      <Grid item xs={8}>
        <Title>
          <Typography variant="h6" gutterBottom component="div">All Products</Typography>
          <Typography>{totalItems} products</Typography>
        </Title>
      </Grid>
      <Grid item xs={4}>
        <Item><PaginationSelector /></Item>
      </Grid>
      <Grid item xs={12}>
        <ProductList items={currentItems} />
      </Grid>
      <Grid item xs={12}>
        <Item><PaginationLink /></Item>
      </Grid>
    </Grid>
    </Container>
  );
};

export default Products;