import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = {
  // color: "red",
  // fontSize: "2.5rem",
  // textTransform: "uppercase",
  // };
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numLength = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {numLength > 0 ? (
          <>
            <p>
              Authentic italian Cuisine. {numLength} creative pizza dishes to
              choose from. All from our stone oven, All organic and All pure
            </p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We are still working on our menu. Plz come back later :)</p>
        )}
      </main>
    </>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour < closeHours;

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order closeHours={closeHours} />
        ) : (
          <p>
            We are happy to accomodate you between {openHours}:00 and{" "}
            {closeHours}:00
          </p>
        )}
      </footer>
    </div>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We are open from {openHours}:00 till {closeHours}:00. Come visit us or
        order Online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
