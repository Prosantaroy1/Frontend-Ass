import { useForm } from 'react-hook-form';
import './App.css'
import { useState } from 'react';

function App() {

  const { register, handleSubmit , formState: { errors },} = useForm();
  const onSubmit = data => {
    console.log(data);
    alert('Submit Data Succesfully')
  }

  const [country, setCountry] = useState('Netherlands')

  const handleToggle = e => {
    setCountry(e.target.value)
  }

  return (
    <div className='w-7/12 mx-auto  p-14 mt-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        {/* filter country */}
        <select {...register('country')} required defaultValue="Server location" onClick={handleToggle} className="select w-full select-neutral">
          <option disabled={true}>Country/Region</option>
          <option value='netherlands'>Netherlands</option>
          <option value='australia'>Australia</option>
        </select>
        {errors.country && <p role="alert">Seleted Country</p>}
        {/* full name */}
        <div className='grid pt-3 grid-cols-1 md:grid-cols-2 gap-4'>
          <input type="text" placeholder="First Name" className="input w-full  hover:outline-0" required  {...register("firstName")} />
           {errors.firstName && <p role="alert">input fist name ?</p>}
          <input type="text" placeholder="Last Name" className="input w-full hover:outline-0"  required {...register("lastName")} />
          {errors.lastName && <p role="alert">input last name ?</p>}
        </div>
        {/* company */}
         <input type="text" placeholder="Company (optional)" required className="input w-full mt-3 hover:outline-0"  {...register("company")} />
        {errors.company && <p role="alert">input company name ?</p>}
        {/* Address */}
        <input type="text" placeholder="Address" required className="input w-full mt-3 hover:outline-0"  {...register("address")} />
        {errors.address && <p role="alert">input address name ?</p>}
        {/* Apartment suite */}
        <input type="text" placeholder="Apartment, suite, etc.(optional)" className="input mt-3 w-full hover:outline-0"  {...register("apartment")} />
        {errors.apartment && <p role="alert">input apartment name?</p>}
        {/* post code city field */}
        <div className='pt-3 flex items-center justify-between gap-4'>
          <input type="text" placeholder="Postal Code" className="input w-full  hover:outline-0"  {...register("postal code")} />
          {
            country === 'australia' && <select  {...register("state")} required className="select select-neutral">
              <option disabled={true}>State/territory</option>
              <option value='dhaka'>Dhaka</option>
              <option value='borisal'>Borisla</option>
              <option value='cumilla'>Cumilla</option>
            </select>
          }
          {errors.state && <p role="alert">input apartment name?</p>}

          <input type="text" required placeholder="City" className="input w-full hover:outline-0"  {...register("city")} />
          {errors.city && <p role="alert">input apartment name?</p>}
        </div>
        {/* Phone */}
        <input type="number" placeholder="Phone " className="input w-full mt-3 hover:outline-0"  {...register("phone")} />
        {errors.phone && <p role="alert">input phone number?</p>}
        <input type="submit" className='mt-3 w-full bg-black text-white px-4 py-2 rounded-md' />
      </form>
    </div>
  )
}

export default App
