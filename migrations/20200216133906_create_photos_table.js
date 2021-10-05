/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('photos', (table) => {
    table.text('id').primary();
    table
      .text('user_id')
      .references('users.id')
      .onDelete('cascade');
    table.text('nft');
    table.text('title');
    table.integer('year')
    table.text('description');
    table.text('all_tags')
    table.text('tags');
    table.text('photo_width');
    table.text('photo_height');
    table.text('artwork_width');
    table.text('artwork_height');
    table.text('src_tiny');
    table.text('src_small');
    table.text('src_large');
    table.text('src_youtube');
    table.text('color');
    table.text('download_count');
    table.text('credit_id');
    table.text('artist');
    table.text('license');
    table.text('type');
    table.text('medium');
    table.text('status');
    table.specificType('related_photos', 'text ARRAY');

    table.timestamp('created_at');
    table.timestamp('updated_at');
    table.index(['user_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('photos');
};
