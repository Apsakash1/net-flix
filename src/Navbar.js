import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar(props){
    const user1_dp_url = "https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4";
    const user2_dp_url = "https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962";
    const kids_dp_url = "https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfLJ8NSIto5JRuvDUjUw7m6itq_M0UacGDT8fiQ2oJjpzX2RxydzRSUBON3FFhEuzC5xvqw1sfqKwA1cARzoKmwbHjkIn3B5oNOe.png?r=5cf";

    const isLoggedIn = props.login;
    let dp = user2_dp_url;
    switch(props.user){
        case "akash":
            dp = user1_dp_url;
            break;
        case "kids":
            dp = kids_dp_url;
            break;
    }
    return(
        <div className="navbar">
            <img className='nav-logo-netflix' src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" alt='netflix logo'></img>
            {isLoggedIn?
                        <Link to={"login"}><img className='nav-profile-img' src={dp} alt='your profile'/></Link>
                        :<></>
            }
            {/* <img className='nav-profile-img' src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='your profile'/> */}
        
        </div>
    )
}

export default Navbar;