import React from "react";
import Header from "../components/header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import CheckoutProduct from "../components/checkoutProduct";
import { useSession } from "next-auth/client";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt=""
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket Is Empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item, index) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                  category={item.category}
                  hasPrime={item.hasPrime}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} item):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
