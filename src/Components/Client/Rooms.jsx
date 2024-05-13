//Implementación de componentes Boostrap
import { Container, Row, Col, Card } from 'react-bootstrap';

import React from 'react'
import styled from "styled-components"

export const Rooms = () => {
//variables de fotos
  

return (
    <styledRoom>
        <h1>Hola</h1>
    </styledRoom>    
  )
}


const styledRoom = styled.div`
  position: absolute; 
  top: 5vh;
  left: 0; 
  margin: 0;
  width: calc(100vw - 15px); 
  min-height: 100vh; 
  background: var(--background-gradient); 
`
