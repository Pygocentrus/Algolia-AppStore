require 'test_helper'

class AppsControllerTest < ActionDispatch::IntegrationTest

  test "should retrieve apps as json" do
    get "/api/v1/apps.json"
    assert_response :success
    assert_equal "application/json", @response.content_type
  end

  test "should retrieve app as json" do
    id = apps(:spotify).id
    get "/api/v1/apps/#{id}.json"
    assert_response :success
    assert_equal "application/json", @response.content_type
  end

end
