class PagesController < ApplicationController
  PAGES = %w(
    home
    about
    contact
    princess
    book
  ).freeze

  def show
    if PAGES.include?(params[:id])
      respond_to do |wants|
        wants.html { render :action => params[:id] }
        wants.js
      end
    else
      raise ActiveRecord::RecordNotFound,
            "No such static page: #{params[:id].inspect}"
    end
  end
end
