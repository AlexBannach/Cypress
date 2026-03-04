import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';
import {usuario_factory}  from '../support/utils/usuario_factory';

describe('Cadastro de usuário', () => {

    const usuario = usuario_factory();

    beforeEach(('Acessar página de cadastro', () => {
        //Acessar a página de cadastro
        home_page.accessRegisterPage()
    }))

    it('Validar campo nome vazio', () => {

        register_page.saveRegister()
        register_page.checkMessage('O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {

        register_page.fillName(usuario.nome)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {

        register_page.fillName(usuario.nome)
        register_page.fillEmail(usuario.email_invalido)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo senha vazio', () => {
    
        register_page.fillName(usuario.nome)
        register_page.fillEmail(usuario.email)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {

        register_page.fillName(usuario.nome)
        register_page.fillEmail(usuario.email)
        register_page.fillPassword(usuario.senha_invalida)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com sucesso', () => {
 
        register_page.fillName(usuario.nome)
        register_page.fillEmail(usuario.email)
        register_page.fillPassword(usuario.senha_valida)
        register_page.saveRegister()
        register_page.checkRegisterSucess(usuario.nome)
    })
});