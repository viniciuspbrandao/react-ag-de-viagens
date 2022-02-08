import styles from './Home.module.css'
import imgOne from '../../img/imageOne.jpg'
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Descubra o Mundo!</h1>
      <img src={imgOne} alt="travel" />
      <h2>Sobre Nós</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        reiciendis nesciunt, similique odio, repellat laborum soluta, deleniti
        in beatae error at animi laboriosam accusamus illum inventore corporis!
        Expedita, nesciunt harum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis in neque maxime modi, soluta cum dicta dolor
        expedita harum dolore error eveniet aut reprehenderit ab, maiores vero
        doloremque nemo libero?
      </p>
    </section>
  )
}

export default Home
