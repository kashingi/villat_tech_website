import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SITE_CONFIG, buildWhatsAppUrl } from '../../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <footer class="border-t border-navy-950/15 bg-brand-gold text-navy-950">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <!-- Brand Column -->
          <div class="lg:col-span-4">
            <a routerLink="/" class="inline-flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 ring-1 ring-navy-950/20"
              >
                <svg class="h-6 w-6" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M6 8L14.5 25H17.5L26 8H21.8L16 20.1L10.2 8H6Z" fill="#E4A838" />
                  <circle cx="16" cy="7.5" r="2.2" fill="#FDE68A" />
                </svg>
              </div>
              <div class="leading-tight">
                <span class="block font-display text-lg font-bold text-navy-950">
                  Villa Tech
                </span>
                <span class="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-950/90">
                  Solutions Limited
                </span>
              </div>
            </a>

            <p class="mt-4 max-w-sm text-sm leading-relaxed text-navy-950/90">
              {{ siteConfig.tagline }}
            </p>

            <div
              class="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-950/20 bg-navy-950/10 px-3.5 py-1.5 text-xs font-medium text-navy-950"
            >
              <mat-icon class="!h-4 !w-4 !text-[15px] text-navy-950">location_on</mat-icon>
              <span>{{ siteConfig.location.area }}, {{ siteConfig.location.city }}, {{ siteConfig.location.country }}</span>
            </div>

            <!-- Social Links -->
            <div class="mt-6 flex flex-wrap items-center gap-2.5">
              @for (social of siteConfig.socials; track social.platform) {
                <a
                  [href]="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="social.label"
                  class="inline-flex h-9 items-center justify-center rounded-lg border border-navy-950/20 bg-navy-950/10 px-3 text-xs font-semibold text-navy-950 transition-all hover:border-navy-950 hover:bg-navy-950 hover:text-brand-gold"
                >
                  {{ social.label }}
                </a>
              }
            </div>
          </div>

          <!-- Company Links -->
          <div class="lg:col-span-2">
            <h3 class="font-display text-sm font-bold uppercase tracking-wider text-navy-950">
              Company
            </h3>
            <ul class="mt-4 space-y-2.5 text-sm font-medium">
              <li>
                <a routerLink="/" class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4">Home</a>
              </li>
              <li>
                <a routerLink="/about" class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4">About Us</a>
              </li>
              <li>
                <a routerLink="/services" class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4">All Services</a>
              </li>
              <li>
                <a routerLink="/portfolio" class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4">Portfolio</a>
              </li>
              <li>
                <a routerLink="/blog" class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4">Blog & Insights</a>
              </li>
              <li>
                <a routerLink="/contact" class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4">Contact Us</a>
              </li>
            </ul>
          </div>

          <!-- Departments Links -->
          <div class="lg:col-span-3">
            <h3 class="font-display text-sm font-bold uppercase tracking-wider text-navy-950">
              Departments
            </h3>
            <ul class="mt-4 space-y-2.5 text-sm font-medium">
              <li>
                <a
                  routerLink="/services"
                  fragment="networking"
                  class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  Networking, Wi-Fi & CCTV
                </a>
              </li>
              <li>
                <a
                  routerLink="/services"
                  fragment="operations"
                  class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  Operations, Cyber & KRA/eCitizen
                </a>
              </li>
              <li>
                <a
                  routerLink="/services"
                  fragment="software"
                  class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  Software Engineering & SEO
                </a>
              </li>
              <li>
                <a
                  routerLink="/academy"
                  class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  Villa Tech Academy (Coding Tracks)
                </a>
              </li>
              <li>
                <a
                  routerLink="/academy"
                  fragment="career-services"
                  class="text-navy-950/90 transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  Personal Branding & ATS CVs
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Details -->
          <div class="lg:col-span-3">
            <h3 class="font-display text-sm font-bold uppercase tracking-wider text-navy-950">
              Get in Touch
            </h3>
            <ul class="mt-4 space-y-3 text-sm font-medium text-navy-950/90">
              <li class="flex items-start gap-2.5">
                <mat-icon class="!h-4 !w-4 !text-[18px] mt-0.5 shrink-0 text-navy-950">place</mat-icon>
                <span>{{ siteConfig.location.fullAddress }}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <mat-icon class="!h-4 !w-4 !text-[18px] shrink-0 text-navy-950">call</mat-icon>
                <a
                  [href]="'tel:' + siteConfig.contact.phoneHref"
                  class="transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  {{ siteConfig.contact.phoneDisplay }}
                </a>
              </li>
              <li class="flex items-center gap-2.5">
                <mat-icon class="!h-4 !w-4 !text-[18px] shrink-0 text-navy-950">mail</mat-icon>
                <a
                  [href]="'mailto:' + siteConfig.contact.email"
                  class="break-all transition-colors hover:text-navy-950 hover:underline underline-offset-4"
                >
                  {{ siteConfig.contact.email }}
                </a>
              </li>
            </ul>

            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-900"
            >
              <mat-icon class="!h-4 !w-4 !text-[18px] text-brand-gold">chat</mat-icon>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-950/15 pt-8 text-xs font-medium text-navy-950/90 sm:flex-row"
        >
          <p>
            &copy; {{ currentYear }} {{ siteConfig.companyName }}. All rights reserved.
          </p>
          <p>
            Nyali, Mombasa County, Kenya &middot; Engineered for modern businesses & learners.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly siteConfig = SITE_CONFIG;
  readonly whatsappUrl = buildWhatsAppUrl();
  readonly currentYear = new Date().getFullYear();
}
