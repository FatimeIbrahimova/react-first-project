import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import "./MyCard.css"

const MyCard = ({ data }) => {
  return (
    <>
      <Grid item md={3}>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia className='card-image'
            component="img"
            alt="img"
            height="170"
            image={data.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='card-title'>
              <Link to={`${data.id}`}>{data.name}</Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default MyCard