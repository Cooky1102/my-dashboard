import { memo } from "react";
import { ResponsiveBar } from "@nivo/bar";

import { useTheme } from "@/components/providers/theme-provider.tsx";
import { nivoDarkTheme } from "@/lib/config.ts";

const Overview = () => {
  const { isDark } = useTheme();

  return (
    <ResponsiveBar
      data={data}
      keys={["This Year", "Last Year"]}
      indexBy="month"
      margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ id, data }) => String(data[`${id}Color`])}
      theme={isDark ? nivoDarkTheme : {}}
      enableLabel={false}
      borderRadius={7}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Orders",
        legendPosition: "middle",
        legendOffset: -50,
        truncateTickAt: 0,
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top-right",
          direction: "row",
          justify: false,
          translateY: -50,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
    />
  );
};

export default memo(Overview);

interface IData {
  [id: string]: string | number;
}

const data: IData[] = [
  {
    month: "Jan",
    "This Year": 195,
    "This YearColor": "hsl(244, 88%, 57%)",
    "Last Year": 180,
    "Last YearColor": "#93c5fd",
  },
  {
    month: "Feb",
    "This Year": 300,
    "This YearColor": "hsl(244, 88%, 57%)",
    "Last Year": 200,
    "Last YearColor": "#93c5fd",
  },
  {
    month: "Mar",
    "This Year": 200,
    "This YearColor": "hsl(244, 88%, 57%)",
    "Last Year": 300,
    "Last YearColor": "#93c5fd",
  },
  {
    month: "Apr",
    "This Year": 278,
    "This YearColor": "hsl(244, 88%, 57%)",
    "Last Year": 189,
    "Last YearColor": "#93c5fd",
  },
  {
    month: "May",
    "This Year": 189,
    "This YearColor": "hsl(244, 88%, 57%)",
    "Last Year": 239,
    "Last YearColor": "#93c5fd",
  },
  {
    month: "Jun",
    "This Year": 239,
    "This YearColor": "hsl(244, 88%, 57%)",
    "Last Year": 349,
    "Last YearColor": "#93c5fd",
  },
];
