
import AdminNav from "./AdminNav";

export default function AdminDashBoard(){ 
  return (
    <div className='admin-dashboard' >
       <AdminNav />
      <h2 className='user-greet text-center' style={{color:'white'}}>Welcome Admin !!</h2>
      
    </div>
  );
};
