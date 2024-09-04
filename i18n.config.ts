import i18nMessages from './locales'

type NestedMessages = {
  [key: string]: string | NestedMessages
}

type I18nMessages = {
  [lang: string]: {
    default: NestedMessages
  }
}

const flattenMessages = (messages: I18nMessages): { [lang: string]: NestedMessages } => {
  return Object.keys(messages).reduce<{ [lang: string]: NestedMessages }>((acc, lang) => {
    if (typeof messages[lang].default === 'object' && messages[lang].default !== null) {
      acc[lang] = messages[lang].default
    } else {
      acc[lang] = {}
    }
    return acc
  }, {})
}

const flatMessages = flattenMessages(i18nMessages)

console.log('Flat i18nMessages', flatMessages)

export default {
  legacy: false,
  globalInjection: true,
  messages: flatMessages,
}
