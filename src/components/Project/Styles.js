import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  margin: 20px;
  width: 90%;
  flex-basis: 500px;
`;

const Popup = styled.a`
  text-decoration: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 260px;

    @media screen and (max-width: 400px) {
      height: 180px;
    }
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  padding: 10px 25px 25px 25px;
  text-align: left;
  line-height: 24px;
`;

const Name = styled.b`
  margin-right: 5px;
`;

const Link = styled.a`
  margin-left: 4px;
`;

export {
  Container,
  Popup,
  Description,
  Name,
  Link,
};