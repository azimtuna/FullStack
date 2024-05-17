import { PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

interface Attributes{
    id:string,
    name:string,
    stock:number,
    price:number,
    createdDate:Date
}

interface ProductAdd{
    name:string,
    stock:number,
    price:number,  
}

interface Product{
    products:Attributes[],
    status:string
}

const initialState:Product = {
    products:[],
    status:"idle"
}



export const putProducts:any =createAsyncThunk("product/putProduct",async (data)=>{
    try{
        const response = await axios.put<any>("https://localhost:7270/api/Products",data);
        return response.data;
    }
    catch(error){
        console.error;
        throw error;
    }
})



const productSlice= createSlice({
    name:"products",
    initialState,
    reducers: {
        addProduct: (state:any,action:PayloadAction<ProductAdd>) =>{
            const newProduct:ProductAdd = {
                name:action.payload.name,
                price:action.payload.price,
                stock:action.payload.stock,
            };
            state.products.push(newProduct);

        },
        

    },
    // extraReducers (builder){
    //     builder
    //       //post product 
    //       //delete product 
    //       .addCase(deleteProducts.pending, (state) => {
    //         state.status = 'loading';
    //       })
    //       .addCase(deleteProducts.fulfilled, (state, action) => {
    //         // Remove the deleted product from the state
    //         state.products = state.products.filter(product => product.id !== action.payload);
    //         state.status = 'idle';
    //       })
    //       .addCase(deleteProducts.rejected, (state, action) => {
    //         state.status = 'failed';
    //         console.log("ERROR>: ",action.error.message);
    //     });
    
   // }

});

export const selectAllProducts = (state:any) => state.products.products;
export const selectProductStatus =(state:any) => state.products.status;
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
