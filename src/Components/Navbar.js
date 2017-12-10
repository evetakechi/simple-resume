import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Navbar.css';

const Navbar = ({Menus,onScoller}) => {
    return (
        <nav className="nav-wrap">
           
            <ul className="nav-ul">
                    {
                        Menus.map(
                            (menu,index) => <li key={index}>
                            <a  onClick={() => onScoller(index)}>{menu}</a>
                        </li>
                        )
                    }   
            </ul>
           
           
      </nav>
    )
}


Navbar.propTypes = {
    Menus:PropTypes.array,
    onScoller:PropTypes.func
}


export default Navbar