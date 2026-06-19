import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";


import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Predictive from "./pages/Predictive/Predictive";


import Layout from "./components/layout/Layout";



function App() {


  return (


    <BrowserRouter>


      <Routes>



        {/* Pantallas públicas */}

        <Route
          path="/"
          element={<Login />}
        />


        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          path="/register"
          element={<Register />}
        />





        {/* Pantallas internas con Layout */}


        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />



        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />



        <Route
          path="/predictive"
          element={
            <Layout>
              <Predictive />
            </Layout>
          }
        />



      </Routes>



    </BrowserRouter>


  );

}



export default App;