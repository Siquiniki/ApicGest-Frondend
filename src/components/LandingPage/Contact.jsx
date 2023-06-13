import { styled } from 'styled-components';

const Div = styled.div`
  position: relative;
  height: 60vh;
`;

const Contact = () => {
  return (
    <Div id="contact" className="bg_primary pt-5">
      <div className="wave"></div>
      <h3 className="fw-bold">Contacto</h3>
    </Div>
  );
};

export default Contact;
