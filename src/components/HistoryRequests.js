import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  paper: {
    marginBottom: "20px",
    padding: "10px",
  },
  pagination: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",


  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Typography color="black" className={classes.depositContext}>
          Name author:
        </Typography>
        <Typography component="p" variant="h6">
          Name request 1
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View
          </Link>
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography color="black" className={classes.depositContext}>
          Name author:
        </Typography>
        <Typography component="p" variant="h6">
          Name request 2
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View
          </Link>
        </div>
      </Paper>
      <div className={classes.pagination}>
        <Pagination count={10} size="small" />
      </div>
    </>
  );
}
