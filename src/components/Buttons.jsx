import React from "react";

function IconButton({ iconUrl }) {
return (
    <button
    style={{
        backgroundImage: `url(${iconUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "4rem",
        height: "4rem",
        border: "1px solid #ccc",
        borderRadius: "50%",
        marginLeft: "10%",
    }}
    />
);
}

export default IconButton;
