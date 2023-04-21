sequelize model:generate --name Band --attributes "band_id:integer, name:string, genre:text, available_start_time:date, end_time:date" --force true

db:migrate
