import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    fontSize: "55px !important",
    cursor: "pointer",
    marginLeft: 10,
    "&:hover": {
      color: "rgb(186, 130, 167)",
    },
  },
}));

export function IconHome() {
  const classes = useStyles();
  return <HomeIcon className={classes.root} />;
}
