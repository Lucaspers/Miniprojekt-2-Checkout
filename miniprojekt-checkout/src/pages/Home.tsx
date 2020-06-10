import React from 'react';
import { Grid } from '@material-ui/core';
import Content from '../components/productComponent/content';
import { ProductConsumer } from "../context/context";

export default function HomePage() {
  return (
    <>
    <ProductConsumer>{(value: any ) => {
      return  (
        <Grid container direction='column'>
        <Grid item container>
          <Grid item xs={12} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={12} sm={2} />
        </Grid>
      </Grid>
      )
    }}

    </ProductConsumer>
    </>
  );
};
