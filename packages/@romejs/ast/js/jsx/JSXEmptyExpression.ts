/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSNodeBase} from "@romejs/ast";
import {createBuilder} from "../../utils";

export type JSXEmptyExpression = JSNodeBase & {
	type: "JSXEmptyExpression";
};

export const jsxEmptyExpression = createBuilder<JSXEmptyExpression>(
	"JSXEmptyExpression",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
