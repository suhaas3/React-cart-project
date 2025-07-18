import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const globalState = {
  productData: [],
  isLoading: false,
  error: null
}

 export const  getApiData = createAsyncThunk('products/getApiData', async() => {
     const response = await axios.get("https://fakestoreapi.com/products")

    return response.data;
 }) 
  

export const ProductSlice = createSlice({
    name: 'products_form',
    initialState: globalState,
    reducers: {
      products: (state) => {
        
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getApiData.pending, (state,action) => {
        state.isLoading = true;
      })
      builder.addCase(getApiData.fulfilled, (state,action) => {
        state.productData = action.payload;
        state.isLoading = false;
      })
      builder.addCase(getApiData.rejected, (state,action) => {
          state.error = "Something went Wrong";
          state.isLoading = true;
      })
    }
}
)

export const {products} = ProductSlice.actions

export default ProductSlice.reducer