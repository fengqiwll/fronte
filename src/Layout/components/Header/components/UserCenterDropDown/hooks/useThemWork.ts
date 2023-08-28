//deps
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@mantine/hooks'
import { ColorScheme, SelectItem } from "@mantine/core"
import getLocalThem from '../../../../../../them/getLocalThem';
//types
import { validThem } from '../../../../../../them/types';

export default function useThemWork () {
  const [presentTheme, setTheme] = useState<validThem>('light');
  const [realTimeThem,setRealTimeThem]=useLocalStorage<ColorScheme>(getLocalThem())
  const { t }=useTranslation()
  const themeSelectData =useMemo(()=>{
    return(
      [
        {
          label:t('light'),
          value:'light'
        },
        {
          label:t('dark'),
          value:'dark'
        },
        {
          label: t('system'),
          value:'system'
        }
      ]
    )
  },[])

  //监听用户系统主题变化
  const watchThemChange=()=>{
    const darkThemeMq=window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addListener(e => {
      if (e.matches) {
        // Theme set to dark.
        console.log("监听成功, 用户的系统变为了深色")
        setRealTimeThem("dark")

      } else {
          // Theme set to light.
        console.log("监听成功, 用户系统变为了浅色")
        setRealTimeThem("light")
      }
    });
  }
  //初始化主题
  useEffect(()=>{
    const localThem=getLocalThem()
    setRealTimeThem(localThem)
    watchThemChange()
  })

   const mutatePresentTheme = useCallback((thene) => {
    setTheme(thene); 
    setRealTimeThem(thene)
  },[setTheme]);
  return {
    presentTheme,
    mutatePresentTheme,
    themeSelectData,
    realTimeThem
  };
}