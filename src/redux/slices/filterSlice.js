import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  categoryID : 0,
  sort : {name : "популярности" , sortProperty : "rating"}
}

const filterSlice = createSlice({
  name : "filters",
  initialState,

  reducers:{
    setCategoryID(state , action){
      state.categoryID = action.payload;
    },
    setSortType(state , action){
      state.sort = action.payload;
    },
  }
});


export const {setCategoryID ,setSortType } = filterSlice.actions

export default filterSlice.reducer


































// import { createSlice } from '@reduxjs/toolkit'



// const initialState = {
//   value: 0,
//   rendNum: 0,
// }

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     increment: (state) => {

//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//     random:(state)=>{
//       state.rendNum = Math.floor(Math.random()*10)
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount ,random } = filterSlice.actions

// export default filterSlice.reducer