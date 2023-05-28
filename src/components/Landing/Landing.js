import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav'

const Landing = () => {
    return (
      <>
          <Outlet />
          <Nav />
   
      
     
      </>
    );
}

export default Landing;