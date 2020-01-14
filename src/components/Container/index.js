import styled from 'styled-components';

const Container = styled.div`
  background-color: '#ffffff';
  margin: auto;
  margin-left: ${props => (props.barOpened ? '10rem' : '1rem')};
  margin-right: ${props => (props.barOpened ? '10rem' : '1rem')};
  width: 10%;
  padding: 1px;
  font-size: 16px;

  /* font-display: #444; */
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
  /* font-size: 16px; */

  /* h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  } */
`;

export default Container;
