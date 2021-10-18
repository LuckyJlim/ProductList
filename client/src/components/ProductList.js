import React from 'react';
import Grid from '@mui/material/Grid';
import ProductListItem from './ProductListItem';

export default function ProductList({ items, maxItem }) {
  return (
    <Grid container spacing={3}>
      {(items || []).map(item => (
        <Grid item xs={3} key={item.id}>
          <ProductListItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
