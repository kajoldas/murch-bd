import React from "react";
import { useForm } from "react-hook-form";



const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        fetch("https://fierce-sands-85550.herokuapp.com/tasks", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
        console.log(data);
            reset()
        // data.preventDefault();
    }
   

    return (
        <form className="my-5 py-5 bg container" onSubmit={handleSubmit(onSubmit)}>


            <input
                className="px-1  rounded-pill"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })} /> <br />
            <input className="my-3 btn btn-primary" type="submit" />
        </form>
    );
};

export default MakeAdmin;