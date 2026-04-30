import { useState } from "react";

function Register() {

const [formData,setFormData]=useState({
accno:"",
name:"",
pin:"",
balance:""
});

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=async(e)=>{
e.preventDefault();

const res=await fetch("http://localhost:8001/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
});

const data=await res.json();
alert(data.message);
};

return(
<div className="min-h-screen bg-gray-100 flex items-center justify-center">

<div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

<h1 className="text-3xl font-bold text-center mb-6">
ATM Registration
</h1>

<form onSubmit={handleSubmit} className="space-y-5">

<div>
<label className="block mb-2 font-medium">
Account Number
</label>

<input
type="number"
name="accno"
value={formData.accno}
onChange={handleChange}
placeholder="Enter Account Number"
className="w-full border p-3 rounded-lg"
required
/>
</div>

<div>
<label className="block mb-2 font-medium">
Name
</label>

<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Enter Name"
className="w-full border p-3 rounded-lg"
required
/>
</div>

<div>
<label className="block mb-2 font-medium">
PIN
</label>

<input
type="password"
name="pin"
value={formData.pin}
onChange={handleChange}
placeholder="Create 4 Digit PIN"
className="w-full border p-3 rounded-lg"
required
/>
</div>

<div>
<label className="block mb-2 font-medium">
Initial Balance
</label>

<input
type="number"
name="balance"
value={formData.balance}
onChange={handleChange}
placeholder="Enter Opening Balance"
className="w-full border p-3 rounded-lg"
required
/>
</div>

<button
type="submit"
className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
>
Register
</button>

</form>

</div>

</div>
);
}

export default Register;