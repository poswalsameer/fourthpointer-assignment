'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Sidebar from '../../appComponents/Sidebar'


function Page() {

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      })
    
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

    }

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
            <button 
                className="text-black flex items-center gap-2" 
                onClick={() => router.push("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </header>

          {/* Add the component here */}
          <main className="p-6 ml-10 mt-10 ">
            <h1 className="text-2xl font-semibold mb-8">Edit client</h1>

            <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border border-gray-400/60"
                />
              </div>

              {/* Contact and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact</Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="border border-gray-400/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border border-gray-400/60"
                  />
                </div>
              </div>

              {/* Address and City */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="border border-gray-400/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="border border-gray-400/60"
                  />
                </div>
              </div>

              {/* State and Zip */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="border border-gray-400/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip</Label>
                  <Input
                    id="zip"
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    className="border border-gray-400/60"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" className="px-8">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-8 bg-[#2D2D2D] hover:bg-[#2D2D2D]/90"
                >
                  Save client
                </Button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Page;
