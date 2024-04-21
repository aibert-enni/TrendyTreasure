import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className='bg-home bg-cover bg-center p-[100px]'>
                <div className='container-lg w-full flex justify-end'>
                    <div className='flex flex-col gap-6 bg-white w-[410px] p-8 shadow'>
                        <p className='text-[2.5em] font-medium text-black-3'>The best home entertainment system is here</p>
                        <p className='text-[#54595F] text-sm'>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
                        <Link className='text-main-blue font-bold text-lg' to='/shop'>
                            Shop now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home