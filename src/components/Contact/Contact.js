import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import email from '../../Assets/emails.gif'
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_h19xuhh', 'template_84tgs57', form.current, 'P-m2uS4BrpBSm0s1q')
            .then((result) => {
                toast.success('Message sent')
                e.target.reset();

            }, (error) => {
                toast.error('Somthing worng')
            });
    };
    return (
        <div>
            <div className='mt-10 container w-full mx-auto' id='contact' >
                <div className=" text-white container w-full mx-auto "
                >
                    <div className="hero bg-base-200">
                        <section className=" dark:bg-gray-800 dark:text-gray-100">
                            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                                <img src={email} alt="" className="object-cover mt-10 p-8 w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                                    <span className="block mb-2 dark:text-violet-400">Get In Touch</span>
                                    <h1 className="text-5xl font-extrabold dark:text-gray-50">Contact Me</h1>
                                    <p className="my-8">
                                        I do receive your messages and will respond asap if the valid email is provided
                                    </p>
                                    <form ref={form} onSubmit={sendEmail} className="self-stretch text-zinc-900 space-y-3 ng-untouched ng-pristine ng-valid">
                                        <div className="form-control">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="example@email.com"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>
                                        <div className="form-control">

                                            <textarea
                                                type="text"
                                                name="message"
                                                placeholder="Write Your Message"
                                                className="input input-bordered h-36"
                                                required
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input
                                                className="btn btn-outline btn-primary bg-slate-100 w-1/2 mx-auto"
                                                type="submit"
                                                value="send message"
                                            />
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;