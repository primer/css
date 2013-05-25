require 'primer'
require 'rails'

module Primer
  class Railtie < ::Rails::Engine
    initializer "primer.assets" do |app|
      Primer.paths.each do |path|
        app.config.assets.paths << path
      end
    end

    initializer "primer.precompile_regex" do |app|
      if Rails::VERSION::MAJOR == 3 # fix moment/LICENSE error due to lax regex in rails3.2
        app.config.assets.precompile = [
          Proc.new { |path, fn|
            fn !~ /\/(test|spec)\// && (
                fn =~ /app\/assets/ &&
                !%w(.js .css).include?(File.extname(path))
              ) ||
              %w(.coffee .scss .png .eot .woff .otf .ttf .svg).include?(File.extname(path))
          },
          /(?:\/|\\|\A)application\.(css|js)$/
        ]
      end
    end
  end
end
