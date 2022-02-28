import '../styles/App.module.css';
import ErrorBoundary from './ErrorBoundary';

import Homepage from './Home';


function Mainappstart() {
  return (
  <div className="App_Home_Default_with_search_result">
    <div className="RectangleCopy2">
      <ErrorBoundary>
          <Homepage />
      </ErrorBoundary>
    </div>
  </div>
  );
}
export default Mainappstart;
