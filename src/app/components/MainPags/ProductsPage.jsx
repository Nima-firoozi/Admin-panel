import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";
const margin = { right: 24 };
const uData = [4000, 3000, 2000];
const pData = [2400, 1398, 9800];
const amtData = [2400, 2210, 0];
const xLabels = ["January", "February", "March"];

const StackedAreaChart = () => {
  return (
    <LineChart
      height={300}
      series={[
        {
          data: uData,
          label: "T-Sirts",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: pData,
          label: "Pants",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: amtData,
          label: "Shoes",
          area: true,
          stack: "total",
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      yAxis={[{ width: 50 }]}
      margin={margin}
    />
  );
};
const ActionAreaCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/t.gpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default function ProductsPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "5px",
      }}>
      <Box>
        <ActionAreaCard />
      </Box>
      <Box>
        <ActionAreaCard />
      </Box>
      <Box>
        <ActionAreaCard />
      </Box>
      <Box sx={{ width: "100%" }}>
        <StackedAreaChart />
      </Box>
    </Box>
  );
}
