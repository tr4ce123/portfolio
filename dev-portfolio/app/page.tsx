"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { ArrowUp, Code, FileText, Github, Linkedin, Mail, Layers, Server, Database, Wrench, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "projects", ref: projectsRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    {
      category: "Languages",
      icon: <Code className="w-6 h-6" />,
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "HTML/CSS",
        "Swift",
        "Go",
        "SQL"
      ],
    },
    {
      category: "Frontend",
      icon: <Layers className="w-6 h-6" />,
      items: [
        "React",
        "Angular",
        "Tailwind CSS",
        "Node.js",
        "Jest"
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      items: [
        "Django REST Framework",
        "FastAPI",
        "Flask",
        "SQLAlchemy",
        "REST API",
        "Selenium",
        "Pytest"
      ],
    },
    {
      category: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      items: [
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Google Cloud",
        "OpenShift",
        "Docker"
      ],
    },
    {
      category: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      items: [
        "Git",
        "CI/CD",
        "Agile",
        "Shell Scripting",
        "Ansible"
      ],
    },
  ]

  const projects = [
    {
      title: "SyllaByte",
      description: "Chrome Extension and React dashboard that extracts academic deadlines from PDF syllabi in one-click via a 92% accurate Python machine learning (NER) pipeline, automatically adding events to Google Calendar.",
      technologies: ["Python", "spaCy", "TypeScript", "React", "Flask", "PostgreSQL"],
      demoLink: "",
      githubLink: "https://github.com/tr4ce123/syllabyte",
    },
    {
      title: "Bolt",
      description: "A multimedia tool that generates clickable timestamps for lightning-fast video scrubbing. Uses OpenAI's Whisper and GPT4 to transcribe videos and generate structured notes, making learning material more accessible.",
      technologies: ["React", "Supabase", "OpenAI API", "Google OAuth", "TypeScript"],
      demoLink: "https://devpost.com/software/bolt-yaveuc",
      githubLink: "https://github.com/tr4ce123/hacknc2024",
    },
    {
      title: "Panther Plates",
      description: "Award-winning web app helping students with dietary restrictions find on-campus meals. Automated daily extraction of 200+ menu items using Selenium, enabling AI-powered meal generation.",
      technologies: ["React", "Flask", "MongoDB", "Selenium", "OpenAI API", "Tailwind CSS"],
      demoLink: "https://devpost.com/software/pantherplates",
      githubLink: "https://github.com/tr4ce123/pantherplates",
    },
    {
      title: "PCPlanner",
      description: "Full-stack web application using Angular and Django to facilitate personalized PC building experiences for 100+ users. Integrated OpenAI API for detailed component recommendations.",
      technologies: ["Angular", "Django REST Framework", "OpenAI API", "PostgreSQL"],
      demoLink: "https://thepcplanner.com",
      githubLink: "https://github.com/tr4ce123/pcplanner",
    },
    {
      title: "CSXL Roster Management",
      description: "Led an Agile team to create a roster management system for 22 university organizations using Angular and TypeScript, with Python FastAPI endpoints and PostgreSQL database.",
      technologies: ["Angular", "Python", "TypeScript", "FastAPI", "SQLAlchemy", "Docker"],
      demoLink: "https://youtu.be/zPVB2ZGEAJQ",
      githubLink: "https://github.com/tr4ce123/csxl-final-team-c6/blob/stage/docs/specs/organization-roster-spec.md",
    },
  ]

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Nutanix",
      period: "May 2025 - August 2025",
      description: "Excited to join the Core Performance team at Nutanix, where I'll be working on optimizing and enhancing system performance for enterprise cloud solutions.",
      achievements: [],
      technologies: ["Python", "Ansible", "Shell Scripting"],
      isFuture: true,
    },
    {
      title: "Software Engineer",
      company: "App Team Carolina | Centible",
      period: "September 2024 - Present",
      description: "Building Centible, a student-focused finance app that helps college students track and understand their spending habits. Working with a talented team to create features that make personal finance more accessible and less intimidating for students.",
      achievements: [
        "Led development of 7 new features that improved user engagement",
        "Grew user base to 300+ active students",
        "Refactored backend infrastructure, reducing error rates by 90%",
        "Built comprehensive testing framework with 100% coverage"
      ],
      technologies: ["JavaScript", "Swift", "Firebase", "SQL", "Testing"],
      isCurrent: true,
    },
    {
      title: "Software Engineer",
      company: "The Daily Tar Heel",
      period: "September 2024 - Present",
      description: "Creating digital tools and applications that help The Daily Tar Heel, UNC's independent student newspaper, better serve its community. Building everything from election coverage tools to interactive puzzles that engage readers in new ways.",
      achievements: [
        "Developed 4 full-stack applications reaching 100,000+ monthly users",
        "Created an open-source NPM library for NC election data",
        "Built the paper's first interactive crossword platform (30K+ monthly users)",
        "Launched real-time election map serving 1K+ concurrent users"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Firebase", "JavaScript"],
      isCurrent: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="w-1/4">
            <div className="text-xl font-bold">
              <span className="text-gray-100">
                Trace Glasby
              </span>
            </div>
          </div>
          
          <div className="w-2/4 flex justify-center">
            <div className="hidden md:flex space-x-6">
              {[
                { id: "home", label: "Home", ref: homeRef },
                { id: "about", label: "About", ref: aboutRef },
                { id: "experience", label: "Experience", ref: experienceRef },
                { id: "projects", label: "Projects", ref: projectsRef },
                { id: "skills", label: "Skills", ref: skillsRef },
                { id: "contact", label: "Contact", ref: contactRef },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    activeSection === item.id ? "text-white" : "text-gray-400",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-1/4 flex justify-end items-center space-x-4">
            <a
              href="https://github.com/tr4ce123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/gglasby04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
              <Button variant="ghost" size="sm">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection(homeRef)}
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all z-50",
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Home Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-100">Hi, I'm </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 via-blue-500 via-violet-500 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Trace Glasby
              </span>
              <span className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent bg-clip-text text-transparent mix-blend-overlay">
                Trace Glasby
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent mix-blend-overlay animate-shine">
                Trace Glasby
              </span>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Computer Science Student & Software Engineer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg">
            I'm a third-year Computer Science student at UNC Chapel Hill who's passionate about building high-impact, innovative software solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => scrollToSection(aboutRef)} className="flex items-center gap-2">
              About Me
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollToSection(experienceRef)}>
              My Experience
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-[#212121]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden border-4 border-gray-700">
                <img src="/IMG_9478.jpg?height=400&width=400" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">CS @ UNC Chapel Hill</h3>
              <p className="text-gray-300 mb-6">
                I'm currently a Software Engineer Intern at <span className="text-purple-300">Nutanix</span>! I'm a third-year at UNC Chapel Hill pursuing a B.S. in Computer Science with a minor in Data Science. 
              </p>
              <p className="text-gray-300 mb-6">
                Outside of work and class, I love to build computers and I'm a huge UNC sports fan. I also love 
                reading, watching, or playing anything sci-fi or dystopian. My favorite video game is <span className="text-amber-300">Cyberpunk 2077</span>, and
                my favorite book is <span className="text-blue-300">Project Hail Mary</span> by Andy Weir.

              </p>
              <div className="flex space-x-4">
                <a
                  href="https://drive.google.com/file/d/1LI412icn9QQ6yxfIr1rocF3vG4kbVKzP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors bg-transparent border border-gray-700 rounded-md hover:bg-gray-800"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href="https://github.com/tr4ce123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors bg-transparent border border-gray-700 rounded-md hover:bg-gray-800"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/gglasby04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors bg-transparent border border-gray-700 rounded-md hover:bg-gray-800"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline connector - perfectly centered with the circle */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-[-48px] w-0.5 bg-gray-700"></div>
                )}

                <div className="flex items-start">
                  {/* Timeline dot - aligned with the line */}
                  <div className="mt-0 mr-4 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex-shrink-0 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-[#252525] p-6 rounded-lg border border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-purple-400 mb-4">{experience.company}</p>
                      </div>
                      <div className="text-gray-400 font-medium whitespace-nowrap">{experience.period}</div>
                    </div>
                    <p className="text-gray-300 mb-4">{experience.description}</p>
                    {experience.achievements.length > 0 && (
                      <ul className="list-disc list-inside mb-4 text-gray-300">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="mb-1">{achievement}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 bg-[#212121]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-[#252525] border-2 border-purple-500/20 overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="h-48 bg-gray-800">
                  <img
                    src={`/${project.title.toLowerCase().replace(/\s+/g, '')}.png`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="py-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <ArrowUp className="h-4 w-4 rotate-45" />
                        Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-[#252525] rounded-xl border border-gray-800 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mr-4">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group relative inline-flex items-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative px-4 py-2 bg-[#1a1a1a] rounded-full border border-gray-700 transition-all duration-300 group-hover:border-transparent group-hover:scale-105">
                          <span className="text-sm font-medium text-gray-200 group-hover:text-white">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-[#212121]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <a
              href="mailto:gglasby@unc.edu"
              className="bg-[#252525] border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-lg mb-2">Email</h3>
              <p className="text-gray-400">gglasby@unc.edu</p>
            </a>

            <a
              href="https://linkedin.com/in/gglasby04"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#252525] border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-lg mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/gglasby04</p>
            </a>

            <a
              href="https://github.com/tr4ce123"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#252525] border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                <Github className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-lg mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/tr4ce123</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Trace Glasby. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
