import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = ({ product }) => {
    return (
        <div>
            <Grid item md={12}>
                <Card sx={{ maxWidth: 345, marginLeft: 15 }} >
                    <CardMedia className="product-card_image"
                        component="img"
                        alt="green iguana"
                        height="170"
                        width="400"
                        image={product.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="product-desc">
                            {/* {product.name} */}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default ProductCard