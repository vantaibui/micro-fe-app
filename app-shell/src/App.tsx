import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


const ReactApp = React.lazy(() => import("../../react-app/src/App"));
// const AngularApp = React.lazy(() => import('../../angular-app/src/app/app.routes'));
const VueApp = React.lazy(() => import("../../vue-app/src/App.vue"));


function App() {

  return (
    <Router>
      TEst
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/react" element={<ReactApp />} />
          {/* <Route path="/angular" element={<AngularApp />} /> */}
          <Route path="/vue" element={<VueApp />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
