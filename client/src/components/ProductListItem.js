import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function ProductListItem({ item: { name, price, imageUrl, description } }) {
  return (
    <Card>
      <Box
        sx={{
          bgcolor: '#fff',
          height: 300,
          p: 1,
          borderRadius: 0,
        }}
      >
        <img
          src={`${imageUrl}`}
          style={{ width: '100%', height: '100%', 'object-fit': 'contain' }}
          alt={name}
          loading="lazy"
        />
      </Box>
      <Divider />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="string" color="text.secondary" component="div" noWrap>
          {name}
        </Typography>
        <Typography variant="string" color="text.secondary" component="div" noWrap>
          {description}
        </Typography>
        <Typography variant="string">{price}</Typography>
      </CardContent>
    </Card>
  );
}
