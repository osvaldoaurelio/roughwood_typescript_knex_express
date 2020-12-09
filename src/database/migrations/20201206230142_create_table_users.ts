import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary().unsigned();
    table.string('name').notNullable();
    table.string('username').unique();
    table.string('password').notNullable();
    table.boolean('actived').defaultTo(false);
    table.boolean('is_admin').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
