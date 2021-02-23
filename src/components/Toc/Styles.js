import styled from 'styled-components';

const Container = styled.ul`
  position: absolute;
  text-align: center;
  opacity: 0.5;
  right: 0;
  background-color: #FAFAFA;
  width: auto;
  cursor: default;
  padding-top: 60px;
`;

const List = styled.li`
  list-style: none;
  margin: 50px;
  padding: 0;
  width: auto;
  cursor: default;
`;

const Link = styled.span`
  color: #333;
  padding: 5px 20px 5px 30px;
  cursor: pointer;
  display: block;
  font-family: 'Mont';
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.9rem;

  :hover {
    color: #000;
  }
`;

export {
  Container,
  List,
  Link,
};