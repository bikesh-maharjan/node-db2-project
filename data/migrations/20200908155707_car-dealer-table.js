exports.up = function (knex) {
  return knex.schema.createTable("car-dealer", (tbl) => {
    tbl.increments();
    tbl.string("make", 12).notNullable();
    tbl.string("model", 12).notNullable();
    tbl.string("VIN", 24).unique().notNullable();
    tbl.integer("Mileage").notNullable();

    //unrequired fields
    tbl.string("Title", 12);
    tbl.boolean("Transmission");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
