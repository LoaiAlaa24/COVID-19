import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headStyle:{
      backgroundColor:"#E20100"
  },
  textColor:{
      color:"white",
      fontSize:18,
      width:100
  },
  valueStyle:{
    fontSize:18,
      width:100
  }
});

function createData(name, area, district, noOfPatients, busyRooms,avalRooms,avalBeds,avalVen) {
  return { name, area, district, noOfPatients, busyRooms,avalRooms,avalBeds,avalVen };
}

const rows = [
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.headStyle}>
          <TableRow>
          <TableCell  className={classes.textColor} align="right">عدد اجهزة التنفس</TableCell>
          <TableCell className={classes.textColor} align="right">عدد السراير المتاحة</TableCell>
          <TableCell  className={classes.textColor} align="right">عدد الغرف المتاحة</TableCell>
             <TableCell   className={classes.textColor} align="right">عدد الغرف المشغولة</TableCell>
            <TableCell  className={classes.textColor} align="right">اعداد المرضى</TableCell>
            <TableCell className={classes.textColor} align="right">المحافظة</TableCell>
            <TableCell   className={classes.textColor} align="right">المنطقة</TableCell>
            <TableCell   className={classes.textColor} align="right" > المستشفى</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell style={{width:100,fontSize:18}} align="right">{row.avalVen}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.avalBeds}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.avalRooms}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.busyRooms}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.noOfPatients}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.district}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.area}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
