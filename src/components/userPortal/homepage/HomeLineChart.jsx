import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { valueFormatter } from "../../../utils/homepage/homepageUtils";
import { FaCircleNotch } from "react-icons/fa6";

const tickFormatter = (label) => label / 1000;

// const isLoading = false;
// const isLoading = true;

const HomeLineChart = ({
  data,
  xDataKey,
  line1DataKey,
  line2DataKey,
  height,
  dot,
  isLoading
}) => {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={height ?? 175}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 5" />
          <XAxis dataKey={xDataKey} />
          <YAxis tickFormatter={tickFormatter} />
          <Tooltip
            formatter={(value) => valueFormatter(value)}
            contentStyle={{ zIndex: 1000 }}
          />
          <Line
            type="linear"
            dataKey={line1DataKey}
            // stroke="#a63030"
            stroke="#8884d8"
            strokeWidth="2"
            dot={dot ?? true}
            />
          <Line
            type="linear"
            dataKey={line2DataKey}
            stroke="#a63030"
            // stroke="#8884d8"
            strokeWidth="2"
            strokeDasharray="5 5"
            activeDot={false}
            dot={dot ?? true}
          />
        </LineChart>
      </ResponsiveContainer>
      {isLoading && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex bg-white">
          <div className="items-center content-center m-auto">
            <FaCircleNotch
              className="
            animate-spin w-10 h-10 text-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLineChart;
