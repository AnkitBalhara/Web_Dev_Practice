import React from "react";

const UserContext = React.createContext();

export default UserContext;

// After creating Context we have to also use it as that we have to make it as a provide,
// So, this is how we use it as a provider in the UserContextProvide.jsx file...

{/* <UserContext>
  <Login>
    <Card></Card>
  </Login>
</UserContext>; */}

