# install shit
gem install Jekyll bundler

# start new jekyll project
jekyll new . --force

# test locally
bundle install (if you update _config.yml)
bundle exec jekyll serve
bundle exec jekyll serve --watch <!-- see changes instantly -->

# add theme

in Gem file: 
gem "minimal-mistakes-jekyll"

in _config file:
theme: minimal—mistakes-jekyll

sudo bundle (install everything)

# list ruby gems
gem query --local

# files & folders
_ config.yml --> every configuration
Gemfile --> every package import
index.markdown --> about webpage (layout is very important)
about.markdown --> landing webpage
404.html --> page for 404 error
/_site and /_posts

_site --> jekyll creates it - the real website

# good video
https://www.youtube.com/watch?v=8NkxcaxRacA

google search console - gives you html file, thats verification file from Google where Google looks at and more trust,...

# favicon
/home/roswald/github-pages/ralfoswald.github.io/_includes/head/custom.html
https://realfavicongenerator.net/ 