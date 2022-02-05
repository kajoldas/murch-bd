import React from 'react';
import { useForm } from "react-hook-form";

const Submit = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch("https://fierce-sands-85550.herokuapp.com/submit", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
        console.log(data);
        reset();
        // data.preventDefault();
    }

    return (
        <div>
            <h1>Submit Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className='w-25 my-1 h-25' {...register("description")} placeholder="type" /> <br />
                <input className='w-25 my-1' type="file" {...register("file")} placeholder="Attach" /> <br />
                {/* <input className='w-25 my-1'ref={register} type="file" name="attach" /> <br /> */}
                <input className='w-25 my-1 btn btn-primary'  type="submit" />
            </form>
        </div>
    );
};
export default Submit;