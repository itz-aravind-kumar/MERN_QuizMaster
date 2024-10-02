import {Link} from 'react-router-dom'
import '../App.css'

export default function Nav(){
    return(
        <nav class='navbar navbar-expand-md'>
            <Link to='/' class='navbar-brand mx-3' style={{fontWeight:'500', fontSize:'2rem', fontFamily:'Roboto Slab, serif', color:'wheat'}}>Quiz Master</Link>
            <button class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#mynav'>
                <span class='navbar-toggler-icon'></span>
            </button>

            <div class='navbar-nav me-auto collapse navbar-collapse' id='mynav'>
                <Link to='/register' class='aru nav-link ms-md-auto me-4' style={{color:'white', fontSize:'1rem'}}>Register</Link>
                <Link to='/login' class='aru nav-link me-4' style={{color:'white', fontSize:'1rem'}}>Login</Link>
                
            </div>
        </nav>
    )
}