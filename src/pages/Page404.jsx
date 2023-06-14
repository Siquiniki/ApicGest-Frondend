import { Link } from 'react-router-dom';
import style from '../404page.module.css';

const Page404 = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.container404}>
          <p>4</p>
          <div className={style.img}>
            <img
              src="/img/Panal.png"
              alt="death star"
              width={'200px'}
              height={'200px'}
              style={{ margin: '0 -50px' }}
            />
          </div>
          <p>4</p>
        </div>
        <div className={style.textContainer}>
          <span>Sorry</span> This is not the way
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link to={'/'}>
            <button className="btn btn-link">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
