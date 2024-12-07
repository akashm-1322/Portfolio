import './Layout.scss';
import { Suspense } from 'react';
const Sidebar = React.lazy(()=> import('./Sidebar.js'));
import { Outlet } from 'react-router-dom';

const Layout = () =>{
    return (
        <div className='App'>
            <Suspense fallback={<div>Loading...</div>}>
            <Sidebar/>
            </Suspense>
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