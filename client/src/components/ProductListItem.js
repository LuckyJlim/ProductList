import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function ProductListItem({item:{product_name, price, product_image, description}}) {
  return (
    <Card>
      <Box
        sx={{
          bgcolor: '#fff',
          height: 300,
          p: 1,
          borderRadius: 0,
          textAlign: 'center',
        }}
      >
        <img
        src={`${product_image}`}s
        style={{width:'100%', height:'100%', 'object-fit': 'contain' }}
        alt={product_name}
        loading="lazy"
      />
      </Box>
      <Divider />
      <CardContent>
        <Typography variant="string" color="text.secondary" noWrap>
          {product_name}
        </Typography>
        <Typography variant="string" color="text.secondary" component="div" noWrap>
          {description}
        </Typography>
        <Typography variant="string">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
