import { styled } from 'styled-components';

const Div = styled.div`
  position: relative;
  height: 60vh;
`;

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Cont = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: bg_black_primary;
`;
const Contact = () => {
  return (
    <Div id="contact" className="bg_primary pt-5">
      <div className="wave"></div>
      <ContactContainer>
        <Cont>Contacto</Cont>
      </ContactContainer>
    </Div>
  );
};

export default Contact;
