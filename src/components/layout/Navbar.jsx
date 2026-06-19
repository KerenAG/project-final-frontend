function Navbar() {


  return (

    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">


      <h1 className="text-lg font-semibold text-slate-700">
        Sistema de Gestión de Proyectos
      </h1>



      <div className="flex items-center gap-3">


        <div className="text-right">

          <p className="text-sm font-medium text-slate-700">
            Keren Guilamo
          </p>

          <p className="text-xs text-slate-400">
            Administrador
          </p>


        </div>



        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">

          KG

        </div>


      </div>


    </header>

  );

}


export default Navbar;