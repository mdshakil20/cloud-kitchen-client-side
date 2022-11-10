import React from "react";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
    useTitle("Add service");
    const addServiceHandler =event =>{
        
        event.preventDefault();
        //form input
        const  form= event.target;
        const name = form.name.value;
        const imgURL = form.img.value;
        const description = form.description.value;
        const price = form.price.value;

        const newService = {
            name: `${name}`,
            img: `${imgURL}`,
            description: `${description}`,
            rating: null,
            price: `${price}`,
            reviews:[]
        }

        console.log(newService);


        //data post 
        fetch('https://y-puce-two.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('Service Added Successfully');
                    form.reset();
                }
            })
    }
    return (
        <div className="w-80% md:w-60% mx-auto mt-8">
            <h2 className="text-white text-center text-3xl font-bold text-orange">Add a new service.</h2>
            <form onSubmit={addServiceHandler}>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text text-white">Service Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input text-black input-bordered" required />
                </div>
                
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text text-white">Service Image URL</span>
                    </label>
                    <input type="text" placeholder="Service image URL" name="img" className="input text-black input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text text-white">Description</span>
                    </label>
                    <input type="text" placeholder="Description" name="description" className="input text-black input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text text-white">Price</span>
                    </label>
                    <input type="text" placeholder="Price" name="price" className="input text-black input-bordered" required />
                </div>
                <button className="btn normal-case btn-warning bg-orange my-6 rounded-lg text-black">Add Service</button>   
            </form>

        </div>

    );
}
export default AddService;

// "name"
// "img"
// "description"
// "rating"
// "price"
// "reviews"