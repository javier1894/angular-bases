import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

// CommonModule -> incluye las directivas y pipes comunes que se utilizan con frecuencia en las plantillas de los componentes, como ngIf, ngFor, etc.

@NgModule({
  imports: [CommonModule],
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}
