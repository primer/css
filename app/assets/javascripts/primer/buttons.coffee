# Behaviors complementing buttons or minibuttons
#
# See also
#   primer/buttons.scss
#

# Add mousedown class to classy buttons and minibuttons
$(document).on 'mousedown', 'button.classy, a.button.classy, .minibutton', ->
  return if $(this).prop 'disabled'
  return if $(this).hasClass 'disabled'

  onUp = ->
    $(this).off 'mouseup mouseup', onUp
    $(this).removeClass 'mousedown'

  $(this).on 'mouseup mouseleave', onUp
  $(this).addClass 'mousedown'

  return

# Prevent minibutton click if target is disabled
$(document).on 'click:prepare', '.minibutton.disabled', (event) ->
  event.preventDefault()
  event.stopPropagation()
  return
