import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../models/apiModels'
import { appApi } from '../services/ApiService'
import { ROUTER_PATHS } from '../router/types'

import logo from "../assets/logo.svg"
import mockup from "../assets/SignMockups.png"
import { useState } from 'react'
import { Box, CircularProgress, Container, Typography } from '@mui/material'

const Login = () => {

    const { register, handleSubmit } = useForm<User>()

    const [fetchUser, result] = appApi.useLazyFetchUserQuery()

    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<User> = async (data) => {
        await fetchUser({
            username: data.username,
            password: data.password
        })
        console.log(result)
        if (result.isSuccess) {
            document.cookie = `token=${result.data?.token}; SameSite=Lax; Secure`
            navigate(ROUTER_PATHS.HOME)
        } else {
            setError("Something wrong")
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
                        <p className="text-3xl text-[#333333] font-poppins font-medium">Login</p>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)} className="my-5 font-lato w-[312px] flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-[#666666]">Username</label>
                            <input {...register('username', {
                                required: true
                            })} className="focus:outline-none p-2 border rounded-xl border-[rgba(102, 102, 102, 0.35)]" type="text" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[#666666]">Password</label>
                            <input {...register('password', {
                                required: true
                            })} className="focus:outline-none p-2 border rounded-xl border-[rgba(102, 102, 102, 0.35)]" type="text" />
                        </div>
                        {error && <Typography textAlign='center' color='rgba(102, 102, 102, 0.35)' fontWeight='400'>{error}</Typography>}
                        <button className="bg-[#111111] rounded-2xl text-white py-2">{result.isLoading ? <CircularProgress color='inherit' /> : "Sign in"}</button>
                    </form>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Typography color='#333333'>
                            Don't have account?
                        </Typography>
                        <Link className='underline font-medium font-poppins' to={ROUTER_PATHS.SINGUP}>
                            Sign up
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Login