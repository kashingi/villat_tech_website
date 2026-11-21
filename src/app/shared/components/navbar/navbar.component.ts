import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SITE_CONFIG, buildWhatsAppUrl } from '../../../core/config/site.config';

interface NavItem {
  label: string;
  route: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <header
      class="sticky top-0 z-50 transition-all duration-300"
      [class]="
        scrolled()
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-slate-900/5 border-b border-slate-200/80'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60'
      "
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-18 items-center justify-between gap-4">
          <!-- Brand Logo -->
          <a
            routerLink="/"
            (click)="closeMenu()"
            class="group flex items-center gap-3 focus:outline-none"
            aria-label="Villa Tech Solutions Limited Home"
          >
            <div
              class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white shadow-sm ring-1 ring-sky-400/30 transition-transform duration-300 group-hover:scale-105"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8L14.5 25H17.5L26 8H21.8L16 20.1L10.2 8H6Z"
                  fill="url(#vtGrad)"
                />
                <circle cx="16" cy="7.5" r="2.2" fill="#38BDF8" />
                <defs>
                  <linearGradient
                    id="vtGrad"
                    x1="6"
                    y1="8"
                    x2="26"
                    y2="25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#38BDF8" />
                    <stop offset="1" stop-color="#0284C7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="leading-tight">
              <span
                class="block font-display text-base font-extrabold tracking-tight text-slate-950 sm:text-lg"
              >
                Villa Tech
              </span>
              <span
                class="block text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700"
              >
                Solutions Limited
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex lg:items-center lg:gap-1" aria-label="Main navigation">
            @for (item of navItems; track item.route) {
              <a
                [routerLink]="item.route"
                routerLinkActive="bg-sky-50 text-sky-700 font-semibold"
                [routerLinkActiveOptions]="{ exact: !!item.exact }"
                class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- Desktop CTAs -->
          <div class="hidden lg:flex lg:items-center lg:gap-3">
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3.5 py-2 text-sm font-semibold text-emerald-700 transition-all hover:border-emerald-300 hover:bg-emerald-100"
            >
              <mat-icon class="!h-4 !w-4 !text-[16px] leading-none">chat</mat-icon>
              <span>WhatsApp</span>
            </a>
            <a
              routerLink="/contact"
              class="inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <mat-icon class="!h-4 !w-4 !text-[16px] leading-none">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-label="Toggle navigation menu"
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          >
            <mat-icon>{{ mobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (mobileMenuOpen()) {
        <div
          class="border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl lg:hidden"
        >
          <nav class="flex flex-col gap-1" aria-label="Mobile navigation">
            @for (item of navItems; track item.route) {
              <a
                [routerLink]="item.route"
                routerLinkActive="bg-sky-50 text-sky-700 font-semibold"
                [routerLinkActiveOptions]="{ exact: !!item.exact }"
                (click)="closeMenu()"
                class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                <span>{{ item.label }}</span>
                <mat-icon class="!h-4 !w-4 !text-[16px] text-slate-400">chevron_right</mat-icon>
              </a>
            }
          </nav>

          <div class="mt-4 grid grid-cols-1 gap-2.5 border-t border-slate-100 pt-4 sm:grid-cols-2">
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              (click)="closeMenu()"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
            >
              <mat-icon class="!h-4 !w-4 !text-[18px]">chat</mat-icon>
              <span>WhatsApp Us</span>
            </a>
            <a
              routerLink="/contact"
              (click)="closeMenu()"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
            >
              <span>Request a Quote</span>
              <mat-icon class="!h-4 !w-4 !text-[18px]">arrow_forward</mat-icon>
            </a>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 px-1 text-xs text-slate-500">
            <span class="inline-flex items-center gap-1">
              <mat-icon class="!h-3.5 !w-3.5 !text-[14px] text-sky-600">location_on</mat-icon>
              {{ siteConfig.location.area }}, {{ siteConfig.location.city }}
            </span>
            <span class="inline-flex items-center gap-1">
              <mat-icon class="!h-3.5 !w-3.5 !text-[14px] text-sky-600">call</mat-icon>
              {{ siteConfig.contact.phoneDisplay }}
            </span>
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  readonly siteConfig = SITE_CONFIG;
  readonly whatsappUrl = buildWhatsAppUrl();
  readonly mobileMenuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/', exact: true },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Academy', route: '/academy' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.mobileMenuOpen()) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
