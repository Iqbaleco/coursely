import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='flex flex-wrap m-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What do Coursly courses include?</h2>
                        <p>Each Udemy course is created, owned and managed by the instructor(s). The foundation of each Udemy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. </p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How do I take a coursly course?</h2>
                        <p>Udemy courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app. After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your Udemy account). You can also begin the course by logging in and navigating to your My learning page.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Where can I go for help?</h2>
                        <p>If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. Our Help Center has extensive information regarding Udemy’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;