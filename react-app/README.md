# Summary

This project is designed under the idea that it's a component that would be used in a greater scope / as a tool on a given app. So it's meant to be self-exclusive.

This project applies the `Open Weather Map` and `Google Places` API then uses `react-open-weather` to display the retrieved information. The exact flow is as follows:

![chart](https://i.imgur.com/TydbDW2.png)

There are a couple things to note

- The search is not free, so if it doesn't work most likely I deactivated / paused the API key
- In a production enviornment I would store the keys in an enviornment variable secret; it was difficult to get that to work nicely here, so I opted not to
- In a production enviornment I would program in typescript, but it was wasn't working well with code sandbox; I decided that it was easiest to just ignore it. But you can see my Typescript skills at [`alita-moore/EIP-Bot`](https://github.com/alita-moore/EIP-Bot)
- I tend to avoid testing front-end applications. Within reason I often find that it's easier to assure quality by dogfooding front-end applications for UI bugs and then testing the behind the scenes stuff such as retrieving / formatting the weather data
