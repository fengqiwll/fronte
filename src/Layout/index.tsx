//deps
import { AppShell } from '@mantine/core';
import { PropsWithChildren, useEffect, } from 'react';
import { useTranslation }from 'react-i18next';
// components
import Header from './components/Header';
import Navbar from './components/Navbar';



export default function Layout(props:PropsWithChildren) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const localLang=localStorage.getItem('lang')
    if(localLang){
      i18n.changeLanguage(JSON.parse(localLang))
    }
  },[])
  return (
    <AppShell
      navbar={<Navbar />}
      header={<Header />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {props.children}
    </AppShell>
  );
}