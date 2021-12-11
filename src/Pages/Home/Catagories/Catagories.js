import { Container, Grid, Typography,Card} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const Catagories = () => {
    return (
        <div>
         <Container>
         <Grid container spacing={3}>
        <Grid item sm={6} xs={4} md={3}>
        <Card style={{background:'#673ab7',height:'40px',paddingTop:'10px'}}>
        <Link to="/product/fish">
             <h6 className='text-white'>Fish</h6>
        </Link>
        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
        <Card style={{background:'purple',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/vegetable">
          <h6 className='text-white'>Vegetable</h6>
        </Link>

        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
         <Card style={{background:'#f44336',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/grocery">
          <h6 className='text-white'>Grocery</h6>
        </Link>

        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
              <Card style={{background:'#b39ddb',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/meal">
          <h6 className='text-white'>Meal</h6>
        </Link>

        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
           <Card style={{background:'#1e88e5',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/oil">
          <h6 className='text-white'>Oil</h6>
        </Link>

        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
        <Card style={{background:'#388e3c',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/fruits">
          <h6 className='text-white'>Fruits</h6>
        </Link>

        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
         <Card style={{background:'#e64a19',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/rice">
          <h6 className='text-white'>Rice</h6>
        </Link>

        </Card>
        </Grid>
        <Grid item sm={6} xs={4} md={3}>
              <Card style={{background:'#37474f',height:'40px',paddingTop:'10px'}}>
                   <Link to="/product/bakery">
          <h6 className='text-white'>Bakery</h6>
        </Link>

        </Card>
        </Grid>
      </Grid>
           </Container>

     
        </div>
    );
};

export default Catagories;