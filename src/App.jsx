import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
