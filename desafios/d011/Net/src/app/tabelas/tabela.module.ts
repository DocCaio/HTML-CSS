import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TabelaRoutingModule } from './tebela-routing.module';

import { TabelaService } from 'src/app/services/tebela.service';

import { TabelaComponent } from './tabela.component';
import { CursoDetalhesComponent } from './tebela-detalhes/curso-detalhes.component';
import { TabelaNovoComponent } from './tabela-novo/curso-novo.component';
import { TabelaEditarComponent } from './tabela-editar/curso-editar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabelaRoutingModule
    ],
    exports: [],
    declarations: [
        TabelaComponent,
        CursoDetalhesComponent,
        TabelaNovoComponent,
        TabelaEditarComponent
    ],
    providers: [
        TabelaService
    ],
})
export class CursosModule { }