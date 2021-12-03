import styled from 'styled-components'
import { createGlobalState } from 'react-hooks-global-state'


const Container = styled.div`
   position: fixed;
   top: 2rem;
   max-width: 500px;
   max-height: 80vh;
   right: auto;
   left: auto;
   align-self: center;
   justify-self: center;
   z-index: var(--zIndex-bgContrast);
   
`

//TODO Fix this typing problem and add dispatch 
////* Ensuring that the type inserted into reducer corresponds to the 
////* action selected
//
//export interface CustomAction<T extends ActionTypes> {
//   type: T
//   val: StateParameterMap[T]
//}
//type StateParameterMap = {
//   alert: string
//   alertType: 'success' | 'warning' | 'error' | 'info' | 'neutral'
//   display: boolean
//}
//type ActionTypes = keyof StateParameterMap
//
//const alertReducer = (
//   state: StateParameterMap, 
//   action: CustomAction<ActionTypes>
//   ) => {
//   switch (action.type) {
//     case 'alert': return { ...state, alert: action.val };
//     case 'alertType': return { ...state, alertType: action.val };
//     case 'display': return { ...state, display: action.val };
//     default: return state;
//   }
//};
//
//const { useGlobalState: useAlertState, dispatch: useAlertDispatch } = createStore(alertReducer, {
//   alert: '',
//   alertType: 'neutral',
//   display: false
//})

const { useGlobalState: useAlertState } = createGlobalState({
   alert: 'No alert message!',
   alertType: 'neutral',
   display: false
} as {
   alert: string
   alertType: 'success' | 'warning' | 'error' | 'info' | 'neutral'
   display: boolean
})

const AlertComponent = () => {
   const [alertType] = useAlertState('alertType')
   const [alertMessage] = useAlertState('alert')
   const [alertDisplay] = useAlertState('display')
   return (
      <Container>
         {alertMessage.toString()}
      </Container>
   )
}
   
export {
   useAlertState
}

export default AlertComponent