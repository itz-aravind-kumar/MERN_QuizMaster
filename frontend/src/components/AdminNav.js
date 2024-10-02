
import { Link } from "react-router-dom"
 export default function AdminNav(){
    return(
        <div>
            <nav class='navbar '>
        <Link to='/admin-dashboard' class='navbar-brand mx-3' style={{fontWeight:'500', fontSize:'2rem', fontFamily:'Roboto Slab, serif', color:'wheat'}}>Quiz Master</Link>
                <Link to='/create-quiz/' class='nav-link ms-md-auto me-4' style={{color:'white', fontSize:'1rem'}}>Create Quiz</Link>
                <Link to='/add-question/' class='nav-link me-4' style={{color:'white', fontSize:'1rem'}}>Add Questions</Link>
                <Link to='/quiz-list/' class='nav-link me-4' style={{color:'white', fontSize:'1rem'}}>Quiz List</Link>
                <Link to='/admin-results/' class='nav-link me-4' style={{color:'white', fontSize:'1rem'}}> Scores</Link>   
                <Link to='/' class='nav-link me-4' style={{color:'white', fontSize:'1rem'}}> Logout</Link>   
        </nav>
        </div>
    )

}