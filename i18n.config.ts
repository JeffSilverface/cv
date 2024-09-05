import i18nMessages from './locales'

const removeDefaultKeysFromMessages = { fr: i18nMessages.fr.default, en: i18nMessages.en.default }

export default {
  legacy: false,
  globalInjection: true,
  messages: removeDefaultKeysFromMessages,
}
