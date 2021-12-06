import React, { useState } from "react";

const Personal = () => {
  const [isManager, setManager] = useState(false);

  const ShopManager = () => {
    return(
      <div></div>
    )
  }

  const ApllyShop = () => {
    return(
      <div></div>
    )
  }

  return (
    <div>
      个人主页
      {
        () => {
          if(isManager) {
            return <ShopManager/>
          } else {
            return <ApllyShop/>
          }
        }
      }
    </div>
  )
}

export default Personal;