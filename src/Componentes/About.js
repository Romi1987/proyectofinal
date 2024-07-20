export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hola, soy Flor!
              <br className="hidden lg:inline-block" />Me encanta la idea de acompañarte en tu próximo evento.
            </h1>
            <p className="mb-8 leading-relaxed">
             Hace más de diez años que me dedico al maquillaje en Mar del Plata y alrededores. Realicé a lo largo de los años varias capacitaciones que me llevaron no sólo a perfecccionar mi técnica, sino tambien a ofrecer cursos de capacitación tanto a profesionales como amantes de las tendencias y el maquillaje.
            </p>
            <div className="flex justify-center">
                <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Mira mis trabajos anteriores
              </a>
            </div>
          </div>
         </div>
      </section>
    );
  }