import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from "./providers/AuthProvider"
import { routerNavigator } from "./routes/Browser"

function App() {
  const router = createBrowserRouter(routerNavigator);
  return (
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  )
}

export default App
