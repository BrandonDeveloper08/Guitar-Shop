export default function Header() {
    return (
        <header className="header">
            <div className="header__contenedor">
                <div className="header__barra">
                    <a href="/">
                        <img className="header__logo" src="logo.svg" alt="imagen logo"/>
                    </a>

                    <nav className="navegacion">
                        <a className='navegacion__enlace' href='/'>Inicio</a>
                        <a className='navegacion__enlace' href='/nosotros'>Nosotros</a>
                        <a className='navegacion__enlace' href='/blog'>Blog</a>
                        <a className='navegacion__enlace' href='/tienda'>Tienda</a>
                    </nav>
                </div>

                <div className="modelo">
                    <h1 className="modelo__nombre">Modelo VAI</h1>
                    <p className="modelo__descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, dolorum voluptatem fuga illum nisi saepe, repellat laudantium accusantium doloremque harum</p>
                    <p className="modelo__precio">$399</p>
                    <a className='modelo__enlace' href='/producto'>Ver Producto</a>
                </div>
            </div>

            <img className="header__guitarra" src="header_guitarra.png" alt="imagen header guitarra"/>
            <div>
                <a className="logo-enlace" href="https://wa.me/51978069398">
                    <img className="wsp-logo" src="logo-ws.png" alt="wsp"/>
                </a>
            </div>
        </header>

    )
}
