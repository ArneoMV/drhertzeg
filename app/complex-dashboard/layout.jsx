import React from 'react';
import FollowSocial from "../components/followSocial/FollowSocial";

export default function DashboardLayout({
  children,
  productCard,
}) {

  return (
    <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1 }}>{productCard}</div>
      </div>


      <FollowSocial />
    </div>
  )
}
