namespace :plants do
    task water: :environment do
        Plant.where(watered: true).each do |plant|
            plant.update(watered: false) if plant.needs_watering?
        end
    end
end