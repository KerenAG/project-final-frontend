function Predictive() {


  const predictions = [
    {
      project: "Sistema de Gestión PredictApp",
      probability: "35%",
      risk: "Medio",
      status: "Seguimiento recomendado",
    },
    {
      project: "Motor de Análisis Predictivo",
      probability: "78%",
      risk: "Alto",
      status: "Requiere atención",
    },
    {
      project: "Integración Plataforma PredictApp",
      probability: "20%",
      risk: "Bajo",
      status: "Evolución estable",
    },
  ];



  return (

    <div>



      {/* Encabezado */}

      <header className="mb-8">


        <h1 className="text-3xl font-bold text-slate-800">

          Análisis Predictivo

        </h1>


        <p className="text-slate-500 mt-2">

          Evaluación inteligente del estado de proyectos y detección temprana de riesgos.

        </p>


      </header>







      {/* Resumen */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">



        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">


          <p className="text-sm text-slate-500">

            Proyectos analizados

          </p>


          <h2 className="text-3xl font-bold mt-3">

            8

          </h2>


        </div>





        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">


          <p className="text-sm text-slate-500">

            Riesgo promedio

          </p>


          <h2 className="text-3xl font-bold mt-3 text-orange-500">

            Medio

          </h2>


        </div>





        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">


          <p className="text-sm text-slate-500">

            Alertas generadas

          </p>


          <h2 className="text-3xl font-bold mt-3">

            2

          </h2>


        </div>



      </section>







      {/* Panel de información */}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">



        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">


          <h2 className="text-xl font-semibold text-slate-800">

            Factores analizados

          </h2>



          <ul className="mt-5 space-y-3 text-slate-600">


            <li className="flex items-center gap-3">

              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>

              Avance actual del proyecto

            </li>


            <li className="flex items-center gap-3">

              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>

              Cumplimiento de tareas asignadas

            </li>


            <li className="flex items-center gap-3">

              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>

              Tiempo estimado vs tiempo utilizado

            </li>


            <li className="flex items-center gap-3">

              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>

              Historial de retrasos

            </li>


          </ul>



        </div>







        <div className="bg-slate-900 rounded-xl p-6 text-white shadow-sm">


          <h2 className="text-xl font-semibold">

            Recomendación del sistema

          </h2>



          <p className="mt-5 text-slate-300 leading-relaxed">

            El análisis inicial identifica posibles desviaciones
            en proyectos con menor avance respecto al tiempo estimado.
            Se recomienda revisar la distribución de tareas y recursos.

          </p>



          <div className="mt-6 inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300">

            Atención requerida

          </div>



        </div>



      </section>







      {/* Tabla predictiva */}

      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">


        <div className="p-6 border-b border-slate-200">


          <h2 className="text-xl font-semibold">

            Resultados de predicción

          </h2>


        </div>





        <table className="w-full text-left">


          <thead className="bg-slate-50">


            <tr>


              <th className="px-6 py-4 text-sm text-slate-500">

                Proyecto

              </th>


              <th className="px-6 py-4 text-sm text-slate-500">

                Probabilidad de retraso

              </th>


              <th className="px-6 py-4 text-sm text-slate-500">

                Riesgo

              </th>


              <th className="px-6 py-4 text-sm text-slate-500">

                Estado

              </th>


            </tr>


          </thead>





          <tbody>


            {predictions.map((item, index) => (


              <tr 
                key={index}
                className="border-t border-slate-100"
              >


                <td className="px-6 py-5 font-medium">

                  {item.project}

                </td>



                <td className="px-6 py-5">

                  {item.probability}

                </td>



                <td className="px-6 py-5">


                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      
                      item.risk === "Alto"
                      ? "bg-red-100 text-red-700"

                      : item.risk === "Medio"
                      ? "bg-orange-100 text-orange-700"

                      : "bg-green-100 text-green-700"

                    }`}
                  >

                    {item.risk}

                  </span>


                </td>




                <td className="px-6 py-5 text-slate-600">

                  {item.status}

                </td>



              </tr>


            ))}


          </tbody>



        </table>



      </section>




    </div>

  );
}


export default Predictive;