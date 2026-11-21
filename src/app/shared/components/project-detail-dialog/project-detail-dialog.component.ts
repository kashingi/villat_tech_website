import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioProject } from '../../../core/models/site.models';
import { buildWhatsAppUrl } from '../../../core/config/site.config';

@Component({
  selector: 'app-project-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  template: `
    <div class="max-h-[90vh] overflow-y-auto bg-white">
      <div class="relative aspect-[16/9] w-full overflow-hidden bg-navy-900">
        <img
          [src]="project.image"
          [alt]="project.title"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"
        ></div>

        <button
          type="button"
          (click)="close()"
          aria-label="Close project details"
          class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy-950/75 text-white backdrop-blur-md transition-colors hover:bg-navy-900"
        >
          <mat-icon>close</mat-icon>
        </button>

        <div class="absolute bottom-5 left-6 right-6 text-white">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="rounded-full bg-sky-500/90 px-3 py-1 text-xs font-semibold text-white"
            >
              {{ project.category }}
            </span>
            <span
              class="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur-sm"
            >
              {{ project.location }} &middot; {{ project.year }}
            </span>
          </div>
          <h2 class="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
            {{ project.title }}
          </h2>
        </div>
      </div>

      <div class="p-6 sm:p-8">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-slate-100 pb-4 text-sm text-slate-600">
          <span class="inline-flex items-center gap-1.5">
            <mat-icon class="!h-4 !w-4 !text-[16px] text-sky-600">business</mat-icon>
            <strong class="text-slate-900">Client:</strong> {{ project.client }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <mat-icon class="!h-4 !w-4 !text-[16px] text-sky-600">location_on</mat-icon>
            <strong class="text-slate-900">Location:</strong> {{ project.location }}
          </span>
        </div>

        <p class="mt-5 text-base leading-relaxed text-slate-700">
          {{ project.description }}
        </p>

        <div class="mt-6">
          <h3 class="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
            Key Outcomes & Highlights
          </h3>
          <ul class="mt-3 space-y-2.5">
            @for (item of project.highlights; track item) {
              <li class="flex items-start gap-2.5 text-sm text-slate-700">
                <mat-icon class="!h-5 !w-5 !text-[18px] mt-0.5 shrink-0 text-emerald-600">
                  check_circle
                </mat-icon>
                <span>{{ item }}</span>
              </li>
            }
          </ul>
        </div>

        <div class="mt-6">
          <h3 class="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
            Technologies & Equipment
          </h3>
          <div class="mt-3 flex flex-wrap gap-2">
            @for (tech of project.technologies; track tech) {
              <span
                class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-700"
              >
                {{ tech }}
              </span>
            }
          </div>
        </div>

        <div class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              (click)="requestSimilar()"
              class="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-gold hover:text-navy-950"
            >
              <span>Request Similar Solution</span>
              <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
            </button>

            <a
              [href]="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
            >
              <mat-icon class="!h-4 !w-4 !text-[17px]">chat</mat-icon>
              <span>Discuss on WhatsApp</span>
            </a>
          </div>

          @if (project.liveUrl) {
            <a
              [href]="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-800"
            >
              <span>Visit Live Project</span>
              <mat-icon class="!h-4 !w-4 !text-[17px]">open_in_new</mat-icon>
            </a>
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectDetailDialogComponent {
  readonly project = inject<PortfolioProject>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<ProjectDetailDialogComponent>);
  private readonly router = inject(Router);

  readonly whatsappLink = buildWhatsAppUrl(
    `Hello Villa Tech Solutions! I saw your "${this.project.title}" project and would like to discuss a similar solution.`
  );

  requestSimilar(): void {
    this.dialogRef.close();
    this.router.navigate(['/contact'], {
      queryParams: { topic: `${this.project.category} Project` },
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
