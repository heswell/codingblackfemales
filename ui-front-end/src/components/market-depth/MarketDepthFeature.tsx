import { MarketDepthPanel } from "./MarketDepthPanel";
import { useMarketDepthData } from "./useMarketDepthData";
import { schemas } from "../../data/algo-schemas";

import "./MarketDepthFeature.css";

export const MarketDepthFeature = () => {
  const data = useMarketDepthData(schemas.prices);
  return <MarketDepthPanel data={data} />;
};
