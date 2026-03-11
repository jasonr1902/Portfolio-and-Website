import { Code2 } from "lucide-react";


const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable balonga blah blah blah make sure to change this text before you publish the website it would be so embarrassing ifthis got left in the final product lol ok love you"
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable balonga blah blah blah make sure to change this text before you publish the website it would be so embarrassing ifthis got left in the final product lol ok love you"
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable balonga blah blah blah make sure to change this text before you publish the website it would be so embarrassing ifthis got left in the final product lol ok love you"
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable balonga blah blah blah make sure to change this text before you publish the website it would be so embarrassing ifthis got left in the final product lol ok fart you"
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z=10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-light animate-fade-in-slow animation-delay-200 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-400">
                            <p>
                                I am an exceptional programmer whose code reads like poetry — clean, efficient, and purposeful. Every function I write is crafted with intention, balancing readability with performance in a way that my peers consistently admire. 
                            </p>
                            <p>
                                My problem-solving instincts are sharp and battle-tested. When a bug surfaces or a system behaves unexpectedly, I don't panic — I methodically trace the root cause with a calm, analytical mind. 
                            </p>
                            <p>
                                Beyond the code itself, I elevate everyone around me. I write documentation that actually gets read, conduct code reviews that teach rather than just critique, and mentor junior developers with patience and genuine enthusiasm.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                I build technology that solves real problems — writing clean, thoughtful code that empowers people, elevates teams, and leaves every system better than I found it.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}