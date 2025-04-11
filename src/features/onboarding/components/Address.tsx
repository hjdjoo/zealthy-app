"use client";

export default function AddressForm() {


  return (
    <>
      <p id="address-form" className={`text-xl font-bold underline mb-2`}
      > Address: </p>
      <label htmlFor="street-address"
        className={`flex w-full mb-2`}>
        <p className={`flex grow justify-end mr-2`}>
          Street Address:
        </p>
        <input id="street-address"
          type="text"
          name="street_address"
          autoComplete="off"
          className={`w-3/5 border border-black rounded-sm px-2`}
        />
      </label>
      <label htmlFor="city"
        className={`flex w-full mb-2`}>
        <p className={`flex grow justify-end mr-2`}>
          City:
        </p>
        <input id="city"
          type="text"
          name="city"
          autoComplete="off"
          className={`w-3/5 border border-black rounded-sm px-2`}
        />
      </label>
      <label htmlFor="state"
        className={`flex w-full mb-2`}>
        <p className={`flex grow justify-end mr-2`}>
          State:
        </p>
        <input id="state"
          type="text"
          name="state"
          autoComplete="off"
          className={`w-3/5 border border-black rounded-sm px-2`}
        />
      </label>
      <label htmlFor="zip"
        className={`flex w-full mb-2`}>
        <p className={`flex grow justify-end mr-2`}>
          Zip:
        </p>
        <input id="zip"
          type="text"
          name="zip"
          autoComplete="off"
          className={`w-3/5 border border-black rounded-sm px-2`}
        />
      </label>
    </>
  )

}