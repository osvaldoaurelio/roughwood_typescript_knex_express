import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('stock_materials', table => {
    table.increments('id').primary().unsigned();
    table.string('name').notNullable();
    table.string('description').defaultTo('');
    table.integer('quantity').unsigned().defaultTo(1);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('stock_materials');
}
