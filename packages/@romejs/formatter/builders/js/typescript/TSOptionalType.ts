/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSOptionalType} from "@romejs/ast";
import {Builder, Token, concat} from "@romejs/formatter";

export default function TSOptionalType(
	builder: Builder,
	node: TSOptionalType,
): Token {
	return concat([builder.tokenize(node.typeAnnotation, node), "?"]);
}
