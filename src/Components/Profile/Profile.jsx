import { useSelector } from "react-redux";

const Profile = () => {
    const login = useSelector(state => state.formEntry.login)

    return (
        <div className='profile'>
            <h1>Логин: {login}</h1>
        </div>
    );
}

export default Profile;
