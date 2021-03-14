import React from 'react';
import Aux from '../../hoc/Aux';
import Headercontent from '../Header/Header';
import SidebarContent from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
// import Home from '../Home/Home';
const layout = (props) =>{
    return(
        <Aux>
            <div>
                <Headercontent />
            </div>
            <div>
                <Aux>
                    <SidebarContent />   
                </Aux>
            </div>
            <div>
                <Footer />
            </div>
        </Aux>
    );
}
export default layout;