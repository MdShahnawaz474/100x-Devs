import { useState, memo, useEffect , useMemo, useCallback, useRef, useTransition} from 'react'

function App(){
const [incomeTax, setIncomTax] =  useState(20000)
const divRef = useRef();

useEffect(()=>{
  setTimeout(()=>{
    console.log((divRef.current));
  },5000)
})


return <div>
  hi there , yout income tax returns are <div ref={divRef}>{incomeTax}</div>
</div>
}
export default App
