import React,{useEffect, useState} from 'react'
import './randomquotes.css'
import i1 from './twitter.png'
import i2 from './tumblr.png'
const arr=["There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
"Life is 10% what happens to me and 90% of how I react to it.",
"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
"If you can dream it, you can achieve it.",
"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
"Life is what we make it, always has been, always will be.",
"The most difficult thing is the decision to act, the rest is merely tenacity.",
""
];
const authors=["Aristotle","Mae Jemison","Charles Swindoll","Leonardo da Vinci","Zig Ziglar","Ann Landers","Grandma Moses","Amelia Earhart",""];
const colour=["#ACDDDE","#F7D8BA","#FFC0CB","#ADD8E6","#808080","#E0b0FF","#D7B6A5","#f6bc66","#f55c7a","grey"];
function RandomQuotes() {
    const tUrl="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    const [num, setNum] = useState(8);
    const [no, setNo] = useState(9);
    const[twitterUrl,setTwitter]=useState("");
    useEffect(()=>{
            setTwitter(arr[num]);
    });
    const handleClick=()=>{
        var i=Math.floor(Math.random()*(7+1));
        setNum(i);
        var k=Math.floor(Math.random()*colour.length);
        setNo(k);
    }
    return (
        <>
        <div id="div1" style={{backgroundColor:colour[no]}}>
        <center>
        <div className='d1' style={{color:colour[no]}}>
        <p id="quo">“{arr[num]}</p>
        <p id="auth">~{authors[num]}</p>
        <br></br><br></br>
        <div id="di">
        <button id="button1" style={{backgroundColor:colour[no]}}><a href={tUrl+twitterUrl} targer="_blank"><img src={i1}></img></a></button>
        <button onClick={handleClick} id="button3" style={{backgroundColor:colour[no]}}>New Quote</button>
        </div>
        </div>
        </center>
        </div>
        </>
     );
}

export default RandomQuotes;