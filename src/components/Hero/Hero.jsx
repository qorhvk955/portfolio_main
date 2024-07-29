import React from "react";
import './Hero.scss'

const Hero = () => {
    return(
        <section class="intro">
            <h1 class="intro__title">냠냠</h1>

            <div class="intro__roller-wrap">
                <div class="intro__roller">
                    <div class="intro__roller-item intro__roller-item--one">
                        <span class="intro__text">LeeJungHeePortFolio</span>
                        <span class="intro__text">LeeJungHeePortFolio</span>
                    </div>
                    <div class="intro__roller-item intro__roller-item--two">
                        <span class="intro__text">LeeJungHeePortFolio</span>
                        <span class="intro__text">LeeJungHeePortFolio</span>
                    </div>
                </div> 
                <div class="intro__bottom-roller">
                    <div class="intro__roller-item intro__roller-item--one">
                        <span class="intro__text">LeeJungHeePortFolio</span>
                        <span class="intro__text">LeeJungHeePortFolio</span>
                    </div>
                    <div class="intro__roller-item intro__roller-item--two">
                        <span class="intro__text">LeeJungHeePortFolio</span>
                        <span class="intro__text">LeeJungHeePortFolio</span>
                    </div>
                </div>  
            </div>

            <div class="intro__box"></div>
        </section>

    )
}

export default Hero; 