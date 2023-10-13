import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Lang {
  viewValue: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private langs: Lang[] = [];
  targetLang!: string;

  constructor(private translate: TranslateService) {}

  getLangs(): Lang[] {
    return this.langs;
  }

  addLang(lang: Lang | Lang[]) {
    if (Array.isArray(lang)) {
      this.langs = this.langs.concat(lang);
    } else {
      this.langs.push(lang);
    }
    this.translate.addLangs(this.langs.map(e => e.value));
    this.#getDefaultLang();
  }

  translateLanguageTo(lang: Lang) {
    try {
      this.translate.use(lang.value);
      this.targetLang = lang.value;
    } catch (error) {
      console.error(error);
    }
  }

  #getDefaultLang(): void {
    this.targetLang = this.langs.find(e => e.value === this.translate.getDefaultLang())?.value ?? this.langs[0].value;
  }
}
