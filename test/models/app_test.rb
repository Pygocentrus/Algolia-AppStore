require 'test_helper'

class AppTest < ActiveSupport::TestCase

  test "should save app with full info" do
    app = App.new(name: "Flux", link: "http://test.com", image: "http://test.com/image.png", category: "Productivity", rank: 40)
    assert app.save, "Couldn't save the app with all data"
  end

  test "should not save app without name" do
    app = App.new
    assert_not app.save, "Saved the app without a name"
  end

end
