# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > invalid-yield-strict-arrow-parameter-name`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
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
			index: 28
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "yield is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 20
					index: 20
					line: 1
				}
				start: Object {
					column: 15
					index: 15
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 27
					index: 27
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 27
						index: 27
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
				body: JSNumericLiteral {
					value: 42
					format: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 27
							index: 27
							line: 1
						}
						start: Object {
							column: 25
							index: 25
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 24
							index: 24
							line: 1
						}
						start: Object {
							column: 14
							index: 14
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "yield"
							loc: Object {
								filename: "input.js"
								identifierName: "yield"
								end: Object {
									column: 20
									index: 20
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```
