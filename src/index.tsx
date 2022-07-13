import { Route, Router, Routes } from 'solid-app-router'
import { lazy, Suspense } from 'solid-js'
import { render } from 'solid-js/web'

const requestApply = lazy(() => import('./pages/RequestApply'))
const auth = lazy(() => import('./pages/Auth'))
const home = lazy(() => import('./pages/Home'))
render(
    () => (
        <Router>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/" component={auth} />
                    <Route path="/home" component={home} />
                    <Route path="/requestApply" component={requestApply} />
                </Routes>
            </Suspense>
        </Router>
    ),
    document.getElementById('root') as HTMLElement,
)
