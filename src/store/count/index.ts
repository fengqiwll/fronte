import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
interface CounterState{
  value:number
}
const initialState:CounterState={
  value:0,
}

//此处创建一个仓库
// 传递第一个参数
// 1，reducer=>vuex里面的mutation，处理同步数据的变化
export const counterSlice=createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment:(state)=>{
      state.value += 1
    },
    decrement:(state)=>{
      state.value-=1
    },
    increamentByNumber:(state,value:PayloadAction<number>)=>{

    }
  }
})
export const { increment,decrement,increamentByNumber }=counterSlice.actions
export default counterSlice.reducer