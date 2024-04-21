import { appApi } from '../../services/ApiService'

import avatar from "../../assets/avatar-15.svg"
import { Link } from 'react-router-dom'
import { ROUTER_PATHS } from '../../router/types'

const ProfileNav = () => {
    const { data: user } = appApi.useFetchUserQuery({ username: '', password: '' })

    return (
        <div className='group text-white flex flex-col items-center relative'>
            <img className='w-8 fill-white h-full' src={avatar} alt='avatar' />
            <div className='hidden group-hover:flex flex-col absolute bg-main-blue rounded  w-24 p-2 shadow items-center top-8'>
                {user?.authorized ? <p>Authorized</p> : <Link to={ROUTER_PATHS.LOGIN}>Login</Link>}
            </div>
        </div>
    )
}

export default ProfileNav