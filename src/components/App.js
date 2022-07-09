import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'

console.log({AppContext})

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <>
      <AppContext.Provider value={'Hello Provider.'}>
        <div className="container-fruid">
          <EventForm state={state} dispatch={dispatch} />
          <Events state={state} dispatch={dispatch} />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
