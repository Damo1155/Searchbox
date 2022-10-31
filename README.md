# Temporary Installation Details

- Ensure NodeJS is installed
- Ensure Yarn is installed globally
    - npm install -g yarn
    - yarn --version / yarn -v
- Install all the packages
    - yarn install / yarn
- Run the application
    - yarn serve

# Notes

- Designed to work with React v18
- Current Webpack integration is only for developmental purposes
- core.scss is consumable within the parent component if you wish to use the out of the box implementation

# TODO

- [Priority 1] 'value and 'options' props in SearchBox.tsx should not be nullable
- [Priority 1] Need to handle click events for selecting an option(s)
- [Priority 1] Need to handle keyboard events for accessibility reasons
- [Priority 1] JEST and Playwright testing needs adding into the pipeline along with code coverage checks using NYC
- [Priority 2] Add support for multiple & single selection
- [Priority 2] Disable selected options
- [Priority 2] Add support for Tailwind, Bootstrap or standard CSS by using a variant
  - Could potentially be done with a JSON config file
- [Priority 3] Might be worth incorporating the useMemo hook for efficiency reasons
- [Priority 3] Add translation support via react-i18next