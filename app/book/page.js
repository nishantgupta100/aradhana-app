export const dynamic = "force-dynamic";

"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { supabase } from "../../lib/supabase"

export default function BookPage() {

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
"12:00 PM",
"04:00 PM",
"05:00 PM",
"06:00 PM",
"07:00 PM"

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

<div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex justify-center items-center">

<div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">

<h1 className="text-2xl font-bold text-orange-600 mb-6 text-center">

<img src="/om.png" width="60" className="mx-auto mb-4" />


{service_name}

</h1>


<input

placeholder="Your Name"

className="border p-3 rounded w-full mb-4"

onChange={(e)=>setName(e.target.value)}

/>


<input

placeholder="Phone Number"

className="border p-3 rounded w-full mb-4"

onChange={(e)=>setPhone(e.target.value)}

/>


<input

placeholder="Address"

className="border p-3 rounded w-full mb-4"

onChange={(e)=>setAddress(e.target.value)}

/>


<label className="text-sm">Select Date</label>

<input

type="date"

className="border p-3 rounded w-full mb-4"

onChange={(e)=>setDate(e.target.value)}

/>


<label className="text-sm">Select Time Slot</label>

<select

className="border p-3 rounded w-full mb-6"

onChange={(e)=>setTime(e.target.value)}

>

<option>Select Time</option>

{timeSlots.map(slot => (

<option key={slot}>{slot}</option>

))}

</select>


<button

onClick={handleBooking}

className="bg-orange-500 text-white w-full py-3 rounded-lg hover:bg-orange-600 text-lg"

>

Confirm Booking

</button>

</div>

</div>

)

}
