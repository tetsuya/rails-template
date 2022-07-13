source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.5"

gem "rails"
gem "pg"

gem "bootsnap", require: false
# gem "image_processing"
gem "puma"
gem "vite_rails"

group :development, :test do
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "pry-byebug"
  gem "pry-rails"
  gem "rspec-rails"
  gem "standard"
end

group :development do
  gem "annotate"
  gem "better_errors"
  gem "binding_of_caller"
  gem "bullet"
  gem "listen"
  gem "spring"
  gem "spring-commands-rspec"
  gem "spring-commands-rubocop"
  gem "spring-watcher-listen"
end

group :test do
  gem "rspec_junit_formatter"
  gem "rubocop-junit-formatter"
  gem "shoulda-matchers"
  gem "vcr"
  gem "webmock"
end
