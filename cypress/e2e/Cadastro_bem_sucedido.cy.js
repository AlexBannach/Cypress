import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';
import logout_page from '../support/pages/logout_page';
import {usuario_factory}  from '../support/utils/usuario_factory';

describe('Cadastro de usuário', () => {

    const usuario = usuario_factory();

    beforeEach(('Acessar página de cadastro', () => {
        //Acessar a página de cadastro
        home_page.accessRegisterPage()
    }))


  it('Cadastro realizado com sucesso', () => {
   
          register_page.fillName(usuario.nome)
          register_page.fillEmail(usuario.email)
          register_page.fillPassword(usuario.senha_valida)
          register_page.saveRegister()
          register_page.checkRegisterSucess(usuario.nome)
      })
    
});