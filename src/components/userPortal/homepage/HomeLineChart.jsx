import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import { valueFormatter } from "../../../utils/homepage/valueFormatter";

const tickFormatter = (label) => label / 1000;

const HomeLineChart = ({ data, xDataKey, line1DataKey, line2DataKey, height, dot }) => {
  return (
    <ResponsiveContainer width="100%" height={height ?? 175}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 5" />
        {/* <XAxis dataKey="month" /> */}
        <XAxis dataKey={xDataKey} />
        <YAxis tickFormatter={tickFormatter} />
        <Tooltip
          formatter={(value) => valueFormatter(value)}
          contentStyle={{ zIndex: 1000 }}
        />
        <Line
          type="linear"
          // dataKey="deposit"
          dataKey={line1DataKey}
          stroke="#8884d8"
          strokeWidth="2"
          dot={dot ?? true}
          />
        <Line
          type="linear"
          // dataKey="debit"
          dataKey={line2DataKey}
          stroke="#a63030"
          strokeWidth="2"
          strokeDasharray="5 5"
          activeDot={false}
          dot={dot ?? true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HomeLineChart;