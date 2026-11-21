import { Component, computed, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CAREER_SERVICES, COURSE_PROGRAMS } from '../../core/data/academy.data';
import { buildWhatsAppUrl } from '../../core/config/site.config';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import {
  InquiryDialogComponent,
  InquiryDialogData,
} from '../../shared/components/inquiry-dialog/inquiry-dialog.component';

type CourseLevelFilter = 'All' | 'Beginner' | 'Intermediate' | 'Career Track';

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    SectionHeaderComponent,
    CourseCardComponent,
    CtaBannerComponent,
  ],
  template: `
    <!-- ACADEMY HERO -->
    <section class="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-55"></div>
      <div
        class="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
            >
              Knowledge Department &middot; Villa Tech Academy
            </span>

            <h1 class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Learn Modern Software Engineering &amp; Build a Standout Tech Career
            </h1>

            <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Practical, mentor-led coding tracks in Nyali, Mombasa and hybrid live labs — covering
              HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Java, Spring Boot, MySQL,
              JWT security, Git/GitHub, and CI/CD, paired with executive personal branding &amp; career
              services.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#programs"
                class="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-brand-gold/25 transition-all hover:bg-brand-gold-light active:scale-[0.98]"
              >
                <span>Browse Coding Programs</span>
                <mat-icon class="!h-4 !w-4 !text-[18px]">arrow_downward</mat-icon>
              </a>

              <a
                href="#career-services"
                class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <mat-icon class="!h-4 !w-4 !text-[18px] text-brand-gold">badge</mat-icon>
                <span>Career &amp; Branding Services</span>
              </a>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              <div>
                <p class="font-display text-xl font-bold text-white">4 Tracks</p>
                <p class="text-xs text-slate-400">Intro to Full-Stack</p>
              </div>
              <div>
                <p class="font-display text-xl font-bold text-white">100% Practical</p>
                <p class="text-xs text-slate-400">Real GitHub Projects</p>
              </div>
              <div>
                <p class="font-display text-xl font-bold text-white">Nyali &amp; Hybrid</p>
                <p class="text-xs text-slate-400">Flexible Study Modes</p>
              </div>
              <div>
                <p class="font-display text-xl font-bold text-white">Career Ready</p>
                <p class="text-xs text-slate-400">ATS CV &amp; LinkedIn</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="overflow-hidden rounded-3xl border border-white/15 bg-navy-900 shadow-2xl">
              <img
                src="images/academy-coding.jpg"
                alt="Villa Tech Academy coding lab in Nyali, Mombasa"
                class="aspect-[16/11] w-full object-cover"
              />
              <div class="p-5">
                <div class="flex items-center justify-between text-xs text-sky-300">
                  <span class="font-mono font-semibold">NEXT COHORT ADMISSIONS OPEN</span>
                  <span class="inline-flex items-center gap-1 text-emerald-400">
                    <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                    Enrolling
                  </span>
                </div>
                <p class="mt-2 text-sm text-slate-300">
                  Small mentor-to-student cohorts ensure personalized code reviews, live debugging
                  practice, and portfolio readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOFTWARE TRAINING PROGRAMS -->
    <section id="programs" class="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <app-section-header
            eyebrow="Structured Curriculum"
            title="Software Engineering Training Programs"
            subtitle="Filter by skill level to find your starting track, inspect detailed learning topics, and submit your enrollment inquiry."
          />

          <!-- Course Level Filter -->
          <div class="flex flex-wrap gap-2">
            @for (level of levelFilters; track level) {
              <button
                type="button"
                (click)="activeLevel.set(level)"
                class="rounded-xl px-4 py-2 text-sm font-semibold transition-all"
                [class]="
                  activeLevel() === level
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700'
                "
              >
                {{ level === 'All' ? 'All Programs (' + courses.length + ')' : level }}
              </button>
            }
          </div>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          @for (course of filteredCourses(); track course.id) {
            <app-course-card [course]="course" [defaultExpanded]="true" />
          }
        </div>
      </div>
    </section>

    <!-- PERSONAL BRANDING & CAREER SERVICES -->
    <section id="career-services" class="scroll-mt-20 border-y border-slate-200/80 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-header
          eyebrow="Career Acceleration"
          title="Personal Branding & Career Services"
          subtitle="Stand out to hiring managers, international recruiters, and corporate procurement boards with professionally engineered personal and business profiles."
          align="center"
        />

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          @for (service of careerServices; track service.id) {
            <article
              class="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/60 p-7 transition-all hover:border-brand-gold/60 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div>
                <div class="flex items-center justify-between gap-3">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-brand-gold ring-1 ring-brand-gold/30"
                  >
                    <mat-icon>{{ service.icon }}</mat-icon>
                  </div>
                  <span
                    class="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-medium text-slate-600"
                  >
                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px] text-brand-gold">schedule</mat-icon>
                    {{ service.turnaround }}
                  </span>
                </div>

                <h3 class="mt-5 font-display text-xl font-bold text-slate-950">
                  {{ service.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ service.summary }}
                </p>

                <ul class="mt-5 space-y-2 border-t border-slate-200/70 pt-4">
                  @for (point of service.highlights; track point) {
                    <li class="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                      <mat-icon class="!h-4 !w-4 !text-[16px] mt-0.5 shrink-0 text-brand-gold">
                        check_circle
                      </mat-icon>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200/70 pt-5">
                <button
                  type="button"
                  (click)="openCareerInquiry(service.title)"
                  class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold hover:text-navy-950"
                >
                  <span>Request Service</span>
                  <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
                </button>
                <a
                  [href]="getCareerWhatsApp(service.title)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                >
                  <mat-icon class="!h-4 !w-4 !text-[16px]">chat</mat-icon>
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- ACADEMY FAQ (Angular Material Accordion) -->
    <section class="bg-slate-50 py-20 sm:py-24">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <app-section-header
          eyebrow="Admissions FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything prospective students and parents ask before joining Villa Tech Academy."
          align="center"
        />

        <div class="mt-10">
          <mat-accordion multi>
            @for (faq of faqs; track faq.question) {
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title class="font-display text-sm font-bold text-slate-900 sm:text-base">
                    {{ faq.question }}
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <p class="pb-2 text-sm leading-relaxed text-slate-600">
                  {{ faq.answer }}
                </p>
              </mat-expansion-panel>
            }
          </mat-accordion>
        </div>
      </div>
    </section>

    <app-cta-banner
      eyebrow="Admissions Open"
      title="Unsure Which Track Matches Your Goals?"
      description="Speak with a Villa Tech Academy advisor in Nyali or on WhatsApp. We will recommend the right roadmap based on your background and career timeline."
      primaryLabel="Talk to an Advisor"
      primaryRoute="/contact"
      secondaryLabel="Chat with Academy Desk"
      whatsappMessage="Hello Villa Tech Academy! I would like guidance on choosing the right web development program or career service."
    />
  `,
})
export class AcademyComponent {
  private readonly dialog = inject(MatDialog);

  readonly courses = COURSE_PROGRAMS;
  readonly careerServices = CAREER_SERVICES;
  readonly levelFilters: CourseLevelFilter[] = ['All', 'Beginner', 'Intermediate', 'Career Track'];
  readonly activeLevel = signal<CourseLevelFilter>('All');

  readonly filteredCourses = computed(() => {
    const level = this.activeLevel();
    if (level === 'All') {
      return this.courses;
    }
    return this.courses.filter((c) => c.level === level);
  });

  readonly faqs = [
    {
      question: 'Do I need prior coding experience to enroll?',
      answer:
        'No prior coding experience is required for Introduction to Web Development or our beginner-friendly entry path into Full-Stack Web Development. For standalone Frontend (Angular) or Backend (Java & Spring Boot) tracks, basic programming familiarity is helpful.',
    },
    {
      question: 'Where are in-person classes held, and is remote/hybrid learning available?',
      answer:
        'In-person labs take place at our Villa Tech Academy hub in Nyali, Mombasa County. We also offer structured hybrid and live online evening/weekend cohorts for working professionals and university students across Kenya.',
    },
    {
      question: 'Will I graduate with real projects and a certificate?',
      answer:
        'Yes. Every student builds real-world portfolio projects hosted on GitHub with live deployments, undergoes mentor code reviews, and receives a Certificate of Completion from Villa Tech Solutions Limited.',
    },
    {
      question: 'Can I book Personal Branding & Career Services without joining a coding bootcamp?',
      answer:
        'Absolutely! Our ATS-friendly CV writing, cover letter support, LinkedIn optimization, and corporate company profile services are available to all professionals, graduates, and businesses independently.',
    },
  ];

  getCareerWhatsApp(title: string): string {
    return buildWhatsAppUrl(
      `Hello Villa Tech Academy! I am interested in your Personal Branding & Career Service: ${title}.`
    );
  }

  openCareerInquiry(title: string): void {
    const data: InquiryDialogData = {
      mode: 'career',
      title: `Request: ${title}`,
      subtitle: 'Fast turnaround crafted by our Career & Personal Branding specialists.',
      preselectedTopic: title,
    };
    this.dialog.open(InquiryDialogComponent, {
      data,
      width: '92vw',
      maxWidth: '620px',
      panelClass: 'villa-dialog-panel',
    });
  }
}
