import { Box } from "@mui/material";
import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";

const inventoryData = [
  {
    id: 1,
    label: "Pants",
    value: 40.4,
    color: "#FF5252",
  },
  {
    id: 2,
    label: "T-Shirts",
    value: 30.6,
    color: "#448AFF",
  },
  {
    id: 3,
    label: "Shoes",
    value: 29.0,
    color: "#4CAF50",
  },
];

const valueFormatter = (item) => `${item.value}%`;

const InventoryPieChart = () => {
  return (
    <PieChart
      series={[
        {
          data: inventoryData,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          arcLabel: (item) => `${item.label}`,
          arcLabelMinAngle: 20,
          valueFormatter,
        },
      ]}
      height={300}
      width={400}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "center" },
          padding: 0,
        },
      }}
    />
  );
};
const settings = {
  width: 200,
  height: 200,
  value: 60,
};

const ArcDesign = () => {
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#52b202",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
  );
};

export default function StorePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box>
        <ArcDesign></ArcDesign>
      </Box>
      <Box>
        <InventoryPieChart />
      </Box>
    </Box>
  );
}
