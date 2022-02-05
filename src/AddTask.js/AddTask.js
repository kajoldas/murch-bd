import React from 'react';
import { useForm } from "react-hook-form";

const AddTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch("https://frozen-refuge-91401.herokuapp.com/tasks", {
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
    const id= window.localStorage.getItem('user');
    console.log(id)

    // const onSubmit = (data ) => {
    //     console.log(data)
    //       axios.post(`http://localhost:3000/tasks`, data )
    //       .then(res => {
    //           console.log(res)
    //           if(res.data.insertedId){
    //               alert('Product Added Successfully')
    //               reset();
    //           }
    //       })
    //   };
    return (
        <div>
            <h1>Assign Task to User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input className='w-25 my-1'  {...register("email")} placeholder={user.email} defaultValue={id.email} disabled/> <br /> */}
                <input className='w-25 my-1'  {...register("name")} placeholder="Task Title" /> <br />
                <textarea className='w-25 my-1 h-25' {...register("description")} placeholder="description" /> <br />
                <input className='w-25 my-1' type="date" {...register("date")} /> <br />
                <input className='w-25 my-1' {...register("img")} placeholder="Additional Image Path" /> <br />
                <input className='w-25 my-1' type="submit" />
            </form>
        </div>
    );
};

export default AddTask;