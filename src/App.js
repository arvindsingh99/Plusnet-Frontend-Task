import React, { useState } from 'react';
import './style.css'
function App() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  return (
    <div className="App">

     
      <main>
      <h1>Wi-Fi signal FAQs</h1>
        <div className="detail" >
          <summary style={{ backgroundColor: isShown1 ? 'rgb(0, 161, 202)' : '' }}
            onClick={() => setIsShown1(!isShown1)}
          >Have I found the best home for my router?{isShown1 && (<span>▲</span>) || (<span>▼</span>)}</summary>
          {isShown1 && (
            <div className="faq-content">
              <p>
                This can be a bit tricky, because there's two things you need to keep in mind. Where's best for both your broadband and your Wi-Fi signal. Here are some tips to help you decide.
              </p>
              <h3> Best for your broadband signal</h3>
              <p>
                First of all, find your [master telephone socket](https://www.google.com/search?q=master+telephone+socket&oq=master+telephone+socket). This is the best socket to connect your router to. It's usually closest to where the telephone line comes into your home or office. You don't have to connect your router to this one. But you'll get the best broadband performance from it, especially if you have a poor quality or long line.
                <br />
                If you find your broadband works just as well in other sockets, go ahead and use them instead. But if you're having problems, like connection dropping regularly, use the master socket whilst you're sorting it out.
              </p>
              <h3>Best for Wi-Fi signal</h3>
              <p>
                For the strongest connection, it's best to put your router:
              </p>
              <ul>
                <li>out in an open space in your home or office, that's not on the floor</li>
                <li>close to your computer (somewhere central in your home or office is best)</li>
                <li>away from any thick walls, metal objects or electrical appliances</li>
              </ul>
              <p>
                Don't worry if you can't do them all, but do as many as you can.
              </p>
            </div>)
          }
        </div>

        <div className="detail" >
          <summary style={{ backgroundColor: isShown2 ? 'rgb(0, 161, 202)' : '' }}
            onClick={() => setIsShown2(!isShown2)}
          >How do I get rid of Wi-Fi interference?{isShown2 && (<span>▲</span>) || (<span>▼</span>)}</summary>
          {isShown2 && (
            <div className="faq-content">
              <p>
                Your router uses radio signals, which can be interrupted by other electrical appliances in your home. Microwaves, Bluetooth devices, cordless phones, fridges and baby monitors are some of the most common culprits. So try and keep your router away from them.
              </p>
              <p>
                If you're getting a lot of problems when you use a cordless phone, you might need to get one that broadcasts on a higher frequency. Before you buy one, tell the retailer about the problem you're having, so they can advise you on the best phone.
              </p>
            </div>)
          }
        </div>

        <div className="detail" >
          <summary style={{ backgroundColor: isShown3 ? 'rgb(0, 161, 202)' : '' }}
            onClick={() => setIsShown3(!isShown3)}
          >How do I get the best from my Wi-Fi channel?{isShown3 && (<span>▲</span>) || (<span>▼</span>)}</summary>
          {isShown3 && (
            <div className="faq-content">
              <p>
                or 2.4GHz Wi-Fi routers there are 13 channels for Wi-Fi in the UK, each giving a slightly different frequency. You'll only be connected to one, so the others can sometimes disturb your connection.
              </p>
              <p>
                So, how does your router decide which one to connect to? Well, it'll usually try to choose the one being used the least in the area.
              </p>
              <p>
                The new Plusnet Hub One router is even cleverer. It uses dual-band Wi-Fi, which means it connects to two different frequencies, to give you an even stronger Wi-Fi signal.
              </p>
              <p>
                Get the best from your new Hub One router by using devices alongside it which work on 5GHz. Newer computers should work fine, but older machines might need a bit of upgrading. You can do this easily using a dual-band USB dongle. Have a look at our [router guides](/help/broadband/router-user-guides/) for a bit more on this.
              </p>
              <p>
                If you're having problems with any router, you should check it's connected to a channel that's as free as possible. There are ways to check how many routers are using the same channel as you, have a look on our [forums](https://community.plus.net/forum/) for more info. If, when you look, your router is using a channel with a lot of routers on it, you'll be better off changing to a less common one. Channel one, six or eleven will usually give you the best speed.
              </p>

            </div>)
          }
        </div>


      </main>
    </div >
  );
}

export default App;