import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
   name: "favorites",
   initialState: {
      ids: [],
   },
   reducers: {
      addFavorite: (state, action) => {
         state.ids.push(action.payload.id);
      },
      removeFavorite: (state, action) => {
         state.id.splice(state.id.indexOf(action.payload.id), 1);
      },
   },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export const favoritesReducer = favoritesSlice.reducer;
