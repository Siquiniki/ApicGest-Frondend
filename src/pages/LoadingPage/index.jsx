import './styles.css';

const LoadingPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column" style={{height:'100vh'}}>
      <section className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </section>
    </div>
  );
};

export default LoadingPage;
