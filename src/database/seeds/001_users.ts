import Knex from 'knex';
import { hash } from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      name: 'Osvaldo Aurélio',
      username: 'admin',
      password: await hash('admin', 8),
      actived: true,
      is_admin: true,
    },
    {
      name: 'Aurélio Ribeiro',
      username: 'funcionario1',
      password: await hash('123456', 8),
    },
    {
      name: 'Ribeiro Silva',
      username: 'funcionario2',
      password: await hash('123456', 8),
    },
  ]);
}
