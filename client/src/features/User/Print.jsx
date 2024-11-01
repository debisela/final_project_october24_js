import React from "react";
import { useFontSelector } from "./state/hooks";


const Print = ({attendee})=>{

    //get font
  const fontType = useFontSelector(attendee.fonttype)
  console.log(fontType);

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
        // Set default values for first and last name if undefined
        const title = attendee.title ? `${attendee.title} ` : '';
        const firstName = attendee.first_name || '';
        const lastName = attendee.last_name || '';

         // Combine title and name into one heading
         const nameHeading = `<h2>${title}${firstName} ${lastName}</h2>`;

        const printableContent = `
            <div>
            ${nameHeading}
             ${Object.entries(attendee)
                    .filter(([key, value]) =>
                        key !== 'id' &&
                        key !== 'check_in_time' &&
                        key !== 'first_name' &&
                        key !== 'last_name' &&
                        key !== 'title' &&
                        typeof value !== 'boolean' // Exclude boolean fields
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
                        font-family: ${fontType}, sans-serif;
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