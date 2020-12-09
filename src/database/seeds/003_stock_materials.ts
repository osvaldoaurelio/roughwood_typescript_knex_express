import Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('stock_materials').del();

  // Inserts seed entries
  await knex('stock_materials').insert([
    { name: 'Madeira', description: 'Madeira de eucalipto', quantity: 10 },
    { name: 'Verniz', description: 'Verniz prime', quantity: 20 },
    { name: 'Pés de borracha', description: 'Atóxico', quantity: 30 },
  ]);
}
