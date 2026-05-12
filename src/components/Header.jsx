function Header () {
    return (
        <header>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              className="logo"
              alt="Logo Fernanda G Flores"
            />

            <nav>
                <a>Home</a>
                <a>Sobre</a>
                <a>Atendimentos</a>
                <a>Contato</a>
            </nav>
        </header>
    )
}

export default Header