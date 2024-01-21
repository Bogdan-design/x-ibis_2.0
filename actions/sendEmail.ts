'use server'
import React from 'react'
import {Resend} from "resend";
import {getErrorMessage, validateString} from "@/lid/utils/utils";
import {ContactFormEmail} from "@/email/form";



const resend = new Resend(process.env.RESENT_API_KEY)




export const sendEmail = async (formData: FormData) => {
    const message = formData.get('senderMessage')
    const email = formData.get('senderEmail')
    const phone = formData.get('senderPhone')

//simple server-side-validation
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }
    if (!validateString(phone, 50)) {
        return {
            error: 'Invalid phone'
        }
    }
    if (!validateString(email, 500)) {
        return {
            error: 'Invalid email'
        }
    }
let data

   try {
        data = await resend.emails.send({
            from: 'Contact form <onboarding@resend.dev>',
            to: ['info@x-ibis.com'],
            subject: 'Message from X-IBIS form',
            reply_to: email as string,
            react: React.createElement(ContactFormEmail,{
                message:message as string,
                senderEmail:email as string,
                phone:phone as string,
            })

        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
   }
    return {
        data
    }


}