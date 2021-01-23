require "rails_helper"

RSpec.describe "Homes", type: :request do
  describe "GET /" do
    before do
      get "/"
    end
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    it "returns http success" do
      expect(response.body).to include("👋")
    end
  end
end
