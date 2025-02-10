"use client";

import React from "react";
import { useParams } from "next/navigation";
import DeleteButton from "./_components/DeleteButton";

const BillingPage = () => {
  const { agencyId } = useParams();

  if (!agencyId || typeof agencyId !== "string") {
    return <div>Error: Agency ID is missing or invalid.</div>;
  }

  return (
    <div>
      <h1>Billing Page</h1>
      {/* <DeleteButton subaccountId={agencyId} /> */}
    </div>
  );
};

export default BillingPage;
