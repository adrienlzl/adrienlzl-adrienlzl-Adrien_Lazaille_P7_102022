import { RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,} from 'react-router-dom'
import './css/App.css'
import RouteLayout from "./pages/RouteLayout";
//Pages du site
import Home from "./pages/Home";
import About from "./pages/About";
import Card from "./pages/Card";
import Error from "./pages/Error";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />} errorElement={<Error/>}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/card/:id' element={<Card />}/>
        </Route>
    ));





function App() {



  return <RouterProvider router={router}/>
}

export default App;

