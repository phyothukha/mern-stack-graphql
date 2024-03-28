import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/loader'

const Login = lazy(() => import('@/pages/auth/login'))
const Dashboard = lazy(() => import('@/pages/dashboard'))

const Router = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Suspense>
    )
}

export default Router
