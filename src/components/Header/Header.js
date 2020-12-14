import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <h1></h1>
            <nav>
                <ul className="NavLinks">
                <li>{props.user && <Link to='' onClick={props.handleLogout}>Log Out</Link>}</li>
            <li>{props.user && <Link to= '/search'>Search</Link>}</li>                   
            <li>{!props.user && <Link to= '/signup'>Signup</Link>}</li>
            <li>{!props.user && <Link to ='/login'>Login</Link>}</li>                        
                 
                </ul>
            </nav>
        </header>
    );
}
