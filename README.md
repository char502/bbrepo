## Test Submission

Part 1a. running npm run dev:1 will show the card design

Part 1b. With live server installed, I am able to view: displayed-in-grid.html by right clicking 'displayed-in-grid.html and selecting: 'Open with Live Server', this will pick up the styles from index.scss/index.css and show the grid/responsive layout.

Part 2. Completed all parts of module 2. I was a bit confused by part 3 (local storage question). I was able to add text to the input and store it in local storage. I was also able to get this to persist across reloads/refreshing the page. The last part requires not overwriting it but it can be edited at any point in the string? I can edit (by inserting at any point in the string) and refresh and the edits are shown so I think I have answered this part but am niggling on the possibility I have missed something?

Part 3. Happy with this part, able to add the card as a reusable component (see components folder) and added the responsive grid as per instructions. I haven't used CSS grid before but it seemed pretty straightforward to implement. Further things I would add with more time: 1. make the button a reusable component, 2. add tests, 3. refactor to include TypeScript.

# Code Understanding & Evaluation

This test set is split into three modules,

1: Basic Markup & Styling & Flex / Grid Usage (`/moduleOneBasics`)

2: JS array & primative manipulation (`/moduleThreeJSAndPrimatives`)

3: React (`/moduleFourReact`)

All tests will be reviewed using chrome so no further browser compatibility needs the be addressed.

## Instructions

All work must be completed on your own without input from others, if there is a question this should be distributed clearly via email to
richard.ayles@blubolt.com. Use any web based resources you choose, that's what Google is there for, be aware if you are gonna use something off stack or other source and we ask about it you must understand what it is that you did and most importantly the reason for it.

These Modules are connected in concept, so working Module 1 then 2 and finally 3 will be more efficient than doing them out of order.

Node Packages: Node v12.x required

Basic understanding of NPM

1. Make sure you have installed the root node modules `/`
2. Make sure you install the node modules in `/moduleFourReact`
3. There may be NPM errors debugging these is part of the test.

## Working in modules 1 - 2

1. These modules are all very similar and each has been bootstrapped with a SCSS compiler, js is expected as browser support no precompile. ES5 / ES6
2. Please read the brief in each of the folders before attempting to undertake them in its entirety. the brief will be outlined in the enclosed `brief.md` file.
3. Start your dev environment:
   `npm run dev:1` or `npm run dev:2`

## Working in Module 3 - React

This is bootstrapped from create react app and will simply need you to start it:
The react code is all encompassed in the enclosed `src` folder you can add components as you see fit, however the `app.js` file will be the core one where work will be required.

1. Read the BRIEF! ( `moduleThreeReact/brief.md`)
2. Start the dev server `npm run dev:react` or via yarn `cd moduleFourReact/ && yarn start`

## Completing the evaluation

From this supplied zip file create a private repo and do an init commit, add github user `richayles` to the repo for review.
You can optionally create branches and merge each module back to master, or work on a branch and PR it back requesting a review from Richard.
If you opt to commit back into master directly please follow the commit message structure in this format `MODULE:$NUMBER - COMPLETE` for example `MODULE:1 - COMPLETE`

When you are complete create a pull request for review and or drop Richard an email at `richard.ayles@blubolt.com`

## Good Luck

These are all relatively simple, they are geared to take between 30 - 50mins at max, submitting incomplete work is acceptable if you are exceeding 1 Hour. Please designate this in the module commit. Note from time to time debugging NPM wil be needed, that is part of the test.

### Feel free to add anything that shows your further knowledge in any of the areas under evaluation, however make sure the brief is met! NEVER OVERENGINEER :)
