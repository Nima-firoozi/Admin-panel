"use cleint";

import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled, useTheme, width } from "@mui/system";
import { BarChart, LineChart } from "@mui/x-charts";

const WelcomeCard = styled(Paper)({
  borderRadius: "20px",
  padding: "32px",
  color: "white",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  width: "100%",
  margin: "auto",
  textAlign: "center",
});

const NameSticker = styled(Box)({
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "50px",
  padding: "8px 16px",
  display: "inline-block",
  marginBottom: "16px",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255,255,255,0.3)",
});

const Welcome = () => {
  const theme = useTheme();
  return (
    <WelcomeCard
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #2E7D32 0%, #1565C0 100%)"
            : "linear-gradient(135deg, #4CAF50 0%, #2196F3 100%)",
      }}>
      <NameSticker>
        <Typography variant="h6" fontWeight="bold">
          👋 Nima Firoozi
        </Typography>
      </NameSticker>

      <Typography variant="h4" gutterBottom fontWeight="bold">
        Welcome Back, Boss!
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic" }}>
        "Warning: This admin’s style is 100% fire. 🔥"
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: "white",
          color: "#2196F3",
          borderRadius: "50px",
          fontWeight: "bold",
          "&:hover": {
            background: "rgba(255,255,255,0.9)",
          },
        }}>
        Let's Create Magic!
      </Button>

      <Box
        sx={{
          position: "absolute",
          top: -50,
          right: -50,
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }}
      />
    </WelcomeCard>
  );
};

const Barchart = () => {
  return (
    <BarChart
      xAxis={[
        {
          data: ["January", "February", "March"],
          scaleType: "band",
          label: "Products",
        },
      ]}
      yAxis={[
        {
          label: "Sales ($)",
        },
      ]}
      series={[
        {
          data: [4500, 3200, 6100],
          label: "Shoes",
          color: "#4CAF50",
        },
        {
          data: [3800, 4100, 5200],
          label: "Pants",
          color: "#2196F3",
        },
        {
          data: [5100, 2800, 4900],
          label: "T-Shirts",
          color: "#FF9800",
        },
      ]}
      tooltip={{
        trigger: "item",
        formatter: (params) => {
          return `${params.seriesName}<br/>
              ${params.name}: $${params.value}`;
        },
      }}
      legend={{
        position: { vertical: "bottom", horizontal: "middle" },
      }}
    />
  );
};

const Linechart = () => (
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
        label: "Number of Customers",
      },
    ]}
    series={[
      {
        label: "Male",
        data: [45, 62, 58],
        curve: "linear",
        color: "#4CAF50",
        showMark: true,
      },
      {
        label: "Female",
        data: [52, 68, 74],
        curve: "linear",
        color: "#F44336",
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
              ${params.value} customers in ${
          params.dataIndex === 0
            ? "January"
            : params.dataIndex === 1
            ? "February"
            : "March"
        }`;
      },
    }}
  />
);

export default function DashboardPage() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "5px",
        }}>
        <Welcome />
        <Box
          sx={{
            borderRadius: "10px",
            background: theme.palette.background.paper,
            width: { sx: "100%", md: "48%" },
            height: "45%",
          }}>
          <Barchart />
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            background: theme.palette.background.paper,
            width: { sx: "100%", md: "48%" },
            height: "45%",
          }}>
          <Linechart />
        </Box>
      </Box>
    </>
  );
}
