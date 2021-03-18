import { ModelNavigation } from './navigationInterface';

export const navigation: ModelNavigation[] = [

  {
    secao: 'Dashboard',
    rolesPermitidos: [1, 2],
    itens:
      [
        { nome: 'Dashboard', icone: 'dashboard_customize', rolesPermitidos: [1, 2, 3], rota: 'dash'}
      ]

  },

  {
    secao: 'Anúncios',
    rolesPermitidos: [1, 2],
    itens:
      [
        { nome: 'Ver anúncios', icone: 'fact_check', rolesPermitidos: [1, 2, 3], rota: 'ver-anuncios'},
        { nome: 'Propostas', icone: 'fact_check', rolesPermitidos: [1, 2, 3], rota: 'propostas'},
        { nome: 'Meus anúncios', icone: 'grading', rolesPermitidos: [1, 2, 3], rota: 'meus-anuncios'},
        { nome: 'Configurar promoções', icone: 'money_off_csred', rolesPermitidos: [1, 2, 3], rota: ''},
      ]

  },

  {
    secao: 'Usuario',
    rolesPermitidos: [1, 2],
    itens:
      [
        { nome: 'Conta', icone: 'account_box', rolesPermitidos: [1, 2, 3], rota: 'editar-conta'},
        { nome: 'Funcionários', icone: 'supervisor_account', rolesPermitidos: [1, 2, 3], rota: ''},
        { nome: 'Clientes', icone: 'shopping_basket', rolesPermitidos: [1, 2, 3], rota: ''},
      ]

  },

  {
    secao: 'Configurações',
    rolesPermitidos: [1, 2],
    itens:
      [
        { nome: 'Conta bancária', icone: 'account_balance', rolesPermitidos: [1, 2, 3], rota: 'config-pagamentos'},
        { nome: 'Geral', icone: 'settings', rolesPermitidos: [1, 2, 3], rota: ''},
      ]

  }



]
