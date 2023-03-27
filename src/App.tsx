import React, { FC } from 'react'
import TodoList from './components/TodoList'

interface AppProps {
  
}

const App: FC<AppProps> = ({  }) => {
  return (
    <div>
     <TodoList/>
    </div>
  )
}

export default App;