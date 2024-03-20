# Remix translations example

This is an example of one possible approach to do translations in a [Remix](https://remix.run/) application.

Key takeaways:

* No external dependencies other than [react-string-replace](https://www.npmjs.com/package/react-string-replace) for doing interpolations.
* Easy to adapt to your own needs given it is just using Remix primitives.
* Can transalte strings in the browser and in normal backend Node code.
* Translations are loaded only once, bundled on the initial HTML payload as the rest of the loader's data on first page render and then cached on client navigations.
* The message strings can have any value interpolated, including other React components

## Trying it out

1. Run `npm install`
2. Run `npm run dev`
