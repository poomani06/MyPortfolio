
import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  selectedProject: Project | null = null;

  projects: Project[] = [

    {
      title: 'PathShield AI',
      category: 'Cybersecurity',
      description: 'An attack-path analysis project that identifies possible attack routes and provides remediation suggestions.',
      technologies: ['Python', 'NetworkX', 'Nmap', 'NVD'],
      features: [
        'Attack-path analysis',
        'Network graph visualization',
        'Vulnerability information',
        'Remediation recommendations'
      ],
      status: 'Developed'
    },

    {
      title: 'FakeXpose',
      category: 'Machine Learning',
      description: 'An AI-based system designed to detect deepfake images, videos and audio.',
      technologies: ['Python', 'PyTorch', 'Machine Learning'],
      features: [
        'Image deepfake detection',
        'Video deepfake detection',
        'Audio deepfake detection',
        'Model evaluation'
      ],
      status: 'Developed'
    },

    {
      title: 'Movie Ticket Booking System',
      category: 'Web Development',
      description: 'A movie ticket booking application developed using ASP.NET Core Web API and Entity Framework Core.',
      technologies: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server'],
      features: [
        'Movie management',
        'Theatre and screen management',
        'Show management',
        'Ticket booking and cancellation'
      ],
      status: 'In Progress'
    },

    {
      title: 'Campus Placement Management',
      category: 'Web Development',
      description: 'A placement management application designed to manage students, companies and placement activities.',
      technologies: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
      features: [
        'Student management',
        'Company management',
        'Role-based authorization',
        'Placement management'
      ],
      status: 'In Progress'
    }

  ];

  viewDetails(project: Project) {
    this.selectedProject = project;
  }

  closeDetails() {
    this.selectedProject = null;
  }

}
