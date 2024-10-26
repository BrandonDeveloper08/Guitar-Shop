import Guitar from "./components/Guitar"
import Header from "./components/Header";
import Main from "./components/Main"
import { useCart } from "./hooks/useCart";
function App() {
  const {
    data,
    cart, 
    addToCart,
    removeFromCart,
    increaseQuantity,
    drecrementQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart()

  return (
    <>
      <Header/>
      <Main 
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        drecrementQuantity={drecrementQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="contaisner-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=>(
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      
    <section className="cursos">
        <div className="cursos__contenedor cursos__grid">
            <div className="cursos__contenido">
                <h2 className="cursos__heading">Aprende a tocar guitarra</h2>
                <p className="cursos__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim fugiat nisi inventore laborum facilis cum reiciendis vel totam velit molestias, animi, odit, architecto officia. Dicta illum exercitationem voluptatem laudantium.</p>
                <a className="cursos__enlace" href="#">Más información</a>
            </div>
        </div>
    </section>

    <section className="blog">
        <h2 className="blog__heading">Nuestro Blog</h2>
        <div className="blog__contenedor blog__grid">
            <article className="entrada">
                <img className="entrada__imagen" src="blog_1.jpg" alt="imagen blog"/>

                <div className="entrada__contenido">
                    <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                    <p className="entrada__fecha">20 de Enero de 2022</p>
                    <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>

                    <a className='entrada__enlace' href='/entrada'>Leer Entrada</a>
                </div>
            </article>

            <article className="entrada">
                <img className="entrada__imagen" src="blog_2.jpg" alt="imagen blog"/>

                <div className="entrada__contenido">
                    <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                    <p className="entrada__fecha">20 de Enero de 2022</p>
                    <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>

                    <a className='entrada__enlace' href='/entrada'>Leer Entrada</a>
                </div>
            </article>

            <article className="entrada">
                <img className="entrada__imagen" src="blog_3.jpg" alt="imagen blog"/>

                <div className="entrada__contenido">
                    <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                    <p className="entrada__fecha">20 de Enero de 2022</p>
                    <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>

                    <a className='entrada__enlace' href='/entrada'>Leer Entrada</a>
                </div>
            </article>

            <article className="entrada">
                <img className="entrada__imagen" src="blog_4.jpg" alt="imagen blog"/>

                <div className="entrada__contenido">
                    <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                    <p className="entrada__fecha">20 de Enero de 2022</p>
                    <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>

                    <a className='entrada__enlace' href='/entrada'>Leer Entrada</a>
                </div>
            </article>
        </div>
    </section>

    <footer className="footer">
        <div className="footer__contenedor footer__contenido">
            <nav className="footer__nav">
                <a className='footer__enlace' href='/'>Inicio</a>
                <a className='footer__enlace' href='/nosotros'>Nosotros</a>
                <a className='footer__enlace' href='/blog'>Blog</a>
                <a className='footer__enlace' href='/tienda'>Tienda</a>
            </nav>

            <p className="footer__copyright">Todos los derechos reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
