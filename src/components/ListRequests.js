import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Pagination from "@material-ui/lab/Pagination";

function createData(id, nameRequest, name, content, author, date,category,assignee,status) {
  return { id, nameRequest, name, content, author, date,category,assignee,status };
}

const rows = [
  createData(0, '1', 'Vo Ngoc Tran', 'Tupelo, MS', 'HB1', 'Ok','OK','Ok','Ok'),
  createData(1, '2', 'Le Bong', 'London, UK', 'HB2', 'Ok','OK','Ok','Ok'),
  createData(2, '3', '2021', 'Tom Scholz', 'HB1', 'Ok','OK','Ok','Ok'),
  createData(3, '4', 'Michael Jackson', 'Gary, IN', 'HB1', 'Ok','OK','Ok','Ok'),
  createData(4, '5', 'Hello', 'Long Branch, NJ', 'HB3', 'Ok','OK','Ok','Ok'),
  createData(5, '6', 'Marvel', 'Long Branch, NJ', 'HB4', 'Ok','OK','Ok','Ok'),
  createData(3, '7', 'Michael Jackson', 'Gary, IN', 'HB1', 'Ok','OK','Ok','Ok'),
  createData(4, '8', 'Hello', 'Long Branch, NJ', 'HB3', 'Ok','OK','Ok','Ok'),
  createData(5, '9', 'Marvel', 'Long Branch, NJ', 'HB4', 'Ok','OK','Ok','Ok'),

];



const useStyles = makeStyles((theme) => ({
  colorTable: {
    backgroundColor: "#b0b4af99",
  },
  pagination: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",


  },
}));

export default function ListRequest() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.colorTable}>
            <TableCell >ID</TableCell>
            <TableCell>Name Request</TableCell>
            <TableCell>Content Request</TableCell>
            <TableCell>Author Create</TableCell>
            <TableCell>Date Create</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.nameRequest}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.content}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.assignee}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className={classes.pagination}>
        <Pagination count={10} size="large" />
      </div>
    </React.Fragment>
  );
}
