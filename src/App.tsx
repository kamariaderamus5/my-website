import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import CookPage from './pages/CookPage'
import EatPage from './pages/EatPage'
import HomePage from './pages/HomePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import RestaurantDetailPage from './pages/RestaurantDetailPage'
import WanderPage from './pages/WanderPage'
import AdminPage from './admin/AdminPage'
import RestaurantsAdminPage from './admin/RestaurantsAdminPage'
import NewRestaurantPage from './admin/NewRestaurantPage'
import EditRestaurantPage from './admin/EditRestaurantPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/eat" element={<EatPage />} />
        <Route path="/eat/:slug" element={<RestaurantDetailPage />} />
        <Route path="/cook" element={<CookPage />} />
        <Route path="/cook/:slug" element={<RecipeDetailPage />} />
        <Route path="/wander" element={<WanderPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/restaurants" element={<RestaurantsAdminPage />} />
      <Route
        path="/admin/restaurants/new"
        element={<NewRestaurantPage />}
      />
      <Route
        path="/admin/restaurants/:slug"
        element={<EditRestaurantPage />}
      />
    </Routes>
  )
}
