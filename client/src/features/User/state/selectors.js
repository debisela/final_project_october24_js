import { createSelector } from "@reduxjs/toolkit";

import { attendees, status, fontType, state } from "./userSlice.js";

export const selectAttendee = createSelector([state], (state) => state.attendees);

export const selectFont = createSelector([state], (state) => state.fontType);

export const selectStatus = createSelector([state], (state) => state.status);