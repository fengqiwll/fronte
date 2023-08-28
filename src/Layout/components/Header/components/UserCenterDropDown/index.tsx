/** @format */

//deps
import { Menu, Box, Text, Avatar,  } from "@mantine/core";
// import { IconChevronRight } from "@tabler/icons-react";
import { useTranslation }from 'react-i18next';
//comps
import UserCenterItem from "./components/UserCenterItem/index";
//theme
import useThemeWorker from "./hooks/useThemWork";
//lang
import useLanguageWorker from "./hooks/useLanguageWorker"

export default function UserCenterDropDown() {
  const { t } = useTranslation();
  const { preLanguage, langguageSelectData, mutatePresentLang, } = useLanguageWorker();
  const { presentTheme, themeSelectData, mutatePresentTheme } = useThemeWorker()
  return (
    <Menu.Dropdown>
      <Menu.Label>
        {/* 用户信息 */}
        <Box className='p-3 flex items-center'>
          {/* 用户左侧头像 */}
          <Box>
            <Avatar color='blue' radius='xl'>
              用户
            </Avatar>
          </Box>
          {/* 右侧信息 */}
          <Box className='ml-2'>
            <Text className='text-black text-xl mb-1'>用户名</Text>
            <Text className='text-sm text-#646A73'>个人</Text>
          </Box>
        </Box>
      </Menu.Label>
      <Menu.Divider />
      <UserCenterItem label='lang' selectData={langguageSelectData} onSelectChange={mutatePresentLang} defaultSelect={t(preLanguage)}></UserCenterItem>
      <UserCenterItem label='theme' selectData={themeSelectData} onSelectChange={mutatePresentTheme} defaultSelect={t(presentTheme)}></UserCenterItem>
    </Menu.Dropdown>
  );
}
