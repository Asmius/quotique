import { useState,React,useEffect } from 'react';
import { HiOutlineChatAlt } from "react-icons/hi";
import Navbar from './Navbar';
import Footer from './Footer';
import "./Homepage.css";

function Homepage(){
    const [Quote,setQuote]=useState("Fetching...");
    const [Author, setAuthor] = useState('Fetching...');

    const api_url="https://api.quotable.io/random?category=all&count =1&MinLength=50";

    async function getQuote(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setAuthor(data.author);
            setQuote(data.content);
        }
        catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }
    
    useEffect(() => {
        getQuote(api_url);
    }, []);

    return(
        <>
            <Navbar />
            <div className='home-container'>
                <div className='home-quote'>
                    <p className='quote'>"{Quote}"</p>
                    <div className='author-name'>
                            <hr width="2%" />
                            {Author}
                    </div>
                </div>
                <div>
                    <button className='shuffle-btn' onClick={() => getQuote(api_url)}>
                        <img src='/dice.svg' alt='dice-img'></img>
                        Shuffle
                    </button>
                </div>

                <div className='newsletter-section'>
                    <h1 className='newsletter-title'>
                        UNLOCK DAILY WISDOM
                    </h1>
                    <p>
                        Submerge yourself in daily wisdom. Subscribe Now for a captivating infusion of thought-provoking quotes, unlocking the beauty of each day with profound insights that touch your soul.
                    </p>
                    <div className='news-label'>
                        <input type='email' name="email" placeholder='Enter your email address' />
                        <button className="subscribe">Subscribe</button>
                    </div>
                </div>

                <div className='connect-section' id="connect-section">
                    <div className='text-section'>
                        <h1 className='connect-title'>
                            LET' S CONNECT
                        </h1>
                        <p>
                            Enjoying the website? I'm available online most of the time and would love to connect with you. Feel free to reach out now – let's start a conversation!
                        </p>
                        <a className='get-in-touch' href="https://www.linkedin.com/in/s-u-r-e-s-h/">Get In Touch <HiOutlineChatAlt className="chat-icon"/></a>
                    </div>
                    <img src='/images/chat-img.png' alt='chat-img' className='chat-img'></img>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Homepage;