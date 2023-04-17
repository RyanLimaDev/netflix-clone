import Input from '@/components/Input'
import Image from 'next/image'
import { EventHandler, useCallback, useState } from 'react'

export default function Auth () {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return(
       <div className="relative h-full w-full bg-[url('../../public/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src="/images/logo.png" alt='logo.png' width={120} height={96}/>
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>
                            {variant === 'login' ? 'Entrar' : 'Criar conta'}
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {variant === 'register' && <Input
                                id='username'
                                label='Usuario'
                                onChange={(env: React.ChangeEvent<HTMLInputElement>) => setUsername(env.target.value)}
                                value={username}
                            />}
                            
                            <Input
                                id='email'
                                label='Email'
                                type='email'
                                onChange={(env: React.ChangeEvent<HTMLInputElement>) => setEmail(env.target.value)}
                                value={email}
                            />
                            <Input
                                id='password'
                                label='Senha'
                                type='password'
                                onChange={(env: React.ChangeEvent<HTMLInputElement>) => setPassword(env.target.value)}
                                value={password}
                            />
                        </div>

                        <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 transition
                        hover:bg-red-700'>
                            {variant === 'login' ? 'Entrar' : 'Registrar'}
                        </button>

                        <p className='text-neutral-500 mt-12'>
                            {variant === 'login' ? 'Novo por aqui?' : 'Já possui uma conta?'}
                            <span onClick={toggleVariant} className='text-bold text-white ml-1 hover:underline cursor-pointer'>
                                {variant === 'login' ? 'Assine Agora' : 'Entrar na conta'}
                                </span>
                        </p>
                    </div>
                </div>
            </div>
       </div>
    )
}
