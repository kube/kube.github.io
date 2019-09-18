import { loadFont } from './loadFont'

export const Hasklig = loadFont({
  name: 'Hasklig',
  styles: ['normal', 'italic'],
  extension: 'otf',
  italicSuffix: 'It',
  weights: [400,700]
})

export const Montserrat = loadFont({
  name: 'Montserrat',
  styles: ['normal'],
  extension: 'ttf',
  weights: [400, 500, 700]
})

export const InterUI = loadFont({
  name: 'Inter-UI',
  styles: ['normal'],
  extension: 'ttf',
  weights: [400, 500, 700]
})
