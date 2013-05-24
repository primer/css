module Primer
  class Railtie < ::Rails::Railtie
    initializer "primer" do |app|
      Primer.paths.each do |path|
        app.config.assets.paths << path
      end
    end
  end
end
