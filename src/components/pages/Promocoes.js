import styles from './Promocoes.module.css'

function Promocoes() {
  return (
    <section className={styles.promocoes_container}>
      <h1>PROMOÇÕES</h1>

      <div>
        <table>
          <tr>
            <th>Região</th>
            <th>Estado</th>
            <th>Destino</th>
            <th>Preço</th>
          </tr>
          <tr>
            <td>Norte</td>
            <td>Amazonia</td>
            <td>Selva</td>
            <td>R$ 1.500,00</td>
          </tr>
          <tr>
            <td>Nordeste</td>
            <td>Bahia</td>
            <td>Salvador</td>
            <td>R$ 1.000,00</td>
          </tr>
          <tr>
            <td>Centro-Oeste</td>
            <td>Distrito Federal</td>
            <td>Brasília</td>
            <td>R$ 2.000,00</td>
          </tr>
          <tr>
            <td>Sudeste</td>
            <td>Rio de Janeiro</td>
            <td>Guaratiba</td>
            <td>R$ 3.500,00</td>
          </tr>
          <tr>
            <td>Sul</td>
            <td>Gramado</td>
            <td>Rio Grande do Sul</td>
            <td>R$ 2.500,00</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default Promocoes
