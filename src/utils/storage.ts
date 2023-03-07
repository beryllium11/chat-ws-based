export const LOCAL_STORAGE = {
  isDarkTheme: 'is_dark_theme'
}

export const storage = {
  setItem (key: string | undefined, value: any) {
    if (key != null) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch {

      }
    }
  },
  getItem (key: string) {
    try {
      const item = window.localStorage.getItem(key)

      return (item != null) && item !== 'undefined' ? JSON.parse(item) : undefined
    } catch {

    }
  },
  removeItem (key: string) {
    try {
      window.localStorage.removeItem(key)
    } catch {

    }
  },
  isDisabled () {
    try {
      return window.localStorage === undefined
    } catch {
      return true
    }
  }
}
