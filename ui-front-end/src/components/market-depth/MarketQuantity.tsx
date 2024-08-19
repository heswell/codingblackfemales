import cx from "clsx";

import "./MarketQuantity.css";

export interface MarketPriceProps {
  align?: "left" | "right";
  className?: string;
  maxQuantity: number;
  quantity: number;
}

const classBase = "MarketQuantity";

export const MarketQuantity = ({
  align = "left",
  className,
  maxQuantity,
  quantity,
}: MarketPriceProps) => {
  return (
    <div
      className={cx(classBase, className, { vuuAlignRight: align === "right" })}
    >
      <div
        className={`${classBase}-pct`}
        style={{ width: `${(quantity / maxQuantity) * 100}%` }}
      />
      <span className={`${classBase}-qty`}>{quantity}</span>
    </div>
  );
};
