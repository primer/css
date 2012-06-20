module Primer
  APP = File.expand_path("../../app", __FILE__)
  LIB = File.expand_path("..", __FILE__)

  def self.paths
    Dir["#{APP}/assets/*"]
  end

  if defined? ::Rails::Railtie
    class Railtie < ::Rails::Railtie
      initializer "primer" do |app|
        Primer.paths.each do |path|
          app.config.assets.paths << path
        end
      end
    end
  end
end
