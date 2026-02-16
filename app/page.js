"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {

const [services, setServices] = useState([])

useEffect(() => {
fetchServices()
}, [])

async function fetchServices() {

const { data, error } = await supabase
.from("services")
.select("*")
.order("id", { ascending: true })

if (error) {

console.log(error)

} else {

setServices(data)

}

}



return (

<div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-3 sm:px-0">

{/* Navbar */}

<div className="flex justify-between items-center p-6 bg-white shadow-sm">

<div className="flex items-center gap-2">

<img src="/om.png" width="40" height="40" />

<h1 className="text-2xl font-bold text-orange-600">
Aradhana
</h1>

</div>


<button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
Login
</button>

</div>


{/* Hero Section */}

<div className="text-center py-12">

<h2 className="text-4xl font-bold text-gray-800">
Book Trusted Pandits & Pooja Services
</h2>

<p className="text-gray-500 mt-3">
Verified pandits for every occasion
</p>

</div>


{/* Services */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 pb-10">

{services.map(service => (

<div key={service.id}
className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border-t-4 border-orange-500">

<h3 className="text-xl font-semibold">
{service.name}
</h3>

<p className="text-gray-500 mt-1">
{service.category}
</p>

<p className="text-orange-600 font-bold mt-3 text-lg">
₹{service.price}
</p>

<p className="text-sm text-gray-400">
{service.duration}
</p>

<button
onClick={() => window.location.href =
`/book?service_id=${service.id}&service_name=${service.name}`
}
className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
>

Book Now

</button>

</div>

))}

</div>

</div>

)
}
