import './scripts/components/slider.js'
import sliderScript from './scripts/slider.js'

document.addEventListener('DOMContentLoaded', () => {
  sliderScript()

  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded')
    clearTimeout(c)
  }, 1000)
})
