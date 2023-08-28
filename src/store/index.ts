import { configureStore }from '@reduxjs/toolkit'

import counterReducer from './count/index'
import sheetSliceReducer from './slices/sheets'
export const store =configureStore({
  reducer:{
    count:counterReducer,
    sheets:sheetSliceReducer
  }
})

//导出类型
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export default store