import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate();
    const [user]=useAuthState(auth);

    return (
        <>
        <h1>Welcome {user?.email}</h1>
        <button onClick={()=>{auth.signOut(); navigate('/')}}>Sign Out</button>
        </>
    )
}

export default Home;