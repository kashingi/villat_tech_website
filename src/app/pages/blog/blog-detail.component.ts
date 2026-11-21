import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { BLOG_POSTS } from '../../core/data/blog.data';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, MatIconModule, CtaBannerComponent],
  template: `
    @if (post(); as article) {
      <!-- ARTICLE HEADER -->
      <section class="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20">
        <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-45"></div>
        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <a
            routerLink="/blog"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 transition-colors hover:text-white"
          >
            <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_back</mat-icon>
            <span>Back to All Articles</span>
          </a>

          <div class="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
            <span
              class="rounded-full border border-sky-400/30 bg-sky-500/20 px-3 py-1 font-semibold text-sky-200"
            >
              {{ article.category }}
            </span>
            <span>{{ article.date }}</span>
            <span>&middot;</span>
            <span>{{ article.readTime }}</span>
          </div>

          <h1 class="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {{ article.title }}
          </h1>

          <p class="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {{ article.excerpt }}
          </p>

          <div class="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 text-sm">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/15 font-display font-bold text-brand-gold ring-1 ring-brand-gold/35"
            >
              VT
            </div>
            <div>
              <p class="font-semibold text-white">{{ article.author.name }}</p>
              <p class="text-xs text-slate-400">{{ article.author.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ARTICLE BODY -->
      <article class="bg-white py-14 sm:py-16">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/5">
            <img
              [src]="article.image"
              [alt]="article.title"
              class="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div class="mt-10 space-y-10">
            @for (section of article.sections; track section.heading) {
              <section>
                <h2 class="font-display text-2xl font-extrabold text-slate-950">
                  {{ section.heading }}
                </h2>

                <div class="mt-4 space-y-4">
                  @for (para of section.paragraphs; track para) {
                    <p class="text-base leading-relaxed text-slate-700">
                      {{ para }}
                    </p>
                  }
                </div>

                @if (section.bullets?.length) {
                  <ul
                    class="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    @for (bullet of section.bullets; track bullet) {
                      <li class="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                        <mat-icon class="!h-5 !w-5 !text-[18px] mt-0.5 shrink-0 text-sky-600">
                          check_circle
                        </mat-icon>
                        <span>{{ bullet }}</span>
                      </li>
                    }
                  </ul>
                }
              </section>
            }
          </div>

          <!-- Tags -->
          <div class="mt-12 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Topics:</span>
            @for (tag of article.tags; track tag) {
              <span
                class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-700"
              >
                #{{ tag }}
              </span>
            }
          </div>
        </div>
      </article>

      <!-- RELATED ARTICLES -->
      <section class="border-t border-slate-200/80 bg-slate-50 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <h2 class="font-display text-2xl font-extrabold text-slate-950">More Insights</h2>
            <a routerLink="/blog" class="text-sm font-semibold text-sky-700 hover:text-sky-800">
              View all articles &rarr;
            </a>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            @for (rel of relatedPosts(); track rel.slug) {
              <a
                [routerLink]="['/blog', rel.slug]"
                class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-sky-300 hover:shadow-md"
              >
                <span class="text-xs font-semibold text-sky-700">{{ rel.category }}</span>
                <h3
                  class="mt-2 font-display text-base font-bold text-slate-950 transition-colors group-hover:text-sky-700"
                >
                  {{ rel.title }}
                </h3>
                <p class="mt-2 text-xs text-slate-500">{{ rel.date }} &middot; {{ rel.readTime }}</p>
              </a>
            }
          </div>
        </div>
      </section>

      <app-cta-banner />
    } @else {
      <section class="bg-slate-50 py-28 text-center">
        <div class="mx-auto max-w-md px-4">
          <mat-icon class="!h-12 !w-12 !text-[48px] text-slate-400">article</mat-icon>
          <h1 class="mt-4 font-display text-2xl font-extrabold text-slate-950">
            Article Not Found
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            The blog article you requested could not be found.
          </p>
          <a
            routerLink="/blog"
            class="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
          >
            <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_back</mat-icon>
            <span>Return to Blog</span>
          </a>
        </div>
      </section>
    }
  `,
})
export class BlogDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly post = computed(() =>
    BLOG_POSTS.find((p) => p.slug === this.slug())
  );

  readonly relatedPosts = computed(() =>
    BLOG_POSTS.filter((p) => p.slug !== this.slug()).slice(0, 3)
  );
}
