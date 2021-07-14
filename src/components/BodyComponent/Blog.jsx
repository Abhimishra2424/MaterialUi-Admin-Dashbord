import { Box, Grid } from "@material-ui/core";
import React from "react";
import { PageHeader } from "../Common/CommonComponent";

export default function Blog() {
  return (
    <Box>
      <PageHeader label="Blog" pageTitle="Blog Posts" />
      <Grid container></Grid>
    </Box>
  );
}
