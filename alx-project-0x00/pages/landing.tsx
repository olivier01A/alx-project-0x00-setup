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

export default Landing;
