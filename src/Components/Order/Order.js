import moment from "moment/moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      {/* <h2>Order</h2> */}
      <div className="order__details">
        <p className="order__id">
          <strong>Order ID:</strong>
          <small>{order.id}</small>
        </p>
        <p className="order__created">
          {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
        </p>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton //to hide the "remove from basket" button
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
