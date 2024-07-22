
//import { BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from './pages/home';
import About from "./pages/about";
import Services from './pages/services';
//import Contact from './pages/contact';
import RootLayout from "./layout/rootLayout";
import HelpLayout from "./layout/HelpLayout";
import Faq from "./pages/help/Faq";
import Email, { emailAction } from "./pages/help/Email";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layout/CareersLayout";
import Careers from "./pages/Careers";
import { careerLoader } from "./pages/Careers";
import CareersDetails from "./pages/CareersDetails";
import { careerDetailLoader } from "./pages/CareersDetails";
import CareersError from "./pages/careers/CareersError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="services" element={<Services/>}/> 
      <Route path="help" element={<HelpLayout/>}/>
      <Route path="about" element={<About/>}/>

      <Route path="help" element ={<HelpLayout/>}>
        <Route path="faq" element ={<Faq/>}/>
        <Route path="email" element = {<Email/>} action={emailAction}/>
     </Route>

     <Route path="careers" element ={<CareersLayout/>}>
      <Route index element={<Careers/>}
      loader={careerLoader}/>
       <Route path=":id" element = {<CareersDetails/>}
       loader = {careerDetailLoader}
       errorElement= {<CareersError/>}/>
     </Route>


     <Route path="*" element = {<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (

    <RouterProvider router={router}/>

    // <BrowserRouter>
    // <header>
    //   <nav>
    //     <h1>G-TECH</h1>
    //     <NavLink to="/"> Home </NavLink>
    //     <NavLink to="services">Services</NavLink>
    //     <NavLink to="contact">Contact</NavLink>
    //     <NavLink to="about">About us</NavLink>
    //   </nav>
    // </header>
    //   <main>
    //     <Routes>
    //       <Route index element={<Home/>}/>
    //       <Route path="services" element={<Services/>}/> 
    //       <Route path="contact" element={<Contact/>}/>
    //       <Route path="about" element={<About/>}/>
    //     </Routes>
    //   </main>
    // </BrowserRouter>
  );
}

export default App
