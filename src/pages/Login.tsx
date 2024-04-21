import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../models/apiModels'
import { appApi } from '../services/ApiService'
import { ROUTER_PATHS } from '../router/types'

import logo from "../assets/logo.svg"
import { useState } from 'react'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<User>()

    const [fetchUser] = appApi.useLazyFetchUserQuery()

    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<User> = async (data) => {
        const res = await fetchUser({
            username: data.username,
            password: data.password
        })
        if (res.isError) {
            setError('Something wrong')
        } else {
            document.cookie = `token=${res.data?.cookie}; SameSite=Lax; Secure`
        }
        if (error) navigate(ROUTER_PATHS.HOME)
    }

    return (
        <div className="container-large flex flex-col items-center">
            <div className='py-5'>
                <img className='w-12' src={logo} alt="" />
            </div>
            <div className="p-5 border text-main-blue rounded border-main-blue">
                {error && <p className='text-error'>{error}</p>}
                <p className="text-3xl font-jost font-normal">Login</p>
                <form onSubmit={handleSubmit(onSubmit)} className="my-5 font-lato w-[312px] flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Login</label>
                        <input {...register('username', {
                            required: true,
                            validate: async (value) => {
                                if (!/^[0-9A-Za-z]{6,16}$/.test(value)) {
                                    return "Invalid login"
                                }
                                return true
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.username && <p className='text-error'>{errors.username.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Password</label>
                        <input {...register('password', {
                            required: true
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </div>
                    <button className="bg-main-blue rounded text-white py-2">Login</button>
                </form>
                <Link className='font-jost' to={ROUTER_PATHS.SINGUP}>
                    Don't have account? <span className='text-blue font-bold'>Sign up</span>
                </Link>
            </div>
        </div>
    )
}

export default Login