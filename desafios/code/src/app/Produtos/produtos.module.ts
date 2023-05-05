import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { ProdutosComponent } from './produtos.component';
import { RegistroComponent } from './registro/registro.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { HeaderComponent } from '../componentes/header/header.component';




@NgModule({
    imports: [
        ProdutosRoutingModule,
        FormsModule,
        CommonModule
        
    ],
    exports: [],
    declarations: [
        ProdutosComponent,
        RegistroComponent,
        ProdutoDetalhesComponent,
        ProdutoNovoComponent,
        // HeaderComponent
    ],
    providers: [],
})
export class ProdutosModule { }

