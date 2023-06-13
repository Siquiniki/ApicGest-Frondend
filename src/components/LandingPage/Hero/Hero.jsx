import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFilter} />
      <div className={styles.info + ' mb-5'}>
        <h1>Bienvenido a ApiGest</h1>
        <div className={styles.subHeader}>
          La asociación de apicultores de Cuba
        </div>
      </div>
    </div>
  );
};

export default Hero;
