//这里进行路由的创建和配置到处的是createrouter过的路由
//deps
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom'
//componnets
import RouteGuard from './RouteGuard';
//进行路由懒加载
const Home=lazy(()=>import(/* webpackChunkName:"OtherComponent" */'./pages/Home/index'))
const Login=lazy(()=>import(/* webpackChunkName:"OtherComponent" */'./pages/Login/index'))
// import Home from './pages/Home'
// import Login from './pages/Login'

//注册路由
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RouteGuard/>,
    children:[
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      }
    ]
  },
]);

export default routes