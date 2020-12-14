import { Link } from "react-router-dom";


export default function HomePage(props){
    return(
        <main className="Page HomePage">
            <div className="transbox">
                <h1>Welcome to Sommelier Court</h1>
                <h2>Be your own Sommelier</h2>
                <h3>Sign up, search, explore and learn about wines!</h3>
                {!props.user && <h5>Please <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link> to search wine</h5>}
            </div>
           
            </main> 
    )
}