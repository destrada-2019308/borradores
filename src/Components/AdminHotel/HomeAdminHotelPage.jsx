import React from 'react';
import styled from "styled-components";
import photo from "../../assets/img/HomeC.png";

export const HomeAdminHotelPage = () => {
  const imagen = photo;

  return (
    <StyledHome>
      <section className='home-main'>
        <div className="imagen-conte">
          

          
          <img src={imagen} alt="" height={"500px"} className="imagen" />
        </div>
      </section>
    </StyledHome>
  );
}

const StyledHome = styled.div`

  position: absolute; 
  top: 5vh;
  left: 0; 
  margin: 0;
  width: calc(100vw - 15px); 
  min-height: 100vh; 
  background: var(--background-gradient);

  .home-main {     
       
    margin-top: 40px;
    display: grid;
  }

  .textin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 8rem;
  }

  .imagen-conte {
    display: flex;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
    align-items: center;
  }

  h1 {
    font-family: var(--text-font);
    color: var(--first-color);
    margin: 0;
    font-size: 45px;
    font-weight: 800;
  }

  .form-container {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    width: 900px;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .form-group {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  label {
    font-family: var(--text-font);
    color: var(--first-color);
    margin-bottom: 0.5rem;
    display: block;
  }

  select,
  input {
    width: 150px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    background-color: var(--first-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--second-color);
  }
`;
