import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { buildWhatsAppUrl } from '../../../core/config/site.config';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <section class="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-40"></div>
      <div
        class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-12 lg:flex-row lg:items-center"
        >
          <div class="max-w-2xl">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300"
            >
              {{ eyebrow() }}
            </span>
            <h2 class="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
              {{ title() }}
            </h2>
            <p class="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              {{ description() }}
            </p>
          </div>

          <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              [routerLink]="primaryRoute()"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-brand-gold/25 transition-all hover:bg-brand-gold-light active:scale-[0.98]"
            >
              <span>{{ primaryLabel() }}</span>
              <mat-icon class="!h-4 !w-4 !text-[18px]">arrow_forward</mat-icon>
            </a>

            <a
              [href]="getWhatsAppLink()"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-6 py-3.5 text-sm font-semibold text-emerald-200 transition-all hover:bg-emerald-500/25 hover:text-white"
            >
              <mat-icon class="!h-4 !w-4 !text-[18px]">chat</mat-icon>
              <span>{{ secondaryLabel() }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {
  readonly eyebrow = input<string>('Ready to Collaborate');
  readonly title = input<string>('Let’s Build Reliable Technology Together');
  readonly description = input<string>(
    'From enterprise Wi-Fi and CCTV in Nyali to custom web applications and Villa Tech Academy enrollments — speak directly with our team.'
  );
  readonly primaryLabel = input<string>('Contact Our Team');
  readonly primaryRoute = input<string>('/contact');
  readonly secondaryLabel = input<string>('WhatsApp Directly');
  readonly whatsappMessage = input<string | undefined>(undefined);

  getWhatsAppLink(): string {
    return buildWhatsAppUrl(this.whatsappMessage());
  }
}
