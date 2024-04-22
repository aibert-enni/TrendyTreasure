import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { ROUTER_PATHS } from "../router/types"
import { User } from "../models/apiModels"
import { appApi } from "../services/ApiService"
import { useState } from "react"
import { Container, Box, Typography, CircularProgress } from "@mui/material"
import logo from "../assets/logo.svg"
import mockup from "../assets/SignMockups.png"
import PasswordInfo from "../components/auth/PasswordInfo"

const SignUp = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<User>()

    const [error, setError] = useState<string>('')

    const [createUser, result] = appApi.useCreateUserMutation()

    console.log(import.meta)

    const onSubmit: SubmitHandler<User> = async (data) => {
        await createUser({
            username: data.username,
            password: data.password
        })
        if (result.isSuccess) {
            navigate(ROUTER_PATHS.LOGIN)
        } else {
            setError('Something wrong')
        }
    }

    return (
        <Container>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 10,
                gap: 8
            }}>
                <img className='max-h-[416px]' src={mockup} alt="two iphone" />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '0.1px solid rgba(102, 102, 102, 0.35)',
                    borderRadius: 5,
                    p: '40px',
                    bgcolor: 'white'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        py: 1,
                        gap: 4
                    }}>
                        <img className='h-14' src={logo} alt="shop logo" />
                        <p className="text-3xl text-[#333333] font-poppins font-medium">Sign up</p>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)} className="my-5 font-lato w-[312px] flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-[#666666]">Username</label>
                            <input {...register('username', {
                                required: true,
                                validate: async (value) => {
                                    if (!/^[0-9A-Za-z]{6,16}$/.test(value)) {
                                        return "Invalid login"
                                    }
                                    return true
                                }
                            })} className="focus:outline-none p-2 border rounded-xl border-[rgba(102, 102, 102, 0.35)]" type="text" />
                            {errors.username && <Typography color='rgba(102,102,102,0.6)' fontWeight='400'>{errors.username.message}</Typography>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[#666666]">Password</label>
                            <input {...register('password', {
                                required: true,
                                validate: (value) => {
                                    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)) {
                                        return ''
                                    }
                                    return
                                }
                            })} className="focus:outline-none p-2 border rounded-xl border-[rgba(102, 102, 102, 0.35)]" type="text" />
                            {errors.password && <PasswordInfo />}
                        </div>
                        {error && <Typography textAlign='center' color='rgba(102, 102, 102, 0.35)' fontWeight='400'>{error}</Typography>}
                        <button className="bg-[#111111] rounded-2xl text-white py-2">{result.isLoading ? <CircularProgress color='inherit' /> : "Sign up"}</button>
                    </form>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Typography color='#333333'>
                            Already have account?
                        </Typography>
                        <Link className='underline font-medium font-poppins' to={ROUTER_PATHS.LOGIN}>
                            Login
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp