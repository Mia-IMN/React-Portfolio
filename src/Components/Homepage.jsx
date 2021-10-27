import React from 'react'
import Image1 from './Images/Image3.jpg'

const Homepage = () => {
    class TypeWriter {
        constructor(txtElement, words, wait = 3000) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }
      
        type() {
          const current = this.wordIndex % this.words.length;
          const fullTxt = this.words[current];
          if(this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
          let typeSpeed = 100;

          if(this.isDeleting) {
            typeSpeed /= 1.5;
          }
      
          if(!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
          } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 700;
          }
      
          setTimeout(() => this.type(), typeSpeed);
        }
      }
      
      
      document.addEventListener('DOMContentLoaded', init);
      
      function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
      }
    return (
        <div id="home" className="Homepage" style={{backgroundImage: `url(${Image1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="home-text" >
                Welcome 
                <div className="motion-text">
                    <h1>I'm 
                    <span className="txt-type" data-wait="3000" data-words='[ " Mia Ikechukwu"," a Frontend Developer", " a Freelancer"]'></span></h1>
                    <p>based in Rivers State, Nigeria</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage
