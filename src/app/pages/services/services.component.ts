import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DEPARTMENTS } from '../../core/data/departments.data';
import { DepartmentId } from '../../core/models/site.models';
import { buildWhatsAppUrl } from '../../core/config/site.config';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import {
  InquiryDialogComponent,
  InquiryDialogData,
} from '../../shared/components/inquiry-dialog/inquiry-dialog.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatDialogModule, CtaBannerComponent],
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
            Four Specialized Departments
          </span>
          <h1 class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Comprehensive Technology Services Built for Businesses &amp; Individuals
          </h1>
          <p class="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            From enterprise Wi-Fi and CCTV deployments in Nyali to KRA/eCitizen digital operations,
            custom Angular &amp; Spring Boot software engineering, and Villa Tech Academy training.
          </p>
        </div>

        <!-- Department Quick Filter Bar -->
        <div class="mt-10 flex flex-wrap gap-2.5">
          <button
            type="button"
            (click)="selectDepartment('all')"
            class="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all"
            [class]="
              activeFilter() === 'all'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            "
          >
            <mat-icon class="!h-4 !w-4 !text-[17px]">apps</mat-icon>
            <span>All Departments ({{ departments.length }})</span>
          </button>

          @for (dept of departments; track dept.id) {
            <button
              type="button"
              (click)="selectDepartment(dept.id)"
              class="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all"
              [class]="
                activeFilter() === dept.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              "
            >
              <mat-icon class="!h-4 !w-4 !text-[17px]">{{ dept.icon }}</mat-icon>
              <span>{{ dept.shortName }}</span>
            </button>
          }
        </div>
      </div>
    </section>

    <!-- DEPARTMENTS & SERVICES LISTING -->
    <div class="divide-y divide-slate-200/80">
      @for (dept of visibleDepartments(); track dept.id; let idx = $index) {
        <section
          [id]="dept.id"
          class="scroll-mt-24 py-20 sm:py-24"
          [class]="idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'"
        >
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Department Banner Header -->
            <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div class="lg:col-span-7">
                <div class="flex flex-wrap items-center gap-3">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    [class]="dept.badgeClass"
                  >
                    <mat-icon class="!h-3.5 !w-3.5 !text-[15px]">{{ dept.icon }}</mat-icon>
                    {{ dept.eyebrow }}
                  </span>
                  <span class="text-xs font-semibold text-slate-500">
                    {{ dept.services.length }} Core Service{{ dept.services.length > 1 ? 's' : '' }}
                  </span>
                </div>

                <h2 class="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
                  {{ dept.name }}
                </h2>
                <p class="mt-3 text-base font-medium text-sky-700">{{ dept.tagline }}</p>
                <p class="mt-3 text-base leading-relaxed text-slate-600">
                  {{ dept.description }}
                </p>

                <div class="mt-6 flex flex-wrap items-center gap-3">
                  @if (dept.id === 'academy') {
                    <a
                      routerLink="/academy"
                      class="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                    >
                      <span>Visit Villa Tech Academy Page</span>
                      <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
                    </a>
                  } @else {
                    <button
                      type="button"
                      (click)="openInquiry(dept.name)"
                      class="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                    >
                      <span>{{ dept.ctaLabel }}</span>
                      <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
                    </button>
                  }

                  <a
                    [href]="getDeptWhatsApp(dept.name)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                  >
                    <mat-icon class="!h-4 !w-4 !text-[17px]">chat</mat-icon>
                    <span>WhatsApp Department</span>
                  </a>
                </div>
              </div>

              <div class="lg:col-span-5">
                <div
                  class="overflow-hidden rounded-3xl border border-slate-200 bg-navy-900 shadow-lg shadow-slate-900/5"
                >
                  <img
                    [src]="dept.image"
                    [alt]="dept.name"
                    loading="lazy"
                    class="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <!-- Services Cards Grid -->
            <div
              class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
              [class.lg:grid-cols-3]="dept.services.length >= 3"
            >
              @for (service of dept.services; track service.id) {
                <article
                  class="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <div>
                    <div class="flex items-center justify-between gap-3">
                      <div
                        class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-xs"
                        [class]="dept.accentClass"
                      >
                        <mat-icon>{{ service.icon }}</mat-icon>
                      </div>
                      @if (service.featured) {
                        <span
                          class="rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700"
                        >
                          Popular
                        </span>
                      }
                    </div>

                    <h3 class="mt-5 font-display text-lg font-bold text-slate-950">
                      {{ service.title }}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                      {{ service.summary }}
                    </p>

                    <ul class="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      @for (del of service.deliverables; track del) {
                        <li class="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                          <mat-icon class="!h-4 !w-4 !text-[15px] mt-0.5 shrink-0 text-sky-600">
                            check_circle
                          </mat-icon>
                          <span>{{ del }}</span>
                        </li>
                      }
                    </ul>
                  </div>

                  <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    @if (dept.id === 'academy') {
                      <a
                        routerLink="/academy"
                        class="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-700"
                      >
                        <span>Explore Programs</span>
                        <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
                      </a>
                    } @else {
                      <button
                        type="button"
                        (click)="openInquiry(service.title)"
                        class="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-700"
                      >
                        <span>Inquire / Request Quote</span>
                        <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
                      </button>
                    }

                    <a
                      [href]="getDeptWhatsApp(service.title)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      <mat-icon class="!h-3.5 !w-3.5 !text-[15px]">chat</mat-icon>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </article>
              }
            </div>
          </div>
        </section>
      }
    </div>

    <app-cta-banner
      eyebrow="Need a Custom Scope?"
      title="Tell Us About Your Business or Personal Tech Requirement"
      description="Combine networking, CCTV, daily operations, or custom software engineering into a clean, cost-effective package tailored by our Nyali team."
      primaryLabel="Request Custom Proposal"
      primaryRoute="/contact"
    />
  `,
})
export class ServicesComponent {
  private readonly dialog = inject(MatDialog);
  readonly departments = DEPARTMENTS;
  readonly activeFilter = signal<'all' | DepartmentId>('all');

  readonly visibleDepartments = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.departments;
    }
    return this.departments.filter((d) => d.id === filter);
  });

  selectDepartment(id: 'all' | DepartmentId): void {
    this.activeFilter.set(id);
  }

  getDeptWhatsApp(topic: string): string {
    return buildWhatsAppUrl(
      `Hello Villa Tech Solutions Limited! I would like to inquire about ${topic}.`
    );
  }

  openInquiry(topic: string): void {
    const data: InquiryDialogData = {
      mode: 'service',
      title: `Service Inquiry: ${topic}`,
      subtitle: 'Receive a prompt response or schedule a site consultation in Mombasa.',
      preselectedTopic: topic,
    };
    this.dialog.open(InquiryDialogComponent, {
      data,
      width: '92vw',
      maxWidth: '620px',
      panelClass: 'villa-dialog-panel',
    });
  }
}
