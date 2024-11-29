import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { EffectsComponent } from './effects/effects.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderMainComponent,
    FooterComponent,
    EffectsComponent,
    HeaderMobileComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'my-personal-site';
  isMobile: boolean = false;

  getIsMobile(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 425;

    if (width < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}
