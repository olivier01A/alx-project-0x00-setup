const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
    </div>
  )
}
export default Landing

["<Card />"]

// pages/landing.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center p-6">
      <h1 className="text-4xl font-semibold mb-6">Welcome to the Landing Page</h1>

      {/* Example Card usage */}
      <Card className="w-96 shadow-lg">
        <CardContent className="p-4">
          <p className="text-lg font-medium">This is a Card component!</p>
        </CardContent>
      </Card>
    </main>
  );
};


["rounded-sm", "rounded-lg", "rounded-full"]

import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center space-y-6">
      <h1 className="text-3xl font-bold">Landing Page Buttons</h1>

      <div className="flex flex-col space-y-4">
        {/* Small Buttons */}
        <div className="flex space-x-4">
          <Button title="Small Rounded-sm" className="text-sm px-2 py-1 rounded-sm" />
          <Button title="Small Rounded-md" className="text-sm px-2 py-1 rounded-md" />
          <Button title="Small Rounded-full" className="text-sm px-2 py-1 rounded-full" />
        </div>

        {/* Medium Buttons */}
        <div className="flex space-x-4">
          <Button title="Medium Rounded-sm" className="text-base px-4 py-2 rounded-sm" />
          <Button title="Medium Rounded-md" className="text-base px-4 py-2 rounded-md" />
          <Button title="Medium Rounded-full" className="text-base px-4 py-2 rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="flex space-x-4">
          <Button title="Large Rounded-sm" className="text-lg px-6 py-3 rounded-sm" />
          <Button title="Large Rounded-md" className="text-lg px-6 py-3 rounded-md" />
          <Button title="Large Rounded-full" className="text-lg px-6 py-3 rounded-full" />
        </div>
      </div>
    </main>
  );
};

export default Landing;


export default Landing;


import Card from "@/components/Card";
import { Card } from "@/components/Card";
