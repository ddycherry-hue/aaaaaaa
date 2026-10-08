import { useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button, ConfigProvider, theme as antdTheme } from "antd"
import { selectFavoritesCount } from "../store/favoritesSlice"
import { useThemeStore } from "../store/useThemeStore"

const MainLayout = () => {
  const favoritesCount = useSelector(selectFavoritesCount)
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  // меняем фон всей страницы (body/html), а не только блока .app
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <ConfigProvider
      theme={{ algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm }}
    >
      <div className="app">
        <header className="header">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/products">Продукты</NavLink>
          <NavLink to="/favorites" className="favoritesCounter" aria-live="polite">
            Избранное: ❤️ {favoritesCount}
          </NavLink>
          <Button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Тёмная" : "☀️ Светлая"}
          </Button>
        </header>

        <main>
          <Outlet />
        </main>

        <footer>2026 Geeks Shop</footer>
      </div>
    </ConfigProvider>
  )
}

export default MainLayout
