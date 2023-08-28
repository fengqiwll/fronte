//deps
// import { SelectItem }from '@mantine/core'
import { useTranslation }from 'react-i18next'
import { useLocalStorage } from '@mantine/hooks'

//types 
import { validLang } from '../../../../../../i18n/types'
import { useCallback } from 'react'

const langguageSelectData=[
  {label:'中文',value:'zh'},
  {label:'English',value:'en'},
]
export default function useLanguageWorker(){
  const [preLanguage,setPreLanguage]=useLocalStorage<validLang>({key:'lang',defaultValue:'zh'})
  //设置当前语言
  const mutatePresentLang=useCallback((newLang:validLang)=>{
    setPreLanguage(newLang)
    i18n.changeLanguage(newLang)
  },[setPreLanguage])
  const {i18n}=useTranslation()
  return{
    preLanguage,
    langguageSelectData,
    mutatePresentLang,
  }
}