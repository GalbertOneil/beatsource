require 'test_helper'

class CratesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @crate = crates(:one)
  end

  test "should get index" do
    get crates_url, as: :json
    assert_response :success
  end

  test "should create crate" do
    assert_difference('Crate.count') do
      post crates_url, params: { crate: { crate_name: @crate.crate_name, song: @crate.song, user_id: @crate.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show crate" do
    get crate_url(@crate), as: :json
    assert_response :success
  end

  test "should update crate" do
    patch crate_url(@crate), params: { crate: { crate_name: @crate.crate_name, song: @crate.song, user_id: @crate.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy crate" do
    assert_difference('Crate.count', -1) do
      delete crate_url(@crate), as: :json
    end

    assert_response 204
  end
end
