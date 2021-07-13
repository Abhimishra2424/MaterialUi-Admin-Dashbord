import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(3, 0),
  },
  // page
  pageTitle: {
    color: blueGrey["800"],
    marginBottom: theme.spacing(2),
    textTransform: "capitalize",
  },
  subTitle: {
    color: blueGrey[500],
    margin: theme.spacing(1, 0),
    textTransform: "uppercase",
  },
  // dashBoard cards
  cardLabel: {
    textTransform: "uppercase",
    color: blueGrey[500],
    textAlign: "center",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  cardTitle: {
    textTransform: "capitalize",
    color: blueGrey[800],
    textAlign: "center",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  ratioBtn: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  // cardGraph
  displaycardgraph: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100% !important",
    height: "45% !important",
  },
  cardContent: {
    position: "relative",
  },
}));
