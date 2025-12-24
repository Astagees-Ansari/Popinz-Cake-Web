import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private scrollListener: any;
  private counterAnimated = new Set<HTMLElement>();
  isMenuOpen = false;

  testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Bakery Owner',
      text: 'The courses here changed my life. I went from a hobbyist to owning my own successful bakery in just 6 months!',
      image: 't1.png'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Cake Artist',
      text: 'Excellent teaching style! The instructors are true masters of their craft. Highly recommend for anyone looking to go professional.',
      image: 't2.png'
    },
    {
      name: 'Ankit Verma',
      role: 'Pastry Chef',
      text: 'I learned techniques here that I couldn\'t find anywhere else. The hands-on training is simply the best.',
      image: 't3.png'
    },
    {
      name: 'Sonal Gupta',
      role: 'Entrepreneur',
      text: 'Amazing community and mentors. They don\'t just teach baking, they teach you how to build a business.',
      image: 't1.png' // Reusing images for variety
    },
    {
      name: 'Vikram Singh',
      role: 'Hobbyist',
      text: 'Best investment I ever made. The attention to detail in every lesson is remarkable.',
      image: 't2.png'
    }
  ];

  courses = [
    {
      id: 1,
      title: 'Wedding Cake Masterclass',
      description: 'Learn to create multi-tier elegant cakes.',
      image: 'cake.png', // Using existing assets
      locked: true
    },
    {
      id: 2,
      title: 'Chocolate Mastery',
      description: 'Become a pro at tempering and ganache.',
      image: 'hero-image.png',
      locked: true
    },
    {
      id: 3,
      title: 'Cupcake Artistry',
      description: 'Detailed frosting and decoration techniques.',
      image: 'cupcake.png',
      locked: true
    },
    {
      id: 4,
      title: 'Fondant Fundamentals',
      description: 'Master the art of smooth fondant covering.',
      image: 'cake.png',
      locked: true
    }
  ];

  activeTestimonialIndex = 0; // Start with the first one
  private testimonialInterval: any;
  isFeaturesOpen = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleFeatures() {
    this.isFeaturesOpen = !this.isFeaturesOpen;
  }

  navigateToCourses() {
    this.router.navigate(['/courses']);
  }

  ngOnInit() {
    // Scroll animation logic
    this.scrollListener = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      const navbar = document.querySelector('.navbar');

      // Add scrolled class to navbar when scrolling
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if element is in viewport
        if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
          element.classList.add('animate-in');

          // Trigger counter animation for stat numbers
          if (element.classList.contains('about-stats')) {
            this.animateCounters(element);
          }
        } else {
          // Remove class when out of view so it can animate again
          element.classList.remove('animate-in');

          // Reset counter animation tracking when out of view
          if (element.classList.contains('about-stats')) {
            this.counterAnimated.delete(element as HTMLElement);
          }
        }
      });
    };

    window.addEventListener('scroll', this.scrollListener);
    // Trigger once on load
    this.scrollListener();

    // Testimonial slider logic
    this.startTestimonialSlider();
  }

  startTestimonialSlider() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 2000);
  }

  nextTestimonial() {
    this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonials.length;
  }

  setTestimonial(index: number) {
    this.activeTestimonialIndex = index;
    // Reset interval when user manually clicks
    clearInterval(this.testimonialInterval);
    this.startTestimonialSlider();
  }

  private animateCounters(statsElement: Element) {
    // Only animate if not already animated
    if (this.counterAnimated.has(statsElement as HTMLElement)) {
      return;
    }
    this.counterAnimated.add(statsElement as HTMLElement);

    const counters = statsElement.querySelectorAll('.stat-number');

    counters.forEach((counter) => {
      const target = parseInt((counter as HTMLElement).getAttribute('data-target') || '0');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '+';
        }
      };

      updateCounter();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }
}
