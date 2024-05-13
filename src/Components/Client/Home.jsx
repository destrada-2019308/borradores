import React from 'react';
import styled from "styled-components";
import photo from "../../assets/img/HomeC.png";

export const Home = () => {
  const imagen = photo;

  return (
    <StyledHome>
      <section className='home-main'>
        <div className="imagen-conte">
          <div className="textin">
            <h1>ALGUNAS VECES SOLO </h1>
            <h1>NECESITAS VIAJAR</h1>
            <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <select id="location" name="location">
                  <option value="guatemala">Guatemala</option>
                  <option value="amatitlan">Amatitlan</option>
                  <option value="atitlan">Atitlan</option>
                  <option value="peten">Peten</option>
                  <option value="izabal">Izabal</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="checkin">Check-in Date</label>
                <input type="date" id="checkin" name="checkin" required />
              </div>
              <div className="form-group">
                <label htmlFor="checkout">Check-out Date</label>
                <input type="date" id="checkout" name="checkout" required />
              </div>
              <div className="form-group">
                <label htmlFor="people">Number of People</label>
                <input type="number" id="people" name="people" min="1" required />
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
          </div>
          
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
