console.log('Nothing implemented yet');

import express from 'express';
import socketio from 'socketio';

const server = express();
const socket = socketio();

class Joueur
{
    constructor(name)
    {
        this.name = name;
        this.score = 0;
    }
}

class Morpion
{
    constructor()
    {
        this.game = [[""],[""],[""]];
    }
}

const joueur1_symbole = "X";
const joueur2_symbole = "O";
const state_game = false;
const joueur_gagnant = joueur;
const waiting_list = [];
const game_morpion = new Morpion();

server.get('/', function (req, res) {

    const joueur1 = new Joueur("jean");
    join_waintin_list(joueur1);

})

function join_waintin_list(joueur)
{
    const size_needed = 2;
    waiting_list.push(joueur_obj);

    if (waiting_list.length >= size_needed)
    {
        const [a, b] = waiting_list;
        if (game_morpion.game = "")
        {
            add_to_game(a, b);
        }
    }
}

function add_to_game(joueur1, joueur2)
{
    waiting_list.splice(index, 1);
    waiting_list.splice(index, 2);
}

function add_symbol(game_morpion, x, y, symbole)
{
    if (!checkCoord(x) || !checkCoord(y)) {
        throw new Error('x or y must be between 0 and 2 included.');
    }
    if (!is_case_empty(game_morpion, x, y)) {
        throw new Error('x or y need to be empty.');
    }
}

function check_coord(z)
{
    return z >= 0 && z <= 2;
}

function is_case_empty(game_morpion, x, y)
{
    return game_morpion.game[x][y] != "";
}