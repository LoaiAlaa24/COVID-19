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

function createData(date, time, noOfPatients, busyRooms,avalRooms,avalBeds,avalVen,id) {
  return { date, time, noOfPatients, busyRooms,avalRooms,avalBeds,avalVen,id};
}

const rows = [
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,1),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,2),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,3),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,4),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,5),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,6),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,7),
  createData("٣١/٣","٤:٠٠ مساءآ", 400 , 60,30,40,8)
];

export default function StatusTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.headStyle}>
          <TableRow>
          <TableCell  className={classes.textColor} align="right">عدد اجهزة التنفس</TableCell>
          <TableCell  className={classes.textColor} align="right">عدد السراير المتاحة   </TableCell>
             <TableCell   className={classes.textColor} align="right">عدد الغرف المتاحة</TableCell>
            <TableCell  className={classes.textColor} align="right">عدد الغرف المشغولة</TableCell>
            <TableCell className={classes.textColor} align="right">اعداد المرضى</TableCell>
            <TableCell   className={classes.textColor} align="right">الوقت</TableCell>
            <TableCell   className={classes.textColor} align="right" > التاريخ  </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell style={{width:100,fontSize:18}} align="right">{row.avalVen}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.avalBeds}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.avalRooms}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.busyRooms}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.noOfPatients}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.time}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
