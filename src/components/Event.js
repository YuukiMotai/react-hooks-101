import React, { useContext } from 'react'
import { DELETE_EVENT } from '../actions' 
import AppContext from '../contexts/AppContext'

const Event=({ event })=>{
    const id = event.id
    const {dispatch} = useContext(AppContext)
    const handleClickDeleteButton =()=>{
    const result = window.confirm(`本当に(id=${id})を削除しても良いですか？`)
    if(result) dispatch({type: DELETE_EVENT, id: id})
    }

    return(
      <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.content}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
      </tr>
    )
}

export default Event
