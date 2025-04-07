// package.json (partial)
// ...
// "dependencies": {
//   "@clerk/clerk-react": "^4.29.7",
//   "axios": "^1.6.2",
//   "bootstrap": "^5.3.2",
//   "react": "^18.2.0",
//   "react-bootstrap": "^2.9.1",
//   "react-dom": "^18.2.0",
//   "react-redux": "^9.0.4",
//   "react-router-dom": "^6.21.0",
//   "redux": "^4.2.1",
//   "redux-thunk": "^2.4.2"
// },
// ...

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);

// src/App.js


// src/components/ProtectedRoute.js


// src/components/Header.js


// src/components/Sidebar.js


// src/components/GameList.js


// src/pages/HomePage.js


// src/pages/GameDetailPage.js


// src/redux/actions.js

// src/redux/reducer.js


// src/redux/store.js
