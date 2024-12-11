import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div class="flex items-center justify-center bg-gray-100">
      <div className="bg-gray-600 text-white text-3xl">User: {userid}</div>
    </div>
  );
}

export default User;
