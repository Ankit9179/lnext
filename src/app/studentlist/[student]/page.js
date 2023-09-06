"use client";

import React from "react";

export default function studet({ params }) {
  console.log(params);
  return (
    <div>
      <h1>student details</h1>
      <h1>name:{params.student}</h1>
    </div>
  );
}
