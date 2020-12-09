import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('customers', table => {
    table.increments('id').primary().unsigned();
    table.string('cpf').defaultTo('');
    table.string('name').notNullable();
    table.string('address').defaultTo('');
    table.string('phone').defaultTo('');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('customers');
}
