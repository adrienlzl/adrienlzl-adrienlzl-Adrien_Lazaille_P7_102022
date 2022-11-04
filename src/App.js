import { RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,} from 'react-router-dom'
import './css/App.css'
import RouteLayout from "./pages/RouteLayout";
//Pages du site
import Home from "./pages/Home";
import About from "./pages/About";
import Flat from "./pages/Flat";
import Error from "./pages/Error";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />} >
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/card/:id' element={<Flat />}/>
        </Route>
    ));





function App() {



  return <RouterProvider router={router}/>
}

export default App;

