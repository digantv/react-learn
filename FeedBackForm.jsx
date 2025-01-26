import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/FeedbackForm.css'; // Import the CSS file for styling

const FeedbackForm = () => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [anonymous, setAnonymous] = useState(false);

    // const fillColorArray = [
    //     '#f14f45',
    //     '#f16c45',
    //     '#f18845',
    //     '#f1b345',
    //     '#f1d045'
    // ];

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleAnonymousChange = (e) => {
        setAnonymous(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            rating,
            comment,
            anonymous,
        });
        // Submit the feedback logic goes here
    };

    return (
        <div className="card" >
            <h4 className="dashboard_bar" >Give us a Feedback</h4>
            <form className="comment-form"  >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="white-box">
                            <div className="rating-bar">
                            <label htmlFor="comment" className="rating_label">Rating:</label>
                                <div className="star-rating" /* style={{ touchAction: 'none' }}*/>
                                    {/* Dynamic star ratings with color array and transition */}
                                    {[1, 2, 3, 4, 5].map((star, index) => (
                                        <i
                                        // style={{
                                        //     color: star <= rating ? fillColorArray[index] : '#d3d3d3',
                                        //     transition: 'color 0.1s',
                                        // }}
                                            key={star}
                                            className={`las la-star ${star <= rating ? 'active' : ''}`}
                                            onClick={() => handleRatingChange(star)}
                                            
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="comment"  className="rating_label">Comment:</label>
                                <textarea
                                    rows={8}
                                    className="form-control"
                                    name="comment"
                                    placeholder="Leave your comments here..."
                                    id="comment"
                                    value={comment}
                                    onChange={handleCommentChange}
                                />
                            </div>

                            {/* Checkbox for anonymous feedback */}
                            <div className="form-group mb-3">
                                <label className="anonymous-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={anonymous}
                                        onChange={handleAnonymousChange}
                                    />
                                    Submit anonymously
                                </label>
                            </div>

                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="submit btn btn-primary"
                                    id="submit"
                                    name="submit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;





























// const FeedbackForm = () => {

//     const fillColorArray = [
//         '#f14f45',
//         '#f16c45',
//         '#f18845',
//         '#f1b345',
//         '#f1d045'
//     ];
//     const [rating, setRating] = useState(5);
//     const [comment, setComment] = useState('');

//     const handleRatingChange = (newRating) => {

//         setRating(newRating);
//     };

//     const handleCommentChange = (e) => {
//         setComment(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//     };

//     return (

//         <div className="bg-white p-4 rounded align-items-center" id="respond">
//             <h4 className="fs-20" id="reply-title">Leave a Comment</h4>
//             <form className="comment-form" id="commentform" onSubmit={handleSubmit}>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="text-sm-start text-center mt-sm-0 mt-2">
//                             <div className="rating-bar">
//                                 <label className="text-black fs-16 font-w600">Rating:</label>
//                                 <div className="star-rating">
//                                     {[1, 2, 3, 4, 5].map((star) => (
//                                         <i
//                                             key={star}
//                                             className={`las la-star ${star <= rating ? 'active' : ''}`}
//                                             onClick={() => handleRatingChange(star)}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
                            
//                             <div className="form-group mb-3">
//                                 <label htmlFor="comment" className="text-black font-w600">Comment</label>
//                                 <textarea
//                                     rows={8}
//                                     className="form-control"
//                                     name="comment"
//                                     placeholder="Leave your comments here..."
//                                     id="comment"
//                                     value={comment}
//                                     onChange={handleCommentChange}
//                                 />
//                             </div>
//                             <div className="checkbox">
//                                 <label className="checkbox">
//                                     <input
//                                         type="checkbox"
//                                         checked={anonymous}
//                                         onChange={handleAnonymousChange}
//                                     />
//                                     Submit anonymously
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <div className="form-group">
//                                 <input
//                                     type="submit"
//                                     value="Submit"
//                                     className="submit btn btn-primary"
//                                     id="submit"
//                                     name="submit"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>

//         //   <div className="form-group mb-3">
//         //     <div className="media bg-white p-4 rounded align-items-center">
//         //       <div className="media-body d-block  align-items-center justify-content-between">
//         //         <div className="me-2">
//         //           <h4 className="fs-20">Submit Your Feedback</h4>
//         //           <p className="fs-14 mb-0">
//         //             We value your feedback and would love to hear from you.
//         //           </p>
//         //         </div>
//         //         <div className="text-sm-end text-center mt-sm-0 mt-2">
//         //           <div className="feedback-form__rating">
//         //             <span className="badge badge-md badge-success fs-16 mb-2">Rating:</span>
//         //             <div className="star-rating">
//         //               {[1, 2, 3, 4, 5].map((star) => (
//         //                 <i
//         //                   key={star}
//         //                   className={`las la-star ${star <= rating ? 'active' : ''}`}
//         //                   onClick={() => handleRatingChange(star)}
//         //                 />
//         //               ))}
//         //             </div>
//         //           </div>
//         //           <div className="form-group ">
//         //             <textarea
//         //               className="form-control"
//         //               placeholder="Leave your comments here..."
//         //               value={comment}
//         //               onChange={handleCommentChange}
//         //             />
//         //           </div>
//         //           <div className="feedback-form__submit mt-2">
//         //             <button className=" btn-rounded" type="submit" onClick={handleSubmit}>
//         //               Submit
//         //             </button>
//         //           </div>
//         //         </div>
//         //       </div>
//         //     </div>
//         //   </div>
//     );
// };

// export default FeedbackForm;