import { Outlet } from 'react-router-dom';
import DateTime from './DateTime';
import Navs from './Navs';

const MainLayout = () => {
    return (
      <div>
        {/* App title and subtitle */}
        <DateTime />
        
        {/* Tag to render the current page */}
        <Outlet />

        {/* All page links are rendered here */}
        <Navs />
      </div>
    );
  };
  
  export default MainLayout;