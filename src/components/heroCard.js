import React, { Component } from "react";

import { Grid, Typography } from "@mui/material/";

class HeroCard extends Component {


  render() {
    const { hero } = this.props
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item >
          <Typography variant="h3" component="div" >
            {hero.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="div">
            {hero.description}
          </Typography>
        </Grid>
        
      </Grid>
    )
  }
}

export default HeroCard;