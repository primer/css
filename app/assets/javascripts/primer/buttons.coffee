# Behaviors complementing buttons or minibuttons
#
# See also
#   primer/buttons.scss
#

# Prevent minibutton click if target is disabled
document.addEventListener 'click', (event) ->
  if $(event.target).closest('.minibutton.disabled')[0]
    event.preventDefault()
    event.stopPropagation()
  return
, true
