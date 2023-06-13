import { styled } from 'styled-components';

const Div = styled.div`
  margin: 10vh 0;
  position: relative;
  margin-bottom: 0;
  padding: 100px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7vh 100px 0 100px;
    border-color: var(--secondaryBlack) transparent transparent transparent;
    left: 50%;
    transform: translateX(-50%) translateY(-100%) RotateZ(180deg);
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: -0%;
    top: 100%;
    z-index: 10;
    display: block;
    height: 50px;
    background-size: 50px 100%;
    background-image: linear-gradient(
        135deg,
        var(--secondaryBlack) 25%,
        transparent 25%
      ),
      linear-gradient(225deg, var(--secondaryBlack) 25%, transparent 25%);
    background-position: 0 0;
  }
`;

const CardContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #ffcd00, #ff8300);
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  height: 135px;
  min-width: 180px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  z-index: 2;
`;

const Hexagon = styled.div`
  position: absolute;
  top: 15px;
  right: 0%;
  width: 100px;
  height: 55px;
  background-color: var(--primaryYellow);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateX(10%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }

  &::before {
    bottom: 100%;
    border-bottom: 28px solid var(--primaryYellow);
  }

  &::after {
    top: 100%;
    width: 0;
    border-top: 28px solid var(--primaryYellow);
  }
`;

const Card = ({ title, ...props }) => {
  return (
    <CardContainer {...props}>
      <Hexagon><img src="/img/Panal.png" width={'100px'} alt="" /></Hexagon>
      <Title>{title}</Title>
    </CardContainer>
  );
};

const Offers = () => {
  const offers = ['Miel', 'Jalea', 'Cera', 'Veneno', 'Polem', 'Abejas Reinas'];

  return (
    <Div id="offers" className="bg_secondary text-white">
      <h1 className="text_primary text-center fw-bold">
        Algunos de nuestros productos
      </h1>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center align-items-center">
          {offers.map((item, key) => (
            <Card
              key={key}
              className="col-8 col-sm-5 col-md-4 col-lg-3 col-xl-auto my-2 mx-sm-3 mx-0"
              title={item}
            />
          ))}
        </div>
      </div>
    </Div>
  );
};

export default Offers;
