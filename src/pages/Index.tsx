import { ProjectCard } from "@/components/ProjectCard";
import { TalkCard } from "@/components/TalkCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/mrbanana.png";

const projects = [
  {
    name: "Copy & Pasta",
    description: "My own food blog based on VueJS and Nuxt.js",
    technologies: ["Vue.js", "Nuxt.js", "JavaScript"],
    githubUrl: "https://github.com/haimich/copyundpasta",
    demoUrl: "https://haimich.github.io/cup/",
    imageUrl: "https://raw.githubusercontent.com/haimich/haimich.github.io/master/images/copyundpasta.jpg"
  },
  {
    name: "Billy",
    description: "A simple invoice manager built with Electron and React",
    technologies: ["Electron", "React", "JavaScript"],
    githubUrl: "https://github.com/haimich/billy",
    imageUrl: "https://raw.githubusercontent.com/haimich/billy/master/concept/billy_sm.png"
  },
  {
    name: "sprachmuehle.de",
    description: "A static website built only with HTML, CSS and some PHP",
    technologies: ["HTML", "CSS", "PHP"],
    githubUrl: "https://github.com/haimich/sprachmuehle.de",
    demoUrl: "https://www.sprachmuehle.de/",
    imageUrl: "https://raw.githubusercontent.com/haimich/haimich.github.io/master/images/sprachmuehle.jpg"
  },
  {
    name: "Event",
    description: "A platform to manage events and conferences built on NodeJS",
    technologies: ["Node.js", "JavaScript"],
    githubUrl: "https://github.com/haimich/event",
    imageUrl: "https://raw.githubusercontent.com/haimich/event/master/documentation/screenshot_1.png"
  },
  {
    name: "Flatfinder",
    description: "A web scraper tool that regularly scans websites where flats are offered to buy",
    technologies: ["Node.js", "Web Scraping"],
    githubUrl: "https://github.com/haimich/flatfinder",
    imageUrl: "https://raw.githubusercontent.com/haimich/flatfinder/master/logo_small.png"
  },
  {
    name: "Knick-Knack",
    description: "A language agnostic project scaffolding tool",
    technologies: ["JavaScript", "CLI"],
    githubUrl: "https://github.com/knick-knack/knick-knack",
    imageUrl: "https://raw.githubusercontent.com/knick-knack/knick-knack/master/doc/knickknack_small.png"
  },
  {
    name: "Photobooth",
    description: "A JavaScript photobooth application where you can pick an own background image via green screen",
    technologies: ["JavaScript", "Canvas API"],
    githubUrl: "https://github.com/haimich/photobooth",
    imageUrl: "https://raw.githubusercontent.com/haimich/photobooth/master/concept/photobooth_small.png"
  }
];

const talks = [
  {
    title: "Innovation Week",
    venue: "WebtechCon Munich",
    slidesUrl: "https://haimich.github.io/innovationweek"
  },
  {
    title: "Vue vs. Vanilla",
    venue: "Accento Dev Karlsruhe",
    slidesUrl: "https://haimich.github.io/vue-vs-vanilla",
    videoUrl: "https://www.youtube.com/watch?v=qVHh2go6GN4&app=desktop"
  },
  {
    title: "How to become a Web Developer",
    venue: "Public Talk",
    slidesUrl: "http://slides.com/haimich/how-to-become-a-webdev"
  },
  {
    title: "ReactJS",
    venue: "HDM Stuttgart",
    slidesUrl: "http://slides.com/haimich/reactjs"
  },
  {
    title: "TypeScript",
    venue: "HDM Stuttgart",
    slidesUrl: "http://slides.com/haimich/typescript"
  },
  {
    title: "Electron",
    venue: "HDM Stuttgart",
    slidesUrl: "http://slides.com/haimich/electron"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-24 items-center justify-between px-4">
          <a href="" className="flex items-center">
            <img src={logo} alt="Michael Müller Logo" className="h-24 w-24" />
          </a>
          <div className="flex gap-6">
            <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#talks" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Talks
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-hero py-20 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-display text-5xl font-bold md:text-7xl">
              Michael Müller
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-white/90">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="mb-10 text-lg text-white/80">
              Building beautiful web applications with modern technologies like React, Vue, Node.js, and TypeScript. 
              Passionate about open source and sharing knowledge through talks and projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://github.com/haimich" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-4xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant, user-friendly web applications. 
              With expertise in modern JavaScript frameworks and backend technologies, I've built everything from 
              food blogs to invoice managers to event management platforms. When I'm not coding, you'll find me 
              sharing knowledge through talks at conferences and universities.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/michael-m%C3%BCller-9a90a6284/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
              Open Source Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of my open source work, ranging from full-featured applications to useful developer tools.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Talks Section */}
      <section id="talks" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
              Talks & Presentations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I love sharing knowledge and experiences with the developer community through talks at conferences and universities.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {talks.map((talk) => (
              <TalkCard key={talk.title} {...talk} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Michael Müller. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
