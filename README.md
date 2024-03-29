# Project Purpose

This is a replacement for Select containers which allows for searchable content within a listbox structure using React components. 

The project is designed to be:

- Accessible to WCAG AA 2.1 standards
- Support Tailwind, Bootstrap and vanilla CSS
- Easy to consume with minimal configuration

# Future Improvements

- Support Vue, Angular and vanilla Javascript environments

# Temporary Installation Details

These are temporary instructions as the bulk of this will not be available in the final version and will just be a set of consumable components.

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

- [Priority 1] Disable specific options
- [Priority 1] Ability to remove a selected option
- [Priority 1] JEST and Playwright testing needs adding into the pipeline along with code coverage checks using NYC
- [Priority 2] Need to handle keyboard events for accessibility reasons
- [Priority 2] Allow for multi-tiered option groups rather than just a flat list
- [Priority 2] Add support for Tailwind, Bootstrap or standard CSS by using a variant
  - Could potentially be done with a JSON config file
- [Priority 3] Add ESLint using the AirBnB ruleset
- [Priority 3] Might be worth incorporating the useMemo hook for efficiency reasons
- [Priority 3] Add translation support via react-i18next
- [Priority 3] No relative paths