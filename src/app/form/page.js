'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Navbar from "../Navbar";

// console.log(z.string().email())
const FromSchema = z.object({
    name: z.string().min(1, 'name field is required'),
    email: z.string().email('email field is required'),
    password: z.string().min(10, 'number is required')
})


let Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FromSchema)
    });
    // console.log(useForm());

    const formSubmit = (data) => {
        console.log(data);
    }


    return (
        <>
            <Navbar />
            <form action="" className="form" onSubmit={handleSubmit(formSubmit)}>
                <input type="text" placeholder="name" {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
                <input type="email" placeholder="Email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
                <input type="password" placeholder="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
                {/* <select name="" id="">
                    <option value="" disabled selected>---options---</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="next">Next.js</option>
                </select> */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default Form;