import Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('customers').del();

  // Inserts seed entries
  await knex('customers').insert([
    {
      cpf: '12345678901',
      name: 'Abadia Silva',
      address: 'Rua 01',
      phone: '3362-0001',
    },
    {
      cpf: '12345678902',
      name: 'Bruno Ferraz',
      address: 'Rua 02',
      phone: '3362-0002',
    },
    {
      cpf: '12345678903',
      name: 'Caio de Souza',
      address: 'Rua 03',
      phone: '3362-0003',
    },
  ]);
}
