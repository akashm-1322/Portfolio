import './Layout.scss';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const Sidebar = React.lazy(()=> import('./Sidebar.js'));

const Layout = () =>{
    return (
        <div className='App'>
            <Suspense fallback={<div>Loading...</div>}>
            <Sidebar/>
            </Suspense>
            <div className='page'>
                

                <Outlet/>
                
<i class="fa fa-y-combinator" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Layout;