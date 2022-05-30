function onOpen() {
  const ui = SpreadsheetApp.getUi()
  const menu = ui.createMenu(MENU_TITLE)
  menu.addItem('About', menuAbout.name)
  menu.addToUi()
}

function menuAbout() {
  SpreadsheetApp.getUi().alert(`We are in ${ENVIRONMENT.toUpperCase()} environment`)
}
