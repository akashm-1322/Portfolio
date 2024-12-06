import './Layout.scss';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () =>{
    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                

                <Outlet/>
                <span className='tags bottom-tags'>
                    
                    
                    <span className='bottom-tag-html'>
                        
                    </span>
                </span>

            </div>
        </div>
    )
}

export default Layout;