import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import { ROUTER_PATHS } from "../router/types"
import { User } from "../models/apiModels"
import { appApi } from "../services/ApiService"
import { useState } from "react"

const SignUp = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<User>()

    const [error, setError] = useState<string>('')

    const [createUser] = appApi.useCreateUserMutation()

    const onSubmit: SubmitHandler<User> = async (data) => {
        createUser({
            username: data.username,
            password: data.password
        }).unwrap().catch(error => setError(error))
        if (error) navigate(ROUTER_PATHS.LOGIN)
    }

    return (
        <div className="container-large flex flex-col items-center">
            <div className='py-5'>
                <img className='w-12' src={logo} alt="" />
            </div>
            <div className="p-5 border rounded text-main-blue border-main-blue">
                {error && <p className='text-error'>{error}</p>}
                <p className="text-3xl font-jost font-normal">Sign up</p>
                <form onSubmit={handleSubmit(onSubmit)} className="my-5 w-[312px] flex flex-col gap-5 font-lato">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Username</label>
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
                            required: true,
                            validate: (value) => {
                                if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)) {
                                    return "Use at least 1 upper letter, 1 lower letter, 1 digit, 1 special character and minimum 8 characters"
                                }
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </div>
                    <button className="bg-main-blue rounded text-white py-2">Sign up</button>
                </form>
                <Link className='font-jost' to={ROUTER_PATHS.LOGIN}>
                    Already have account? <span className='text-blue font-bold'>Login</span>
                </Link>
            </div>
        </div>
    )
}

export default SignUp