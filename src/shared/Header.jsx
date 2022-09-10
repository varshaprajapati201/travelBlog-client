import Container from 'react-bootstrap/Container';


import {NavLink} from 'react-router-dom';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = styled(AppBar)`
Background:Black;
position:fixed;
`
const Tabs = styled(NavLink)`
fonst-size: 20px;
margin-right: 20px;
color: white;
`


function Navbar(){
  return (
     
<Header>
  <Toolbar>
<Tabs to="/">Traveler</Tabs>
<Tabs to="/">Home</Tabs>
<Tabs to="/Contact">Conatct</Tabs>
<Tabs to="/add">Compose</Tabs>
<Tabs to="/all">Blog Archive</Tabs>

  </Toolbar>
</Header>



//     <Navbar fixed="top" bg="light" expand="lg">
//       <Container>
//         <NavLink to="/">Traveler</NavLink>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav"> 
//           <Nav className="me-auto">
//           <NavLink to="/">Home</NavLink>
//             <NavLink to="/Contact">Contact</NavLink>
//             <NavLink to="/add">Compose</NavLink>
//               <NavLink to="/all">Blog Archive</NavLink>
//               </Nav>
        
        
//         </Navbar.Collapse> 
//       </Container>


     
//  </Navbar>
 
 
  );
}

export default Navbar;