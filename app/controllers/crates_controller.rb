class CratesController < ApplicationController
  before_action :set_crate, only: [:show, :update, :destroy]
  
  # GET /crates
  def index
    @crates = Crate.all
    render json: @crates
  end

  def crates
  end

  # GET /crates/1
  def show
    render json: @crate
  end

  # POST /crates
  def create
    @crate = Crate.new(crate_params)

    if @crate.save
      render json: @crate, status: :created, location: @crate
    else
      render json: @crate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crates/1
  def update
    if @crate.update(crate_params)
      render json: @crate
    else
      render json: @crate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crates/1
  def destroy
    @crate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_crate
      @crate = Crate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def crate_params
      params.require(:crate).permit(:user_id, :crate_name, :song)
    end
end
