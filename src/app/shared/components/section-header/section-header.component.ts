import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div
      [class]="
        align() === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-3xl text-left'
      "
    >
      @if (eyebrow()) {
        <span
          class="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
          [class]="
            dark()
              ? 'border-sky-400/30 bg-sky-500/10 text-sky-300'
              : 'border-sky-200 bg-sky-50 text-sky-700'
          "
        >
          <span
            class="h-1.5 w-1.5 rounded-full"
            [class]="dark() ? 'bg-sky-400' : 'bg-sky-600'"
          ></span>
          {{ eyebrow() }}
        </span>
      }

      <h2
        class="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
        [class]="dark() ? 'text-white' : 'text-slate-950'"
      >
        {{ title() }}
      </h2>

      @if (subtitle()) {
        <p
          class="mt-4 text-base leading-relaxed sm:text-lg"
          [class]="dark() ? 'text-slate-300' : 'text-slate-600'"
        >
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly align = input<'left' | 'center'>('left');
  readonly dark = input<boolean>(false);
}
