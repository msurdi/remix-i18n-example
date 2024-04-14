# Remix translations example

This is an example of a possible approach to implementing translations in a [Remix](https://remix.run/) application.

Key takeaways:

* No external dependencies other than [react-string-replace](https://www.npmjs.com/package/react-string-replace) for doing interpolations.
* Easy to adapt to your own needs given it is using just Remix primitives.
* Can translate strings in React components, in Remix actions/loaders/etc and in any backend Node module.
* Translations are loaded only once, bundled with the initial HTML payload together with the the rest of the loader's data and then cached on client navigations, until a full page reload is done.
* The message strings can have any value interpolated, including other React components.

## Trying it out

1. Run `npm install`
2. Run `npm run dev`
