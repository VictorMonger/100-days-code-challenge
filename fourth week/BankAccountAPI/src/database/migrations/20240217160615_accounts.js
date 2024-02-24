/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("accounts", (table) => {
    table.increments("accountNumber").primary();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.float("balance").notNullable();

    table.string("cpf");
    table.foreign("cpf").references("clients.cpf").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("accounts");
};
