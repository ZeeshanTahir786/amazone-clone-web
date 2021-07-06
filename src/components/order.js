import moment from "moment";
import React from "react";
import Currency from "react-currency-formatter";

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="GBP" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
