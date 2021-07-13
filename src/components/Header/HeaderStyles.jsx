import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    backgroundColor: "#673ab7",
  },
  title: {
    color: "#fff",
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvater: {
    backgroundColor: blue["A200"],
  },
  navAvatar: {
    width: "35px",
    height: "35px",
  },
  // wrapper of main contianer
  wrapper: {
    height: "100vh",
    background: "#efefef",
    padding: theme.spacing(2, 2, 0, 34),
    // is look like media breakpoints in material ui
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
    },
  },

  // side navbar full screen
  drawerPaper: {
    width: "250px",
    marginTop: "65px",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(7),
    },
  },
  navlinks: {
    color: blueGrey["A400"],
    "& :hover , &:hover div": {
      color: blue["A200"],
    },
    "& div": {
      color: blueGrey["A400"],
    },
  },
  activeNavlinks: {
    color: blue["A700"],
    "& div": {
      color: blue["A700"],
    },
  },
  navButton: {
    width: "100%",
    textTransform: "capitalize",
  },
}));
