import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
//import { RegistroComponent } from './views/registro/registro.component';
// import { ProdutosComponent } from './Produtos/produtos.component';
//import { ProdutoNovoComponent } from './views/produto-novo/produto-novo.component';
//import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PecaNovaComponent } from './views/peca-nova/peca-nova.component';
;
import {ProdutosModule} from 'src/app/Produtos/produtos.module';

// import { ExemploPipeComponent } from './pipes/exemplo-pipe/exemplo-pipe.component';

import { CommonModule, registerLocaleData } from '@angular/common' 
import localePt from '@angular/common/locales/pt';
// import { MeuPipePipe } from './pipes/exemplo-pipe/pipes/meu-pipe.pipe';

// import { ExemploPipePuroComponent } from './models/exemplo-pipe-puro/exemplo-pipe-puro.component';

import { CalcPotenciaPipe } from './pipes/calc-potencia.pipe';
import { TabelaComponent } from './tabelas/tabela.component';


// import { ExemploPiperPuroComponent } from './pipes/exemplo-piper-puro/exemplo-piper-puro.component';
// import { ExemploProdutoPrecoPipe } from './pipes/exemplo-produto-preco.pipe';
// import { ExemploProdutoPrecoImpuroPipe } from './pipes/exemplo-produto-preco-impuro.pipe';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    //RegistroComponent,
    // ProdutosComponent,
    //ProdutoNovoComponent,
    //ProdutoDetalhesComponent,
    PecaNovaComponent,
    // ExemploPipeComponent,
    // MeuPipePipe,
    // ExemploPipePuroComponent,
    CalcPotenciaPipe,
    TabelaComponent,
    // ExemploPiperPuroComponent,
    // ExemploProdutoPrecoPipe,
    // ExemploProdutoPrecoImpuroPipe,
  ],
  imports: [
    ProdutosModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
