import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Villa Tech Solutions Limited | Networking, Cyber Operations, Software & Academy',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    title: 'About Us | Villa Tech Solutions Limited — Nyali, Mombasa',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'services',
    title: 'Services | Networking, Operations, Software Engineering & Academy',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'academy',
    title: 'Villa Tech Academy | Web Development Programs & Career Services',
    loadComponent: () =>
      import('./pages/academy/academy.component').then((m) => m.AcademyComponent),
  },
  {
    path: 'portfolio',
    title: 'Portfolio | Websites, Web Apps, E-Commerce, Networking & CCTV',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'blog',
    title: 'Blog & Insights | Villa Tech Solutions Limited',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:slug',
    title: 'Article | Villa Tech Solutions Limited',
    loadComponent: () =>
      import('./pages/blog/blog-detail.component').then((m) => m.BlogDetailComponent),
  },
  {
    path: 'contact',
    title: 'Contact Us | Villa Tech Solutions Limited — Nyali, Mombasa',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
