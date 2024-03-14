"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { CircleNotch } from "@phosphor-icons/react"
import Heading from "./Heading"
import { twMerge } from "tailwind-merge"
import { sendGTMEvent } from '@next/third-parties/google'
import { usePathname } from "next/navigation"

const ContactForm = ({ title = '', submitButtonClasses = '', submitButtonText = 'Send Message' }) => {
  const path = usePathname()
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

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
    settings: {
      from_name: "NorthEast K&B",
      subject: "New Contact Form Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      sendGTMEvent({
        event: 'formSubmission',
        pagePath: path,
        pageTitle: document.title,
        formStatus: 'success',
        formMessage: msg
      })
      reset()
    },
    onError: (msg, data) => {
      setIsSuccess(false)
      sendGTMEvent({
        event: 'formSubmission',
        pagePath: path,
        pageTitle: document.title,
        formStatus: 'failed',
        formMessage: msg
      })
    }
  })

  return (
    <div className="p-8 bg-white">
      {title &&
        <Heading level="span" levelStyle="h4" className="mb-4">{title}</Heading>
      }
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            defaultValue=""
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
            defaultValue=""
            className={`w-full focus:ring-4 
              ${errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("email", {
              required: "Please enter your email",
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

        <div>
          <label htmlFor="phone" className="block">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="false"
            defaultValue=""
            className={`w-full focus:ring-4 
              ${errors.phone
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("phone", {
              required: "Please enter your phone number",
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

        <div>
          <label htmlFor="project" className="block">What type of project are you considering?</label>
          <select
            id="project"
            name="project"
            autoComplete="false"
            defaultValue=""
            className={`w-full focus:ring-4
            ${errors.project
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("project")}
          >
            <option value="" disabled>---</option>
            <option value="kitchen remodel">Kitchen Remodel</option>
            <option value="bathroom remodel">Bathroom Remodel</option>
            <option value="other project">Other project</option>
          </select>
          {errors.project && (
            <div className="mt-1 text-red-600">
              <small>{errors.project.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="block">Message</label>
          <textarea
            name="message"
            defaultValue=""
            className={`w-full focus:ring-4
              ${errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("message")}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className={twMerge(`bg-black text-white px-4 py-2 inline-flex justify-center rounded transition-colors hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed ${submitButtonClasses}`)}
          disabled={isSubmitting}>
          {isSubmitting ? (
            <CircleNotch size={32} className="animate-spin" />
          ) : (
            submitButtonText
          )}
        </button>
      </form >

      {isSubmitSuccessful && isSuccess && (
        <div className="my-4 text-sm text-center border p-4 border-green-600 text-green-600">
          Thank you for your message! We will get back to you as soon as we can.
        </div>
      )
      }
      {
        isSubmitSuccessful && !isSuccess && (
          <div className="my-4 text-sm text-center border p-4 border-red-600 text-red-600">
            Something went wrong. Please try again later.
          </div>
        )
      }
    </div>
  )
}

export default ContactForm
