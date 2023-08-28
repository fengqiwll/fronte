import { ActionIcon, Divider, Navbar as NavbarContainer } from "@mantine/core"
import { Box, Text, Input } from "@mantine/core"
import useSheets from "../../../hooks/useSheets"
import { map } from "lodash"
import IconSheet from "../../../assets/svgComponents/SheetIcon"
import { IconDots, IconMenuOrder, IconPlus } from "@tabler/icons-react"
import { useCallback, useState, useRef } from "react"


export default function Navbar() {

  const { sheetsArr, createSheetDispatcher } = useSheets()
  const [showCreateSheetInput, setShowCreateSheetInput] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>()

  const handleCreateSheet = useCallback(() => {
    setShowCreateSheetInput(true)
    // 为什么会报错 
    // 因为这个state的更新是异步的对不对
    // window里的方法
    // requestIdle  setTimeout 
    requestIdleCallback(() => {
      inputRef.current?.focus()
    })
  }, [])

  const requestCreateSheet = useCallback(() => {
    const sheetName = inputRef.current.value 
    setShowCreateSheetInput(false)
    // dispatch store
    createSheetDispatcher(sheetName)
  }, [createSheetDispatcher])

  return (
    <NavbarContainer w={ 280 }>
      <Box className="w-full h-full relative p-2">
        {/* list 模块 */}
        <Box>
          { 
            map(sheetsArr, sheet => {
              return (
                <Box className="flex cursor-pointer h-9 justify-between px-1 items-center rounded hover:bg-slate-200" key={ sheet.id }>
                  <Box className="flex items-center gap-1">
                    <IconSheet />
                    <Text className="text-sm">{ sheet.name }</Text>
                  </Box>

                  <ActionIcon>
                    <IconDots size={14} />
                  </ActionIcon>
                </Box>
              )
            })
          }
          { showCreateSheetInput && <Input onBlur={ requestCreateSheet } defaultValue={`数据表 ${sheetsArr.length + 1}`} ref={inputRef} /> }
        </Box>



        {/* 操作模块 */}
        <Box style={{ width: `calc(100% - 16px)` }} className="absolute bottom-0 px-3 pb-4">
          <Divider />
          <Text color="#646A73" className="text-sm h-8 pt-2 flex items-center mb-2">新建</Text>
          <Box onClick={handleCreateSheet} className="flex justify-between h-9 items-center cursor-pointer px-2 rounded hover:bg-slate-200">
            <Box style={{ color: "#a45eeb" }} className="flex items-center gap-1">
              <IconSheet />
              <Text className="text-sm text-black">新建数据表</Text>
            </Box>
            <IconPlus size={16} />
          </Box>
        </Box>
      </Box>
    </NavbarContainer>
  )
}