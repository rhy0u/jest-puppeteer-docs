/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const checkHash = hash => {
  const id = hash && window.decodeURI(hash.replace(`#`, ``))
  const mainWrapper = document.getElementById('mainWrapper')
  if (id) {
    const element = document.getElementById(id)
    if (element) {
      const elementPos = element.getBoundingClientRect()
      const mainWrapperPos = mainWrapper.getBoundingClientRect()
      mainWrapper.scrollTop =
        mainWrapper.scrollTop + elementPos.top - mainWrapperPos.top
    }
  } else if (mainWrapper) {
    mainWrapper.scrollTop = 0
  }
}

exports.onInitialClientRender = () => {
  requestAnimationFrame(() => {
    checkHash(window.location.hash)
  })
  return false
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  checkHash(location.hash)
  return false
}
