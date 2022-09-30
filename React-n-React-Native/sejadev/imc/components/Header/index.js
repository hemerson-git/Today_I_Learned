import { Container, Grid, Typography } from '@material-ui/core';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.header}>
      <Container fixed>
        <Grid container justify="center" alignItems='center' spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={styles.title}>Calcule o seu IMC</Typography>
            <Typography>O IMC é o Índice de massa corporal, 
              e é utilizado para saber se o peso está de acordo com a 
              altura.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img src="/medic.png" alt="Imagem de Médico e Páciente"/>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header;
