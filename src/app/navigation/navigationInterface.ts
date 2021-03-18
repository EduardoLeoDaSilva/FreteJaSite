export interface ModelNavigation{

   secao: string;
   rolesPermitidos: number[];
   itens: ModelMenu[];
   isVisible: boolean;
}


export interface ModelMenu{
   nome: string;
   rolesPermitidos: number[];
   icone: string;
   rota: string;
   isVisible: boolean;
}
