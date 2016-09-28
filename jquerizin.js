const $ = (selector) => {
  const elements = document.querySelectorAll(selector)
  const chainableMethod = (fn) =>
    (...args) => {
      fn(...args)
      return methods
    }
  const methods =  {
    attributes: {
      get: (name) => elements[0].getAttribute(name),
      has: (name) => elements[0].hasAttribute(name),
      add: chainableMethod( (name, value) => {
        if (!elements[0].hasAttribute(name)) {
          elements[0].setAttribute(name, value)
        }
      }),
      update: chainableMethod( (name, value) => {
        if (elements[0].hasAttribute(name)) {
          elements[0].setAttribute(name, value)
        }
      }),
      remove: chainableMethod( (name) => {
        elements[0].removeAttribute(name)
      })
    },
    insert: (something) => {
      const isSomethingRawHTML = typeof something === "string"
      if (isSomethingRawHTML) {
        return {
          prepend: {
            inside: chainableMethod( () => elements[0].insertAdjacentHTML('afterbegin', something ) ),
            outside: chainableMethod( () => elements[0].insertAdjacentHTML('beforebegin', something) )
          },
          append: {
            inside: chainableMethod( () => elements[0].insertAdjacentHTML('beforeend', something) ),
            outside:chainableMethod( () => elements[0].insertAdjacentHTML('afterend', something) )
          }
        }
      } else {
        return {
          prepend: {
            inside: chainableMethod( () => elements[0].insertAdjacentElement('afterbegin', something ) ),
            outside: chainableMethod( () => elements[0].insertAdjacentElement('beforebegin', something) )
          },
          append: {
            inside: chainableMethod( () => elements[0].insertAdjacentElement('beforeend', something) ),
            outside: chainableMethod( () => elements[0].insertAdjacentElement('afterend', something) )
          }
        }
      }
    },
    delete: () => {
    },
    empty: () => {
    },
    classes: {
      add: () => {

      },
      remove: () => {

      },
      toggle: () => {

      },
      exists: () => {

      }
    },
    firstElement: () => elements[0]
  }
  return methods
}

$('.coisa')
  .attributes.add('teste', 'blabla')
  .insert('<span>bbb</span>').prepend.inside()
  .insert($('.coisa2').firstElement()).prepend.outside()
