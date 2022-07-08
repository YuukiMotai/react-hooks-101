import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fruid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <laberl htmlFor="formEventTitle">Title</laberl>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <laberl htmlFor="formEventContent">Content</laberl>
          <textarea className="form-control" id="formEventContent" />

          <button className="btn btn-primary">イベントを作成</button>
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
            
        </tbody>
      </table>
    </div>
  );
}

export default App;
