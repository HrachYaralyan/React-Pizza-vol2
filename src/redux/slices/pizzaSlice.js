import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus',
  async (params) => {
   const {category,order,sortBy,search,currentPage} = params;
    const {data } = await axios.get(`https://629616eb75c34f1f3b28e361.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
    console.log(data , "data in redux slice ")
    return data
  }
)

const initialState ={
  items : [],
  status: "loading", // loading , succses , error
}

const pizzaSlice = createSlice({
  name : "pizza",
  initialState,

  reducers:{
    setItems(state, action ){
      state.items = action.payload;
    },
  },
  extraReducers:{
    [fetchPizzas.pending]:(state ,action)=>{
      state.status = "loading";

    },
    [fetchPizzas.fulfilled]:(state ,action)=>{
      state.items = action.payload;
      state.status = "succses";
    },
    [fetchPizzas.rejected]:(state ,action)=>{
      state.status = "error";
      state.items = [];


    }
  }
});

export const selectPizzaData =(state)=>state.pizza;

export const {setItems } = pizzaSlice.actions

export default pizzaSlice.reducer;