class Api::V1::AppsController < Api::V1::BaseController
  # GET /api/1/apps
  def index
    respond_with App.all
  end

  # GET /api/v1/apps/1
  def show
    respond_with :api, :v1, App.find(params[:id])
  end

  # POST /api/1/apps
  def create
    respond_with :api, :v1, App.create(app_params)
  end

  # DELETE /api/v1/apps/1
  def destroy
    respond_with App.destroy(params[:id])
  end

  private
    def app_params
      params.require(:app).permit(:id, :name, :image, :link, :category, :rank)
    end
end
