import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PieChart } from "@mui/x-charts/PieChart";

export const salesPeople = [
  { label: "John Smith", value: 38.6 },
  { label: "Emma Johnson", value: 42.9 },
  { label: "Michael Brown", value: 37.5 },
  { label: "Sarah Davis", value: 38.3 },
];

export const salesValueFormatter = (item) => `$${item.value.toFixed(1)}k`;

export default function SalesPieChart() {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(4); // تعداد پیش‌فرض = 4 فروشنده
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") return;
    setItemNb(newValue);
  };

  const handleRadius = (event, newValue) => {
    if (typeof newValue !== "number") return;
    setRadius(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", p: 3, border: "1px solid #eee", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sales Performance Distribution
      </Typography>

      <PieChart
        height={250}
        width={400}
        series={[
          {
            data: salesPeople.slice(0, itemNb),
            innerRadius: radius,
            arcLabel: (params) => params.label,
            arcLabelMinAngle: 20,
            valueFormatter: salesValueFormatter,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -10, color: "gray" },
          },
        ]}
        skipAnimation={skipAnimation}
      />

      <Box sx={{ maxWidth: 400, mx: "auto", mt: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={skipAnimation}
              onChange={(e) => setSkipAnimation(e.target.checked)}
            />
          }
          label="Disable animations"
        />

        <Typography id="radius-slider" gutterBottom>
          Inner radius: {radius}%
        </Typography>
        <Slider
          value={radius}
          onChange={handleRadius}
          valueLabelDisplay="auto"
          min={0}
          max={80}
        />

        <Typography id="items-slider" gutterBottom sx={{ mt: 2 }}>
          Number of sellers: {itemNb}
        </Typography>
        <Slider
          value={itemNb}
          onChange={handleItemNbChange}
          valueLabelDisplay="auto"
          min={1}
          max={4}
        />
      </Box>
    </Box>
  );
}
