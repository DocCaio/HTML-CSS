import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { RegistroComponent } from './registro/registro.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const produtosRoutes: Routes = [
    {
     path: 'Produtos',
     component: ProdutosComponent
    },
    {
     path: 'aluno-novo',
     component: RegistroComponent,
     canActivate: [AuthGuardService]
    },
    {
     path: 'registro',
     component: RegistroComponent
    },
    {
     path: 'produto-detalhes/:id',
     component: ProdutoDetalhesComponent
    },
    {
     path: 'aluno-editar/:id',
     component: ProdutoNovoComponent,
     canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(produtosRoutes) ],
    exports: [ RouterModule ],
})
export class ProdutosRoutingModule { }
