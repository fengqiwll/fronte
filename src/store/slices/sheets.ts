/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Key } from "react";
import { Sheet } from "../types";
import { shieetOperator } from "../../operations/sheeetOperator";

import { sheetTemplateCreate } from "../utils";
//创建一个初始化的表格
const defaultSheet = sheetTemplateCreate("默认字表");

const sheetOperator = new shieetOperator();
let initialSheeets: {
  [sheetId: Key]: Sheet;
} = {
  "e57e45f3-125f-4dcb-a315-34077d69c121": {
    id: "e57e45f3-125f-4dcb-a315-34077d69c121",
    name: "默认字表",
    columns: {
      "8f1dc839-fa0d-4790-ad92-5a06bd9969e7": {
        id: "8f1dc839-fa0d-4790-ad92-5a06bd9969e7",
        name: "多行文本",
        columnType: "TEXT",
        columnProps: [],
      },
    },
    views: {
      "3339a119-bcac-45c5-9e1a-6880fd52bf29": {
        id: "3339a119-bcac-45c5-9e1a-6880fd52bf29",
        name: "表格视图",
      },
    },
    rows: {},
  },
};
// 总体思想 当用户在任何页面做交互-》都回出发 redux =》产生原子操作传给后端
export const sheetSlice = createSlice({
  name: "sheet",
  initialState: initialSheeets,
  reducers: {
    //创建表格
    createSheet: (state, action: PayloadAction<{ name: string }>) => {
      // 这里拆分对应的 OP 发送请求不在这做
      //1，生成新的sheet
      const sheetcount = Object.values(state).length;
      const defaultName = `新建表格${sheetcount + 1}`;

      const sheet = sheetTemplateCreate(action.payload.name || defaultName);
      state[sheet.id] = sheet;
      //2,将sheet同步修改到本地
      //3，将新的sheet同步到服务器
      //  let sheet= sheetOperator.generrateOperations(action.payload.name||'123')
    },
    // 删除表格
    deleteSheet: (state, sheetId) => {},
    //重命名表格
    renameSheet: (state, sheetObj) => {},
  },
});

//导出
export const { createSheet, deleteSheet, renameSheet } = sheetSlice.actions;
export default sheetSlice.reducer;
