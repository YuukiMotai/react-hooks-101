import React,{useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Event from './Event'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const addEvent = e =>{
    e.preventDefault()
    //動画講座１３の１０分くらいから解説
    console.log({title,content})
    dispatch({
      type: 'CREATE_EVENT',
      title,
      content
    })
    setTitle('')
    setContent('')
  }

  return (
    <div className="container-fruid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <laberl htmlFor="formEventTitle">Title</laberl>
          <input className="form-control" id="formEventTitle" value={title} 
                                          onChange={e =>setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <laberl htmlFor="formEventContent">Content</laberl>
          <textarea className="form-control" id="formEventContent" value={content}
                                             onChange={e =>setContent(e.target.value)} />

          <button className="btn btn-primary" onClick={addEvent}>イベントを作成</button>
          <button className="btn btn-danger">全てのイベントを削除</button>
        </div>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event) => (<Event event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
