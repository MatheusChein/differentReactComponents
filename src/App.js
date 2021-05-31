import { ClassComponent } from "./components/ClassComponent"
import { ClockClassComponent } from "./components/ClockClassComponent"
import { ClockFunctionalComponent } from "./components/ClockFunctionalComponent"
import { NameForm } from "./components/FormClassComponent"
import { FormFunctionComponent } from "./components/FormFunctionComponent"
import { Reservation } from "./components/FormMultipleInputs"
import { FlavorForm } from "./components/FormSelectClassComponent"
import { FunctionalComponent } from "./components/FunctionalComponent"
import { List } from "./components/ListComponent"
import { Toggle } from "./components/ToggleButton"

export const App = () => {
  return (
    <>
      <FunctionalComponent name='Função'/>
      <ClassComponent name='Classe'/>
      <ClockClassComponent/>
      <ClockFunctionalComponent />
      <Toggle />
      <NameForm />
      <FormFunctionComponent />
      <FlavorForm />
      <Reservation />
      <List />
    </>
  )
}