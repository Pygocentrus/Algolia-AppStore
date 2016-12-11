file_path = 'db/applications.json'

unless File.exists?(file_path)
  raise "The seed file does not exist. Please provide one!"
end

json = ActiveSupport::JSON.decode(File.read(file_path))

json.each do |app|
  App.create(app)
end
