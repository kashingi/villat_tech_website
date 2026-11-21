import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../../core/data/blog.data';
import { BlogCategory } from '../../core/models/site.models';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, FormsModule, MatIconModule, CtaBannerComponent],
  template: `
    <!-- PAGE HERO -->
    <section class="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-50"></div>
      <div
        class="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
          >
            Blog &amp; Knowledge Hub
          </span>
          <h1 class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Technology Articles, Web Dev Tutorials, Career Tips &amp; SEO Insights
          </h1>
          <p class="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Practical engineering playbooks, Angular &amp; Spring Boot tutorials, career advice, and
            local digital strategy written by Villa Tech Solutions engineers and Academy mentors.
          </p>
        </div>
      </div>
    </section>

    <!-- FEATURED ARTICLE SPOTLIGHT -->
    @if (featuredPost && activeCategory() === 'All' && !searchQuery().trim()) {
      <section class="border-b border-slate-200/80 bg-white py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article
            class="group grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50 shadow-xs transition-all hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5 lg:grid-cols-12"
          >
            <div class="relative overflow-hidden bg-navy-900 lg:col-span-6">
              <img
                [src]="featuredPost.image"
                [alt]="featuredPost.title"
                class="h-full min-h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                class="absolute left-5 top-5 rounded-full bg-sky-500 px-3.5 py-1 text-xs font-semibold text-white shadow-sm"
              >
                Featured Article
              </span>
            </div>

            <div class="flex flex-col justify-center p-7 sm:p-10 lg:col-span-6">
              <div class="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                <span class="rounded-full bg-sky-100 px-3 py-1 font-semibold text-sky-800">
                  {{ featuredPost.category }}
                </span>
                <span>{{ featuredPost.date }}</span>
                <span>&middot;</span>
                <span>{{ featuredPost.readTime }}</span>
              </div>

              <h2
                class="mt-4 font-display text-2xl font-extrabold text-slate-950 transition-colors group-hover:text-sky-700 sm:text-3xl"
              >
                <a [routerLink]="['/blog', featuredPost.slug]">{{ featuredPost.title }}</a>
              </h2>

              <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {{ featuredPost.excerpt }}
              </p>

              <div class="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-5">
                <div class="text-xs">
                  <p class="font-bold text-slate-900">{{ featuredPost.author.name }}</p>
                  <p class="text-slate-500">{{ featuredPost.author.role }}</p>
                </div>
                <a
                  [routerLink]="['/blog', featuredPost.slug]"
                  class="inline-flex items-center gap-1.5 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                >
                  <span>Read Article</span>
                  <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    }

    <!-- FILTER + BLOG GRID -->
    <section class="bg-slate-50 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Controls Bar -->
        <div
          class="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-8 lg:flex-row lg:items-center"
        >
          <div class="flex flex-wrap gap-2">
            @for (cat of categories; track cat) {
              <button
                type="button"
                (click)="activeCategory.set(cat)"
                class="rounded-xl px-4 py-2 text-sm font-semibold transition-all"
                [class]="
                  activeCategory() === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700'
                "
              >
                {{ cat }}
              </button>
            }
          </div>

          <div class="relative w-full lg:w-72">
            <mat-icon
              class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 !h-4 !w-4 !text-[18px] text-slate-400"
            >
              search
            </mat-icon>
            <input
              type="search"
              [ngModel]="searchQuery()"
              (ngModelChange)="searchQuery.set($event)"
              placeholder="Search articles & topics..."
              class="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
        </div>

        <!-- Articles Grid -->
        @if (filteredPosts().length > 0) {
          <div class="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            @for (post of filteredPosts(); track post.slug) {
              <article
                class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <a [routerLink]="['/blog', post.slug]" class="relative block aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    [src]="post.image"
                    [alt]="post.title"
                    loading="lazy"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 shadow-xs"
                  >
                    {{ post.category }}
                  </span>
                </a>

                <div class="flex flex-1 flex-col p-6">
                  <div class="flex items-center gap-2 text-xs text-slate-500">
                    <span>{{ post.date }}</span>
                    <span>&middot;</span>
                    <span>{{ post.readTime }}</span>
                  </div>

                  <h3
                    class="mt-3 font-display text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-sky-700"
                  >
                    <a [routerLink]="['/blog', post.slug]">{{ post.title }}</a>
                  </h3>

                  <p class="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {{ post.excerpt }}
                  </p>

                  <div class="mt-4 flex flex-wrap gap-1.5">
                    @for (tag of post.tags.slice(0, 3); track tag) {
                      <span
                        class="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600"
                      >
                        #{{ tag }}
                      </span>
                    }
                  </div>

                  <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span class="text-xs font-medium text-slate-500">{{ post.author.name }}</span>
                    <a
                      [routerLink]="['/blog', post.slug]"
                      class="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-800"
                    >
                      <span>Read</span>
                      <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
                    </a>
                  </div>
                </div>
              </article>
            }
          </div>
        } @else {
          <div class="mt-12 rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <mat-icon class="!h-10 !w-10 !text-[40px] text-slate-400">article</mat-icon>
            <h3 class="mt-3 font-display text-lg font-bold text-slate-900">
              No matching articles found
            </h3>
            <p class="mt-1 text-sm text-slate-600">
              Try clearing your search term or selecting another category.
            </p>
            <button
              type="button"
              (click)="resetFilters()"
              class="mt-4 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        }
      </div>
    </section>

    <app-cta-banner
      eyebrow="Learn With Our Engineers"
      title="Want Hands-On Mentorship Beyond Articles?"
      description="Join our practical Angular, Java Spring Boot, and Full-Stack cohorts at Villa Tech Academy in Nyali or inquire about our software & networking services."
      primaryLabel="Explore Villa Tech Academy"
      primaryRoute="/academy"
    />
  `,
})
export class BlogComponent {
  readonly categories = BLOG_CATEGORIES;
  readonly posts = BLOG_POSTS;
  readonly featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  readonly activeCategory = signal<BlogCategory>('All');
  readonly searchQuery = signal('');

  readonly filteredPosts = computed(() => {
    const cat = this.activeCategory();
    const query = this.searchQuery().trim().toLowerCase();

    return this.posts.filter((post) => {
      const matchesCat = cat === 'All' || post.category === cat;
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCat && matchesQuery;
    });
  });

  resetFilters(): void {
    this.activeCategory.set('All');
    this.searchQuery.set('');
  }
}
