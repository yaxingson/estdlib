export type TemplateSetting = {
  /**
   * The "interpolate" delimiter
   *
   * @defaultValue `/\{\{(.+?)\}\}/g`
   */
  interpolate: RegExp
  /** The data object variable name */
  variable: string
}

/**
 * Creates a compiled template function that can interpolate data properties in
 * "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters,
 * and execute JavaScript in "evaluate" delimiters
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/utility/template.ts source}
 *
 * @param templateString - The template string
 * @param setting - The options object
 * @returns  Returns the compiled template function
 *
 * @example
 *
 * ```js
 * // Use the "interpolate" delimiter to create a compiled template
 * const compiled = template('hello <%= user %>!')
 * compiled({user:'fred'})  // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values
 * const compiled = template('<b><%- value %></b>')
 * compiled({value:'<script>'}) // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML
 * const compiled = template('<% users.forEach(function(user) { %><li><%- user %></li><% }) %>')
 * compiled({users:['fred', 'rose']}) // => '<li>fred</li><li>rose</li>'
 *
 * ```
 */
export default function template(templateString: string, setting?: TemplateSetting) {
  return (...args: unknown[]) => {}
}
