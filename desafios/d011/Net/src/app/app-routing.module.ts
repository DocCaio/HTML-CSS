import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
// import { LogComponent } from './views/log/log.component';
//import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';
//import { ProdutoNovoComponent } from './views/produto-novo/produto-novo.component';
import { ProdutosComponent } from './Produtos/produtos.component';
//import { RegistroComponent } from './views/registro/registro.component';
import { LoginComponent } from './views/login/login.component';
import { PecaNovaComponent } from './views/peca-nova/peca-nova.component';

// import { ExemploPipePuroImpuroComponent } from './pipes/exemplo-pipe/exemplo-pipe.component';
// import { ExemploPipeComponent } from './pipes/exemplo-pipe/exemplo-pipe.component';
// import { ExemploPipePuroComponent } from './pipes/exemplo-pipe/exemplo-pipe-puro/exemplo-pipe-puro.component';


  /*
  Isto é um pipe e não um componente para se definir uma rota para ele
  {
    path: '' ,
    component: ExemploPipeComponent
  },
  {
    path:'exemplo-pipe-puro',
    component: ExemploPipePuroComponent

  },
   {
    path: 'pipe-puro-imopuro' ,
    component: ExemploPipePuroImpuroComponent
   },   
  */
  /*
  {
    path: 'Log',
    component: LogComponent
  },
  */

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'PecaNovaComponent',
    component: PecaNovaComponent
  },
  //
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
