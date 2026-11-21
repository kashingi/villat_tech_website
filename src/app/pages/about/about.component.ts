import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SITE_CONFIG } from '../../core/config/site.config';
import { COMPANY_STATS, CORE_VALUES, WHY_CHOOSE_US } from '../../core/data/company.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatIconModule, SectionHeaderComponent, CtaBannerComponent],
  template: `
    <!-- PAGE HERO -->
    <section class="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-50"></div>
      <div
        class="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
          >
            About Villa Tech Solutions Limited
          </span>
          <h1 class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Engineering Reliable Connectivity, Digital Products &amp; Tech Talent in Mombasa
          </h1>
          <p class="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Based in Nyali, Mombasa County, Kenya, we partner with corporate organizations, growing
            SMEs, institutions, and ambitious learners to turn modern technology into everyday
            competitive advantage.
          </p>
        </div>
      </div>
    </section>

    <!-- COMPANY BACKGROUND -->
    <section class="border-b border-slate-200/80 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <app-section-header
              eyebrow="Company Background"
              title="Built to Close the Gap Between Everyday Digital Needs & Enterprise Engineering"
            />
            <div class="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                <strong class="font-semibold text-slate-900">{{ siteConfig.companyName }}</strong>
                was established in <strong class="font-semibold text-slate-900">Nyali, Mombasa County</strong>
                with a clear conviction: Kenyan businesses and individuals deserve one dependable
                technology company capable of handling both physical infrastructure and modern
                digital innovation at an uncompromising standard.
              </p>
              <p>
                Too often, organizations have to coordinate separate vendors for office Wi-Fi, CCTV
                security, business compliance operations, and custom software — leading to fragmented
                support and costly downtime. We unified these disciplines into four dedicated
                departments: <strong class="text-slate-800">Networking</strong>,
                <strong class="text-slate-800">Operations</strong>,
                <strong class="text-slate-800">Software Engineering</strong>, and our
                <strong class="text-slate-800">Knowledge Department (Villa Tech Academy)</strong>.
              </p>
              <p>
                Today, we serve hospitality properties, logistics enterprises, clinics, estates,
                SMEs, and aspiring software developers — combining practical coastal accessibility
                with international engineering craftsmanship.
              </p>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              @for (stat of stats; track stat.label) {
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p class="font-display text-2xl font-extrabold text-navy-900">{{ stat.value }}</p>
                  <p class="mt-1 text-xs leading-snug text-slate-600">{{ stat.label }}</p>
                </div>
              }
            </div>
          </div>

          <div class="space-y-4 lg:col-span-6">
            <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/5">
              <img
                src="images/hero-tech.jpg"
                alt="Villa Tech Solutions studio"
                class="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src="images/operations-hub.jpg"
                  alt="Villa Tech digital operations studio"
                  loading="lazy"
                  class="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src="images/software-project.jpg"
                  alt="Villa Tech software engineering delivery"
                  loading="lazy"
                  class="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION & VISION -->
    <section class="bg-slate-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-header
          eyebrow="Purpose & Direction"
          title="Our Mission & Vision"
          align="center"
        />

        <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <!-- Mission -->
          <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs sm:p-10">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700"
            >
              <mat-icon class="!h-6 !w-6 !text-[24px]">flag</mat-icon>
            </div>
            <h3 class="mt-6 font-display text-2xl font-extrabold text-slate-950">Our Mission</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-600">
              To deliver reliable, secure, and modern technology services — spanning enterprise
              networking, digital operations, custom software engineering, and hands-on developer
              training — that simplify daily work, accelerate business growth, and equip individuals
              for the digital economy.
            </p>
          </div>

          <!-- Vision -->
          <div class="rounded-3xl border border-sky-200/80 bg-navy-900 p-8 text-white shadow-lg sm:p-10">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300 ring-1 ring-sky-400/30"
            >
              <mat-icon class="!h-6 !w-6 !text-[24px]">visibility</mat-icon>
            </div>
            <h3 class="mt-6 font-display text-2xl font-extrabold text-white">Our Vision</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-300">
              To be the premier technology engineering and digital talent powerhouse on the Kenyan
              Coast and across East Africa — recognized for uncompromising quality, trusted client
              relationships, and world-class software professionals trained through Villa Tech
              Academy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE VALUES -->
    <section class="border-y border-slate-200/80 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-header
          eyebrow="What Guides Us"
          title="Our Core Values"
          subtitle="Six principles reflected in every network cable we terminate, every line of code we ship, and every student we mentor."
          align="center"
        />

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (value of coreValues; track value.title) {
            <div
              class="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 transition-all hover:border-sky-200 hover:bg-white hover:shadow-md"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-sky-300"
              >
                <mat-icon>{{ value.icon }}</mat-icon>
              </div>
              <h3 class="mt-4 font-display text-lg font-bold text-slate-950">{{ value.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ value.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE VILLA TECH SOLUTIONS -->
    <section class="bg-slate-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <app-section-header
              eyebrow="The Villa Tech Advantage"
              title="Why Choose Villa Tech Solutions?"
              subtitle="Clients stay with us because we combine engineering depth with approachable, accountable local service."
            />

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                routerLink="/services"
                class="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                <span>Explore Services</span>
                <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
              </a>
              <a
                routerLink="/portfolio"
                class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-300 hover:text-sky-700"
              >
                <span>See Our Portfolio</span>
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            @for (reason of whyChooseUs; track reason.title) {
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-200/80"
                >
                  <mat-icon>{{ reason.icon }}</mat-icon>
                </div>
                <h3 class="mt-4 font-display text-base font-bold text-slate-950">
                  {{ reason.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ reason.description }}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <app-cta-banner
      eyebrow="Partner With Us"
      title="Let’s Discuss Your Next Technology Initiative"
      description="Whether you are upgrading an office network in Nyali, commissioning a custom web application, or enrolling at Villa Tech Academy, we are ready to help."
    />
  `,
})
export class AboutComponent {
  readonly siteConfig = SITE_CONFIG;
  readonly stats = COMPANY_STATS;
  readonly coreValues = CORE_VALUES;
  readonly whyChooseUs = WHY_CHOOSE_US;
}
