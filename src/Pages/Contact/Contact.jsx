import React, { useRef, useState } from 'react';
import "../Contact/Contact.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {

    const [Success, setSuccess] = useState("")

    const formRef = useRef();

    const PersonSchema = yup.object().shape({
        Name: yup.string().required("Name is required"),
        EmailAddress: yup.string().email("Email format is not valid").required("Valid email address is required"),
        PhoneNumber: yup.string(),
        Message: yup.string().required("Message is required")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver : yupResolver(PersonSchema)
    });


    const onSubmit = () => {
        emailjs.sendForm('service_lnd17pd', 'template_ljtj0rg', formRef.current, '5H9ekQHtYztzp2ykN')
        setSuccess("Message successfully sent.")
    }

return (
    <div className='Contact'>
        <article>
            <h1>Contact</h1>
        </article>
        <h2>Get In Touch</h2>
        <article>
            <section>
                <figure>
                    <AiTwotoneMail size="2.5rem" className='Email' />
                    <figcaption>
                        <h3>
                            info@davesafeltd.com | davesafeltd@gmail.com
                        </h3>
                    </figcaption>
                </figure>
                <figure>
                    <BsFillTelephoneOutboundFill size="2.5rem" className='Phone' />
                    <figcaption>
                        <h3>
                            0112 570 607
                        </h3>
                    </figcaption>
                </figure>
            </section>
            <section>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <input type="text" name="Name" id="Name" placeholder='Enter Full Name/Organisation (Required)'  
                        {...register("Name")}/>
                        <span className="Error">{errors.Name?.message}</span>
                    </div>
                    <div>
                        <input type="text" name="EmailAddress" id="EmailAddress" placeholder='Enter Email Address (Required)' {...register("EmailAddress")}  />
                        <span className="Error">{errors.EmailAddress?.message}</span>
                    </div>
                    <div>
                        <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder='Enter Phone Number'  
                        {...register("PhoneNumber")} />
                    </div>
                    <textarea type="text" placeholder='Enter Message (Required)' name="Message" id="Message" cols="20" rows="10" {...register("Message")} ></textarea>
                    <span className="Error">{errors.Message?.message}</span>
                    <p className='Success' >{Success}</p>
                </form>
                <button onClick={handleSubmit(onSubmit)} type="submit">Send Message</button> 
            </section>
        </article>
    </div>
)
}

export default Contact