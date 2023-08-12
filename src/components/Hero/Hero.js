
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className=' px-5 mx-auto'>
            <section className="pt-10">
                <div className='md:mx-10'>
                    <div className=" w-full flex items-center sm:justify-between flex-wrap">
                        <div className="w-full sm:w-1/2 my-3">
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-5 tracking-widest font-bold">
                                Combate con <span>seguridad</span>
                            </h2>
                            <p className="text-lg sm:text-2xl font-semibold"> Equipamiento  para  artes marciales</p>
                            <span className="text-lg sm:text-2xl font-semibold"> Testeado por profesionales</span>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center items-center mb-4">
                            <img className='w-[50%] sm:w-[70%] md:w-[80%]' src="https://martial-geeks.s3.sa-east-1.amazonaws.com/casco.png" alt="casco de artes marciales" />
                        </div>
                        <div className=" w-full flex justify-center sm:justify-start  mb-6 sm:mb-10">
                                <Link to={"/tienda"} className=' bg-red-600 hover:bg-red-400 text-white px-5 py-2 lg:px-10 lg:py-4 rounded shadow-lg font-bold uppercase  '>
                                    Ver productos
                                </Link>
                            </div>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <h2 className='text-2xl sm:text-3xl my-5 sm:my-8'>
                        ¿Que nos hace diferentes?
                    </h2>
                </div>
                <div className='flex flex-row justify-center items-center flex-wrap-reverse mt-20 p-10 pt-0 pb-10 -mx-5 mb-6 bg-gray-800'>
                    <div className='text-gray-300 md:w-1/2'>
                        <h2 className='text-center mb-8 sm:mb-14 text-2xl sm:text-4xl text-white -mt-10'>
                            ¡Somos artistas marciales!
                        </h2>
                        <h4 className='text-lg sm:text-xl'>
                            Entendemos lo que buscas porque nosotros también lo buscamos.
                        </h4>
                        <p className='text-lg sm:text-xl mb-8'>
                            Todos nuestros productos son sometidos a pruebas en condiciones intensas de entrenamiento y sparring para asegurar su calidad.
                        </p>
                        <p className='text-lg sm:text-xl'>
                            <strong>No te vendemos nada que no usariamos nosotros</strong>
                        </p>
                    </div>
                    <div className='md:w-1/2'>
                        <div className=' flex justify-center items-center'>
                            <img className='md:w-[90%] -translate-y-32 sm:-translate-y-40 drop-shadow-2xl' src='https://martial-geeks.s3.sa-east-1.amazonaws.com/taekwondo-sparring.png' alt='Peleadores de taekwondo haciendo sparring' />
                        </div>
                    </div>
                </div>
                <section className='flex flex-wrap items-center'>
                    <div className='-translate-y-16 -z-10 drop-shadow-2xl md:w-1/2 flex justify-center'>
                        <img className='md:w-[60%]' src='https://martial-geeks.s3.sa-east-1.amazonaws.com/hanging-gloves.png' alt='guantes rojos de boxeo colgados' />
                    </div>
                    <div className='w-full flex flex-col items-center gap-6 my-10 md:w-1/2'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl mb-10'>
                            ¿Nos vamos de Shopping?
                        </h2>
                        <Link to={"/tienda"} className=' bg-red-600 hover:bg-red-400 text-white px-5 py-2 lg:px-10 lg:py-4 rounded shadow-lg font-bold uppercase mb-10'>
                            Veamos que hay de bueno
                        </Link>
                    </div>
                </section>
            </section>
        </div>

    )
}
export default Hero