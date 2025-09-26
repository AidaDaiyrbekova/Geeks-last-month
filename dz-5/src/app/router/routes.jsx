
import { useRoutes } from 'react-router-dom';
import { RouterRoot } from './../providers/RouterProvider';
import { Children } from 'react';
import { Divider } from 'antd';
import { HomePage } from './../../pages/HomePage/HomePage';
import { CatalogPage } from './../../pages/CatalogPage/CatalogPage';
import { ProductPage } from './../../pages/ProductPage/ProductPage';
import { CartPage } from './../../pages/CartPage/CartPage';
import { LoginForm } from '../../features/auth/ui/LoginForm';
import App from '../../App';
import { RegisterForm } from '../../features/auth/ui/RegisterForm';




const routes = [
    {
        path:'/',
        element:<App />,
        children:[
            {index: true, element: <HomePage />},
            {path: 'catalog', element: <CatalogPage />},
            {path: 'product/:id', element: <ProductPage />},
            {path: 'cart', element: <CartPage />},
            {path: 'login', element: <LoginForm />},
            {path: 'register', element: <RegisterForm />},
            {path: '*', element: <div>Not Found</div>},
        ]
    }
]

export function RoutesRoot() {
    return useRoutes(routes)
}