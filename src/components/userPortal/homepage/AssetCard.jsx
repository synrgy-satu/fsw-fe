/* eslint-disable react/prop-types */
import { valueFormatter } from "../../../utils/homepage/homepageUtils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AssetCard = ({
  asset,
  currency,
  activeCurrency,
  data,
  aggregateData,
}) => {
  return (
    <div className="col-span-4 bg-white rounded-[20px] p-4">
      <div className="mb-4">
        <p className="font-extrabold">{asset.toUpperCase()}</p>
        <p className="text-primary font-extrabold">
          {currency[activeCurrency]?.locale === "us" && (
            <span className="me-2">{currency[activeCurrency]?.symbol}</span>
          )}
          {valueFormatter(
            aggregateData(data, asset),
            currency[activeCurrency]?.convert,
            currency[activeCurrency]?.locale
          )}
        </p>
      </div>
      <ResponsiveContainer width="150%" height={125} className="-ms-16">
        <LineChart data={data}>
          <XAxis tick={false} dataKey="month" stroke="#8884d8" />
          <YAxis tick={false} stroke="#8884d8" />
          <Tooltip
            formatter={(value) => valueFormatter(value)}
            contentStyle={{ zIndex: 1000 }}
          />
          <Line
            dot={false}
            type="linear"
            dataKey={asset}
            stroke="#8884d8"
            strokeWidth="3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetCard;
