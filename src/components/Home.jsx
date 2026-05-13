function Home() {
  return (
    <section id="home" className="home">
      
      <div className="home-texto">
        <p className="subtitulo">Psicóloga Clínica</p>

        <h1>Fernanda G Flores</h1>

        <p>
          Um espaço de acolhimento, escuta e cuidado emocional.
        </p>

        <button>Agendar consulta</button>
      </div>

      <div className="home-imagem">
        <img
          src="/Port-PsiFernandaGFlores/FerHome.png"
          className="foto-home"
          alt="Fernanda"
        />
      </div>

    </section>
  )
}

export default Home