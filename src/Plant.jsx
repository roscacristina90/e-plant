
import './plant.css';

const Plant = ({ name, cost, description, image }) => {
  return (
    <div id="plant-container">
      <h3 className="plant-name-heading">
        {name} 🌱
      </h3>
      <img
        src={image}
        alt={name}
        style={{
          height: "180px",          // Slightly larger image
          width: "100%",            // Full width image
          objectFit: "cover",       // Crop image to fit without distortion
          borderRadius: "8px",      // Rounded corners for image
          marginBottom: "15px"      // Space below image
        }}
      />
      <p style={{
        fontSize: "0.95em",       // Slightly smaller description text
        lineHeight: "1.5",        // Better line spacing
        marginBottom: "10px",     // Space below description
        color: "#555"             // Slightly lighter text for description
      }}>
        <strong style={{ color: "#333" }}>Description:</strong> {description}
      </p>
      <p style={{
        fontSize: "1.1em",        // Slightly larger cost text
        fontWeight: "bold",       // Bold cost
        color: "#007bff"          // Blue accent for cost
      }}>
        Cost: {cost}
      </p>
    </div>
  );
};

export default Plant;