# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-labelled > migrated_0002`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 16
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSLabeledStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			label: JSIdentifier {
				name: "__proto__"
				loc: Object {
					filename: "input.js"
					identifierName: "__proto__"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
			body: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 15
						index: 15
						line: 1
					}
					start: Object {
						column: 11
						index: 11
						line: 1
					}
				}
				expression: JSReferenceIdentifier {
					name: "test"
					loc: Object {
						filename: "input.js"
						identifierName: "test"
						end: Object {
							column: 15
							index: 15
							line: 1
						}
						start: Object {
							column: 11
							index: 11
							line: 1
						}
					}
				}
			}
		}
	]
}
```
