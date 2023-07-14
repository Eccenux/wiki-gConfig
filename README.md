# gConfig

gConfig is a handy tool to allow users to modify settings of your MediaWiki gadget, with little hassle on your or their side. 

Dokumentacja
-------------------------------

### Dla użytkowników i programistów

Dokumentacja użytkowa i dla twórców gadżetów znajduje się na Polskiej Wikipedii:
[Wikipedia:Narzędzia/gConfig](https://pl.wikipedia.org/wiki/Wikipedia:Narz%C4%99dzia/gConfig).


### Wykorzystanie API

Pobieranie opcji z MW:
https://www.mediawiki.org/wiki/ResourceLoader/Core_modules#mediawiki.user

Sprawdzanie zapisanych opcji:
```js
for (let key in mw.user.options.values) {
  let value = mw.user.options.values[key]
  if (key.indexOf('-gconfig-') >= 0) {
    console.log(key, value);
  }
}
```

Zapisywanie opcji do MW:
https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.options-method-saveOption

License
----------------------------

* Main author: [MatmaRex](https://github.com/MatmaRex).
* See other authors in commit history.
* See also: [original repo](https://github.com/MatmaRex/gConfig/)

License: [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) or later.
