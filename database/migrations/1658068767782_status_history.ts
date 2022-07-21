import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'status_history'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary()
      table.integer("service").unsigned().references("id").inTable("status_details").onDelete('CASCADE').notNullable()
      table.bigint("timestamp").notNullable()
      table.integer("uptime").defaultTo(100).notNullable()
      table.boolean("up").defaultTo(1).notNullable()
      table.integer("checkcount").defaultTo(0).notNullable();

      table.timestamp('created_at', {useTz: true}).nullable()
      table.timestamp('updated_at', {useTz: true}).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
