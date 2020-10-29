import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth' //{} for explorer call

const Login = (props) => {
    const [login, setLogin] = useState({
        username: '',
        password: ''

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', login)
        .then(res => {
            // console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/creatures')//useHistory
        })
        .catch(err => console.log('error axiosWithAuth', err))
    }

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    // How can we log in? What do we need to do?

    return (
        <div>
            <h1 className='adventure'>Mammals with Munchies!</h1>
            <form className='' onSubmit={handleSubmit}>
                <input
                name='username'
                type='text'
                value={props.username}
                onChange={handleChange}
                placeholder='UserName'
                className=''
                />
                <input
                name='password'
                type='password'
                value={props.password}
                onChange={handleChange}
                placeholder='password'
                className=''
                />
                <button>Start</button>

            </form>
        </div>
    )
}

export default Login