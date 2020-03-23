/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// lib
export {default as Context} from './lib/Context';

export {PathOptions} from './lib/Path';
export {default as Path} from './lib/Path';

export {default as Record} from './lib/Record';
export {default as Cache} from './lib/Cache';

// methods
export {default as lint} from './api/lint';
export {default as compile} from './api/compile';
export {
  default as analyzeDependencies,
  mergeAnalyzeDependencies,
} from './api/analyzeDependencies/index';

// scope
export {default as Scope} from './scope/Scope';
export * from './scope/bindings';

// utils
export * from './constants';

export {
  getPrefixedNamespace as getPrefixedBundleNamespace,
} from './transforms/compileForBundle/_utils';
export {default as createHook} from './api/createHook';
export {extractSuppressionsFromProgram} from './suppressions';

import {parseJS} from '@romejs/js-parser';
import {createUnknownFilePath} from '@romejs/path';
import {DEFAULT_PROJECT_CONFIG} from '@romejs/project';
import {ConstSourceType, ConstProgramSyntax} from '@romejs/js-ast';

import lint from './api/lint';

export async function testLint(
  input: string,
  format: boolean = false,
  sourceType: ConstSourceType = 'module',
  syntax?: Array<ConstProgramSyntax>,
) {
  return await lint({
    options: {},
    format,
    ast: parseJS({
      input,
      sourceType,
      path: createUnknownFilePath('unknown'),
      syntax,
    }),
    sourceText: input,
    project: {
      folder: undefined,
      config: DEFAULT_PROJECT_CONFIG,
    },
  });
}

// types
export {LintResult} from './api/lint';
export {CompileResult} from './api/compile';
export {HookDescriptor} from './api/createHook';
export * from './types';