const {theme} = require('@primer/primitives')
const {get} = require('dotmap')
const color = key => get(theme.colors, key)

const promotions = [
  'border-black-fade',
  'border-white-fade',
  'border-gray-light',
  'border-green-light',
  'border-red-light',
  'border-yellow',
  'border-color-button',
  'bg-black-fade'
]

const variables = {
  'border-white': color('white'),
  'border-gray': color('gray.2'),
  'border-gray-dark': color('gray.3'),
  'border-gray-darker': color('gray.7'),
  'border-blue': color('blue.5'),
  'border-blue-light': color('blue.2'),
  'border-green': color('green.4'),
  'border-purple': color('purple.5'),
  'border-red': color('red.5'),

  'bg-white': color('white'),
  'bg-black': color('black'),
  'bg-blue-light': color('blue.0'),
  'bg-blue': color('blue.5'),
  'bg-gray-dark': color('gray.9'),
  'bg-gray-light': color('gray.0'),
  'bg-gray': color('gray.1'),
  'bg-green': color('green.5'),
  'bg-green-light': color('green.1'),
  'bg-orange': color('orange.7'),
  'bg-purple': color('purple.5'),
  'bg-purple-light': color('purple.0'),
  'bg-pink': color('pink.5'),
  'bg-red': color('red.5'),
  'bg-red-light': color('red.1'),
  'bg-yellow': color('yellow.5'),
  'bg-yellow-light': color('yellow.2'),
  'bg-yellow-dark': color('yellow.7'),

  'text-black': color('black'),
  'text-white': color('white'),
  'text-blue': color('blue.5'),
  'text-gray-dark': color('gray.9'),
  'text-gray-light': color('gray.5'),
  'text-gray': color('gray.6'),
  'text-green': color('green.5'),
  'text-orange': color('orange.9'),
  'text-orange-light': color('orange.6'),
  'text-purple': color('purple.5'),
  'text-pink': color('pink.5'),
  'text-red': color('red.6'),
  'text-yellow': color('yellow.8')
}

module.exports = {variables, promotions}
