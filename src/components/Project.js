import EcommerceWebisteImg1 from '../assests/ecomerce.jpg';
import LoginAuthontication from '../assests/home.webp';

export default function Project(){

    const config ={
        projects:[
            {
                Image:EcommerceWebisteImg1,
                description:'A Ecommerce website build with django',
                Link:''
            },
            {
                Image:LoginAuthontication,
                description:'User Login Authontication',
                Link:''
            },
            {
                Image:EcommerceWebisteImg1,
                description:'to do list',
                Link:''
            },

        ]
    }
    return <section id='Project' className="flex flex-col py-20 px-5 justify-center bg-blue-300">
        <div className="w-full">
        <div className="flex flex-col px-11 text-center py-5">
                  <h1 className='text-4xl  text-violet-800 font-bold  mb-5 '>Project</h1>
                  <p className='font-hero-font '> These are some of my best project. i have build this react, tailwindcss</p>
            </div>
        </div>
    
<br/>

        <div className="w-full  ">
            
            <div className='flex flex-col md:flex-row px-10 gap-6  justify-center'>
                {config.projects.map((Project)=>(
                     <div className=' relative'>
                     <img className="h-[250px] w-[500px]" src={Project.Image}/>
                     <div className='project-descrtiption'> 
                       <p className='text-center py-8'>{Project.description}</p>
                        <div className='flex justify-center'>
                    <a target='_blank' className='btn'  href={Project.Link}>
                        View Project
                    </a>
                     </div>
                 </div>
                
               </div>
                    
                ))}
              


  </div>
           </div>
           
    </section>
}