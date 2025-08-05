import { motion } from 'framer-motion';
import AboutImg from '../assests/two.png';

export default function About() {
  const config = {
    line1:` a Web Developer who builds clean, responsive, and interactive websites using modern tools like React and Tailwind CSS. I'm passionate about coding, design, and continuous learning.`,
    
  
  }
  return (
    <section className='flex flex-col md:flex-row items-center px-6 md:px-20 py-10 bg-violet-200' id='about'>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='w-full md:w-1/2 py-5 flex justify-center'
      >
        <img src={AboutImg} className="w-2/3 md:w-1/2 object-cover rounded-lg " alt="About" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='w-full md:w-1/2 flex justify-center text-center md:text-left'
      >
        <div className='flex flex-col justify-center text-violet-700 max-w-xl px-4 font-hero-font'>
          <h1 className='text-4xl font-bold border-b-2 border-primary mb-5 w-fit'>About Me</h1>
          <p className='pb-5'>
            Hi, I'm <span className="font-hero-font">Prathap</span> {config.line1}
          </p>
          <p className='pb-5'>
           I specialize in front-end development using technologies like React, Tailwind CSS, HTML, and JavaScript. I enjoy building clean UIs and turning ideas into interactive web experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
