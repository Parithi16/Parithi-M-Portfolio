import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects=[
{
    id:1,
    title:"Context Aware Multi Stage Temporal Video Grounding",
    description:"Zero Shot VG framework retrieve semantically relevant video moments purely based on open-vocabulary concepts.",
    tags:["machine learning","image processing"],
    image:"/projects/VideoGrounding.png",
    demoUrl:"#",
    githubUrl:"#",
},
{
    id:2,
    title:"E-Certificate Verification and Validation usinng BlockChain",
    description:"User friendly app and website to ensure the authenticity of the e-certificate",
    tags:["blockchain","react"],
    image:"/projects/Trustify.png",
    demoUrl:"#",
    githubUrl:"#",
},
{
    id:3,
    title:"Crop Disease Detection and Crop Recommendation System",
    description:"User friendly website to help farmers by identifying suitable crop and to identify the disease that affected the crop",
    tags:["machine learning","image processing"],
    image:"/projects/Digifarming.png",
    demoUrl:"#",
    githubUrl:"#",
}
]
export const ProjectsSection=()=>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each project was carefully crafted with attention to detail, performance and user experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project,key)=>(
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full transition-transform duration-500 group-hover:scale-110"/>
                   </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4 ">
                            {project.tags.map((tags)=>(
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tags}</span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-xs mb-4 text-center">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a 
                            href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <ExternalLink size={20}></ExternalLink>
                            </a>
                            <a 
                            href={project.githubUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <Github size={20}></Github>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                ))}
                
            </div>
            <div className="text-ceter mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/parithi16">
                    Check My Github <ArrowRight size={16}></ArrowRight>
                </a>
            </div>
        </div> 
     
    </section>
}