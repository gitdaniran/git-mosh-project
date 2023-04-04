import React from "react";


export default function Counter() {
  const [count, setCount] = React.useState({
    countItem: 0,
    countItem1: 0,
    countItem2: 0,
    countItem3: 0
  })

  function formatCount() {
    setCount(prevState => {
      return {
        ...count,
        countItem: count.countItem + 1

      }
    })
  }

  function formatMinus() {
    setCount(prevState => {
      return {
        ...count,
        countItem: count.countItem - 1

      }
    })
  }

  function Delete() {
    setCount(prevState => {
      return {
        ...count,
        countItem: 0
      }
    })
  }
  function formatCount1() {
    setCount(prevState => {
      return {
        ...count,
        countItem1: count.countItem1 + 1

      }
    })
  }

  function formatMinus1() {
    setCount(prevState => {
      return {
        ...count,
        countItem1: count.countItem1 - 1

      }
    })
  }

  function Delete1() {
    setCount(prevState => {
      return {
        ...count,
        countItem1: 0
      }
    })
  }
  function formatCount2() {
    setCount(prevState => {
      return {
        ...count,
        countItem2: count.countItem2 + 1

      }
    })
  }

  function formatMinus2() {
    setCount(prevState => {
      return {
        ...count,
        countItem2: count.countItem2 - 1

      }
    })
  }

  function Delete2() {
    setCount(prevState => {
      return {
        ...count,
        countItem2: 0
      }
    })
  }
  function formatCount3() {
    setCount(prevState => {
      return {
        ...count,
        countItem3: count.countItem3 + 1

      }
    })
  }

  function formatMinus3() {
    setCount(prevState => {
      return {
        ...count,
        countItem3: count.countItem3 - 1

      }
    })
  }

  function Delete3() {
    setCount(prevState => {
      return {
        ...count,
        countItem3: 0
      }
    })
  }

  function Reset() {
    setCount(prevState => {
      return {
        ...count,
        countItem: 0,
        countItem1: 0,
        countItem2: 0,
        countItem3: 0

      }
    })
  }

  return (
    <div>
      <nav className="navbar">
        <h2>Navbar Navbar</h2>
        <button>{count.countItem + count.countItem1 + 
        count.countItem2 + count.countItem3}</button>

      </nav>
      <button className="reset" onClick={Reset}>Reset</button>
      <main className="counter">
        <span className={count.countItem === 0 ? 'counter-zero' : 'counter-span'}>{count.countItem === 0 || count.countItem < 0 ? 'Zero' : count.countItem}</span>
        <button onClick={formatCount}>+</button>
        <button onClick={formatMinus}>-</button>
        <button onClick={Delete}>Delete</button>
      </main>
      <main className="counter">
        <span className={count.countItem1 === 0 ? 'counter-zero' : 'counter-span'}>{count.countItem1 === 0 || count.countItem1 < 0 ? 'Zero' : count.countItem1}</span>
        <button onClick={formatCount1}>+</button>
        <button onClick={formatMinus1}>-</button>
        <button onClick={Delete1}>Delete</button>
      </main>
      <main className="counter">
        <span className={count.countItem2 === 0 ? 'counter-zero' : 'counter-span'}>{count.countItem2 === 0 || count.countItem2 < 0 ? 'Zero' : count.countItem2}</span>
        <button onClick={formatCount2}>+</button>
        <button onClick={formatMinus2}>-</button>
        <button onClick={Delete2}>Delete</button>
      </main>
      <main className="counter">
        <span className={count.countItem3 === 0 ? 'counter-zero' : 'counter-span'}>{count.countItem3 === 0 || count.countItem3 < 0 ? 'Zero' : count.countItem3}</span>
        <button onClick={formatCount3}>+</button>
        <button onClick={formatMinus3}>-</button>
        <button onClick={Delete3}>Delete</button>
      </main>
    </div>
    
  )
}