import { useState } from 'react'

import styles from '../styles/pages/Home.module.css'

export const Home = () => {
  var liters;

  const [click, setClick] = useState(false);

  const calculate = () => {
    setClick(!click)

    if(document.getElementById('fuelValue').value !== '' && document.getElementById('amount').value !== '') {
      let varFuelValue = parseFloat(document.getElementById('fuelValue').value);
      let varAmount = parseFloat(document.getElementById('amount').value);

      liters = varAmount / varFuelValue;

      console.log(varFuelValue)

      document.getElementById('result').innerHTML = `Você obterá ${liters} litros.`;
      document.getElementById('error').innerHTML = null;

    }else {
      document.getElementById('error').innerHTML = `Por favor, preencha os campos.`;
    }
  }

  return (
    <div className={styles.homeContainer}>
      <h1>Calculadora de Combustível</h1>
      <div className={styles.homeRow}>
        <div className={styles.formContainer}>
          <form className={styles.fuelForm}>
            <h3>Informe os valores:</h3>
            <input type="text" placeholder='Valor do litro do combustível' id='fuelValue' className={styles.fuelFormInput}/>
            <input type="text" placeholder='Quantos R$ deseja abastecer' id='amount' className={styles.fuelFormInput}/>
            <input type="button" value='Calcular' placeholder='Quantos R$ deseja abastecer' onClick={calculate} className={styles.fuelFormButton}/>
            <p id='error' className={styles.error}></p>
          </form>
        </div>
        <img src="../images/camaro.png" alt="Camaro" className={styles.camaroImage}/>
      </div>
      <h1 id='result'></h1>
    </div>
  )
}