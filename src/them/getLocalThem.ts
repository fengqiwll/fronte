//如果本地保存的system主题或者为null则查询系统主题
export default function getLocalThem(){
  const locatThem=localStorage.getItem('theme')
  if(locatThem==='system'||!locatThem){
    const systemThem=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'
    return systemThem
  }
  return JSON.parse(locatThem)
}