import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const productIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (productIndex !== -1) {
        state.items.splice(productIndex, 1)
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export const selectFavoritesCount = (state) => state.favorites.items.length
export default favoritesSlice.reducer
