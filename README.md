## Game v3

[Untitled Game] is a semi-fictional interactive whirlwind.

![v3](train.jpg)

## Getting started

1. Install dependences
```bash
$ yarn install
```

2. Start Development Server
```bash
$ yarn start
```

By default, you can view the game at `localhost:3000` unless this port is already taken, in which vase, `create-react-app` will prompt you to confirm use of another port.

3. (Optional) Start Storybook
You can view game components in isolation in the storybook. This is great for developing components without having to navigate to the page/state they are present.

```bash
$ yarn run storybook
```

You can see the story book at `localhost:9009`.

### TODO
- [ ] localstorage saving state
- [ ] block URL routes if haven't played that far (or createMemoryHistory)
- [ ] use a styling lib (for autoprefixing, composition, etc etc)
- [ ] add animations, video, outro animation
  - [ ] train animation
  - [ ] phone audio
  - [ ] phone transcript
  - [ ] outro animation
  - [ ] magic cord animation
  - [ ] music is 🍒
- [ ] block smaller screens :shrug:
  - [ ] Use an HOC, similar to scrollTop, to do this
- Text styling
  - [ ] UserQuotes
  - [ ] Character Quotes
  - Dream Text
  - Wobbly text
