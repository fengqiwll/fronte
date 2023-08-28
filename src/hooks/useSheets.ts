import { Key, useMemo } from "react"
import {useSelector} from "react-redux"
import {RootState} from '../store/index'
import { Sheet } from "../store/types"
import { get }from 'lodash'
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import {createSheet} from "../store/slices/sheets"

export default function UseSheets(){
  const dispatch=useDispatch()
  const sheets = useSelector((state:RootState)=>state.sheets)
  const sheetsArr=useMemo<Array<Sheet>>(()=>Object.values(sheets),[sheets])
  const createSheetDispatcher=useCallback((name:string)=>dispatch(createSheet({name})),[])
  const getSheet =useCallback((sheetId:Key)=>sheets[sheetId],[sheets]) 
  const getView = useCallback((sheetId:Key,viewId:Key)=>get(sheets,[sheetId,viewId]),[sheets])
  return {
    sheets,
    sheetsArr,
    getSheet,
    getView,
    createSheetDispatcher
  }
}