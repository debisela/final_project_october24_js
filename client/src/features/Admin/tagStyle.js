//file including styles for preview and print tag
export const tagStyle = {
    tagContainer: {
        border: "2px solid #333", // Border to visualize the tag
        padding: "10px",
        marginTop: "10px",
        width: "3in", // Set width to 3 inches
        height: "4in", // Set height to 4 inches
        borderRadius: "8px",
        textAlign: "center",
        boxSizing: "border-box", // Ensure padding is included within width/height
    },
    name: {
        fontSize: "36px", // Font size for attendee name
        fontWeight: "bold",
        marginBottom: "0.5rem",
    },
    field: {
        fontSize: "20px", // Font size for other fields
        margin: "0",
        padding: "4px 0",
    },
};

export const formatFieldName = (fieldName) => {
    return fieldName
        .replace(/_/g, ' ') // Replace underscores with spaces
        .split(' ') // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back together
};
