import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly theme = signal<ThemeMode>('dark');

  constructor() {
    const storedTheme = this.getStoredTheme();
    const preferredTheme = storedTheme ?? this.getPreferredTheme();

    this.setTheme(preferredTheme);
  }

  setTheme(value: ThemeMode): void {
    this.theme.set(value);
    document.documentElement.dataset['theme'] = value;
    localStorage.setItem(STORAGE_KEY, value);
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private getStoredTheme(): ThemeMode | null {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  }

  private getPreferredTheme(): ThemeMode {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
