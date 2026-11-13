import { Workflow, Bot, Users, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Automation mindset",
    description:
      "I find the tedious things in my life and turn them into scripts and apps to keep me efficient.",
  },
  {
    icon: Bot,
    title: "AI as a tool",
    description:
      "I've built many projects with AI and I evaluate AI output professionally, so I know how to work around AI's quirks to get results.",
  },
  {
    icon: Users,
    title: "Building for real people",
    description:
      "My private lessons tracker is used by a working music teacher, and I keep improving it from their feedback.",
  },
  {
    icon: Wrench,
    title: "Hands-on experience",
    description:
      "Three years assembling, installing, and shipping technical equipment, while keeping meticulous inventory logs.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-slow animation-delay-200 text-secondary-foreground">
              Practical tools,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                built with people in mind.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-400">
              <p>
                I studied music at Stephen F. Austin State University with a
                minor in computer science, and I've kept building on that with
                online courses in IT, JavaScript, React and Git.
              </p>
              <p>
                Today I evaluate LLM output for DataAnnotation and Handshake AI,
                and in my own time I build apps, tools and games with AI coding
                agents. Before that, I spent three years as a warehouse
                technician assembling and installing electronic equipment.
              </p>
              <p>
                I'm looking for a role in IT automation, where I can excel
                because of my people skills, my high standards for quality, and
                my ability to integrate AI as a tool.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My goal is to make people's lives (and jobs) easier.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
