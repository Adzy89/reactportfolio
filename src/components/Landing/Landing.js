
import { Outlet } from 'react-router-dom';

function Landing() {
    return (
        <div className="App">
          <Outlet />
          <h1>Hello im Adam</h1>
      
      </div>
    );
}

export default Landing;