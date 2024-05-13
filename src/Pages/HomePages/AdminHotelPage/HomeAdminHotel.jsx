import { NavbarAdminHotel } from "../../../Components/AdminHotel/NavbarAdminHotel"
import { HomeAdminHotelPage } from "../../../Components/AdminHotel/HomeAdminHotelPage"
import styled from "styled-components"

const StyledPage = styled.div`
    background-color: #2c4e4d;
    
    
`

export const HomeAdminHotel = () => {

  
  

  return (
    <>
    <StyledPage>
      <NavbarAdminHotel  />
      <HomeAdminHotelPage />
      </StyledPage> 
    </>
    
  )
}
