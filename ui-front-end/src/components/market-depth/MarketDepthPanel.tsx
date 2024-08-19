import { HTMLAttributes } from "react";
import type { MarketDepthRow } from "./useMarketDepthData";
import { MarketPrice } from "./MarketPrice";
import { MarketQuantity } from "./MarketQuantity";

import "./MarketDepthPanel.css";

const classBase = "vuuMarketDepthPanel";

// prettier-ignore
const testData: MarketDepthRow[] = [
  { symbolLevel:"1230", level: 0, bid: 1000, bidQuantity: 500, offer: 1010, offerQuantity: 700 },
  { symbolLevel:"1231", level: 1, bid: 990, bidQuantity: 700, offer: 1012, offerQuantity: 400 },
  { symbolLevel:"1232", level: 2, bid: 985, bidQuantity: 1200, offer: 1013, offerQuantity: 800 },
  { symbolLevel:"1233", level: 3, bid: 984, bidQuantity: 1300, offer: 1018, offerQuantity: 750 },
  { symbolLevel:"1234", level: 4, bid: 970, bidQuantity: 800, offer: 1021, offerQuantity: 900 },
  { symbolLevel:"1235", level: 5, bid: 969, bidQuantity: 700, offer: 1026, offerQuantity: 1500 },
  { symbolLevel:"1236", level: 6, bid: 950, bidQuantity: 750, offer: 1027, offerQuantity: 1500 },
  { symbolLevel:"1237", level: 7, bid: 945, bidQuantity: 900, offer: 1029, offerQuantity: 2000 },
  { symbolLevel:"1238", level: 8, bid: 943, bidQuantity: 500, offer: 1031, offerQuantity: 500 },
  { symbolLevel:"1239", level: 9, bid: 940, bidQuantity: 200, offer: 1024, offerQuantity: 800 },
];

export interface MarketDepthPanelProps extends HTMLAttributes<HTMLDivElement> {
  data?: MarketDepthRow[];
}

export const MarketDepthPanel = ({
  data = testData,
  ...htmlAttributes
}: MarketDepthPanelProps) => {
  const maxQuantity = data.reduce(
    (maxQuantity, { bidQuantity, offerQuantity }) =>
      Math.max(maxQuantity, bidQuantity, offerQuantity),
    0
  );

  return (
    <div {...htmlAttributes} className={classBase}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan={2}>
              <div className={`${classBase}-heading`}>Bid</div>
            </th>
            <th colSpan={2}>
              <div className={`${classBase}-heading`}>Ask</div>
            </th>
          </tr>
          <tr>
            <th></th>
            <th className={`${classBase}-quantity`}>
              <div className={`${classBase}-cell vuuAlignRight`}>Quantity</div>
            </th>
            <th>
              <div className={`${classBase}-cell vuuAlignRight`}>Price</div>
            </th>
            <th>
              <div className={`${classBase}-cell`}>Price</div>
            </th>
            <th className={`${classBase}-quantity`}>
              <div className={`${classBase}-cell`}>Quantity</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ level, bid, bidQuantity, offer, offerQuantity }) =>
            // prettier-ignore
            <tr key={level}>
                  <td><div className={`${classBase}-cell level`}>{level}</div></td>
                  <td><MarketQuantity align="right" className={`${classBase}-cell vuuBid`} quantity={bidQuantity} maxQuantity={maxQuantity}/></td>
                  <td><MarketPrice align="right" className={`${classBase}-cell`} price={bid}/></td>
                  <td><MarketPrice  className={`${classBase}-cell`} price={offer}/></td>
                  <td><MarketQuantity className={`${classBase}-cell vuuOffer`} quantity={offerQuantity} maxQuantity={maxQuantity}/></td>
                </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
