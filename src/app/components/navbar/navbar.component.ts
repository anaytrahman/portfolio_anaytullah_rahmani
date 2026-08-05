import { CommonModule } from "@angular/common";
import { Component, HostListener, OnInit, signal } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ScrollSpyService } from "../../shared/services/scroll-spy.service";
import { NAV_LINKS } from "../../shared/data/portfolio-data";
import { FileDownloadService } from "../../shared/services/file-download.service";
import { ThemeService } from "../../shared/services/theme.service";
import { APP_Logo } from "../../shared/file-data/files-data";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
 
})
export class NavbarComponent implements OnInit {
  readonly navLinks = NAV_LINKS;
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);
  public APP_Logo = APP_Logo;
  constructor(
    public scrollSpy: ScrollSpyService,
    public themeService: ThemeService,
    private _fileDownloadService: FileDownloadService,
    private _router: Router,
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.syncActiveSectionFromRoute();
      }
    });
  }

  ngOnInit(): void {
    this.clearHash();
    this.syncActiveSectionFromRoute();
    this.scrollSpy.observeSections(this.navLinks.map((link) => link.fragment));
    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrolledState();
  }

  private updateScrolledState(): void {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      (document.scrollingElement ? document.scrollingElement.scrollTop : 0) ||
      0;

    const scrolled = scrollTop > 0;
    this.isScrolled.set(scrolled);
    console.debug('Navbar scrollTop:', scrollTop, 'scrolled:', scrolled);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToSection(fragment: string): void {
    this.closeMenu();
    this.clearHash();
    this.scrollSpy.setActiveSection(fragment);
    this._router.navigate([`/${fragment}`]);

    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private clearHash(): void {
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  }

  private syncActiveSectionFromRoute(): void {
    const path = this._router.url.split('/').filter(Boolean)[0] || 'home';
    this.scrollSpy.setActiveSection(path);
  }

  isActive(fragment: string): boolean {
    return this.scrollSpy.activeSection() === fragment;
  }

  /**download resume */
  downloadResume(): void {
    this._fileDownloadService.downloadResume();
  }
}
