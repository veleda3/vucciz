require 'test_helper'

class NewsletterSubscriptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get newsletter_subscriptions_new_url
    assert_response :success
  end

  test "should get create" do
    get newsletter_subscriptions_create_url
    assert_response :success
  end

end
