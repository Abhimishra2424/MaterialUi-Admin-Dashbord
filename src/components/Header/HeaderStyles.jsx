import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";


export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  title: {
    color: "red",
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvater:{
   backgroundColor:blue["A200"]
  },
  navAvatar:{
    width:"35px",
    height:"35px"
  }
}));