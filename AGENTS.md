# Possomute calculators

## Purpose
- This project helps calculate the dimensions of the materials used in a product called Possomute.
- Possomute is a tool that helps mute bass guitar strings at the bridge.
- **Structure:**
  - It is composed of a U-shaped piece of thin wood (glued from 3 pieces using a miter joint).
  - A leather strap wraps around this U-shape.
  - A piece of foam fits into the U-shaped wood, with slits for the bass strings to slot into (this provides the muting).
- **Leather wrapping path:**
  - Starts at the top-left edge, goes down.
  - Goes from the bottom-left edge to the right.
  - Goes from the bottom-right edge up.
  - Goes from the top-right edge over the "hollow" part to the left.
  - Finally, goes from the top-left edge down again, wrapping over the first layer of leather.
- This project helps accurately calculate the dimensions of the different materials that have to be cut for a specific version of the mute.
- It also helps visualize the parts using SVG graphics.

## Technologies
- This is a pure browser-based frontend project.
- `npm` is used for managing dependencies.
- `vite` is used for building the project.
- `typescript` is the language.
- `react` is used for rendering.
- `react-router-dom` is used for routing.
- `jotai` is used for state management.
- `@vanilla-extract/css` is used for styling.
- When installing new packages, it should be confirmed before adding them to `package.json`.
- Using or suggesting Tailwind for styling is strictly forbidden.

## Scripts
- `npm i` installs dependencies.
- `npm start` starts serving the project using Vite (entry point is `index.html` and `index.ts`).
- `npm run build` builds the project, putting the static assets, JS, and HTML in the `build` folder.

## Coding style
- Source code lives in the `src` folder.
- Shared types live under the `src/model` folder.
- Shared utilities/hooks live in the `src/utils` folder.
- Shared UI components (used by multiple features) live in `src/components`.
- **Features & Routing:**
  - Distinct functional areas (e.g., Strap, Wood Frame, Foam) live under `src/features` in folders with the appropriate name.
  - Routes are defined in the main App entry point; each route points to the main container component of a specific feature.
  - **No Barrel Files:** `index.ts` files that re-export other files are **strictly forbidden**.
- **File naming:**
  - Every file uses named exports (`export Something`); default exports (`export default ...`) are strictly forbidden.
  - File names should match the main exported value/function (`export function fooBar` => `fooBar.ts`).
  - **Exception:** Vanilla Extract style files should use the `.css.ts` suffix (e.g., `MyComponent.css.ts`).
- **Structure:**
  - Every component, hook, and utility function lives in its own file (unless it's a non-important side-computation only used internally).
  - Type declarations always use type-aliases (`type SomeType = ...`), never interfaces.
  - Comments (`// ...` and `/* ... */`) should be used sparingly, explaining only less trivial code.

### Common types
- Common model types live in the `src/model/types.ts` file for now.
- Additional types can be added if more common types are needed.

### React components
- React components use `PascalCase` naming.
- If they have props, the props type is always declared before the component itself and named: `MyComponent` => `MyComponentProps`.
- The components are always an arrow function typed `FC`, with the appropriate props type.
  - Example: `export const MyComponent: FC<MyComponentProps> = () => {...}`
- **Body structure:**
  1. Define local state and state used from Jotai atoms.
  2. Define state/functions returned by hooks.
  3. Memos.
  4. Callbacks.
  5. Effects.
  6. Return the rendered element.
  - *Note:* This rule can be broken if dependency requirements between hooks/value computations dictate it.

### Hooks
- Hooks are functions using `camelCase` naming and always start with the `use` prefix (e.g., `useSomething`).
- They are always `function` declarations, never arrow functions.
- If they have more than 2 inputs, define the input in an object type: `useSomething` => `type UseSomethingInput = {...}`.
- If they return more than 1 value (a primitive, array, or already typed complex type), define the output type: `useSomething` => `type UseSomethingOutput = {...}`.
- They can have internally used helper functions in the same file (without exports) if convenient.

### Utility functions
- Utility functions use `camelCase`.
- They are always `function` declarations, never arrow functions.
- They must always clearly define their input type(s) and return types.
- Avoid functions so complex that a complex type is needed for their inputs/outputs.