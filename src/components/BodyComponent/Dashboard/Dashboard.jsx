import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  CardContent,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { blue, indigo, yellow, red, green } from "@material-ui/core/colors";
import { PageHeader } from "../../Common/CommonComponent";
import { useStyles } from "../BodyStyles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { DisplayCradGraph } from "../../Common/GraphComponent";
import {
  FakeArrayDataGenerator,
  randomValueGenerator,
} from "../../../utils/FakeArrayData";
import UserOverview from "./UserOverview";
import { GetPost, GetUser } from "../../../utils/blogRequest";
import ListComponent from "./ListComponent";

export default function Dashboard() {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [fetched, setFetched] = useState(false);

  const DisplayData = [
    {
      label: "posts",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "10%",
    },
    {
      label: "Pages",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "30%",
    },
    {
      label: "New Visitor",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "23%",
    },
    {
      label: "Total Visitor",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "30%",
    },
  ];

  const graphData = [
    {
      id: "posts",
      data: FakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: blue[500],
      bgColor: blue[50],
    },
    {
      id: "Pages",
      data: FakeArrayDataGenerator({ count: 9, digit: 1000 }),
      brColor: indigo[500],
      bgColor: indigo[50],
    },
    {
      id: "New Visitor",
      data: FakeArrayDataGenerator({ count: 9, digit: 1000 }),
      brColor: red[500],
      bgColor: red[50],
    },
    {
      id: "Total Visitor",
      data: FakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: yellow[500],
      bgColor: yellow[50],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      graphData.map((item, i) =>
        DisplayCradGraph({
          id: item.id,
          data: item.data,
          brColor: item.brColor,
          bgColor: item.bgColor,
        })
      );
      setFetched(true);
    }
    // eslint-disable-next-line
  }, [fetched]);

  // for api calling
  useEffect(() => {
    if (!fetched) {
      GetPost({ limit: 5 }).then(({ data: { data } }) => {
        setPost(data);
      });
      GetUser({ limit: 5 }).then(({ data: { data } }) => {
        setAuthor(data)
      });
      setFetched(true);
    }
  }, [fetched]);

  return (
    <Box>
      <PageHeader label="Dashborad" pageTitle="Blog overview" />
      <Grid container spacing={1}>
        {DisplayData.map((item, i) => (
          <Grid item xs={6} sm={3} key={i}>
            <Card>
              <CardContent className={classes.cardContent}>
                <canvas
                  // key={i}
                  id={item.label}
                  className={classes.displaycardgraph}
                ></canvas>
                <Typography variant="body2" className={classes.cardLabel}>
                  {item.label}
                </Typography>
                <Typography
                  variant="h5"
                  component="h6"
                  className={classes.cardTitle}
                >
                  {item.value}
                </Typography>
                <Typography
                  component="p"
                  style={{ textAlign: "center", marginBottom: "0px" }}
                >
                  <Button
                    size="small"
                    className={classes.ratioBtn}
                    startIcon={item.icon}
                    style={{
                      color: item.label[0] === "P" ? green[600] : red[500],
                    }}
                  >
                    {item.iconLabel}
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <UserOverview />

      {/* list components */}
      <ListComponent post={post} author={author} />
    </Box>
  );
}
