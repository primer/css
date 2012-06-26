Gem::Specification.new do |s|
  s.name    = "primer"
  s.version = "0.1.0"
  s.version = "#{s.version}.#{ENV['GEM_VERSION_BUILD'] }" if ENV['GEM_VERSION_BUILD']

  s.homepage = "https://github.com/github/primer"
  s.summary  = "The base coat of GitHub"

  s.files = Dir["app/**/*", "lib/**/*"]

  s.add_dependency "coffee-script"
  s.add_dependency "crema"
  s.add_dependency "sprockets"
  s.add_development_dependency "rake"

  s.author = "GitHub"
  s.email  = "support@github.com"
end
