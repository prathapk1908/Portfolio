import { motion } from 'framer-motion';
import ResumeImg from '../assests/resume.png';

export default function Resume(){

  const config = {
    link:'https://www.learningcontainer.com/sample-pdf-files-for-testing/'
  }
    return <>
         <section id='Resume' className='flex flex-col md:flex-row items-center px-6 md:px-20 py-10 bg-violet-200' >

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='w-full md:w-1/2 py-5 flex justify-center'
      >
        <img src={ResumeImg} className="w-2/3 md:w-1/2 object-cover rounded-lg " alt="About" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='w-full md:w-1/2 flex justify-center text-center md:text-left'
      >
        <div className='flex flex-col justify-center text-violet-700 max-w-xl px-4 font-hero-font'>
          <h1 className='text-4xl font-bold border-b-2 border-primary mb-5 w-fit'>Resume</h1>
          <p className='pb-5'>
            you can view my Resume <a className='btn' href={config.link}>Download</a>
          </p>
          
        </div>
      </motion.div>
    </section>
    </>
}