import { createSelector } from "@reduxjs/toolkit";

import { fields, selectedFields,fontType, status, state } from "./adminSlice.js";

//selector for showing fields
export const selectFields = createSelector([state], (state) => state.fields);

//selector for selecting fields
export const fieldsSelection = createSelector([state], (state) => state.selectedFields);

//selector for selecting font
export const fontSelection = createSelector([state], (state) => state.fontType);

//selector for fetching font
// export const selectedFontSelection = createSelector([state], (state) => state.fonts);

export const selectStatus = createSelector([state], (state) => state.status);