import React, { Component } from 'react';
import './content.css';

class Content extends Component {
    MainContent() {
        return (    
            <>
                <div className="cc container-lg h-screen bg-white flex justify-center items-center flex-col ">
                
                    <div  className=" z-10 text-center ">
                    <p className="  rounded-md  text-balance ">if you want to know more information <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-white"><a href="">Read More</a></span></p>
                    <h1 className="text-4xl text-balance  tracking-tight sm:text-6xl font-bold">Welcome to the <span className="text-blue-500 sekolah">SMK 13 Bandung</span> website</h1>
                    <p className="text-balance  tracking-tight">all information about our school is here. please search for it</p>
                    <div className="flex mt-16 gap-5 justify-center">
                    <button class="unique-button">
                        <div class="svg-wrap">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                            </svg>
                        </div>
                    <span>Get Started</span>
                    </button>

                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Learn More</span>
                    </button>
                    </div>
                    </div>
                </div>
            </>
        );
    }

    Highlight() {``
        const contentList = () => {
            let theList = {};

            for (let i = 0; i < 6; i++) {
                theList[i] = (
                    <div className="container-sm bg-slate-400 rounded-md px-5 py-1">
                        <h2 className="text-lg font-bold text-white">Content {i + 1}</h2>
                        <p className='text-gray-300'>This is content {i + 1}</p>
                    </div>
                );
            }

            return theList;
        }

        return (
            <>
                <div className="highlight container-lg flex flex-row mx-10 my-5 gap-5">
                    <div className="container h-60 bg-gray-300 flex justify-center items-center flex-col rounded-md">
                        <h1 className="text-2xl font-bold">Highlight</h1>
                        <p>This is the highlight area.</p>
                    </div>

                    <div className="HighlightContentList container-sm border-l-2 border-l-gray-500 h-60 p-5 flex gap-5 flex-col w-3/5 overflow-y-scroll box-border">
                        {/* <div className="container-sm bg-slate-400 rounded-md px-5 py-1">
                            <h2 className="text-lg font-bold text-white">Content 1</h2>
                            <p className='text-gray-300'>This is content 1.</p>
                        </div> */}

                        {Object.values(contentList()).map((item) => item)}
                    </div>
                </div>
            </>
        );
    }

    AboutUs() {
        return (
            <>
                <div className="container-lg h-60 w-full bg-gray-300 flex justify-center items-center flex-col rounded-md">
                    <h1 className="text-2xl font-bold">About Us</h1>
                    <p>This is the about us area.</p>
                </div>
            </>
        );
    }

    Superiority_Feature() {
        return (
            <>
                <div className="container-lg h-60 w-full bg-gray-300 flex justify-center items-center flex-col rounded-md">
                    <h1 className="text-2xl font-bold">Superiority Feature</h1>
                    <p>This is the superiority feature area.</p>
                </div>
            </>
        );
    }

    Another_Supremacy_Feature() {
        return (
            <>
                <div className="container-lg h-60 mx-10 my-4 bg-gray-300 flex justify-center items-center flex-col rounded-md">
                    <h1 className="text-2xl font-bold">Another Supremacy Feature</h1>
                    <p>This is the another supremacy feature area.</p>
                </div>
            </>
        );
    }

    Testimony() {
        return (
            <>
                <div className="flex flex-col gap-3 mt-10">
                    <div className="container-lg h-48 w-full bg-gray-300 flex justify-center items-center flex-col rounded-md">
                        <h1 className="text-2xl font-bold">Testimony Company</h1>
                        <p>This is the testimony area.</p>
                    </div>

                    <div className="container-lg h-48 w-full bg-gray-300 flex justify-center items-center flex-col rounded-md">
                        <h1 className="text-2xl font-bold">Testimony from people</h1>
                        <p>This is the testimony area.</p>
                    </div>
                </div>
            </>
        );
    }

    render() {
        return (
            <> 
            <div className="mb-20">
                {this.MainContent()}

            </div>
                <div className="my-20">
                    {/* {this.MainContent()} */}
                    {this.Highlight()}

                    <div className='container-lg flex flex-row mx-10 my-3 gap-4 justify-between'>
                        {this.AboutUs()}
                        {this.Superiority_Feature()}
                    </div>

                    {this.Another_Supremacy_Feature()}
                    {this.Testimony()}
                </div>
            </>
        );
    }
}

export default Content;