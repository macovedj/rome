# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > array-pattern-single-element-with-object`

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
			index: 49
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "singleElementWithObject"
				loc: Object {
					filename: "input.js"
					identifierName: "singleElementWithObject"
					end: Object {
						column: 32
						index: 32
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 48
					index: 48
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 48
						index: 48
						line: 1
					}
					start: Object {
						column: 46
						index: 46
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 45
						index: 45
						line: 1
					}
					start: Object {
						column: 32
						index: 32
						line: 1
					}
				}
				rest: JSBindingArrayPattern {
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 44
							index: 44
							line: 1
						}
						start: Object {
							column: 36
							index: 36
							line: 1
						}
					}
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 44
								index: 44
								line: 1
							}
							start: Object {
								column: 36
								index: 36
								line: 1
							}
						}
					}
					elements: Array [
						JSBindingObjectPattern {
							rest: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 43
									index: 43
									line: 1
								}
								start: Object {
									column: 37
									index: 37
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 43
										index: 43
										line: 1
									}
									start: Object {
										column: 37
										index: 37
										line: 1
									}
								}
							}
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "p"
											loc: Object {
												filename: "input.js"
												identifierName: "p"
												end: Object {
													column: 39
													index: 39
													line: 1
												}
												start: Object {
													column: 38
													index: 38
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 39
												index: 39
												line: 1
											}
											start: Object {
												column: 38
												index: 38
												line: 1
											}
										}
									}
									value: JSBindingIdentifier {
										name: "q"
										loc: Object {
											filename: "input.js"
											identifierName: "q"
											end: Object {
												column: 42
												index: 42
												line: 1
											}
											start: Object {
												column: 41
												index: 41
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 42
											index: 42
											line: 1
										}
										start: Object {
											column: 38
											index: 38
											line: 1
										}
									}
								}
							]
						}
					]
				}
			}
		}
	]
}
```
