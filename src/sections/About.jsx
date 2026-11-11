import { Workflow, Bot, Users, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Automation mindset",
    description:
      "I look for the task people repeat every week and turn it into a tool, a script, or an app.",
  },
  {
    icon: Bot,
    title: "AI-assisted, human-checked",
    description:
      "I build with AI coding agents and evaluate AI output professionally, so I know where it needs a human check.",
  },
  {
    icon: Users,
    title: "Built for real users",
    description:
      "My lessons tracker is used by a working music teacher, and I keep improving it from their feedback.",
  },
  {
    icon: Wrench,
    title: "Hands-on with hardware",
    description:
      "Three years assembling, installing, and shipping technical equipment, and writing the procedures for it.",
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
              <span className="font-serif italic font-normal text-white">
                {" "}
                built for people.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-400">
              <p>
                I studied music at Stephen F. Austin State University with a
                minor in computer science, and I've kept building on that with
                online courses in IT, JavaScript, React and Git.
              </p>
              <p>
                Today I evaluate large language model output for DataAnnotation,
                and in my own time I build apps, tools and games with AI coding
                agents. Before that, I spent three years as a warehouse
                technician assembling and installing electronic equipment.
              </p>
              <p>
                I'm looking for a role in IT automation, where I can combine
                working with people, scripting the repetitive stuff, and using
                AI responsibly.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                If people do it by hand every week, I want to automate it — and
                check that the automation is right.
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
