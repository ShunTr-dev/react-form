import StateLogin from './pages/Forms/StateLogin.jsx'
import WithRefs from './pages/Forms/WithRefs.jsx'
import FormBuiltIn from './pages/Forms/FormBuiltIn.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx'
import ReactRouter, { loader as PokemonLoader, action as PokemonSendAction } from './pages/Forms/ReactRouter.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: 'with-refs', element: <WithRefs /> },
            { path: 'built-in', element: <FormBuiltIn /> },
            { path: 'state-login', element: <StateLogin /> },
            { path: 'react-router-dom', element: <ReactRouter />, loader: PokemonLoader, action: PokemonSendAction },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
