import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  languageArray: { title: string, value: string }[] = [
    { title: 'English', value: 'en' },
    { title: 'French', value: 'fr' },
    { title: 'Hindi', value: 'hin' }
  ];
  public translate = inject(TranslateService)
  constructor() {
    this.translate.setDefaultLang('en');
  }
  // change language
  changeLang(language: string) {
    this.translate.use(language)
  }
}
