"use client"

import { Github, Linkedin, Mail, ExternalLink, Terminal } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { ThemeToggle } from "@/components/theme-toggle";
import { MatrixBackground } from "@/components/matrix-bg";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { CustomCursor } from "@/components/custom-cursor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, skills, experience } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      <CursorSpotlight />
      <CustomCursor />

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-cyan-400 font-mono text-sm">
            <Terminal className="h-4 w-4" />
            <span>guest@portfolio:~$</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 text-transparent bg-clip-text animate-pulse">
            Imran Ahmed
          </h1>

          <TypeAnimation
            sequence={[
              'MS AI Student @ DePaul',
              2000,
              'Full-Stack Developer',
              2000,
              'ML Engineer',
              2000,
              'Building the future...',
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-2xl md:text-3xl text-[rgb(52,204,235)] dark:text-cyan-400 mb-6 font-mono h-12"
            repeat={Infinity}
          />

          <p className="text-lg text-slate-700 dark:text-gray-400 mb-8 border-l-2 border-blue-600 dark:border-cyan-500 pl-4">
            Building full-stack applications and AI solutions. Experienced in React, Spring Boot, and Machine Learning.
          </p>
          
          <div className="flex gap-4 flex-wrap items-center">
            <Button asChild className="bg-blue-700 hover:bg-blue-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-bold shadow-lg shadow-blue-500/50 dark:shadow-cyan-500/50 hover:shadow-blue-400/70 dark:hover:shadow-cyan-400/70 transition-all border border-blue-600 dark:border-cyan-400">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="border-blue-700 dark:border-cyan-500 text-blue-700 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-500/10 hover:text-blue-800 dark:hover:text-cyan-300">
              <a href="/resume.pdf" target="_blank">Resume</a>
            </Button>
            <ThemeToggle />
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild className="text-blue-700 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 hover:bg-blue-50 dark:hover:bg-cyan-500/10">
                <a href="https://github.com/imran12234" target="_blank">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-blue-700 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 hover:bg-blue-50 dark:hover:bg-cyan-500/10">
                <a href="https://linkedin.com/in/imran12234" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-blue-700 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 hover:bg-blue-50 dark:hover:bg-cyan-500/10">
                <a href="mailto:ia237808@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 dark:text-cyan-400 font-mono flex items-center gap-3">
          <span className="text-blue-700 dark:text-purple-500">&gt;</span> Projects
          <span className="animate-pulse text-[rgb(52,204,235)] dark:text-cyan-400">_</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="p-6 bg-card/50 backdrop-blur border-blue-200 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-cyan-500/50 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-cyan-300 group-hover:text-blue-700 dark:group-hover:text-cyan-200">{project.title}</h3>
              <p className="text-slate-700 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-500/20">{tech}</Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild className="border-blue-300 dark:border-cyan-500/50 text-blue-700 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-500/10">
                  <a href={project.github} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo !== "#" && (
                  <Button size="sm" asChild className="bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-400 hover:bg-blue-200 dark:hover:bg-cyan-500/30 border border-blue-300 dark:border-cyan-500/50">
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
      <section className="container mx-auto px-4 py-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 dark:text-cyan-400 font-mono flex items-center gap-3">
          <span className="text-blue-700 dark:text-purple-500">&gt;</span> Skills
          <span className="animate-pulse text-[rgb(52,204,235)] dark:text-cyan-400">_</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border border-blue-200 dark:border-cyan-500/30 p-6 bg-card/30 backdrop-blur hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-cyan-500/30 transition-all">
              <h3 className="font-semibold mb-4 text-lg text-blue-900 dark:text-cyan-300 font-mono">[{category}]</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-blue-200 dark:border-cyan-500/50 text-blue-700 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-500/10">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container mx-auto px-4 py-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 dark:text-cyan-400 font-mono flex items-center gap-3">
          <span className="text-blue-700 dark:text-purple-500">&gt;</span> Experience
          <span className="animate-pulse text-[rgb(52,204,235)] dark:text-cyan-400">_</span>
        </h2>
        <div className="space-y-8 max-w-2xl">
          {experience.map((exp) => (
            <div key={exp.company} className="border-l-2 border-blue-600 dark:border-cyan-500 pl-6 hover:border-blue-700 dark:hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-cyan-300">{exp.role}</h3>
              <p className="text-slate-700 dark:text-gray-400">{exp.company} • {exp.location}</p>
              <p className="text-sm text-[rgb(52,204,235)] dark:text-cyan-500 font-mono">{exp.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 dark:text-cyan-400 font-mono">
          &gt; Get In Touch_
        </h2>
        <p className="text-slate-700 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          I'm currently looking for SWE opportunities. Feel free to reach out!
        </p>
        <Button size="lg" asChild className="bg-blue-700 hover:bg-blue-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-bold shadow-lg shadow-blue-500/50 dark:shadow-cyan-500/50 hover:shadow-blue-400/70 dark:hover:shadow-cyan-400/70 transition-all border border-blue-600 dark:border-cyan-400">
          <a href="mailto:ia237808@gmail.com">Contact Me</a>
        </Button>
      </section>
    </main>
  );
}