/** @format */

import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
//ui
import { MantineProvider } from "@mantine/core";
import useThemeWorker from "./Layout/components/Header/components/UserCenterDropDown/hooks/useThemWork";
//通过状态控制路由权限
export default function RouteGuard() {
  const { realTimeThem } = useThemeWorker();
  const navigate = useNavigate();

  useEffect(() => {
    let isLogin = true;
    if (!isLogin) {
      //没有登陆导航去登录页
      navigate("/login");
    }
  }, [navigate]);
  return (
    //相当于router-view
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: realTimeThem,
      }}
    >
      <Outlet></Outlet>
    </MantineProvider>
  );
}
