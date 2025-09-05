import React, { useState } from "react";

function CheckoutPage({ cart = [] }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "cod",
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase(); 
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      alert("❌ Invalid captcha, try again!");
      setCaptcha(generateCaptcha()); 
      setCaptchaInput("");
      return;
    }
    alert("✅ Order placed successfully!\nThank you for shopping with us.");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={form.zip}
            onChange={handleChange}
            required
          />
          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={form.payment === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={form.payment === "card"}
                onChange={handleChange}
              />
              Credit/Debit Card
            </label>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))
        )}
        <hr />
        <h2>Total: ₹{total}</h2>
      </div>
    </div>
  );
}

export default CheckoutPage;
