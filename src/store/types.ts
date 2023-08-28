import { Key } from "react";

//定义一行需要哪些东西
//这里定义了创建行需要的内容，文本是也不需要，选择就需要选项内容
export type ColumnMap={
  TEXT:{}
  SELECT:{
    options:Array<{label:string,value:string,id:string}>
  }
}

//这里用泛形约束创建某一单元格需要的数据
export interface Column<ColumnType extends keyof ColumnMap>{
  id:Key
  name:string
  columnType:ColumnType
  columnProps:ColumnMap[ColumnType]
}


export interface View{
  id:Key
  name:string
}

//每一行需要对应的数据
export interface Row{
  id:Key
  [columnId:Key]:Key
}
//每一张表都应该有对应的id，名称，对应列的数据，视图面板的数据
export interface Sheet{
  id:Key
  name:string
  columns:{
    [columnId:Key]:Column<keyof ColumnMap>
  }
  views:{
    [viewId:Key]:View
  }
  rows:{
    [rowId:Key]:Row
  }
}
// key in ==for in 