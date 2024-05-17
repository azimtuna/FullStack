import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Ui/features/productSlice";

export default configureStore({
    reducer: {
     products:productSlice
    }
  })