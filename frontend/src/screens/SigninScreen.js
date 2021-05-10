import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signin } from '../actions/userActions';

export default function SigninScreen() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // const userSignin = useSelector((state) => state.userSignin);
    // const {userInfo,loading,error} = userSignin;
    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();  // to not refresh the page after submit the form

        dispatch(signin(email, password));

    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input type="email" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label />
                    <button type="submit" className="primary">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? <Link to="/register" >Create Your Account</Link>
                    </div> 
                </div>


            </form>
            
        </div>
    )
}
