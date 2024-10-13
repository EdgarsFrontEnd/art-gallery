import { HashRouter, Route, Routes as RouterRoutes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DetailsPage from './pages/DetailsPage'

const Routes = () => {
  return (
    <HashRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/details-page/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </HashRouter>
  )
}

export default Routes
