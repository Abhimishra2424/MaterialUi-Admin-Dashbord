import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { GeneralGraphComponent } from "../../Common/GraphComponent";
import { useEffect } from "react";
import { useStyles } from "../BodyStyles";
import { FakeArrayDataGenerator } from "../../../utils/FakeArrayData";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";

export default function UserOverview() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);

  const GraphData = [
    {
      id: "userGraph",
      type: "line",
      datasets: [
        {
          label: "Current Month ",
          data: FakeArrayDataGenerator({ count: 30, digit: 100 }),
          backgroundColor: "rgba(21,101,192,0.6)",
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Last Month ",
          data: FakeArrayDataGenerator({ count: 30, digit: 100 }),
          backgroundColor: "rgba(198,40,40,0.6)",
          borderColor: red["A200"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["week1", "week2", "week3", "week4", "week4", "week5"],
    },
    {
      id: "userPieGraph",
      type: "pie",
      datasets: [
        {
          label: "Current Month ",
          data: FakeArrayDataGenerator({ count: 3, digit: 1000 }),
          backgroundColor: [blue[100], blue[200], blue[300]],
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["Desktop", "Tablet", "Mobile"],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      GraphData.map((item, i) =>
        GeneralGraphComponent({
          id: item.id,
          type: item.type,
          datasets: item.datasets,
          xAxisLabels: item.xAxisLabels,
        })
      );
      setFetched(true);
    }
     // eslint-disable-next-line 
  }, [fetched]);

  useEffect(() => {});

  return (
    <Box className={classes.section}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                User Overviews
              </Typography>
            </CardContent>
            <CardContent>
              <canvas
                // key={i}
                id="userGraph"
                className={classes.displayUsergraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                Device Overviews
              </Typography>
            </CardContent>
            <CardContent>
              <canvas
                // key={i}
                id="userPieGraph"
                className={classes.displayUsergraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
