import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
  [
    { path: 'dash', loadChildren: () => import('./pages/dashboard/dash/dash.module').then(m => m.DashModule) },
  { path: 'propostas', loadChildren: () => import('./pages/anuncios/propostas/propostas.module').then(m => m.PropostasModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'meus-anuncios', loadChildren: () => import('./pages/anuncios/meus-anuncios/meus-anuncios.module').then(m => m.MeusAnunciosModule) },
  { path: 'promocoes', loadChildren: () => import('./pages/anuncios/promocoes/promocoes.module').then(m => m.PromocoesModule) },
  { path: 'editar-conta', loadChildren: () => import('./pages/conta/editar-conta/editar-conta.module').then(m => m.EditarContaModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'config-pagamentos', loadChildren: () => import('./pages/conta-bancaria/config-pagamentos/config-pagamentos.module').then(m => m.ConfigPagamentosModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'ver-anuncios', loadChildren: () => import('./pages/anuncios/ver-anuncios/ver-anuncios/ver-anuncios.module').then(m => m.VerAnunciosModule) },
  { path: 'login', loadChildren: () => import('./pages/usuario/login/login.module').then(m => m.LoginModule) },
  { path: 'cadastro', loadChildren: () => import('./pages/usuario/cadastro/cadastro.module').then(m => m.CadastroModule) },
  { path: 'esqueci-senha', loadChildren: () => import('./pages/usuario/esqueci-senha/esqueci-senha.module').then(m => m.EsqueciSenhaModule) },
  { path: 'reset-senha', loadChildren: () => import('./pages/usuario/reset-senha/reset-senha.module').then(m => m.ResetSenhaModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
