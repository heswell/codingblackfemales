import cx from "clsx";
import { useDirection } from "./useDirection";

import "./MarketPrice.css";
import { memo } from "react";

const CHAR_ARROW_UP = String.fromCharCode(11014);
const CHAR_ARROW_DOWN = String.fromCharCode(11015);

export const UP1 = "up1";
export const UP2 = "up2";
export const DOWN1 = "down1";
export const DOWN2 = "down2";

export interface MarketPriceProps {
  align?: "left" | "right";
  className?: string;
  priceLevel: number;
  price: number;
}

const classBase = "MarketPrice";

export const MarketPrice = memo(
  ({ align = "left", className, price, priceLevel }: MarketPriceProps) => {
    const direction = useDirection(priceLevel, price);
    const arrow =
      direction === UP1 || direction === UP2
        ? CHAR_ARROW_UP
        : direction === DOWN1 || direction === DOWN2
        ? CHAR_ARROW_DOWN
        : null;

    const dirClass = direction ? ` ` + direction : "";

    return (
      <div
        className={cx(classBase, className, dirClass, {
          vuuAlignRight: align === "right",
        })}
      >
        <span className="vuuArrow">{arrow}</span>
        <span className="vuuPrice">{price}</span>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.price === nextProps.price
);
MarketPrice.displayName = "MarketPrice";
