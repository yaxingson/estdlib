import { Bench } from 'tinybench'
import _ from 'lodash'
import underscore from 'underscore'

const bench = new Bench({name:'', time:100})

await bench.add('lodash::isArray', _.isArray.bind([]))
  .add('underscore::isArray', underscore.isArray.bind([]))
  .run()

console.table(bench.table())
