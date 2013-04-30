# Behaviors complementing buttons or minibuttons
#
# See also
#   primer/buttons.scss
#

# Prevent minibutton click if target is disabled
document.addEventListener 'click', (event) ->
  if $(event.target).is '.minibutton.disabled'
    event.preventDefault()
    event.stopPropagation()
  return
, true
