import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    standalone: true,
    template: `
    <div class="courses-placeholder">
      <h1>Our Professional Courses</h1>
      <p>Explore our wide range of cake making and decorating courses.</p>
      <button (click)="goBack()">Back to Home</button>
    </div>
  `,
    styles: [`
    .courses-placeholder {
      padding: 100px 20px;
      text-align: center;
      background: linear-gradient(135deg, #FFF0F5 0%, #E6E6FA 100%);
      min-height: 100vh;
    }
    h1 { color: #FF6B9D; font-size: 3rem; margin-bottom: 20px; }
    p { color: #333; font-size: 1.2rem; margin-bottom: 40px; }
    button {
      padding: 12px 30px;
      background: #FF6B9D;
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
      transition: transform 0.2s;
    }
    button:hover { transform: scale(1.05); }
  `]
})
export class CoursesComponent {
    goBack() {
        window.history.back();
    }
}
