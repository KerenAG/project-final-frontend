function Projects() {

  const projects = [
    {
      name: "Sistema de Gestión PredictApp",
      manager: "Keren Almonte",
      progress: "72%",
      status: "En desarrollo",
      risk: "Medio",
    },
    {
      name: "Motor de Análisis Predictivo",
      manager: "Josue Campusano",
      progress: "40%",
      status: "En desarrollo",
      risk: "Alto",
    },
    {
      name: "Integración Plataforma PredictApp",
      manager: "Keren Guillamo / Josue Campusano",
      progress: "55%",
      status: "Planificación",
      risk: "Bajo",
    },
  ];


  return (

       <div>

      {/* Encabezado */}

      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">


        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Gestión de Proyectos
          </h1>


          <p className="text-slate-500 mt-2">
            Administración, seguimiento y análisis del estado de proyectos registrados.
          </p>

        </div>



        <button
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          + Nuevo proyecto
        </button>


      </header>





      {/* Indicadores */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">


        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            Proyectos registrados
          </p>


          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            8
          </h2>


          <p className="text-xs text-slate-400 mt-2">
            Total de proyectos dentro de la plataforma
          </p>

        </div>





        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            Proyectos activos
          </p>


          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            5
          </h2>


          <p className="text-xs text-slate-400 mt-2">
            Proyectos actualmente en ejecución
          </p>

        </div>





        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            Riesgos detectados
          </p>


          <h2 className="text-3xl font-bold mt-2 text-orange-500">
            2
          </h2>


          <p className="text-xs text-slate-400 mt-2">
            Proyectos con posibles desviaciones
          </p>


        </div>



      </section>







      {/* Tabla de proyectos */}

      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">


        <div className="p-6 border-b border-slate-200">


          <h2 className="text-xl font-semibold text-slate-800">
            Proyectos actuales
          </h2>


          <p className="text-sm text-slate-500 mt-1">
            Vista general del avance y nivel de riesgo identificado.
          </p>


        </div>





        <div className="overflow-x-auto">


          <table className="w-full text-left">


            <thead className="bg-slate-50">


              <tr>

                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Proyecto
                </th>


                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Responsable
                </th>


                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Avance
                </th>


                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Estado
                </th>


                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Riesgo
                </th>

              </tr>


            </thead>





            <tbody>


              {projects.map((project, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >


                  <td className="px-6 py-5 font-medium text-slate-800">

                    {project.name}

                  </td>




                  <td className="px-6 py-5 text-slate-600">

                    {project.manager}

                  </td>





                  <td className="px-6 py-5 text-slate-700 font-medium">

                    {project.progress}

                  </td>





                  <td className="px-6 py-5">


                    <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">

                      {project.status}

                    </span>


                  </td>





                  <td className="px-6 py-5">


                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        
                        project.risk === "Alto"
                        ? "bg-red-100 text-red-700"
                        
                        : project.risk === "Medio"
                        ? "bg-orange-100 text-orange-700"

                        : "bg-green-100 text-green-700"

                      }`}
                    >

                      {project.risk}

                    </span>


                  </td>



                </tr>


              ))}



            </tbody>



          </table>


        </div>



      </section>



    </div>

  );
}


export default Projects;