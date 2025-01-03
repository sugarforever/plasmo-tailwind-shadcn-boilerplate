import { CountButton } from "~features/count-button"
import { Label } from "@/components/ui/label"

import "~style.css"

function IndexPopup() {
  return (
    <div className="flex flex-col items-center justify-center w-[200px] gap-4 p-4">
      <Label htmlFor="count-button">Click to increment</Label>
      <CountButton id="count-button" />
    </div>
  )
}

export default IndexPopup
