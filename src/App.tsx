import { Button } from "./components/button"
import { useMessage } from "./hooks/useMessage"

export function App() {
  const { show } = useMessage({ age: 21, name: "Lorenzo"})

  return (
    <>
      <Button name="botao" onClick={() => show("Mensagem personalizada do meu próprio hook ;)")}/>
      <Button name="botao2" />
    </>
  )
}