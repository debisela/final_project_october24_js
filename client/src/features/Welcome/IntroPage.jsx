import { Link } from 'react-router-dom';
import './IntroPage.css'


const IntroPage = ()=>{
    
    return (
        <div className="intro-container">
            <h1>Welcome to TagMaster</h1>
            <h2>Conference tag & Check-in System</h2>
            <div className="button-container">
                <Link to="/user">
                    <button className="intro-button user-button">I am a User</button>
                </Link>
                <Link to="/admin">
                    <button className="intro-button admin-button">I am an Admin</button>
                </Link>
            </div>
        </div>
    );
}

export default IntroPage;