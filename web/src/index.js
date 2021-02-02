import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

ReactDOM.render(
  <RedwoodProvider>
    <Routes />
  </RedwoodProvider>,
  document.getElementById('redwood-app')
)
