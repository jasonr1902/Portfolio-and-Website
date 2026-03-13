import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Download,
} from "lucide-react";

const skills = [
  "React",
  "HTML/CSS",
  "AWS",
  "Tailwind CSS",
  "Unity Game Development",
  "Java",
  "C#",
  "Git",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/sleek-gradient-wallpaper.jpg"
          alt="sleek gradient wallpaper"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/40 to-background/70" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            className="absolute w-5 h-5 rounded-full opacity-30 blur-xs"
            style={{
              backgroundColor: "#30B2E6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 item-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in-slow">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software, Music, Film
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in-slow animation-delay-300">
                <span className="font-serif italic font-normal text-white">
                  Excellence
                </span>
                <br />
                in <span className="text-primary glow-text">everything</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-slow animation-delay-600">
                I'm Jason Royer. I'm a software delevoper who's eager to learn
                practical tools to be an asset in a real-world environment. I'm
                focused on improving my coding fundamentals while buidling a
                serviceable repertoire of programming languages and tech
                services.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-slow animation-delay-600">
              <Button size="lg">
                Contact Me <ArrowRight className="" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-slow animation-delay-800">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                { icon: Github, href: "#" }, //Replace placeholders
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  href={social.href}
                  key={idx}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative">
            {/* Profile Picture */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
                            rounded-3xl bg-linear-to-br
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border animate-fade-in-slow animation-delay-600">
                <img
                  src="src\assets\images\portrait.png"
                  alt="portrait image of Jason Royer"
                  className="w-full h-full aspect-auto object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years. Exp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in-slow animation-delay-700">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-1000"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
