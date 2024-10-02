
import { Link, useParams } from "react-router-dom"
 export default function StudentNav(){
    const{id} =useParams();
    return(
        <div>
            <nav class='navbar '>
        <Link to={'/student-dashboard/'+id} class='navbar-brand mx-3' style={{fontWeight:'500', fontSize:'2rem', fontFamily:'Roboto Slab, serif', color:'wheat'}}>Quiz Master</Link>  
                <Link to='/' class='nav-link me-4' style={{color:'white', fontSize:'1rem'}}> Logout</Link>   
        </nav>
        </div>
    )

}