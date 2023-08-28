//固定文件：表示注入react的ts来源
/// <reference types="react-scripts" />

//往window或者node里面注入环境变量
interface Window{
  a:string
}
declare namespace NodeJS{
  interface ProcessEnv{
    Port:String
  }
}