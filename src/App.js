import React, { useEffect,useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate.")
  })

  useEffect(() => {
    console.log("このコールバックは名前のみ")
  },[name])
  
  useEffect(() => {
    console.log("This is like componentDidMount.")
  },[])

  const renderPeriod = () => {
    console.log("renderperiod returns period.")
    return "●"
  }

  return (
    <>
    <p>商品名：{name} / 値段：{price}</p>
    <button onClick={() => setState({...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: price - 1})}>-1</button>
    <button onClick={() => setState(props)}>reset</button>
    <input value={name} onChange={e=>setState({...state, name: e.target.value})} />
    </>
  )
}
  App.defaultProps = {
    name: '',
    price: 1000
  }


export default App;
