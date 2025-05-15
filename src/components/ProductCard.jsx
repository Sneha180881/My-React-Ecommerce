import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Neon + Light Pink Theme Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#ffe4ec", // Light pink
        color: "#ff1493", // Deep neon pink
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(255, 20, 147, 0.3)",
        overflow: "hidden",
        margin: "15px",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "12px",
        transition: "transform 0.3s ease"
    };

    const titleStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "12px 0 6px",
        color: "#ff1493"
    };

    const priceStyle = {
        color: "#ff2e63", // neon pink-red
        fontSize: "18px",
        marginBottom: "8px",
        fontWeight: "bold"
    };

    const detailsText = {
        color: "#c83bff", // neon purple
        fontSize: "14px",
        marginTop: "6px",
        fontWeight: "normal"
    };

    const buttonStyle = {
        backgroundColor: "#ff5e78", // neon coral
        color: "#fff",
        border: "none",
        padding: "14px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        transition: "background-color 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#ff2e63" : "#ff5e78";
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
