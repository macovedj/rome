# `sortImportExportSpecifiers.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/js/sortImportExportSpecifiers.test.ts --update-snapshots` to update.

## `enforce single var declarator`

### `0`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the import declaration should be sorted alphabetically.

    import {b, a, c, D} from "mod";
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - import {b, a, c, D} from "mod";
  + import {D, a, b, c} from "mod";

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
import {D, a, b, c} from "mod";

```

### `1`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the import declaration should be sorted alphabetically.

    import {b as A, a as C, B} from "mod";
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - import {b as A, a as C, B} from "mod";
  + import {b as A, B, a as C} from "mod";

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
import {b as A, B, a as C} from "mod";

```

### `2`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the import declaration should be sorted alphabetically.

    import {c, b as b2, b as b1, b} from "mod";
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - import {c, b as b2, b as b1, b} from "mod";
  + import {b, b as b1, b as b2, c} from "mod";

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
import {b, b as b1, b as b2, c} from "mod";

```

### `3`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the export declaration should be sorted alphabetically.

    export {b, a, c, D} from "mod";
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - export {b, a, c, D} from "mod";
  + export {D, a, b, c} from "mod";

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
export {D, a, b, c} from "mod";

```

### `4`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the export declaration should be sorted alphabetically.

    export {b as A, a as C, B} from "mod";
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - export {b as A, a as C, B} from "mod";
  + export {B, a as C, b as A} from "mod";

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
export {B, a as C, b as A} from "mod";

```

### `5`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the export declaration should be sorted alphabetically.

    export {c, b as b2, b as b1, b} from "mod";
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - export {c, b as b2, b as b1, b} from "mod";
  + export {b, b as b1, b as b2, c} from "mod";

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
export {b, b as b1, b as b2, c} from "mod";

```

### `6`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the export declaration should be sorted alphabetically.

    export {b, a, c, D};
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - export {b, a, c, D};
  + export {D, a, b, c};

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
export {D, a, b, c};

```

### `7`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the export declaration should be sorted alphabetically.

    export {b as A, a as C, B};
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - export {b as A, a as C, B};
  + export {B, a as C, b as A};

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `7: formatted`

```
export {B, a as C, b as A};

```

### `8`

```

 unknown:1 lint/js/sortImportExportSpecifiers FIXABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The specifiers of the export declaration should be sorted alphabetically.

    export {c, b as b2, b as b1, b};
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - export {c, b as b2, b as b1, b};
  + export {b, b as b1, b as b2, c};

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `8: formatted`

```
export {b, b as b1, b as b2, c};

```
