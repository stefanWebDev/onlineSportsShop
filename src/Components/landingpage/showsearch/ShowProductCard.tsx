import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Product } from "./showSearchInterface";

export default function ShowProductCard(props: Product) {

  const cardStyle = {
    transitionDuration: '0.3s',
    height: '40vw'
}

  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={`./images/productimages/${props.image}.jpg`}
          title="asdf"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.manufacturer}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          {props.bullet_points.map((point) => {
            return (
              <Typography gutterBottom variant="h5" component="h3">
                {point}
              </Typography>
            );
          })}
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Show Product
        </Button>
      </CardActions>
    </Card>
  );
}
