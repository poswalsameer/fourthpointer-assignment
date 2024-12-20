'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'

export default function EditClientForm() {
  const [formData, setFormData] = useState({
    name: 'Gross Polow, LLC',
    contact: 'Corinne Anterline',
    phone: '(716) 204-1700',
    address: '1775 Wehrle Drive',
    city: 'Williamsville',
    state: 'NY',
    zip: '14221'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - reusing from previous component */}
      <div className="w-[280px] border-r bg-white p-6">
        <div className="mb-10 pt-2">
          <h1 className="text-[#00B69B] text-3xl font-bold">FUTECH</h1>
        </div>
        <nav className="space-y-2">
          <button className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            Overview
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Admin
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-[#E55C5C] px-6 py-5 h-16">
          <button className="text-white flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </header>

        {/* Form Content */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-8">Edit client</h1>
          
          <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Contact and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Zip</Label>
                <Input
                  id="zip"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="px-8"
              >
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
  )
}

