import { 
  create, 
  createLocalStorage,
  deriveColors,
} from 'lineupjs'
import { dsvFormat, csv } from 'd3'

import { cube } from './math'
import datasets from './data/datasets'


// how to access datasets
const [ ds1, ds2 ] = datasets
console.log(ds1.name)
console.log(ds2.name)
// how to access datasets

// --------------------------------------------------------------------------------------------

const { name, data, desc } = ds1
const provider = createLocalStorage(data, deriveColors(desc.columns))
provider.restore(desc)


const container = document.getElementById('lu-container')

const config = {
  header: {
    autoRotateLabels: true
  },
  renderingOptions: {
    stacked: true,
    histograms: true
  },
  body: {
    freezeCols: 0,
    renderer: 'canvas'
  }
}
const lineup = create(provider, container, config)
// lineup.update()


// --------------------------------------------------------------------------------------------

function component() {
  var element = document.createElement('pre')
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  )

  return element
}

document.body.appendChild(component())
