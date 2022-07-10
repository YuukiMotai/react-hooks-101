import React,{ useContext, useState } from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () =>{
    const {state, dispatch} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')  
  
    const addEvent = e =>{
      e.preventDefault()
      //動画講座１３の１０分くらいから解説
      dispatch({
        type: CREATE_EVENT,
        title,
        content
      })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'イベントを作成しました',
        operatedAt: timeCurrentIso8601()
      })

      setTitle('')
      setContent('')
    }
  
    const deleteAllEvents = e => {
      e.preventDefault()
      const result = window.confirm("全てのイベントを本当に削除しても良いですか？")
      if(result) {
        dispatch({type: DELETE_ALL_EVENTS})

        dispatch({
          type: ADD_OPERATION_LOG,
          description: '全てのイベントを削除しました',
          operatedAt: timeCurrentIso8601()
        })
      }
    }
  
    const unCreatable = title === "" || content === ""
    const deleteAllOperationLogs = e => {
      e.preventDefault()
      const result = window.confirm("全ての操作ログを本当に削除してもいいですか？")

      if(result){
        dispatch({
          type: DELETE_ALL_OPERATION_LOGS
        })
      }
    }

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
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length===0}>全てのイベントを削除</button>
                <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length===0}>全ての操作ログを削除</button>
            </div>
            </form>
        </>
    )}

    export default EventForm
