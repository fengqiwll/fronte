/** @format */

import { Column, Sheet, View } from "./types";
//deps
import { v4 as uuid }from 'uuid'

//生成 column 模版
export const columnTemplateCreator:(name:string)=>Column<"TEXT"> = (name:string)=>{
  return{
    id:uuid(),
    name,
    columnType:"TEXT",
    columnProps:[]
  }
}

//生成 view 模版
export const viewTemplateCreater:(name:string)=>View=(name:string)=>{
  return{
    id:uuid(),
    name
  }
}
// 这里生成各式各样的模板的
export const sheetTemplateCreate: (name: string) => Sheet = (name: string) => {
  const defaultTextColumn=columnTemplateCreator('多行文本')
  const defaultViews=viewTemplateCreater('表格视图')
  return{
    id:uuid(),
    name,
    columns:{
      [defaultTextColumn.id]:defaultTextColumn
    },
    views:{
      [defaultViews.id]:defaultViews
    },
    rows:{}
  }
};
