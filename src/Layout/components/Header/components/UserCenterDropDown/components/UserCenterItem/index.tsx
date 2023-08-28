//deps
import { Menu, Box, Text, Avatar, HoverCard,SelectItem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useTranslation }from'react-i18next'

import { map }from'lodash'
import {useCallback} from 'react'

interface UserCenterSelectItemProps<ValidSelectValue = string> {
  label:string;
  selectData:SelectItem[];
  defaultSelect:string;
  onSelectChange: (newValue: ValidSelectValue) => void // 1  不行的 扣2 
}


/**
 * 组件
 * 内置的类型 泛型: 写参数
 * 天生提供给你的便利的写法
 */
 export function LeftSelectPanel<ValidSelectValue = string>({ selectData, defaultSelect, onSelectChange }: Omit<UserCenterSelectItemProps<ValidSelectValue>,'label'>) {

  const changeCurrentSelect = useCallback((newSelectedValue: ValidSelectValue) => {
    onSelectChange(newSelectedValue)
    // console.log(newSelectedValue);
    
  }, [onSelectChange])

  return (
    <Box>
     {
       map(selectData, (selectDescriptor) => {
        return <Box className="cursor-pointer" onClick={  () => changeCurrentSelect(selectDescriptor.value as ValidSelectValue) } key={ selectDescriptor.value }>{ selectDescriptor.label }</Box>
      })
     }
    </Box>
  )
}

export default function UserCenterItem<ValiSelectValue=string>({label,...SelectItemProps}:UserCenterSelectItemProps<ValiSelectValue>){
  const { t } = useTranslation()
  return (
    <HoverCard position="left" width={280} shadow='md'>
      <HoverCard.Target>
        <Box className='flex items-center justify-between'>
          <Box className='text-black'>{ t(label) }</Box>
          <Box className="flex items-center gap-1">
            <Text className='text-#646A73'>{SelectItemProps.defaultSelect}</Text>
            <IconChevronRight color='#646A73' width={14} height={14} />
          </Box>
        </Box>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        {/* 外观 */}
        <LeftSelectPanel<ValiSelectValue> {...SelectItemProps} />
      </HoverCard.Dropdown>
    </HoverCard>
  )
}