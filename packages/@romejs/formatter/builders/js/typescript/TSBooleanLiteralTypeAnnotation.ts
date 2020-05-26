/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token} from "@romejs/formatter";

import {TSBooleanLiteralTypeAnnotation} from "@romejs/ast";

export default function TSBooleanLiteralTypeAnnotation(
	builder: Builder,
	node: TSBooleanLiteralTypeAnnotation,
): Token {
	return node.value ? "true" : "false";
}
