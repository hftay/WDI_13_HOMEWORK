class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.text :name
      t.text :address
      t.references :dish, foreign_key: true

      t.timestamps
    end
  end
end
