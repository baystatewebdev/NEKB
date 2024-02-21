"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { CircleNotch } from "@phosphor-icons/react"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  })
  const [isSuccess, setIsSuccess] = useState(false)
  // const [message, setMessage] = useState(false)

  // Please update the Access Key in the .env
  const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "NorthEast K&B",
      subject: "New Contact Form Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      reset()
    },
    onError: (msg, data) => {
      setIsSuccess(false)
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white flex flex-col gap-4">
        <input
          type="checkbox"
          id=""
          className="hidden"
          {...register("botcheck")}
        />

        <div className="">
          <label htmlFor="name" className="block">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="false"
            className={`w-full focus:ring-4
              ${errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("name", {
              required: "Please enter your name",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="">
          <label htmlFor="email" className="block">Email</label>
          <input
            id="email_address"
            type="email"
            name="email"
            autoComplete="false"
            className={`w-full focus:ring-4 
              ${errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="">
          <label htmlFor="phone" className="block">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="false"
            className={`w-full focus:ring-4 
              ${errors.phone
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("phone", {
              required: "Enter your phone number",
              pattern: {
                value: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <div className="mt-1 text-red-600">
              <small>{errors.phone.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="block">Message</label>
          <textarea
            name="message"
            className={`w-full focus:ring-4
              ${errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 inline-flex justify-center rounded transition-colors hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed"
          disabled={isSubmitting}>
          {isSubmitting ? (
            <CircleNotch size={32} className="animate-spin" />
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="my-4 text-sm text-center border p-4 border-green-600 text-green-600">
          Thank you for your message! We will get back to you as soon as we can.
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="my-4 text-sm text-center border p-4 border-red-600 text-red-600">
          Something went wrong. Please try again later.
        </div>
      )}
    </>
  )
}

export default ContactForm
