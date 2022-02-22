import React, { Component } from "react";

import { Grid, Typography } from "@mui/material/";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

const avengers = [
    {
        image: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg",
        search: "Captain America"
    },
    {
        image: "https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg",
        search: "Thor"
    },
    {
        image: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
        search: "Iron Man"
    },
    {
        image: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg",
        search: "Hulk"
    },
    {
        image: "https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg",
        search: "Black Widow"
    },
    {
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b.jpg",
        search: "Hawkeye"
    },
]

class HeroLanding extends Component {
    render() {
        return (
            <Grid container justifyContent="center" >
                <Grid item xs={12}>
                    <Typography align="center" variant="h2"> The Avengers</Typography>

                </Grid>
                <Grid item xs={11}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        {avengers.map((item) => (
                            <Grid item md={1.5}>
                                <Card >
                                    <CardActionArea onClick={() => this.props.avengerSelected(item.search)}>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={item.image}
                                        />
                                    </CardActionArea>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>

            </Grid>

        )
    }
}

export default HeroLanding;