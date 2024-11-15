import React, { Component } from 'react';
import './content.css';

class Content extends Component {
    MainContent() {
        return (
            <>
                <div className="container-lg h-96 mx-10 my-3 bg-gray-300 flex justify-center items-center flex-col rounded-md">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                    <p>This is the main content area.</p>
                </div>
            </>
        );
    }

    Highlight() {
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
                <div className="my-20">
                    {this.MainContent()}
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