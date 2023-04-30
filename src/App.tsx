import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main'
import NotFoundPage from './pages/NotFound'
import { ROUTER_URL } from './common/consts/url'
import ColorCheckerPage from './pages/ColorChecker'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER_URL.ROOT} element={<MainPage />} />
        <Route path={ROUTER_URL.COLOR_CHECKER} element={<ColorCheckerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
