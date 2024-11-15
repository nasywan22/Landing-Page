import './navbar.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

function NavigationBar() {
    const [Count, SetCount] = useState(0);

    const handleClick = () => {
        SetCount(Count + 1);
    }

    const handleReset = () => {
        SetCount(0);
    }

    return (
        <>
            <div className="navbar container-xl w-full bg-slate-700 flex justify-between items-center px-10 py-0 h-14 fixed top-0">
                <div className="ntahlah flex gap-6 items-center">
                    <h1 className="text-white font-semibold text-xl cursor-default select-none">MyNavbar</h1>

                    <div className="splitter relative">.</div>

                    <button className="border-2 border-blue-400 rounded-md bg-slate-800 text-white py-1 px-5 flex" id='number' onClick={handleClick}>
                        Count Me : {Count}
                    </button>

                    {Count > 0 && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.23 }}
                            className="border-2 border-white rounded-md bg-red-800 text-white py-1 px-5 flex"
                            onClick={handleReset}
                        >
                            Reset Me
                        </motion.button>
                    )}

                </div>

                <ul className="flex items-center gap-10 text-white h-full">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Content</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavigationBar;