import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';

//
import logo from '../../assets/images/logo.png'
import logotext from '../../assets/images/logo-text.png'

function Login (props) {
    const [email, setEmail] = useState('demo@example.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');
    const dispatch = useDispatch();
	const navigate = useNavigate();
    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(email, password, navigate));
    }

  return (
  
		<div className="login-form-bx">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-md-7 box-skew d-flex">
						<div className="authincation-content">
							<Link to="#" className="login-logo">
								<img src={logo} alt="" className="logo-icon me-2"/>
								<img src={logotext} alt="" className="logo-text ms-1"/>
							</Link>
							<div className="mb-4">
								<h3 className="mb-1 font-w600">Welcome to Eres</h3>
								<p className="">Sign in by entering information below</p>
							</div>
							{props.errorMessage && (
								<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
									{props.errorMessage}
								</div>
							)}
							{props.successMessage && (
								<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
									{props.successMessage}
								</div>
							)}
							<form onSubmit={onLogin}>
								<div className="form-group">
									<label className="mb-2 ">
										<strong className="">Email</strong><span className='required'>*</span>
									</label>
									<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
									{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
								</div>
								<div className="form-group">
									<label className="mb-2 "><strong className="">Password</strong><span className='required'>*</span></label>
									<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
									{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
								</div>
								<div className="form-row d-flex justify-content-between mt-4 mb-2">
									<div className="form-group">
										<div className="custom-control custom-checkbox ms-1 ">
											<input type="checkbox" className="form-check-input" id="basic_checkbox_1"/>
											<label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
										</div>
									</div>
								</div>
								<div className="text-center">
									<button type="submit" className="btn btn-primary btn-block">Sign In</button>
								</div>
							</form>
							<div className="new-account mt-2">
								<p className="mb-0">Don't have an account?{" "}
									<Link className="text-primary" to="/page-register">Sign up</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-5 d-flex box-skew1">						
					</div>
				</div>
			</div>
		</div>
		
    )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);