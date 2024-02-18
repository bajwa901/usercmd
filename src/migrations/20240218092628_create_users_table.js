/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tbl_users', function(table) {
        table.increments('user_id').primary();
        table.string('first_name', 30).notNullable();
        table.string('last_name', 30).notNullable();
        table.string('user_password').notNullable();
        table.string('user_email').notNullable().unique();
        table.string('user_address').nullable();
        table.string('user_contact').nullable();
        table.tinyint('user_type', 4).notNullable().defaultTo('1').comment('for future use if role access needed, for now I will add 1');
        table.tinyint('user_status', 4).notNullable().comment('1:enabled,2:disabled,3:suspended,4:pending,5:deleted');
        table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
        table.dateTime('updated_at');
        table.dateTime('deleted_at');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tbl_users');
};
