import { useRecoilValue, RecoilRoot } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms/Atoms"

function App(){

  return <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  </div>
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const messageNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotificationSelectorCount = useRecoilValue(totalNotificationSelector)
  return <div>
    <button>Home</button>
    <button>MyNetwork({networkNotificationCount>=100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobNotificationCount})</button>
    <button>Messaging({messageNotificationCount})</button>
    <button>Notifications({notificationCount})</button>
    <button>Me({totalNotificationSelectorCount})</button>
  </div>
}

export default App;


