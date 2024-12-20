"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Sidebar from "@/appComponents/Sidebar";
import ClientOrders from "@/appComponents/ClientOrders";
import { useRouter } from "next/navigation";

export default function ClientDetails() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full">
      {/* <div className="min-h-screen w-[15%]"> */}
        <Sidebar />
      {/* </div> */}

      <div className="w-[85%] min-h-screen flex">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-[#E55C5C] flex justify-start items-end font-bold px-6 py-5 h-28">
            <button className="text-black flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </header>

          {/* Content */}
          <main className="p-6">
            <div className="flex justify-between items-center mb-8 mt-4">
              <h1 className="text-2xl font-semibold">Gross Polow, LLC</h1>
              <Button
                variant="default"
                className="bg-[#2D2D2D] hover:bg-[#2D2D2D]/90"
                onClick={() => router.push("/edit-client")}
              >
                Edit client
              </Button>
            </div>

            {/* Client Details Grid */}
            <div className="grid grid-cols-1 gap-y-8 mb-12">
              <div className="grid grid-cols-2 gap-y-8">
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">
                    Contact
                  </p>
                  <p className="font-medium">Corinne Anterline</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">(716) 204-1700</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-y-8 ">
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">
                    Address
                  </p>
                  <p className="font-medium">1775 Wehrle Drive</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">City</p>
                  <p className="font-medium">Williamsville</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">State</p>
                  <p className="font-medium">NY</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">Zip</p>
                  <p className="font-medium">14221</p>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Orders</h2>
              <ClientOrders />
            </section>

            {/* User Profile */}
            <div className="fixed bottom-4 left-4 flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Olivia Rhye</p>
                <p className="text-sm text-gray-500">olivia@stox.com</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
