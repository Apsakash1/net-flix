import { Link } from 'react-router-dom';
import './login.css';

export default function Login(props){
    const user1_dp_url = "https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4";
    const user2_dp_url = "https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962";
    const kids_dp_url = "https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfLJ8NSIto5JRuvDUjUw7m6itq_M0UacGDT8fiQ2oJjpzX2RxydzRSUBON3FFhEuzC5xvqw1sfqKwA1cARzoKmwbHjkIn3B5oNOe.png?r=5cf";
    return(
        <div className='login'>
            <h1>Who's watching?</h1>
            <div className='profiles-div'>
            <Link to={"home"}>
            <img className='login-profile' onclick="/login" src={user1_dp_url} alt="Akash pratap singh"></img>
            </Link>
            <Link to={"guest"}>
            <img className='login-profile' onclick="/login" src={user2_dp_url}></img>
            </Link>
            <Link to={"kids"}>
            <img className='login-profile' onclick="/login" src={kids_dp_url}></img>
            </Link>
            </div>
        </div>
    );
}