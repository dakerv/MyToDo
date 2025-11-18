import { useContext, useState, createContext } from "react";

type ThemeName = 'Petal' | 'Mint' | 'Neutral';

type Theme = {
    backgroundColor: string;
    card: string;
    text: string;
    accent: string;
}

const themes : Record <ThemeName, Theme> = {
    Petal: {
        backgroundColor: 'pink',
        card: 'lightpink',
        text: 'darkred',
        accent: 'deeppink',
    },
    Mint: {
        backgroundColor: 'lightgreen',
        card: 'palegreen',
        text: 'darkgreen',
        accent: 'mediumseagreen',
    },
    Neutral: {
        backgroundColor: 'lightgray',
        card: 'gainsboro',
        text: 'dimgray',
        accent: 'gray',
    }
}