import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('used_materials', table => {
    table.increments('id').primary().unsigned();
    table
      .integer('orders_id')
      .unsigned()
      .references('id')
      .inTable('orders')
      .onDelete('SET NULL');
    table
      .integer('stock_materials_id')
      .unsigned()
      .references('id')
      .inTable('stock_materials')
      .onDelete('SET NULL');
    table.integer('quantity').unsigned().defaultTo(1);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('used_materials');
}
