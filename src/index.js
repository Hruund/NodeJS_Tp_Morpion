console.log('Nothing implemented yet');

import express from 'express';
import socketio from 'socketio';

const server = express();
const socket = socketio();

const joueur1 = "";
const joueur2 = "";
const joueur1_symbole = "croix";
const joueur2_symbole = "rond";
const state_game = false;
const joueur_gagnant = "";
const joueur_score = ["", 0];