import { Box, Button, Grid, TextField } from "@material-ui/core";
import React from "react";

export default function Form() {
  return (
    <Box mt={10}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <TextField variant="outlined" name="phone" label="Phone" />

          <TextField variant="outlined" name="phone" label="Name" />

          <TextField variant="outlined" name="phone" label="Address" />

          <TextField variant="outlined" name="phone" label="Pincode" />
        </Grid>
        <Grid xs={12} mr={3}>
          <Button variant="contained">submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
