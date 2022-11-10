import React from "react";

const Blogs = () => {
    return (
        <div className="w-90% mx-auto mb-12">
            <h2 className="text-4xl text-center my-10 text-orange font-bold">Blogs</h2>
            <div className="grid md:grid-cols-2 ">
                <div className="p-3 m-2">
                    <h2 className="text-2xl my-5 text-orange">Difference between SQL and NoSQL.</h2>
                    <p className="text-white text-justify">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className="p-3 m-2">
                    <h2 className="text-2xl my-5 text-orange">What is JWT, and how does it work?.</h2>
                    <p className="text-white text-justify">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                </div>
                <div className="p-3 m-2">
                    <h2 className="text-2xl my-5 text-orange">What is the difference between javascript and NodeJS?</h2>
                    <p className="text-white text-justify">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                <div className="p-3 m-2">
                    <h2 className="text-2xl my-5 text-orange">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className="text-white text-justify">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>

            </div>
            

        </div>
    );
}
export default Blogs;