---
name: tidy
description: Run the full tidy-up checklist — exports, story titles, hex colors, build, and commit. Use after finishing a task to ensure codebase consistency.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Bash, Edit
---

# Tidy Up

Run through all checks in order. Report findings for each step. Fix issues automatically where possible.

## Step 1: Exports

Check that every component file has matching exports in `src/components/index.ts`.

1. List all `.tsx` files in `src/components/` (excluding `index.ts`)
2. For each component, verify both a value export (`export { Foo }`) and a type export (`export type { FooProps }`) exist in `index.ts`
3. Fix any missing exports

## Step 2: Story Titles

Check every component story uses `title: 'Email/Components/<Name>'` and every template story uses `title: 'Email/Templates/<Name>'`.

1. Run: `grep "title:" src/stories/*.stories.tsx`
2. Component stories must match `Email/Components/X`
3. Template stories must match `Email/Templates/X`
4. Flag any mismatches

## Step 3: Story Count

No story file should have more than 4 exported stories.

1. For each story file, count `export const` statements
2. Flag any file with more than 4
3. Report findings (do not auto-fix — story reduction needs judgment)

## Step 4: Hex Colors

No hardcoded hex colors should appear in components.

1. Run: `grep -rn '"#[0-9A-Fa-f]' src/components/`
2. Replace any hardcoded hex values with the appropriate token from `specs/colors.tokens.js`

## Step 5: Storybook Sort Order

Verify `.storybook/preview.ts` sort order includes all components and templates.

1. Compare component names in sort order vs actual component stories
2. Compare template names in sort order vs actual template stories
3. Add any missing entries

## Step 6: Build

1. Run: `npm run build-storybook`
2. Report any errors (chunk size warnings are OK)
3. All errors must be fixed before proceeding

## Step 7: Commit

1. Stage only the specific files that were modified (not `git add -A`)
2. Write a descriptive commit message
3. Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
4. Push if on a feature branch

After all steps, report a summary of what was found and fixed.
