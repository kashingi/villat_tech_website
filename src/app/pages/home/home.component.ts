import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SITE_CONFIG, buildWhatsAppUrl } from '../../core/config/site.config';
import { DEPARTMENTS } from '../../core/data/departments.data';
import { PORTFOLIO_PROJECTS } from '../../core/data/portfolio.data';
import { CAREER_SERVICES, COURSE_PROGRAMS } from '../../core/data/academy.data';
import { COMPANY_STATS, TESTIMONIALS } from '../../core/data/company.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import {
  InquiryDialogComponent,
  InquiryDialogData,
} from '../../shared/components/inquiry-dialog/inquiry-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatDialogModule,
    SectionHeaderComponent,
    ProjectCardComponent,
    CtaBannerComponent,
  ],
  template: `
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden bg-navy-950 text-white">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-60"></div>
      <div
        class="pointer-events-none absolute -left-32 top-0 h-[460px] w-[460px] rounded-full bg-sky-500/15 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <!-- Hero Copy -->
          <div class="animate-fade-up lg:col-span-6">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-300"
            >
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Nyali, Mombasa County &middot; Kenya</span>
            </div>

            <h1
              class="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              We turn technology,
              <span
                class="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
              >
                into your competitive advantage.
              </span>
            </h1>

            <p class="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              <strong class="font-semibold text-white">Villa Tech Solutions Limited</strong>
              empowers businesses, organizations, and individuals with
              reliable networking &amp; CCTV solutions, innovative software, essential digital services and practical technology training. We help you connect, simplify operations, innovate and grow.
            </p>

            <!-- Hero Actions -->
            <div class="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                routerLink="/services"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 active:scale-[0.98]"
              >
                <span>Explore Our Services</span>
                <mat-icon class="!h-4 !w-4 !text-[18px]">arrow_forward</mat-icon>
              </a>

              <a
                routerLink="/academy"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-sky-400/40 hover:bg-white/10"
              >
                <mat-icon class="!h-4 !w-4 !text-[18px] text-sky-400">school</mat-icon>
                <span>Villa Tech Academy</span>
              </a>
            </div>

            <!-- Trust Pillars -->
            <div
              class="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4"
            >
              @for (stat of stats; track stat.label) {
                <div>
                  <p class="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {{ stat.value }}
                  </p>
                  <p class="mt-1 text-xs leading-snug text-slate-400">
                    {{ stat.label }}
                  </p>
                </div>
              }
            </div>
          </div>

          <!-- Hero Visual Showcase -->
          <div class="relative lg:col-span-6">
            <div
              class="relative overflow-hidden rounded-3xl border border-white/15 bg-navy-900 shadow-2xl shadow-black/50"
            >
              <img
                src="images/hero-tech.jpg"
                alt="Villa Tech Solutions modern software engineering and network studio"
                class="aspect-[16/11] w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"
              ></div>

              <!-- Overlay Capability Strip -->
              <div class="absolute bottom-4 left-4 right-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <div
                  class="rounded-2xl border border-white/15 bg-navy-950/80 p-3.5 backdrop-blur-md"
                >
                  <div class="flex items-center gap-2 text-sky-400">
                    <mat-icon class="!h-4 !w-4 !text-[17px]">router</mat-icon>
                    <span class="text-[11px] font-bold uppercase tracking-wider">Networking</span>
                  </div>
                  <p class="mt-1 text-xs font-medium text-slate-200">Wi-Fi 6 &amp; IP CCTV</p>
                </div>

                <div
                  class="rounded-2xl border border-white/15 bg-navy-950/80 p-3.5 backdrop-blur-md"
                >
                  <div class="flex items-center gap-2 text-cyan-400">
                    <mat-icon class="!h-4 !w-4 !text-[17px]">code</mat-icon>
                    <span class="text-[11px] font-bold uppercase tracking-wider">Software</span>
                  </div>
                  <p class="mt-1 text-xs font-medium text-slate-200">Web Apps &amp; E-Commerce</p>
                </div>

                <div
                  class="rounded-2xl border border-white/15 bg-navy-950/80 p-3.5 backdrop-blur-md"
                >
                  <div class="flex items-center gap-2 text-emerald-400">
                    <mat-icon class="!h-4 !w-4 !text-[17px]">school</mat-icon>
                    <span class="text-[11px] font-bold uppercase tracking-wider">Academy</span>
                  </div>
                  <p class="mt-1 text-xs font-medium text-slate-200">Angular &amp; Java Tracks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPANY INTRODUCTION -->
    <section class="border-b border-slate-200/80 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <app-section-header
              eyebrow="Who We Are"
              title="One Trusted Technology Partner. Complete Solutions. Endless Possibilities."
              subtitle="Based in Nyali, Mombasa County, Villa Tech Solutions Limited brings together technology, innovation and expertise to help businesses operate smarter, organizations stay connected and individuals build successful careers in technology."
            />

            <p class="mt-5 text-base leading-relaxed text-slate-600">
              

              Whether you need reliable corporate Wi-Fi and CCTV security, professional digital and online services, custom software designed around your business needs, or practical software engineering training, we have the expertise to make it happen.

Through our four specialized departments, we deliver dependable solutions, simplify everyday operations and turn technology into opportunities for growth.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <mat-icon class="!h-5 !w-5 !text-[20px]">verified</mat-icon>
                </div>
                <div>
                  <h3 class="font-display text-sm font-bold text-slate-950">Corporate &amp; SME Ready</h3>
                  <p class="mt-1 text-xs leading-relaxed text-slate-600">
                    Dependable SLAs, structured documentation, and clean modern architecture.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <mat-icon class="!h-5 !w-5 !text-[20px]">location_on</mat-icon>
                </div>
                <div>
                  <h3 class="font-display text-sm font-bold text-slate-950">Local Nyali Presence</h3>
                  <p class="mt-1 text-xs leading-relaxed text-slate-600">
                    Fast on-site dispatch across Nyali, Mombasa County, and remote Kenya-wide delivery.
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a
                routerLink="/about"
                class="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                <span>About Villa Tech Solutions</span>
                <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
              </a>
              <a
                [href]="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                <mat-icon class="!h-4 !w-4 !text-[18px]">chat</mat-icon>
                <span>Speak to an Engineer on WhatsApp</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <img
                  src="images/network-installation.png"
                  alt="Enterprise structured networking and IP CCTV installation"
                  loading="lazy"
                  class="aspect-[4/3] w-full object-cover"
                />
                <div class="bg-white p-4">
                  <p class="text-xs font-bold uppercase tracking-wider text-sky-700">Infrastructure</p>
                  <p class="mt-1 text-sm font-semibold text-slate-900">
                    Enterprise Wi-Fi, LAN &amp; IP CCTV
                  </p>
                </div>
              </div>

              <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:mt-8">
                <img
                  src="images/academy-coding.jpg"
                  alt="Villa Tech Academy software engineering training lab"
                  loading="lazy"
                  class="aspect-[4/3] w-full object-cover"
                />
                <div class="bg-white p-4">
                  <p class="text-xs font-bold uppercase tracking-wider text-cyan-700">Academy &amp; Software</p>
                  <p class="mt-1 text-sm font-semibold text-slate-900">
                    Modern Engineering &amp; Hands-On Training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOUR DEPARTMENTS OVERVIEW -->
    <section class="bg-slate-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <app-section-header
            eyebrow="Our Four Departments"
            title="Integrated Capabilities Across Every Layer of Modern Tech"
            subtitle="Explore how our four specialized divisions support homes, growing SMEs, corporate teams, and aspiring engineers."
          />
          <a
            routerLink="/services"
            class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800"
          >
            <span>View Complete Service Catalog</span>
            <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
          </a>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          @for (dept of departments; track dept.id) {
            <article
              class="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div>
                <div class="flex items-center justify-between">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm"
                    [class]="dept.accentClass"
                  >
                    <mat-icon>{{ dept.icon }}</mat-icon>
                  </div>
                  <span
                    class="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                    [class]="dept.badgeClass"
                  >
                    {{ dept.eyebrow }}
                  </span>
                </div>

                <h3 class="mt-5 font-display text-lg font-extrabold text-slate-950">
                  {{ dept.shortName }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ dept.tagline }}
                </p>

                <ul class="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  @for (service of dept.services.slice(0, 3); track service.id) {
                    <li class="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <mat-icon class="!h-4 !w-4 !text-[15px] mt-0.5 shrink-0 text-sky-600">
                        check
                      </mat-icon>
                      <span>{{ service.title }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div class="mt-6 pt-2">
                <a
                  [routerLink]="dept.id === 'academy' ? '/academy' : '/services'"
                  [fragment]="dept.id === 'academy' ? undefined : dept.id"
                  class="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-sky-700"
                >
                  <span>Explore {{ dept.shortName }}</span>
                  <mat-icon class="!h-4 !w-4 !text-[16px] transition-transform group-hover:translate-x-0.5">
                    arrow_forward
                  </mat-icon>
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- FEATURED SERVICES -->
    <section class="border-y border-slate-200/80 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-header
          eyebrow="Featured Services"
          title="High-Demand Solutions Delivered with Precision"
          subtitle="From resilient Wi-Fi and CCTV security to KRA/eCitizen digital assistance and custom full-stack software."
          align="center"
        />

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (item of featuredServices; track item.id) {
            <div
              class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:border-sky-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div>
                <div class="flex items-center justify-between gap-2">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-700 shadow-xs ring-1 ring-slate-200"
                  >
                    <mat-icon>{{ item.icon }}</mat-icon>
                  </div>
                  <span class="text-xs font-semibold text-slate-500">{{ item.department }}</span>
                </div>

                <h3 class="mt-4 font-display text-lg font-bold text-slate-950">
                  {{ item.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ item.summary }}
                </p>
              </div>

              <div class="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4">
                <button
                  type="button"
                  (click)="inquireService(item.title)"
                  class="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800"
                >
                  <span>Request Service</span>
                  <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
                </button>
                <a
                  routerLink="/services"
                  [fragment]="item.deptId"
                  class="text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  Details
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FEATURED PORTFOLIO PROJECTS -->
    <section class="bg-slate-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <app-section-header
            eyebrow="Featured Portfolio"
            title="Selected Work Across Web, Software, Networking & CCTV"
            subtitle="Real-world solutions engineered for hospitality, logistics, retail, healthcare, and corporate clients."
          />
          <a
            routerLink="/portfolio"
            class="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-xs transition-all hover:border-sky-300 hover:text-sky-700"
          >
            <span>View Full Portfolio</span>
            <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
          </a>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          @for (project of featuredProjects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>

    <!-- VILLA TECH ACADEMY HIGHLIGHTS -->
    <section class="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-45"></div>
      <div
        class="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <!-- Academy Overview -->
          <div class="lg:col-span-5">
            <app-section-header
              eyebrow="Knowledge Department"
              title="Villa Tech Academy"
              subtitle="Hands-on software engineering cohorts and personal branding services crafted to launch and accelerate technology careers in Kenya and globally."
              [dark]="true"
            />

            <div class="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img
                src="images/academy-coding.jpg"
                alt="Villa Tech Academy coding workspace"
                loading="lazy"
                class="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div class="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 class="font-display text-sm font-bold uppercase tracking-wider text-sky-300">
                Personal Branding &amp; Career Services
              </h3>
              <div class="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                @for (career of careerServices; track career.id) {
                  <div class="flex items-center gap-2 text-xs text-slate-200">
                    <mat-icon class="!h-4 !w-4 !text-[15px] text-emerald-400">check_circle</mat-icon>
                    <span>{{ career.title }}</span>
                  </div>
                }
              </div>
            </div>

            <div class="mt-7 flex flex-wrap gap-3">
              <a
                routerLink="/academy"
                class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400"
              >
                <span>Browse All Programs</span>
                <mat-icon class="!h-4 !w-4 !text-[18px]">arrow_forward</mat-icon>
              </a>
              <button
                type="button"
                (click)="openAcademyInquiry('Villa Tech Academy Consultation')"
                class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <span>Enroll / Inquire</span>
              </button>
            </div>
          </div>

          <!-- 4 Academy Programs Grid -->
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            @for (course of courses; track course.id) {
              <div
                class="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xs transition-all hover:border-sky-400/40 hover:bg-white/[0.08]"
              >
                <div>
                  <div class="flex items-center justify-between gap-2">
                    <span
                      class="rounded-full border border-sky-400/30 bg-sky-400/15 px-2.5 py-0.5 text-[11px] font-semibold text-sky-300"
                    >
                      {{ course.level }}
                    </span>
                    <span class="font-mono text-xs text-slate-400">{{ course.duration }}</span>
                  </div>

                  <h3 class="mt-4 font-display text-lg font-bold text-white">
                    {{ course.title }}
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-300">
                    {{ course.summary }}
                  </p>

                  <div class="mt-4 flex flex-wrap gap-1.5">
                    @for (tech of course.technologies.slice(0, 5); track tech) {
                      <span
                        class="rounded-md border border-white/10 bg-navy-900/80 px-2 py-0.5 font-mono text-[11px] text-sky-200"
                      >
                        {{ tech }}
                      </span>
                    }
                    @if (course.technologies.length > 5) {
                      <span class="px-1.5 py-0.5 font-mono text-[11px] text-slate-400">
                        +{{ course.technologies.length - 5 }} more
                      </span>
                    }
                  </div>
                </div>

                <div class="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <button
                    type="button"
                    (click)="openAcademyInquiry(course.title)"
                    class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white"
                  >
                    <span>Enroll Now</span>
                    <mat-icon class="!h-4 !w-4 !text-[15px]">arrow_forward</mat-icon>
                  </button>
                  <a
                    routerLink="/academy"
                    class="text-xs font-medium text-slate-400 hover:text-slate-200"
                  >
                    Curriculum
                  </a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-header
          eyebrow="Client & Student Trust"
          title="Trusted by Businesses & Graduates Across Mombasa"
          subtitle="What corporate directors, entrepreneurs, and Villa Tech Academy alumni say about working and learning with us."
          align="center"
        />

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          @for (t of testimonials; track t.id) {
            <figure
              class="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/50 p-7 transition-all hover:border-sky-200 hover:bg-white hover:shadow-md"
            >
              <div>
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-0.5 text-amber-400">
                    @for (star of [1, 2, 3, 4, 5]; track star) {
                      <mat-icon class="!h-4 !w-4 !text-[16px]">star</mat-icon>
                    }
                  </div>
                  <span
                    class="rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700"
                  >
                    {{ t.department }}
                  </span>
                </div>

                <blockquote class="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  “{{ t.quote }}”
                </blockquote>
              </div>

              <figcaption class="mt-6 flex items-center gap-3.5 border-t border-slate-200/70 pt-4">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-xs font-bold text-sky-300"
                >
                  {{ t.initials }}
                </div>
                <div>
                  <div class="font-display text-sm font-bold text-slate-950">{{ t.author }}</div>
                  <div class="text-xs text-slate-500">{{ t.role }} &middot; {{ t.organization }}</div>
                </div>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <app-cta-banner
      eyebrow="Start Your Project or Tech Journey"
      title="Ready to Upgrade Your Systems or Upskill Your Career?"
      description="Visit Villa Tech Solutions Limited in Nyali, Mombasa County, or message our specialists directly for site surveys, software quotes, digital operations, and academy admissions."
      primaryLabel="Contact Villa Tech"
      primaryRoute="/contact"
      secondaryLabel="WhatsApp Us Now"
    />
  `,
})
export class HomeComponent {
  private readonly dialog = inject(MatDialog);

  readonly siteConfig = SITE_CONFIG;
  readonly whatsappUrl = buildWhatsAppUrl();
  readonly stats = COMPANY_STATS;
  readonly departments = DEPARTMENTS;
  readonly courses = COURSE_PROGRAMS;
  readonly careerServices = CAREER_SERVICES;
  readonly testimonials = TESTIMONIALS;
  readonly featuredProjects = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 4);

  readonly featuredServices = [
    {
      id: 'f-wifi',
      deptId: 'networking',
      department: 'Networking',
      title: 'Wi-Fi & Enterprise Network Setup',
      summary:
        'High-speed, zero-dead-zone wireless deployments, structured Cat6A cabling, router configuration, and rapid troubleshooting.',
      icon: 'wifi',
    },
    {
      id: 'f-cctv',
      deptId: 'networking',
      department: 'Networking',
      title: 'CCTV Installation & Maintenance',
      summary:
        'HD & 4K IP surveillance with weatherproof coastal enclosures, NVR recording, and encrypted smartphone remote viewing.',
      icon: 'videocam',
    },
    {
      id: 'f-software',
      deptId: 'software',
      department: 'Software Engineering',
      title: 'Websites, Web Apps & E-Commerce',
      summary:
        'Custom Angular & Spring Boot web platforms, online stores, business management systems, and technical SEO built to scale.',
      icon: 'code',
    },
    {
      id: 'f-kra',
      deptId: 'operations',
      department: 'Operations',
      title: 'KRA, eCitizen, HELB, SHA & NSSF',
      summary:
        'Accurate, confidential processing for KRA iTax returns, Tax Compliance Certificates, and essential Kenyan digital portals.',
      icon: 'account_balance',
    },
    {
      id: 'f-docs',
      deptId: 'operations',
      department: 'Operations',
      title: 'Cyber Services & Document Operations',
      summary:
        'High-speed workstations, crisp printing, bulk photocopying, scanning, tender compilation, and business document preparation.',
      icon: 'local_printshop',
    },
    {
      id: 'f-branding',
      deptId: 'academy',
      department: 'Villa Tech Academy',
      title: 'Coding Bootcamps & Personal Branding',
      summary:
        'Full-Stack Angular + Java training paired with ATS-friendly CVs, LinkedIn optimization, and executive company profiles.',
      icon: 'school',
    },
  ];

  inquireService(serviceName: string): void {
    const data: InquiryDialogData = {
      mode: 'service',
      title: `Inquire: ${serviceName}`,
      subtitle: 'Tell us what you need and our Nyali team will respond promptly.',
      preselectedTopic: serviceName,
    };
    this.dialog.open(InquiryDialogComponent, {
      data,
      width: '92vw',
      maxWidth: '620px',
      panelClass: 'villa-dialog-panel',
    });
  }

  openAcademyInquiry(programName: string): void {
    const data: InquiryDialogData = {
      mode: 'course',
      title: `Academy Inquiry: ${programName}`,
      subtitle: 'In-person cohorts in Nyali, Mombasa & hybrid live labs.',
      preselectedTopic: programName,
    };
    this.dialog.open(InquiryDialogComponent, {
      data,
      width: '92vw',
      maxWidth: '620px',
      panelClass: 'villa-dialog-panel',
    });
  }
}
