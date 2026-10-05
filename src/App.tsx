import { Button } from "./components/button"

export function App() {
  return (
    <>
      <Button name="botao" onClick={() => alert("botao teste")}/>
      <Button name="botao2" />
    </>
  )
}