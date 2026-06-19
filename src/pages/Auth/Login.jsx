function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex">


      {/* Panel informativo */}
      <section className="hidden lg:flex flex-1 flex-col justify-between p-12 text-white">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xl">
              PA
            </div>


            <span className="text-xl font-semibold">
                PredictApp
            </span>

          </div>


          <div className="mt-20 max-w-lg">

            <h1 className="text-5xl font-bold leading-tight">
              Gestión inteligente de proyectos
              <span className="text-blue-400">
                {" "}con análisis predictivo
              </span>
            </h1>


            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Plataforma diseñada para organizar proyectos,
              monitorear avances y anticipar posibles riesgos
              mediante análisis basado en datos.
            </p>


          </div>


        </div>




    <div className="grid grid-cols-3 gap-4 max-w-lg">


  <div className="bg-white/10 backdrop-blur rounded-xl p-4">

    <p className="text-sm text-slate-400">
      Proyectos activos
    </p>

    <h3 className="text-2xl font-bold mt-1">
      8
    </h3>

  </div>



  <div className="bg-white/10 backdrop-blur rounded-xl p-4">

    <p className="text-sm text-slate-400">
      Avance promedio
    </p>

    <h3 className="text-2xl font-bold mt-1">
      72%
    </h3>

  </div>



  <div className="bg-white/10 backdrop-blur rounded-xl p-4">

    <p className="text-sm text-slate-400">
      Riesgos detectados
    </p>

    <h3 className="text-2xl font-bold mt-1">
      2
    </h3>

  </div>


</div>


      </section>





      {/* Formulario */}
      <section className="flex-1 flex items-center justify-center p-6 bg-slate-100">


        <div className="w-full max-w-md">


          <div className="bg-white rounded-3xl shadow-xl p-10">


            <div className="mb-8">

              <h2 className="text-3xl font-bold text-slate-800">
                Iniciar sesión
              </h2>


              <p className="text-slate-500 mt-2">
                Accede al panel de administración de proyectos.
              </p>

            </div>




            <div className="space-y-5">


              <div>

                <label className="text-sm font-medium text-slate-700">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>




              <div>

                <label className="text-sm font-medium text-slate-700">
                  Contraseña
                </label>


                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />


              </div>




              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Entrar al sistema
              </button>


            </div>




            <div className="mt-8 text-center text-sm text-slate-400">

            PredictApp · Gestión inteligente de proyectos
            
            </div>


          </div>


        </div>


      </section>


    </div>
  );
}


export default Login;