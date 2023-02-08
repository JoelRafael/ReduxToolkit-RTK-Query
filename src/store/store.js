import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/CounterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";
import { todoApi } from "./api/todosApi";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
