import React from "react";
import { tagStyle, formatFieldName } from "./tagStyle";

const Tag = ({ selectedFields, fontType, fontColor }) => {
   

    return (
        <div style={{ fontFamily: fontType, color: fontColor, ...tagStyle.tagContainer }}>
            {/* Show title, first name, last name individually */}
            <div style={{ ...tagStyle.name }}>
                {selectedFields.includes("title") && (
                    <span>{formatFieldName("title")} </span>
                )}
                {selectedFields.includes("first_name") && (
                    <span>{formatFieldName("first_name")} </span>
                )}
                {selectedFields.includes("last_name") && (
                    <span>{formatFieldName("last_name")}</span>
                )}
            </div>

            {/* Display remaining fields */}
            {selectedFields
                .filter(field => !['title', 'first_name', 'last_name', 'id', 'checked_in', 'check_in_time','badge_printed' ].includes(field))
                .map((item, index) => (
                    <div key={index} style={{ ...tagStyle.field }}>
                        {formatFieldName(item)}
                    </div>
                ))}
        </div>
    );
};

export default Tag;
