import { Link } from "react-router-dom";


function Sidebar() {

  return (

    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">


      <div className="flex items-center gap-3 mb-10">

        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
          PA
        </div>


        <h2 className="text-xl font-semibold">
          PredictApp
        </h2>


      </div>





      <nav className="space-y-3">


        <Link
          to="/dashboard"
          className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
        >
          Dashboard
        </Link>


        <Link
          to="/projects"
          className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
        >
          Proyectos
        </Link>


        <Link
          to="/predictive"
          className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
        >
          Análisis Predictivo
        </Link>


      </nav>




    </aside>

  );

}


export default Sidebar;