import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){

  
   
     const [left,setleft] = useState(false);
     const [right,setright] = useState(false);
    const [newtask,settask] = useState(false);   
    const name = null  
    const obj = {
      left ,
      setleft ,
      right ,
      setright ,
      newtask ,
      settask ,
      name
    }

return(
<UserContext.Provider value={{obj}}>
{children}
</UserContext.Provider>
)

}

export default UserContextProvider;