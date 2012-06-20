# Behaviors complementing buttons or minibuttons
#
# See also
#   primer/buttons.scss
#

# Prevent menu from opening if target minibutton is disabled
$(document).on "menu:activate", ->
  if $(this).find(".js-menu-target").is ".minibutton.disabled"
    return false
