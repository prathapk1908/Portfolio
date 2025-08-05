import HomeImg from '../assests/home.webp';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';


export default function Hero() {
  const config={
    subtitle:`I'm a Web Developer and Designer`,
    Social :{
      Insta:'https://www.instagram.com/?hl=eg',
      Facebook:'',
      LinkedIn:''
    }
  }


    return (
  

    <section id='Home' className='flex flex-col md:flex-row px-6 md:px-20 lg:px-44 py-16 md:py-32 bg-blue-300 items-center'>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='md:w-1/2 flex flex-col items-start justify-center text-center md:text-left mb-10'
      >
        <h1 className='text-black text-4xl md:text-6xl px-16 font-hero-font mb-4'>
          Hi,<br /> I'm <span className='text-orange-500'>Prathap</span>
        </h1>
        <p className='text-2xl text-black font-hero-font px-16'>{config.subtitle}</p>

        <div className='flex gap-4 py-5 justify-center md:justify-start px-16'>
          <motion.a whileHover={{ scale: 1.1 }} href={config.Social.Insta} className='pr-5 hover:text-orange-500 text-white'><AiOutlineInstagram size={40} /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href={config.Social.Facebook}  className='pr-5 hover:text-orange-500 text-white'><AiOutlineFacebook size={40} /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href={config.Social.LinkedIn}  className='pr-5 hover:text-orange-500 text-white'><AiOutlineLinkedin size={40} /></motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2 flex justify-center'
      >
        <img
          className='w-full max-w-md md:max-w-full h-auto object-contain'
          src={HomeImg}
          alt='Home'
        />
      </motion.div>
    </section>
  );
}

