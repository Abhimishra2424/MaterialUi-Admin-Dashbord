import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "../BodyStyles";

export default function ListComponent({ post, author }) {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={1}>
        {/* author */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper>
            <List>
              <ListItem>
                <Typography variant="h6"> Top Author</Typography>{" "}
              </ListItem>
              <Divider />
              {author.lenght === 0 ? (
                <Box className={classes.boxCenter}>
                  <CircularProgress />
                </Box>
              ) : (
                author.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <Avatar src={item.picture} alt={item.firstName}></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1" component="h1">
                        {item.firstName}
                      </Typography>
                      <Typography variant="subtitle2" color="text">
                        {item.email}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
        {/* Post */}
        <Grid item xs={12} sm={6} md={7}>
          <Paper>
            <List>
              <ListItem>
                <Typography variant="h6"> Latest Post</Typography>{" "}
              </ListItem>
              <Divider />
              {post.lenght === 0 ? (
                <Box className={classes.boxCenter}>
                  <CircularProgress />
                </Box>
              ) : (
                post.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <Avatar src={item.image} alt={item.text}></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1" component="h1">
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
