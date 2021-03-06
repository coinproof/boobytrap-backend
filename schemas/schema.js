// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import owners from './owners'
import promoters from './promoters'
import influencers from './influencers'
import uprojects from './uprojects'
import blogs from './blogs'
import authors from './authors'
import developers from './developers'
import iep from './iep'
import launchedprojects from './launchedprojects'
import minHolding from './roi'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    owners,
    promoters,
    developers,
    influencers,
    uprojects,
    launchedprojects,
    blogs,
    authors,
    iep,
    minHolding
  ]),
})
