import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
} from '../../core/data/portfolio.data';
import { PortfolioCategory } from '../../core/models/site.models';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatIconModule, ProjectCardComponent, CtaBannerComponent],
  template: `
    <!-- PAGE HERO -->
    <section class="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-50"></div>
      <div
        class="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
          >
            Our Portfolio
          </span>
          <h1 class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Proven Delivery Across Software, E-Commerce, Networking &amp; CCTV
          </h1>
          <p class="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Explore selected projects delivered for coastal hospitality venues, logistics firms,
            clinics, estates, and modern Kenyan businesses. Filter by category or open any case
            study for technical details.
          </p>
        </div>
      </div>
    </section>

    <!-- FILTER & PROJECTS GRID -->
    <section class="bg-slate-50 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Category Filter Pills -->
        <div
          class="flex flex-col items-start justify-between gap-4 border-b border-slate-200/80 pb-8 md:flex-row md:items-center"
        >
          <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            @for (category of categories; track category) {
              <button
                type="button"
                role="tab"
                [attr.aria-selected]="activeCategory() === category"
                (click)="selectCategory(category)"
                class="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all"
                [class]="
                  activeCategory() === category
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700'
                "
              >
                <span>{{ category }}</span>
                <span
                  class="rounded-full px-2 py-0.5 font-mono text-[11px]"
                  [class]="
                    activeCategory() === category
                      ? 'bg-sky-500/25 text-sky-200'
                      : 'bg-slate-100 text-slate-500'
                  "
                >
                  {{ countForCategory(category) }}
                </span>
              </button>
            }
          </div>

          <p class="text-sm text-slate-500">
            Showing
            <strong class="font-semibold text-slate-900">{{ filteredProjects().length }}</strong>
            project{{ filteredProjects().length === 1 ? '' : 's' }}
          </p>
        </div>

        <!-- Projects Grid -->
        @if (filteredProjects().length > 0) {
          <div class="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            @for (project of filteredProjects(); track project.id) {
              <app-project-card [project]="project" />
            }
          </div>
        } @else {
          <div
            class="mt-12 rounded-2xl border border-slate-200 bg-white p-12 text-center"
          >
            <mat-icon class="!h-10 !w-10 !text-[40px] text-slate-400">folder_open</mat-icon>
            <h3 class="mt-3 font-display text-lg font-bold text-slate-900">
              No projects found in this category
            </h3>
            <button
              type="button"
              (click)="selectCategory('All')"
              class="mt-4 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Show All Projects
            </button>
          </div>
        }
      </div>
    </section>

    <app-cta-banner
      eyebrow="Have a Project in Mind?"
      title="Let’s Engineer Your Next Success Story"
      description="Whether you need a high-converting website, a custom business system, office Wi-Fi, or HD CCTV security — our engineers are ready to scope your project."
      primaryLabel="Request a Quote"
      primaryRoute="/contact"
    />
  `,
})
export class PortfolioComponent {
  readonly categories = PORTFOLIO_CATEGORIES;
  readonly projects = PORTFOLIO_PROJECTS;
  readonly activeCategory = signal<PortfolioCategory>('All');

  readonly filteredProjects = computed(() => {
    const selected = this.activeCategory();
    if (selected === 'All') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === selected);
  });

  selectCategory(category: PortfolioCategory): void {
    this.activeCategory.set(category);
  }

  countForCategory(category: PortfolioCategory): number {
    if (category === 'All') {
      return this.projects.length;
    }
    return this.projects.filter((p) => p.category === category).length;
  }
}
