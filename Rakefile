task :test do
  lints = `scss-lint scss/primer.scss`
  if lints != ''
    abort("scss-lint of the .scss files failed!\n#{lints}")
  end
end

task :default => :test
