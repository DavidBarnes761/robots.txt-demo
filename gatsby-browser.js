// built in sass from original "theme"
import './src/components/all.sass'

// built in sass from bootstrap
import './node_modules/bootstrap/dist/css/bootstrap.css'

// css file
import './src/styles/global.css'

// eslint-disable-next-line
const scrollTo = id => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 20)
  return false
}
// eslint-disable-next-line
export const onRouteUpdate = ({ location: { hash } }) => {
  console.log(location)
  if (hash) {
    window.setTimeout(scrollTo(hash), 10)
  }
}
