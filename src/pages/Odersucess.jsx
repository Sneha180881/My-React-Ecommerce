import { useCart } from "../context/cartContext";
import { useEffect, useState } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();
    const [scale, setScale] = useState(1);

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#f0e6ff", // Light purple background
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#333", // Default text color
        },
        title: {
            fontSize: "2.5rem",
            color: "#9b4dca", // Neon violet title
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "2px",
        },
        message: {
            fontSize: "1.2rem",
            color: "#00bcd4", // Soft neon blue for the message
            marginBottom: "30px",
            fontWeight: "bold",
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#39d39e", // Neon green for the button
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.3s ease",
            textDecoration: "none",
            fontWeight: "bold",
            textTransform: "uppercase",
            transform: `scale(${scale})`, // Apply dynamic scale here
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us. Your order is on its way!</p>
            <a 
                href="/" 
                style={styles.button}
                onMouseEnter={() => setScale(1.05)} 
                onMouseLeave={() => setScale(1)}
            >
                Go to Home
            </a>
        </div>
    );
}
