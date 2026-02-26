---
name: check-exports
description: Validate that all components in src/components/ are properly exported from index.ts with both value and type exports. Fixes any missing exports automatically.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Edit
---

# Check Exports

Verify that every component has proper exports in `src/components/index.ts`.

## Steps

1. **List all component files**: Find every `.tsx` file in `src/components/` (excluding `index.ts`)

2. **Read index.ts**: Read `src/components/index.ts` to see current exports

3. **Check each component**: For every component file `Foo.tsx`, verify:
   - A value export exists: `export { Foo } from './Foo'`
   - A type export exists: `export type { FooProps } from './Foo'`
   - The component file actually exports these names (read the file to confirm)

4. **Report findings**:
   - List any components missing value exports
   - List any components missing type exports
   - List any exports in index.ts pointing to non-existent files

5. **Fix missing exports**: For any missing exports, add them to `index.ts` in alphabetical position

6. **Summary**: Report total components found, any fixes applied, and current state
