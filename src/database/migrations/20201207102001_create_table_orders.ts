import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', table => {
    table.increments('id').primary().unsigned();
    table
      .integer('users_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('SET NULL');
    table
      .integer('customers_id')
      .unsigned()
      .references('id')
      .inTable('customers')
      .onDelete('SET NULL');
    table.timestamp('initial_date').defaultTo(knex.fn.now());
    table.timestamp('final_date').defaultTo(knex.fn.now());
    table.float('price').defaultTo(0);
    table.float('discount').defaultTo(0);
    table.enum('status', ['pending', 'progress', 'done', 'late']);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders');
}
