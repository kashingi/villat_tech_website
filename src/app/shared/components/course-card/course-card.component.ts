import { Component, inject, input, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CourseProgram } from '../../../core/models/site.models';
import { buildWhatsAppUrl } from '../../../core/config/site.config';
import {
  InquiryDialogComponent,
  InquiryDialogData,
} from '../inquiry-dialog/inquiry-dialog.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  template: `
    <article
      class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-slate-900/5"
    >
      <!-- Top Header Band -->
      <div class="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-sky-50/40 p-6">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span
            class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            [class]="levelBadgeClass()"
          >
            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">{{ course().icon }}</mat-icon>
            {{ course().level }}
          </span>
          <span
            class="inline-flex items-center gap-1 font-mono text-xs font-semibold text-slate-600"
          >
            <mat-icon class="!h-3.5 !w-3.5 !text-[15px] text-brand-gold">schedule</mat-icon>
            {{ course().duration }}
          </span>
        </div>

        <h3 class="mt-4 font-display text-xl font-extrabold text-slate-950">
          {{ course().title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          {{ course().summary }}
        </p>

        <p class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <mat-icon class="!h-4 !w-4 !text-[15px] text-brand-gold">location_city</mat-icon>
          {{ course().format }}
        </p>
      </div>

      <!-- Body -->
      <div class="flex flex-1 flex-col p-6">
        <p class="text-sm leading-relaxed text-slate-600">
          {{ course().description }}
        </p>

        <!-- Technologies -->
        <div class="mt-5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">
            Technologies & Skills Covered
          </h4>
          <div class="mt-2.5 flex flex-wrap gap-1.5">
            @for (tech of course().technologies; track tech) {
              <span
                class="rounded-md border border-sky-200/80 bg-sky-50/70 px-2.5 py-1 font-mono text-[11px] font-medium text-sky-900"
              >
                {{ tech }}
              </span>
            }
          </div>
        </div>

        <!-- Learning Topics Toggle / List -->
        <div class="mt-5 flex-1">
          <button
            type="button"
            (click)="toggleTopics()"
            class="flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:bg-slate-100"
          >
            <span>Learning Topics & Curriculum ({{ course().topics.length }})</span>
            <mat-icon
              class="!h-4 !w-4 !text-[18px] text-slate-500 transition-transform duration-200"
              [class.rotate-180]="topicsExpanded()"
            >
              expand_more
            </mat-icon>
          </button>

          @if (topicsExpanded()) {
            <ul class="mt-3 space-y-2 rounded-xl border border-slate-100 bg-slate-50/40 p-4">
              @for (topic of course().topics; track topic) {
                <li class="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                  <mat-icon class="!h-4 !w-4 !text-[16px] mt-0.5 shrink-0 text-brand-gold">
                    check_circle
                  </mat-icon>
                  <span>{{ topic }}</span>
                </li>
              }
            </ul>
          } @else {
            <ul class="mt-3 space-y-1.5">
              @for (outcome of course().outcomes; track outcome) {
                <li class="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                  <mat-icon class="!h-4 !w-4 !text-[15px] mt-0.5 shrink-0 text-brand-gold">
                    task_alt
                  </mat-icon>
                  <span>{{ outcome }}</span>
                </li>
              }
            </ul>
          }
        </div>

        <!-- Enrollment CTAs -->
        <div class="mt-6 flex flex-col gap-2.5 border-t border-slate-100 pt-5 sm:flex-row">
          <button
            type="button"
            (click)="openEnrollment()"
            class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-brand-gold hover:text-navy-950 active:scale-[0.99]"
          >
            <span>Enroll / Inquire</span>
            <mat-icon class="!h-4 !w-4 !text-[17px]">arrow_forward</mat-icon>
          </button>

          <a
            [href]="getCourseWhatsAppUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
          >
            <mat-icon class="!h-4 !w-4 !text-[17px]">chat</mat-icon>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  `,
})
export class CourseCardComponent {
  readonly course = input.required<CourseProgram>();
  readonly defaultExpanded = input<boolean>(false);

  private readonly dialog = inject(MatDialog);
  readonly topicsExpanded = signal(false);

  ngOnInit(): void {
    this.topicsExpanded.set(this.defaultExpanded());
  }

  toggleTopics(): void {
    this.topicsExpanded.update((v) => !v);
  }

  levelBadgeClass(): string {
    switch (this.course().level) {
      case 'Beginner':
        return 'bg-emerald-100 text-emerald-800';
      case 'Intermediate':
        return 'bg-sky-100 text-sky-800';
      case 'Career Track':
        return 'bg-navy-950 text-brand-gold';
      default:
        return 'bg-indigo-100 text-indigo-800';
    }
  }

  getCourseWhatsAppUrl(): string {
    return buildWhatsAppUrl(
      `Hello Villa Tech Academy! I would like to enroll or get fee & cohort details for the "${this.course().title}" program.`
    );
  }

  openEnrollment(): void {
    const data: InquiryDialogData = {
      mode: 'course',
      title: `Enroll in ${this.course().title}`,
      subtitle: `${this.course().duration} · ${this.course().format}`,
      preselectedTopic: this.course().title,
    };

    this.dialog.open(InquiryDialogComponent, {
      data,
      width: '92vw',
      maxWidth: '620px',
      panelClass: 'villa-dialog-panel',
    });
  }
}
