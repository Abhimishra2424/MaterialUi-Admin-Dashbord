import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { PageHeader } from "../Common/CommonComponent";
import { GetPost } from "../../utils/blogRequest";

export default function Blog() {
  const [posts, setPosts] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      GetPost({ limit: 25 }).then(({ data: { data } }) => {
        setPosts(data);
      });
      setFetched(true);
    }
  }, [fetched]);

  return (
    <Box mt={2}>
      <PageHeader label="Blog" pageTitle="Blog Posts" />

      {/* blogs pots */}
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Card>
            <List>
              <ListItem>
                <ListItemIcon>
                  {/* <Avatar src={item.picture} alt={item.firstName}></Avatar> */}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body1" component="h1">
                    Abhi
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
