'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function ThemeButton() {
  const [themeIdx, setThemeIdx] = useState(0);
  const themes = ['light', 'dark'];

  const router = useRouter();

  useEffect(() => {
    const cookieData = ('; ' + document.cookie).split('; theme=').pop().split(';')[0];

    console.log(cookieData);

    if (cookieData == '') {
      document.cookie = 'theme=light; max-age=' + (3600 * 24 * 400);
    } else {
      setThemeIdx(themes.findIndex((item) => item === cookieData));
    }
  }, []);

  useEffect(() => {
    document.cookie = `theme=${themes[themeIdx]}; max-age=` + (3600 * 24 * 400);
  }, [themeIdx]);

  const onClick = () => {
    setThemeIdx((themeIdx + 1) % (themes.length));
    router.refresh();
  }

  return (
    <span onClick={onClick}>{
      themeIdx === 0 ? '☀️' : '🌙'
    }</span>
  )
}