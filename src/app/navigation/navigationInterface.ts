export interface ModelNavigation{

   secao: string;
   rolesPermitidos: number[];
   itens: ModelMenu[];
}


export interface ModelMenu{
   nome: string;
   rolesPermitidos: number[];
   icone: string;
   rota: string;
}
