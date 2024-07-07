"use client"
import TypeWriterComponent from "typewriter-effect"

export const LandingHero = () => {
  return (
<div className="font-bold py-28 text-center space-y-5">
    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold pb-5">
        <h1>
            Welcome to ServiceSphere
        
        </h1>
        <div className="text-transparent bg-clip-text bg-violet-700 py-5" >
            <TypeWriterComponent
            options={{
                strings:[
                    "Create Profile.",
                    "Get Hired.",
                    "Grow Your Business.",
                    "Find Talent.",
                    "Hire with Confidence.",
                    "Manage Projects."
                ],
                autoStart:true,
                loop:true,
            }}
            />
        </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
        Connecting Talented Freelancers with Global Opportunities
        </div>
</div>

  )
}
