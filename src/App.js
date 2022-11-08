import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/Route';

function App() {
  return (
    <div className="App bg-blueAss ">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
