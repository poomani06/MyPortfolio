
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {

  certificates: string[] = [
    'Cybersecurity Essentials - Cisco Networking Academy',
    'Network Security Fundamentals - GUVI',
    'Fundamentals of Information Security - Infosys Springboard',
    'Foundation of Cyber Security - Coursera',
    'ISO/IEC 27001 Information Security Associate - SkillFront'
  ];

}
