"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "../../lib/supabase"


function BookingForm() {

const params = useSearchParams()

const service_id = params.get("service_id")
const service_name = params.get("service_name")

const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [address, setAddress] = useState("")
const [date, setDate] = useState("")
const [time, setTime] = useState("")

const timeSlots = [
"06:00 AM",
"07:00 AM",
"08:00 AM",
"09:00 AM",
"10:00 AM",
"11:00 AM",
"04:00 PM",
"05:00 PM",
"06:00 PM"
]


async function handleBooking() {

await supabase.from("bookings").insert({

customer_name: name,
phone: phone,
address: address,
booking_date: date,
booking_time: time,
service_id: service_id

})

alert("Booking Confirmed 🙏")

}


return (

<div className="min-h-screen bg-orange-50 flex justify-center items-center">

<div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">

<img src="/om.png" width="60" className="mx-auto mb-4"/>

<h1 className="text-2xl font-bold text-orange-600 text-center mb-6">

{service_name}

</h1>


<input
placeholder="Your Name"
className="border p-3 rounded w-full mb-4 text-black placeholder-gray-400"
onChange={(e)=>setName(e.target.value)}
/>


<input
placeholder="Phone"
className="border p-3 rounded w-full mb-4 text-black placeholder-gray-400"
onChange={(e)=>setPhone(e.target.value)}
/>


<input
placeholder="Address"
className="border p-3 rounded w-full mb-4 text-black placeholder-gray-400"
onChange={(e)=>setAddress(e.target.value)}
/>


<input
type="date"
className="border p-3 rounded w-full mb-4 text-black placeholder-gray-400"
onChange={(e)=>setDate(e.target.value)}
/>


<select
className="border p-3 rounded w-full mb-4 text-black placeholder-gray-400"
onChange={(e)=>setTime(e.target.value)}
>

<option>Select Time</option>

{timeSlots.map(slot => (

<option key={slot}>{slot}</option>

))}

</select>


<button
onClick={handleBooking}
className="bg-orange-500 text-white w-full py-3 rounded-lg"
>

Confirm Booking

</button>

</div>

</div>

)

}



export default function Page(){

return (

<Suspense>

<BookingForm/>

</Suspense>

)

}
