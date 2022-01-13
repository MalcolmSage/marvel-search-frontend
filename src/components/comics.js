import React, { Component } from "react";

import { Grid, Typography } from "@mui/material/";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

class Comics extends Component {


  render() {
    const { comics } = this.props
    console.log(comics)
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        {comics.map((item) => (
          <Grid item key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.images[0].path + "." + item.images[0].extension}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}

      </Grid>
    )
  }
}

export default Comics;