import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

type Forminputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () => {
    const {register, handleSubmit, formState: { errors } } = useForm<Forminputs>()

    const onSubmit: SubmitHandler<Forminputs> = data => {
        emailjs.send(
            'service_hq0mu8y',
            'template_t3otg0s',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            '7RdllfqF2EoyAtag8'
        )
    }


    return (
        <main>
            <h3 className="font-extrabold mb-4 text-3xl">Contact</h3>

            <p>ENAIL: alphaphyto93@gmail.com</p>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="block" htmlFor="subject">Sujet du mail</label>
                <input {...register("subject")} className="border" type="text" name="subject" id="subject" placeholder="quel est le sujet ?"/>
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="email">Email</label>
                <input {...register("email", { required: true})} className="border" type="email" name="email" id="subject" placeholder="votre email"/>

                {errors.email && <p className="text-[red]">Email requis</p>}
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="message">Message</label>
                <textarea {...register("message")} rows={5} className="border resize-none"  name="message" id="message" placeholder="votre message"/>
            </div>
                
                <input type="submit" className="block bg-[green] text-[white] py-3 px-3 hover:bg-[gray]"/>
            </form>
        </main>
    )
}