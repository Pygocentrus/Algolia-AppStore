class Api::V1::AppsController < Api::V1::BaseController
  # GET /api/1/apps
  def index
    respond_with App.all
  end

  # POST /api/1/apps
  def create
    respond_with :api, :v1, App.create(app_params)
  end

  # DELETE /api/1/apps/1
  def destroy
    respond_with Item.destroy(params[:id])
  end

  private
    def app_params
      params.require(:app).permit(:name, :image, :link, :category, :rank)
    end
end
