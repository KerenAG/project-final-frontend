function Dashboard() {
  const metrics = [
    {
      title: "Proyectos activos",
      value: "8",
      description: "Proyectos actualmente en seguimiento",
    },
    {
      title: "Tareas completadas",
      value: "72%",
      description: "Avance promedio de tareas registradas",
    },
    {
      title: "Riesgos detectados",
      value: "2",
      description: "Proyectos con posibles desviaciones",
      highlight: true,
    },
    {
      title: "Predicciones realizadas",
      value: "45",
      description: "Análisis predictivos ejecutados",
    },
  ];


  return (
    <div>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800">
          Sistema de Gestión de Proyectos
          <span className="block text-blue-600">
            con Análisis Predictivo
          </span>
        </h1>

        <p className="mt-3 text-slate-500">
          Panel de control inicial para seguimiento,
          métricas y detección temprana de riesgos.
        </p>
      </header>



      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
          >

            <p className="text-sm text-slate-500">
              {metric.title}
            </p>


            <h2
              className={`text-3xl font-bold mt-3 ${
                metric.highlight
                  ? "text-orange-500"
                  : "text-slate-800"
              }`}
            >
              {metric.value}
            </h2>


            <p className="text-xs text-slate-400 mt-3">
              {metric.description}
            </p>

          </div>
        ))}

      </section>



      <section className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">

        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Estado general del desarrollo
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Información inicial del sistema durante la fase de construcción.
            </p>
          </div>


          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Fase 1 - Desarrollo inicial
          </span>

        </div>



        <div className="mt-6 space-y-5">


          <div>

            <div className="flex justify-between text-sm mb-2">
              <span>
                Arquitectura frontend
              </span>

              <span>
                80%
              </span>
            </div>


            <div className="h-3 bg-slate-200 rounded-full">
              <div
                className="h-3 bg-blue-600 rounded-full"
                style={{ width: "80%" }}
              />
            </div>

          </div>




          <div>

            <div className="flex justify-between text-sm mb-2">
              <span>
                Módulos iniciales
              </span>

              <span>
                40%
              </span>
            </div>


            <div className="h-3 bg-slate-200 rounded-full">

              <div
                className="h-3 bg-purple-600 rounded-full"
                style={{ width: "40%" }}
              />

            </div>

          </div>


        </div>

      </section>



    </div>
  );
}


export default Dashboard;