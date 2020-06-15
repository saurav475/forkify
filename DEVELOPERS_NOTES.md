## App Architecture
![Image of App Architecture](https://2thwfa.bn.files.1drv.com/y4m71hwb6hYC9VPGBKo-iHWUJVARCaSLfrnibC2X81AdqplWzFCMOqERGQzHYZcg69kH7-1fWDRbez0YJvIEweSyi4xvsGOqOGkH0h7666uWW1t9RcAwVBagbHkYYZBtUMuxjt65O1EYWec1LQuN90PZKgBGryjDH-a_jBgxfhp6hX-q2PMORjDQdOJ5bINHp76n9pCAqyy9SfpmTP6P4o_9Q?width=1920&height=1080&cropmode=none)

## APIs and Frameworks
* [Food2Fork API](http://food2fork.com/about/api) - get the foods to show to user.
* [Webpack](https://webpack.js.org/) - a module bundler tool.
* [Babel](https://babeljs.io/) - Convert our ESNext code to cross browser compatible JavaScript
* [Node.js](https://nodejs.org/en/) - Server side JavaScript needed for webpack
* [NPM](https://www.npmjs.com/) - package manager tool used to get dependencies for app.
* [Fractional](https://github.com/ekg/fraction.js) - determines fraction or mixed numbers from floating point decimals
* [uniqid](https://github.com/adamhalasz/uniqid) - Generates Unique ID's for shopping lists

## Adding Element control
When implementing control of DOM elements already existing in the `index.html` file, add them to the elements object in `src/js/views/base.js` in the following format:

```javascript
specificElementName: document.querySelector('.class__name--here')
```
As for elements that don't exist in the DOM initially, add them to method or function body.

## Adding Models and Views
__Always__ put data models and views and the `src/js/models` and the `src/js/views` folders respectively for organization purposes. You will be required to import the the files later on in `src/js/index.js` in the following format:

### Models
```javascript
import Model from './models/Model'
```
### Views
```javascript
import * as ModelView from './models/ModelView'
```

## Adding Controllers
Controllers should be added to the `src/js/index.js` in the following format:

### Controllers
```javascript
const ModelController = async () => {
  // code to control UI
};
```

# Project Tasks

- [x] Setup configurations for NPM, Webpack and Babel
- [x] Implement Search Model, View and Controller
- [x] Implement Recipe Model, View and Controller
- [x] Implement List Model, View and Controller
- [x] Implement Likes Model, View and Controller
- [x] Implement Persistant Data with localStorage
- [x] Implement button to delete all shopping lists
- [ ] Implement manually adding items to shopping list
- [ ] Save shopping list data in local storage
- [ ] Improve ingredient parsing algorithm
- [ ] Implement algorithm for calculating amount of servings
- [ ] Finishing touches and app polishing