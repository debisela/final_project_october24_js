import React from "react";


const Print = ({attendee})=>{

    // Function to format field names
  const formatFieldName = (fieldName) => {
    // Remove underscores and capitalize each word
    return fieldName
        .replace(/_/g, ' ') // Replace underscores with spaces
        .split(' ') // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back together
};

const handlePrint = () => {
    const printWindow = window.open("", "", "width=600,height=400");

    if (printWindow) {
        const printableContent = `
            <div>
                <h2>${attendee.first_name} ${attendee.last_name}</h2>
                ${attendee.title ? `<p>${attendee.title}</p>` : ''}
                ${Object.entries(attendee)
                    .filter(([key]) =>
                        key !== 'id' &&
                        key !== 'checked_in' &&
                        key !== 'check_in_time' &&
                        key !== 'first_name' &&
                        key !== 'last_name'
                    )
                    .map(([key, value]) =>
                        `<p>${formatFieldName(key)}: ${value}</p>`
                    )
                    .join('')}
            </div>`;

        printWindow.document.write(`
            <html>
            <head>
                <title>Print Tag</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    h2 {
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    p {
                        margin: 0;
                        padding: 4px 0;
                        font-size: 16px;
                    }
                </style>
            </head>
            <body>
                ${printableContent}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }
};

return (
    <button onClick={handlePrint}>
        Print Tag
    </button>
);
};


export default Print