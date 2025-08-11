import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  useTheme,
} from "@mui/material";
import { LineChart } from "@mui/x-charts";

function createData(name, tshirt, pants, shoes) {
  const total = tshirt + pants + shoes;
  return { name, tshirt, pants, shoes, total };
}

const rows = [
  createData("John Smith", 45, 32, 28),
  createData("Emma Johnson", 38, 41, 52),
  createData("Michael Brown", 51, 28, 49),
  createData("Sarah Davis", 29, 53, 38),
];

const SalesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", height: "100%" }}
        size="small"
        aria-label="sales table">
        <TableHead>
          <TableRow>
            <TableCell>Salesperson</TableCell>
            <TableCell align="right">T-Shirts ($)</TableCell>
            <TableCell align="right">Pants ($)</TableCell>
            <TableCell align="right">Shoes ($)</TableCell>
            <TableCell align="right">Total Sales ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tshirt.toLocaleString()}</TableCell>
              <TableCell align="right">{row.pants.toLocaleString()}</TableCell>
              <TableCell align="right">{row.shoes.toLocaleString()}</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                {row.total.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const SalesTrendChart = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}>
      <LineChart
        xAxis={[
          {
            data: ["January", "February", "March"],
            scaleType: "point",
            label: "Months",
          },
        ]}
        yAxis={[
          {
            label: "Total Sales ($)",
          },
        ]}
        series={[
          {
            label: "John Smith",
            data: [141, 80, 105],
            color: "#FF5252",
            showMark: true,
          },
          {
            label: "Emma Johnson",
            data: [67, 200, 131],
            color: "#FFD740",
            showMark: true,
          },
          {
            label: "Michael Brown",
            data: [189, 49, 128],
            color: "#448AFF",
            showMark: true,
          },
          {
            label: "Sarah Davis",
            data: [90, 90, 120],
            color: "#FF9100",
            showMark: true,
          },
        ]}
        slotProps={{
          legend: {
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
        tooltip={{
          trigger: "item",
          formatter: (params) => {
            return `${params.seriesName}<br/>
                    ${params.value}$ in ${
              params.dataIndex === 0
                ? "January"
                : params.dataIndex === 1
                ? "February"
                : "March"
            }`;
          },
        }}
      />
    </Paper>
  );
};
const SimpleTopSellerCard = () => {
  return (
    <Box
      sx={{
        border: "2px solid #FF5252",
        borderRadius: "12px",
        p: 3,
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}>
      <Typography variant="h6" sx={{ color: "#555", mb: 1 }}>
        🏆 TOP PERFORMER 🏆
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#FF5252",
          mb: 2,
        }}>
        Emma Johnson
      </Typography>
      <Typography>
        Best seller this month with <strong>131</strong> in sales
      </Typography>
    </Box>
  );
};

export default function SellersPage() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "5px",
      }}>
      <Box sx={{ width: "100%", height: "auto" }}>
        <SalesTable />
      </Box>
      <Box
        sx={{
          width: "48%",
          height: "400px",
        }}>
        <SalesTrendChart />
      </Box>
      <Box
        sx={{
          width: "48%",
          height: "220px",
          background: theme.palette.background.paper,
        }}>
        <SimpleTopSellerCard />
      </Box>
    </Box>
  );
}
