/** @format */

import { Header as HeaderContainer, Box, Input, Text, Button, Avatar, Menu } from "@mantine/core";
import { IconChevronLeft, IconStar, IconFolderFilled, IconLock, IconAlien,IconMoodShare,IconSearch,IconPlus,IconChevronRight } from "@tabler/icons-react";

//components
import UserCenterDropDown from'./components/UserCenterDropDown/index'

export default function Header() {

  return (
    <HeaderContainer height={64}>
      <Box className='h-full flex items-center justify-between'>
        {/* 左边区域 */}
        <Box className="flex items-center">
          <IconChevronLeft />
          <Box className='flex flex-col gap-1'>
            {/* 表名+收藏 */}
            <Box className='w-20 h-6 flex justify-center items-center'>
              <Box className='text-sm'>默认表名 </Box>
              <Box className='h-5 w-5 ml-1 hover:bg-slate-400 rounded-md cursor-pointer flex justify-center items-center'>
                <IconStar className='w-3 h-3'></IconStar>
              </Box>
            </Box>
            {/* 我的空间+最近修改时间 */}
            <Box className='w-64 h-4 flex'>
              {/* 我的空间 */}
              <Box className='flex items-center gap-1'>
                <IconFolderFilled className='text-sm text-#646a73 w-3 h-3'></IconFolderFilled>
                <Text className='text-646a73 text-xs'>我的空间</Text>
                <Box style={{ width: "1px" }} className='h-3 bg-#DEE0E3'></Box>
              </Box>
              {/* 最近修改 */}
              <Text className='text-xs pl-1'>最近修改：40分钟前</Text>
            </Box>
          </Box>
        </Box>
        {/* 右边区域 */}
        <Box className="h-full flex justify-center items-center">
          <Box className="h-10 flex items-center gap-3">
            {/* 分享 */}
            <Box className="bg-#3370FF text-white w-20 h-full text-sm flex items-center justify-center gap-1 rounded-lg ">
              <IconLock className="" width={16} height={16} strokeWidth={2 }></IconLock>
              <Text>分享</Text>
            </Box>
            {/* 高级权限 */}
            <Box className="p-1 text-black h-full text-sm flex items-center justify-center gap-1 rounded-lg border-2">
              <IconAlien className="" width={16} height={16} strokeWidth={2 }></IconAlien>
              <Text>高级权限</Text>
            </Box>
            {/* 自动化 */}
            <Box className="p-1 text-black h-full text-sm flex items-center justify-center gap-1 rounded-lg border-2">
              <IconAlien className="" width={16} height={16} strokeWidth={2 }></IconAlien>
              <Text>自动化</Text>
            </Box>
            {/* 通知 */}
            <Box className="p-1 text-black h-full text-sm flex items-center justify-center gap-1 rounded-lg ">
              <IconAlien className="" width={24} height={24} strokeWidth={2 }></IconAlien>
            </Box>
            {/* 更多 */}
            <Box className="p-1 text-black h-full text-sm flex items-center justify-center gap-1 rounded-lg ">
              <IconMoodShare className="" width={24} height={24} strokeWidth={2 }></IconMoodShare>
            </Box>
            <Box style={{ width: "1px" }} className='h-5 bg-#DEE0E3 mx-2'></Box>
            {/* 搜索 */}
            <Box className="p-1 text-black h-full text-sm flex items-center justify-center gap-1 rounded-lg ">
              <IconSearch className="" width={24} height={24} strokeWidth={2 }></IconSearch>
            </Box>
            {/* 添加 */}
            <Box className="p-1 text-black h-full text-sm flex items-center justify-center gap-1 rounded-lg ">
              <IconPlus className="" width={24} height={24} strokeWidth={2 }></IconPlus>
            </Box>
          </Box>
          <Box style={{ width: "1px" }} className='h-5 bg-#DEE0E3 mx-2'></Box>

          {/* 用户中心区域 */}
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Avatar color='blue' radius="xl">用户</Avatar>
            </Menu.Target>

            <UserCenterDropDown></UserCenterDropDown>
          </Menu>
        </Box>
      </Box>
    </HeaderContainer>
  );
}
