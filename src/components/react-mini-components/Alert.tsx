import { useCallback } from 'react'
import styled from 'styled-components'
import { createGlobalState } from 'react-hooks-global-state'
import { a, useSpring, config } from 'react-spring'

let timeout: NodeJS.Timeout

const Container = styled(a.div)`
   position: fixed;
   width: 100vw;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: var(--zIndex-alertCard);
   sub{
      position: relative;
      margin-top: calc(6rem + 5vh);
      max-width: 500px;
      max-height: 75vh;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      overflow: hidden;
      overflow: hidden;
      border-radius: 0.3rem;
      border: 1.5px solid var(--palette-userAdvise-neutral);
      span{
         padding: 0.3rem;
         padding-left: 1rem;
         padding-right: 1rem;
         z-index: calc(var(--zIndex-alertCard) + 1);
         font-size: 0.9rem;
         font-family: var(--fonts-secondary);
         font-weight: 500;
      }
      :before{
         display: block;
         content: '';
         position: absolute;
         width: 100%;
         height: 100%;
         background: var(--palette-opaque-background);
         backdrop-filter: var(--mods-blur);
         opacity: 0.8;
      }
   }
   &[data-alert-type='success']{
      sub{
         border: 2px solid var(--palette-userAdvise-success);
         :before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-success) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   &[data-alert-type='error']{
      sub{
         border: 2px solid var(--palette-userAdvise-error);
         :before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-error) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   &[data-alert-type='warning']{
      sub{
         border: 2px solid var(--palette-userAdvise-warning);
         :before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-warning) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   &[data-alert-type='info']{
      sub{
         border: 2px solid var(--palette-userAdvise-info);
         :before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-info) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   
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

type AlertProps = {
   alert: string
   alertType: 'success' | 'warning' | 'error' | 'info' | 'neutral'
   display: boolean
}

//TODO Add global state with preact

//* Alert React component
const AlertComponent = () => {
   const [alertType] = ['success', 'warning', 'error', 'info', 'neutral']
   const [alertMessage] = ['alert']
   const [alertDisplay, toggleAlertDisplay] = ['display', (a: boolean) => {}]

   const alertComponentSpring = useSpring({
      opacity: alertDisplay ? 1 : 0,
      transform: alertDisplay ? 'translateY(0)' : 'translateY(-40px)',
      shouldDisplay: alertDisplay ? 1 : 0,
      config: {...config.wobbly},
      onRest: () => {
         if(alertDisplay){
            clearTimeout(timeout)
            timeout = setTimeout(() => toggleAlertDisplay(false), 7000)
         }
      }
   })

   return (
      <Container
      style={{...alertComponentSpring, display: alertComponentSpring
         .shouldDisplay.to(shouldDisplay => shouldDisplay ? 'flex' : 'none')}}
      data-alert-type={alertType}>
         <sub>
            <span>{alertMessage}</span>
         </sub>
      </Container>
   )
}

export default AlertComponent