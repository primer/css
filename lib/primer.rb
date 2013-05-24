module Primer
  APP = File.expand_path("../../app", __FILE__)
  LIB = File.expand_path("..", __FILE__)

  def self.paths
    Dir["#{APP}/assets/*"]
  end

  if defined? ::Rails::Railtie
    require 'primer/railtie'
  end
end
