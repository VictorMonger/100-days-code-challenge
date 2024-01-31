/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("account", (table) => {
    table.increments("accountNumber").primary();
    table.float("balance");
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.foreign("cpf").references("clients.cpf").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("account");
};
