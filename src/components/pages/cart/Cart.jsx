import '../cart/cart.css'
import { useNavigate } from 'react-router';
import { useCart } from '../CartContext';


function formatAmount(value) {
    return `$${value.toLocaleString("en-US")}`;
}


function CartItem({
    product,
    quantity,
    onIncrease,
    onDecrease,
    onRemove
}) {

    const total = product.price * quantity;

    return (
        <div className="cart-item">

            {/* Product */}
            <div className="cart-product">

                <div className="cart-product-image">

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                </div>

                <div className="cart-product-info">

                    <span className="product-category">
                        {product.category}
                    </span>

                    <h3>
                        {product.name}
                    </h3>

                    <button
                        className="remove-product"
                        onClick={onRemove}
                    >
                        Remove
                    </button>

                </div>

            </div>


            {/* Quantity */}
            <div className="cart-quantity">

                <button
                    className="quantity-button"
                    onClick={onDecrease}
                    aria-label={`Decrease ${product.name} quantity`}
                >
                    −
                </button>

                <span className="quantity-value">
                    {quantity}
                </span>

                <button
                    className="quantity-button"
                    onClick={onIncrease}
                    aria-label={`Increase ${product.name} quantity`}
                >
                    +
                </button>

            </div>


            {/* Price */}
            <div className="cart-price">
                {formatAmount(product.price)}
            </div>


            {/* Total */}
            <div className="cart-item-total">
                {formatAmount(total)}
            </div>

        </div>
    );
}


function OrderSummary({ subtotal }) {

    const nav = useNavigate();

    const shipping = 0;
    const tax = 534;
    const total = subtotal + shipping + tax;

    return (
        <aside className="order-summary">

            <h2>
                ORDER SUMMARY
            </h2>


            <div className="summary-rows">

                <div className="summary-row">

                    <span>
                        Subtotal
                    </span>

                    <strong>
                        {formatAmount(subtotal)}
                    </strong>

                </div>


                <div className="summary-row">

                    <span>
                        Shipping
                    </span>

                    <strong>
                        Free
                    </strong>

                </div>


                <div className="summary-row">

                    <span>
                        Estimated Tax
                    </span>

                    <strong>
                        {formatAmount(tax)}
                    </strong>

                </div>

            </div>


            <div className="summary-total">

                <span>
                    TOTAL
                </span>

                <strong>
                    {formatAmount(total)}
                </strong>

            </div>


            <button
                className="checkout-button"
                onClick={() => nav('/checkout')}
            >
                PROCEED TO CHECKOUT
            </button>


            <button
                className="continue-button"
                onClick={() => nav("/product")}
            >
                CONTINUE SHOPPING
            </button>


            <p className="secure-checkout">

                <span className="lock-icon">
                    ♧
                </span>

                Secure checkout · SSL encrypted

            </p>

        </aside>
    );
}


const Cart = () => {

    const nav = useNavigate();

    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct
    } = useCart();


    const subtotal = cart.reduce(
        (sum, product) =>
            sum + product.price * product.quantity,
        0
    );


    const itemCount = cart.reduce(
        (sum, product) =>
            sum + product.quantity,
        0
    );


    return (

        <main className="cart-page">

            <div className="cart-container">


                {/* Breadcrumb */}

                <div className="breadcrumb">

                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            nav("/");
                        }}
                    >
                        HOME
                    </a>

                    <span>
                        ›
                    </span>

                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            nav("/product");
                        }}
                    >
                        COLLECTION
                    </a>

                    <span>
                        ›
                    </span>

                    <span
                        className="breadcrumb-current"
                        onClick={() => nav("/cart")}
                    >
                        CART
                    </span>

                </div>


                {/* Header */}

                <header className="cart-header">

                    <h1>
                        Your Cart
                    </h1>

                    <p>
                        {itemCount}{" "}
                        {itemCount === 1
                            ? "piece"
                            : "pieces"}{" "}
                        selected
                    </p>

                </header>


                {/* Main Content */}

                <div className="cart-layout">


                    {/* Left */}

                    <section className="cart-products">


                        {/* Column headings */}

                        <div className="cart-table-header">

                            <span>
                                PRODUCT
                            </span>

                            <span>
                                QTY
                            </span>

                            <span>
                                PRICE
                            </span>

                            <span>
                                TOTAL
                            </span>

                        </div>


                        {/* Products */}

                        <div className="cart-items">

                            {cart.length > 0 ? (

                                cart.map((product) => (

                                    <CartItem
                                        key={product.id}
                                        product={product}
                                        quantity={product.quantity}

                                        onIncrease={() =>
                                            increaseQuantity(product.id)
                                        }

                                        onDecrease={() =>
                                            decreaseQuantity(product.id)
                                        }

                                        onRemove={() =>
                                            removeProduct(product.id)
                                        }
                                    />

                                ))

                            ) : (

                                <div className="empty-cart">

                                    Your cart is empty.

                                    <h5>
                                        Discover pieces that will anchor your space.
                                    </h5>

                                    <button
                                        onClick={() => nav("/product")}
                                    >
                                        BROWSE COLLECTION
                                    </button>

                                </div>

                            )}

                        </div>

                    </section>


                    {/* Right */}

                    <OrderSummary
                        subtotal={subtotal}
                    />

                </div>

            </div>

        </main>
    );
};


export default Cart;