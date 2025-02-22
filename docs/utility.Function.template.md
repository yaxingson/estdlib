[estdlib v0.1.2](../wiki/Home) / [utility](../wiki/utility) / template

# Function: template()

> **template**(`templateString`, `setting`?): (...`args`) => `void`

Creates a compiled template function that can interpolate data properties in
"interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters,
and execute JavaScript in "evaluate" delimiters

## Parameters

• **templateString**: `string`

The template string

• **setting?**: [`TemplateSetting`](../wiki/utility.TypeAlias.TemplateSetting)

The options object

## Returns

`Function`

Returns the compiled template function

### Parameters

• ...**args**: `unknown`[]

### Returns

`void`

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/utility/template.ts)

## Example

```js
// Use the "interpolate" delimiter to create a compiled template
const compiled = template('hello <%= user %>!')
compiled({user:'fred'})  // => 'hello fred!'

// Use the HTML "escape" delimiter to escape data property values
const compiled = template('<b><%- value %></b>')
compiled({value:'<script>'}) // => '<b>&lt;script&gt;</b>'

// Use the "evaluate" delimiter to execute JavaScript and generate HTML
const compiled = template('<% users.forEach(function(user) { %><li><%- user %></li><% }) %>')
compiled({users:['fred', 'rose']}) // => '<li>fred</li><li>rose</li>'

```
