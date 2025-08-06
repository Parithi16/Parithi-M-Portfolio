import { Instagram, Linkedin, LocateIcon, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"


export const ContactSection =()=> {
    const {toast}=useToast()
    const [isSubmitting,setIsSubmitting]=useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setIsSubmitting(true)
        const formData =new FormData(e.target)
        const data={
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        }

        try {
            const res = await fetch("http://localhost:3001/contact",{
                method:"POST",
                headers:{

                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })

            if(!res.ok) throw new Error("Failed to Send")
            
           toast({
            title: "Message sent!",
            description: "Thanks, I’ll get back to you soon.",
            })


             setTimeout(()=>{
            toast({ 
            title:"Message sent!",
            description:"Thank you, I'll get back to you soon"
        })
    },300)
            e.target.reset()

        } catch(err){
            console.error(err)
            toast({
            title: "Something went wrong",
            description: "Submission failed. Please try again.",
            variant: "destructive", // optional
            })

        }finally{

            setTimeout(()=>{
        
        setIsSubmitting(false)
        },1500)
    }  
        }
        
        
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In<span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities. Feel free to contact
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div >
                                    <h4 className="font-medium text-left">E-mail</h4>
                                    <a href="mailto:parithi.1673@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">parithi1673@gmail.com</a>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div >
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a href="tel:+919361868813" className="text-muted-foreground hover:text-primary transition-colors">+91 9361868813</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div >
                                    <h4 className="font-medium text-left">Location</h4>
                                    <a href="tel:+919361868813" className="text-muted-foreground hover:text-primary transition-colors">Coimbatore, TamilNadu, India</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/parithi-m16/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://x.com/Handsometamizh1" target="_blank">
                                    <Twitter/>
                                </a>
                                <a href="https://www.instagram.com/handsome_tamizhan/" target="_blank">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">{" "}Your Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name"></input>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">{" "}Your Email</label>
                            <input type="text" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Email"></input>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">{" "}Your Message</label>
                            <textarea id="message" name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                        {isSubmitting?"Sending Message":"Send Message"}
                        <Send/>
                        </button>
                        
                        </form>
                    </div>
                </div>

            </div>

            </section>

}