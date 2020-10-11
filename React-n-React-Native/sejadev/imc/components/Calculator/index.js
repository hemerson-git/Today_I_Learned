import { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import styles from './Calculator.module.scss';

export default function Calculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState(0);
  
  function getImc() {
    setImc((weight / (height * height)).toFixed(2));
  }
  
  function getImcStatus() {
    console.log(imc < 24.9)
      if (imc < 18.5) return 'Abaixo do peso';
      if (imc < 24.9) return 'Peso Normal';
      if (imc < 29.9) return 'Sobrepeso';
      if (imc < 34.9) return 'Obesidade Grau 1';
      if (imc < 39.9) return 'Obesidade Grau 2'
      return 'Obesidade Grau 3';
  }
  
  return (
    <div className={styles.calculator}>
      <Typography variant='h3'>Calculator</Typography>

      <Container maxWidth="sm">
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField label="Altura em cm" variant="filled" fullWidth type="number"
              onChange={e => {
                setHeight(parseFloat(e.target.value / 100));
              }}
            />
          </Grid>

          <Grid item>
            <TextField label="Massa em Kg" variant="filled" fullWidth type="number"
              onChange={e => {
                setWeight(parseFloat(e.target.value));
              }}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" fullWidth onClick={getImc}>
              Calcular
            </Button>
          </Grid>

          {
            imc &&
            <Grid item>
              <Typography>O seu IMC é: {imc} kg/m² - {getImcStatus()}</Typography>
            </Grid>
          }
        </Grid>
      </Container>
    </div>
  );
}
