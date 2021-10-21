import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { setLogin, setPassword } from './../../redux/actions/formLogin';

import './Form.css'

const Form = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.formEntry.loginEntry)
    const password = useSelector(state => state.formEntry.passwordEntry)
    const isLogin = useSelector(state => state.formEntry.isLogin)
    const [buttonClicked, setButtonClicked] = useState(false)

    const onChangeLogin = (e) => {
        dispatch(setLogin(e.target.value))
    }

    const onChangePassword = (e) => {
        dispatch(setPassword(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonClicked(true)
    }

    if (buttonClicked) {
        return <Redirect to='/profile' />
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input type="text"
                name="login"
                placeholder='Логин'
                onChange={onChangeLogin}
                value={login} />

            <input type="password"
                name="password"
                placeholder='Пароль'
                onChange={onChangePassword}
                value={password} />

            <button type='submit' disabled={!isLogin}>Вход</button>
        </form>
    );
}

export default Form;
