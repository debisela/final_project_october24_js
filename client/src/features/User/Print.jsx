import React from "react";
import { useFontSelector, useColorSelector } from "./state/hooks";
import Tag from "../Admin/Tag";
import { formatFieldName } from "../Admin/tagStyle";
import { fontType, fontColor } from "./state/userSlice";
import { tagStyle } from "../Admin/tagStyle";


const Print = ({ attendee }) => {  
      //get font
  const fontType = useFontSelector(attendee.fonttype)
  const fontColor = useColorSelector(attendee.fontColor)
  console.log(fontType, fontColor);
    
  const handlePrint = () => {
    const printWindow = window.open("", "", "width=600,height=400");

    if (printWindow) {
      const title = attendee.title ? `${attendee.title} ` : "";
      const firstName = attendee.first_name || "";
      const lastName = attendee.last_name || "";
      const nameHeading = `<h2 style="
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 0.5rem;">${title}${firstName} ${lastName}</h2>`;

      const additionalFields = Object.entries(attendee)
        .filter(([key]) =>
          !["id", "check_in_time", "first_name", "last_name", "title"].includes(key) &&
          typeof attendee[key] !== "boolean"
        )
        .map(
          ([key, value]) => `<p style="
            font-size: 20px;
            margin: 0;
            padding: 4px 0;
            color: ${fontColor};
            ">${formatFieldName(key)}: ${value}</p>`
        )
        .join("");

      // Print content with inline styles
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Tag</title>
          </head>
          <body style="
            font-family: ${fontType}, sans-serif;
            margin: 20px;">
            <div style="
              border: 2px solid #333;
              padding: 10px;
              margin-top: 10px;
              width: 3in;
              height: 4in;
              border-radius: 8px;
              text-align: center;
              box-sizing: border-box;">
              ${nameHeading}
              ${additionalFields}
            </div>
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

export default Print;











//   const handlePrint = () => {
//     const printWindow = window.open("", "", "width=600,height=400");

// if (printWindow) {
// // Set default values for first and last name if undefined
// const title = attendee.title ? `${attendee.title} ` : '';
// const firstName = attendee.first_name || '';
// const lastName = attendee.last_name || '';

//  // Combine title and name into one heading
//  const nameHeading = `<div class="name">${title}${firstName} ${lastName}</div>`;

// const printableContent = `
//     <div class="tagContainer">
//     ${nameHeading}
//      ${Object.entries(attendee)
//             .filter(([key, value]) =>
//                 key !== 'id' &&
//                 key !== 'check_in_time' &&
//                 key !== 'first_name' &&
//                 key !== 'last_name' &&
//                 key !== 'title' &&
//                 typeof value !== 'boolean' // Exclude boolean fields
//             )
//             .map(([key, value]) =>
//                 `<div class="field">${formatFieldName(key)}: ${value}</div>`
//             )
//             .join('')}
//     </div>`;

// printWindow.document.write(`
//     <html>
//     <head>
//         <title>Print Tag</title>
//         <style>
//             body {
//                 font-family: ${fontType}, sans-serif;
//                 margin: 20px;
//             }
//             .tagContainer {
//                 border: "2px solid #333", // Border to visualize the tag
//     padding: "10px",
//     marginTop: "10px",
//     width: "3in", // Set width to 3 inches
//     height: "4in", // Set height to 4 inches
//     borderRadius: "8px",
//     textAlign: "center",
//     boxSizing: "border-box", // Ensure padding is included within width/height
//             }
//             .${tagStyle.name} {
//                 fontSize: "36px", // Font size for attendee name
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//             }
//     .${tagStyle.namefield} {
//      fontSize: "20px", // Font size for other fields
//     margin: "0",
//     padding: "4px 0",
//     }
//         </style>
//     </head>
//     <body>
//         ${printableContent}
//     </body>
//     </html>
// `);
// printWindow.document.close();
// printWindow.focus();
// printWindow.print();
// printWindow.close();
// }
// };

// return (
// <button onClick={handlePrint}>
// Print Tag
// </button>
// );
// };


// export default Print;




