import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, skills, experience } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Imran Ahmed
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            MS AI Student @ DePaul | Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Building full-stack applications and AI solutions. Experienced in React, Spring Boot, and Machine Learning.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </Button>
            <ThemeToggle />
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/imran12234" target="_blank">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/imran12234" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ia237808@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo !== "#" && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-4 py-20 bg-muted/50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3 text-lg">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8 max-w-2xl">
          {experience.map((exp) => (
            <div key={exp.company} className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm currently looking for SWE opportunities. Feel free to reach out!
        </p>
        <Button size="lg" asChild>
          <a href="mailto:ia237808@gmail.com">Contact Me</a>
        </Button>
      </section>
    </main>
  );
}