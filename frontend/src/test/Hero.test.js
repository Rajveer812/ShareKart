import React from 'react';
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Hero from '../landing_page/home/Hero';
import { CookiesProvider } from "react-cookie";

describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(
        <CookiesProvider>
            <Hero/>
        </CookiesProvider>
        );
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    });
    

});