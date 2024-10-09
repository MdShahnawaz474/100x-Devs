
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, networkAtom, notificationsAtom,messagingAtom,totalNotificationSelector } from './atom'

function App() {
 
 return( <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
)}

function MainApp(){
  const networkNotificationAtom = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <div>
      
      <button>Home</button>
      <button>My network({networkNotificationAtom >=100? "99+":networkNotificationAtom})</button>
      <button>Jobs{jobAtomCount}</button>
      <button>Messaging{messagingAtomCount}</button>
      <button>Notifications{notificationAtomCount}</button>
      <button>Me{totalNotificationCount}</button>
    </div>
  )
}

export default App
