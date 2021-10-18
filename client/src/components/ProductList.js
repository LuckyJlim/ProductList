import React from 'react';
import Grid from '@mui/material/Grid';
import ProductListItem from './ProductListItem';

export default function ProductList({ items, maxItem }) {
  return (
    <Grid container spacing={3}>
      {(items || []).map((item, k) => (
        <Grid item xs={3} key={k}>
          <ProductListItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
