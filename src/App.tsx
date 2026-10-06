import "./global.css"
import { useState } from "react"

import { Button } from "./components/button"
import styles from "./app.module.css" 

// import { useMessage } from "./hooks/useMessage"

export function App() {
  const [count, setCount] = useState(0)

  // const { show } = useMessage({ age: 21, name: "Lorenzo"})

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => setCount(count + 1)}/>
      <span>{count}</span>
      <Button name="Remover" onClick={() => setCount(count - 1)}/>
    </div >
  )
}