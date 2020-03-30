import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  headStyle: {
    backgroundColor: "#E20100"
  },
  textColor: {
    color: "white",
    fontSize: 18,
    width: 100
  },
  valueStyle: {
    fontSize: 18,
    width: 100
  }
});

function createData(
  name,
  urgent,
  gov,
  requestedObj,
  requiredNo,
  avalItems,
  id
) {
  return { name, urgent, gov, requestedObj, requiredNo, avalItems, id };
}

const rows = [
  createData("حميات العجمي", "مهم", "الاسكندرية", "أقنعة", 60, 10, 1),
  createData("حميات العجمي", "مهم", "الاسكندرية", "أقنعة", 60, 10, 2),
  createData("حميات العجمي", "مهم", "الاسكندرية", "أقنعة", 60, 10, 3),
  createData("حميات العجمي", "مهم", "الاسكندرية", "أقنعة", 60, 10, 4),
  createData("حميات العجمي", "مهم", "الاسكندرية", "أقنعة", 60, 10, 5)
];

export default function RequirementTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.headStyle}>
          <TableRow>
            <TableCell className={classes.textColor} align="right">
            Avaliable Quanitity الاعداد المتاحة{" "}
            </TableCell>
            <TableCell className={classes.textColor} align="right">
           Requested Quantity   الاعداد المطلوبة{" "}
            </TableCell>
            <TableCell className={classes.textColor} align="right">
             Request الطلب{" "}
            </TableCell>
            <TableCell className={classes.textColor} align="right">
            Governorate المحافظة{" "}
            </TableCell>
            <TableCell className={classes.textColor} align="right">
            Priority  الضروره{" "}
            </TableCell>
            <TableCell className={classes.textColor} align="right">
              {" "}
            Hospital  المستشفى
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell style={{ width: 100, fontSize: 18 }} align="right">
                {row.avalItems}
              </TableCell>
              <TableCell style={{ width: 100, fontSize: 18 }} align="right">
                {row.requiredNo}
              </TableCell>
              <TableCell style={{ width: 100, fontSize: 18 }} align="right">
                {row.requestedObj}
              </TableCell>
              <TableCell style={{ width: 100, fontSize: 18 }} align="right">
                {row.gov}
              </TableCell>
              <TableCell style={{ width: 100, fontSize: 18 }} align="right">
                {row.urgent}
              </TableCell>
              <TableCell style={{ width: 100, fontSize: 18 }} align="right">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
