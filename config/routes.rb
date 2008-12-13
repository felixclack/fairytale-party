ActionController::Routing::Routes.draw do |map|
  map.resource :pages, :only => [:show]
  map.root :controller => "pages", :action => "show", :id => "home"
  map.about "/about", :controller => "pages", :action => "show", :id => "about"
  map.princess "/princess", :controller => "pages", :action => "show", :id => "princess"
  map.book "/book", :controller => "pages", :action => "show", :id => "book"
end
