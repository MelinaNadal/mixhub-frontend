import { Link } from "react-router-dom";
import "./HomePage.module.css";


export default function HomePage(props){
    return(
        <main className="Page HomePage">
            <div className="transbox">
                <h1>Welcome to MixHub</h1>
                <h2>Be your own mixologist</h2>
                <h3>Sign up, search, explore and learn about cocktails!</h3>
                {!props.user && <h5>Please <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link> to search </h5>}
            </div>
           
            </main> 
    )
}