import { faker } from '@faker-js/faker';

export function usuario_factory() {
  return {
   nome: faker.person.fullName(),
   email: faker.internet.email(),
   email_invalido: 'emailinvalido',
   senha_valida: '123456',
   senha_invalida: '12345'
  };
}