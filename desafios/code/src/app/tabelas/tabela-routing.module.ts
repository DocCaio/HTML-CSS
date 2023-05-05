import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TabelaComponent } from './tabela.component';
import { TabelaNovoComponent } from './tabela-novo/tabela-novo.component';
import { TabelaDetalhesComponent } from './tabela-detalhes/tabela-detalhes.component';
import { TabelaEditarComponent } from './tabela-editar/tabela-editar.component';

const cursosRoutes: Routes = [
   /*
    { path: 'tabela', component: TabelaComponent },
    { path: 'tabela/novo', component: TabelaNovoComponent },
    { path: 'tabela/:id', component: TabelaDetalhesComponent },
    { path: 'tabela/:id/editar', component: TabelaEditarComponent }
     */
    { path: 'tabela', component: TabelaComponent, children: [
        { path: 'novo', component: TabelaNovoComponent },
        { path: ':id', component: TabelaDetalhesComponent },
        { path: ':id/editar', component: TabelaEditarComponent }
    ]}
    
];


@NgModule({
    imports: [ RouterModule.forChild(tabelaRoutes) ],
    exports: [ RouterModule ]
})
export class TabelaRoutingModule { }