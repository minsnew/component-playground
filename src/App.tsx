import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main'
import NotFoundPage from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
