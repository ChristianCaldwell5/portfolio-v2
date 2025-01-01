import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxTimelineItemPosition, NgxTimelineModule } from '@frxjs/ngx-timeline';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, NgxTimelineModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('heroElem') heroElem!: ElementRef;
  @ViewChild('overviewElem') overviewElem!: ElementRef;
  @ViewChild('projectsElem') projectsElem!: ElementRef;
  @ViewChild('experienceElem') experienceElem!: ElementRef;
  @ViewChild('connectElem') connectElem!: ElementRef;

  title = 'portfolio';

  events = [
    {
      timestamp: new Date(2024, 3, 15),
      title: "Entegral",
      description: "Full Stack Engineer",
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
      labels: ["Angular", "Spring", "Kotlin", "Mongo"]
    },
    {
      timestamp: new Date(2022, 2, 20),
      title: "PNC Bank",
      description: "Sr. Frontend Engineer",
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
      labels: ["Angular", "Material", "SCSS", "Comp. Lib."]
    },
    {
      timestamp: new Date(2020, 0, 10),
      title: "Shelter Insurance",
      description: "Software Engineer",
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
      labels: ["Angular", "TypeScript", "NodeJS", "SCSS"]
    },
    {
      timestamp: new Date(2019, 5, 16),
      title: "Enterprise",
      description: "Intern Software Engineer",
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
      labels: ["Spring", "Java", "HTML", "CSS"]
    }
  ]

  constructor() {
  }

  connectNavBtnClick() {
    this.connectElem.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollRequest(component: string) {
    switch (component) {
      case 'hero':
        this.scrollIntoView(this.heroElem);
        break;
      case 'overview':
          this.scrollIntoView(this.overviewElem);
          break;
      case 'projects':
        this.scrollIntoView(this.projectsElem);
        break;
      case 'experience':
        this.scrollIntoView(this.experienceElem);
        break;
      case 'connect':
        this.scrollIntoView(this.connectElem);
        break;
      default:
        break;
    }
  }

  scrollIntoView(component: ElementRef) {
    component.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }

}
