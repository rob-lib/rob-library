import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from '@shared/components/wiki/wiki.component';
import { WikiData } from '@shared/components/wiki/models/wiki-data.model';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, WikiComponent],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  readonly template: WikiData = {
    title: 'rob-code-box',
    tab: [
      {
        label: 'Overview',
        description:
          'Crea un cuadro de texto en el que se puede introducir texto plano y tiene un boton de para copiarlo en el portapapeles',
        exampleCode: {
          text: '<rob-code-box> Contenido de ejemplo </rob-code-box>',
        },
      },
      {
        label: 'API',
        title: 'API reference for RobLib CodeBox',
        exampleCode: {
          text: "import { CodeBoxModule } from '@robLib/modules'",
          width: 'max-content',
        },
      },
    ],
  };
}
