"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Fuel, Leaf, DollarSign, Radar } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Page() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-pink-600">
      <div className="p-4">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="text-white"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back
        </Button>
      </div>
      
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Fuel Selection</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Recommended Fuel</h2>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-800">Premium 95</span>
              <Leaf className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-sm text-green-600">Best for your vehicle's performance</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4">
            <Fuel className="w-6 h-6 text-blue-500 mb-2" />
            <div className="text-sm text-gray-600">Tank Level</div>
            <div className="font-bold">65%</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <DollarSign className="w-6 h-6 text-green-500 mb-2" />
            <div className="text-sm text-gray-600">Avg. Price</div>
            <div className="font-bold">$3.45/gal</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Fuel Options</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">Regular 87</span>
                <span className="text-green-500">$3.25/gal</span>
              </div>
              <p className="text-sm text-gray-600">Basic performance</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">Premium 95</span>
                <span className="text-green-500">$3.45/gal</span>
              </div>
              <p className="text-sm text-gray-600">Enhanced performance</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">Super 98</span>
                <span className="text-green-500">$3.75/gal</span>
              </div>
              <p className="text-sm text-gray-600">Maximum performance</p>
            </div>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href="/radar">
            <Radar className="w-6 h-6 mr-2" />
            Go to Radar
          </Link>
        </Button>
      </div>
    </div>
  )
}

