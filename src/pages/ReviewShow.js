import React from "react";

const ReviewShow = (rev) => {
    const storedReview = rev.rev;
    return (
        <div className="flex mt-3 ">
            <img className="rounded-full w-10 h-10 mt-1" src={storedReview.reviewer_img} />
            <div className="bg-white w-full rounded-lg ml-3 text-left p-2">
                <p><b>{storedReview.reviewer_name}</b></p>
                <p className="text-base pl-2">{storedReview.text}</p>
            </div>
        </div>
    );
}
export default ReviewShow;