class App < ApplicationRecord
  include AlgoliaSearch
  
  algoliasearch do
  end
end
