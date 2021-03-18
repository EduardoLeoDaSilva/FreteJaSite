import { ModelNavigation } from './navigationInterface';

export const navigation: ModelNavigation[] = [

  {
    secao: 'Dashboard',
    rolesPermitidos: [1, 2],
    isVisible: true,
    itens:
      [
        { nome: 'Dashboard', icone: 'dashboard_customize', rolesPermitidos: [1, 2, 3], rota: 'dash', isVisible: true}
      ]

  },

  {
    secao: 'Anúncios',
    rolesPermitidos: [1, 2],
    isVisible:true,
    itens:
      [
        { nome: 'Ver anúncios', icone: 'fact_check', rolesPermitidos: [1, 2, 3], rota: 'ver-anuncios', isVisible: true},
        { nome: 'Propostas', icone: 'fact_check', rolesPermitidos: [1, 2, 3], rota: 'propostas', isVisible: true},
        { nome: 'Meus anúncios', icone: 'grading', rolesPermitidos: [1, 2, 3], rota: 'meus-anuncios', isVisible: true},
        { nome: 'Configurar promoções', icone: 'money_off_csred', rolesPermitidos: [1, 2, 3], rota: '', isVisible: false},
      ]

  },

  {
    secao: 'Usuario',
    rolesPermitidos: [1, 2],
    isVisible: true,
    itens:
      [
        { nome: 'Conta', icone: 'account_box', rolesPermitidos: [1, 2, 3], rota: 'editar-conta', isVisible: true},
        { nome: 'Funcionários', icone: 'supervisor_account', rolesPermitidos: [1, 2, 3], rota: '', isVisible: false},
        { nome: 'Clientes', icone: 'shopping_basket', rolesPermitidos: [1, 2, 3], rota: '', isVisible: false},
      ]

  },

  {
    secao: 'Configurações',
    rolesPermitidos: [1, 2],
    isVisible: true,
    itens:
      [
        { nome: 'Conta bancária', icone: 'account_balance', rolesPermitidos: [1, 2, 3], rota: 'config-pagamentos', isVisible: true},
        { nome: 'Geral', icone: 'settings', rolesPermitidos: [1, 2, 3], rota: '', isVisible: false},
      ]

  }



]
