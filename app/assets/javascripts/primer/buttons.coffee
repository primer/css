# Behaviors complementing buttons or minibuttons
#
# See also
#   primer/buttons.scss
#

# Prevent minibutton click if target is disabled
$(document).on 'click:prepare', '.minibutton.disabled', (event) ->
  event.preventDefault()
  event.stopPropagation()
  return
