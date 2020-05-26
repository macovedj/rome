/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from "../../scopes";
import {AnyNode, JSMetaProperty, jsMetaProperty} from "@romejs/ast";

export default function JSMetaProperty(node: AnyNode, scope: Scope) {
	node = jsMetaProperty.assert(node);
	scope;
	throw new Error("unimplemented");
}
