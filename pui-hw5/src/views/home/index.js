import './home.css';
import logo from './assets/logo-01.svg';
import original from './assets/original-cinnamon-roll.jpg';
import apple from './assets/apple-cinnamon-roll.jpg';
import raisin from './assets/raisin-cinnamon-roll.jpg';
import walnut from './assets/walnut-cinnamon-roll.jpg';
import chocolate from './assets/double-chocolate-cinnamon-roll.jpg';
import strawberry from './assets/strawberry-cinnamon-roll.jpg';
import Product from './Product.js';
import Navigation from './Navigation.js';
import React, { useRef } from 'react';

function Home() {

    const pTagRef = useRef();

    const [cart, setCart] = React.useState([]);

    const [cartPrice, setCartPrice] = React.useState(0);

    const [cartNum, setCartNum] = React.useState(0);

    const addToCart = (type, glaze, size, price) => {
        const newCart = cart.concat({ type, glaze, size, price});
        setCart(newCart);
        setCartPrice(Number(cartPrice) + Number(price));
        setCartNum(cartNum + 1);
        console.log(newCart);
        var text = "Added to cart:\n\n";
        text += (type + " cinnamon roll\n");
        text += (glaze + " glazing\n");
        text += ("Pack of " + size + "\n");
        text += ("Price: $" + price + "\n\n");
        pTagRef.current.innerText = text;
        console.log(text);
        setTimeout(function () {
            text = (cartNum + 1) + " item\nTotal: $ " + (Number(cartPrice) + Number(price));
            pTagRef.current.innerText = text;
        }, 3000);
    }

    return (
        <>
          <meta charSet="UTF-8" />
          <title>Page Title</title>
          <link rel="stylesheet" href="css/style.css" />
          {/*Page Header w/ logo and nav bar*/}
          <div id="top-bar">
            <div id="top-bar-left">
              <img
                id="logo-img"
                src={logo}
                alt="Bun Bun Bake Shop logo"
              />
            </div>
            <div id="top-bar-right">
              <nav>
                <button id="products">PRODUCTS</button>
                <div class="dropdown">
                  <button class="dropbtn">CART</button>
                  <div class="dropdown-content">
                    <p ref={pTagRef} id="cart-dropdown"></p>
                  </div>
                </div>
              </nav>
              <hr />
              <h1>Our hand-made cinnamon rolls</h1>
            </div>
          </div>
          {/*Products offerred by Bun Bun Shop*/}
          <div className="options">
            {/*Original Cinnamon Roll*/}
            <Product
                imageURL={original}
                title="Original cinnamon roll"
                type="original"
                typePrice="2.49"
                addToCart={addToCart}
            />
            {/*Apple Cinnamon Roll*/}
            <Product
                imageURL={apple}
                title="Apple cinnamon roll"
                type="apple"
                typePrice="3.49"
                addToCart={addToCart}
            />
            {/*Raisin Cinnamon Roll*/}
            <Product
                imageURL={raisin}
                title="Raisin cinnamon roll"
                type="raisin"
                typePrice="2.99"
                addToCart={addToCart}
            />
            {/*Walnut Cinnamon Roll*/}
            <Product
                imageURL={walnut}
                title="Walnut cinnamon roll"
                type="walnut"
                typePrice="3.49"
                addToCart={addToCart}
            />
            {/*Double Chocolate Cinnamon Roll*/}
            <Product
                imageURL={chocolate}
                title="Double-chocolate cinnamon roll"
                type="chocolate"
                typePrice="3.99"
                addToCart={addToCart}
            />
            {/*Strawberry Cinnamon Roll*/}
            <Product
                imageURL={strawberry}
                title="Strawberry cinnamon roll"
                type="strawberry"
                typePrice="3.99"
                addToCart={addToCart}
            />
          </div>
        </>
    )
}

export default Home;