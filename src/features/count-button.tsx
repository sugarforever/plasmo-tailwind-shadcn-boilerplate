import { useReducer } from "react"
import { Button } from "@/components/ui/button"

export const CountButton = (props: { id: string }) => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <Button id={props.id} onClick={() => increase()}>
      {count}
    </Button>
  )
}
