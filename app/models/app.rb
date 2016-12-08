class App < ApplicationRecord
  include AlgoliaSearch

  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  validates :link, :image, :category, :rank, presence: true
  validates :rank, numericality: true

  algoliasearch do
  end
end
