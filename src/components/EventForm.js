import React,{useState} from 'react'

const EventForm = ({state, dispatch}) =>{
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
  
    const deleteAllEvents = e => {
      e.preventDefault()
      const result = window.confirm("全てのイベントを本当に削除しても良いですか？")
      if(result) dispatch({type: 'DELETE_ALL_EVENTS'})
    }
  
    const unCreatable = title === "" || content === ""

    return(
        <>
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
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable} >イベントを作成</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length===0}>全てのイベントを削除</button>
            </div>
            </form>
        </>
    )}

    export default EventForm
