import { Component, inject, input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioProject } from '../../../core/models/site.models';
import { ProjectDetailDialogComponent } from '../project-detail-dialog/project-detail-dialog.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  template: `
    <article
      class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5"
    >
      <!-- Thumbnail -->
      <div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          [src]="project().image"
          [alt]="project().title"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent opacity-80"
        ></div>

        <div class="absolute left-4 top-4 flex items-center gap-2">
          <span
            class="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 shadow-xs backdrop-blur-sm"
          >
            {{ project().category }}
          </span>
        </div>

        <span
          class="absolute bottom-3 left-4 inline-flex items-center gap-1 text-xs font-medium text-slate-200"
        >
          <mat-icon class="!h-3.5 !w-3.5 !text-[14px] text-sky-400">location_on</mat-icon>
          {{ project().location }}
        </span>
      </div>

      <!-- Content -->
      <div class="flex flex-1 flex-col p-6">
        <div class="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
          <span>{{ project().client }}</span>
          <span>{{ project().year }}</span>
        </div>

        <h3
          class="mt-2 font-display text-lg font-bold text-slate-950 transition-colors group-hover:text-sky-700"
        >
          {{ project().title }}
        </h3>

        <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {{ project().summary }}
        </p>

        <div class="mt-4 flex flex-wrap gap-1.5">
          @for (tech of project().technologies.slice(0, 4); track tech) {
            <span
              class="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600"
            >
              {{ tech }}
            </span>
          }
        </div>

        <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            type="button"
            (click)="openDetails()"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-700"
          >
            <span>View Case Study</span>
            <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_forward</mat-icon>
          </button>

          @if (project().liveUrl) {
            <a
              [href]="project().liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800"
            >
              <span>Live Link</span>
              <mat-icon class="!h-3.5 !w-3.5 !text-[15px]">open_in_new</mat-icon>
            </a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<PortfolioProject>();
  private readonly dialog = inject(MatDialog);

  openDetails(): void {
    this.dialog.open(ProjectDetailDialogComponent, {
      data: this.project(),
      width: '92vw',
      maxWidth: '760px',
      panelClass: 'villa-dialog-panel',
    });
  }
}
