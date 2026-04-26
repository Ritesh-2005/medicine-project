import { useEffect, useState } from "react";
import { getCartId } from "../utils/cart";

export default function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const cartId = getCartId();
    if (!cartId) return;

    fetch(`http://localhost:8080/api/cart/${cartId}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  if (!cart || !cart.items?.length) {
    return <p className="text-center mt-10">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-semibold">
              {item.product.productName}
            </h2>
            <p>₹{item.price} × {item.quantity}</p>
          </div>

          <p className="font-bold">
            ₹{item.price * item.quantity}
          </p>
        </div>
      ))}

      <h2 className="text-xl font-bold text-right mt-6">
        Total: ₹{cart.totalPrice}
      </h2>
    </div>
  );
}
