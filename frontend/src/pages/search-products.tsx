import { Box, Grid, Paper } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product, products } from '../example/products';

interface ProductCardProps {
  product: Product
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography>
          Precio $ {product.price}
        </Typography>
        <Typography>
          Precio sugerido $ {product.priceSuggested}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Comprar</Button>
        <Button variant='contained' size="small">Detalles</Button>
      </CardActions>
    </Card>
  )
}

export default function SearchProducts() {

  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={2} maxWidth='xl'>
        {products.map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
