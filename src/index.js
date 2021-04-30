console.log('Nothing implemented yet');

import express from 'express';
import socketio from 'socketio';

const server = express();
const socket = socketio();
const Joi = require('joi');

class Joueur
{
    constructor(name)
    {
        this.name = name;
        this.score = 0;
    }

    add_score(new_score)
    {
        this.score = this.score + new_score;
    }
}

class Morpion
{
    constructor()
    {
        this.game = [[""],[""],[""]];
    }

    reset()
    {
        this.game = "";
    }
}

const joueur1_symbole = "X";
const joueur2_symbole = "O";
const state_game = false;
const waiting_list = [];
const joueur_en_cours = [];

server.get("/", (req, res) => {
    const stream = fs.createReadStream(__dirname + "/../client/index.html");
    stream.pipe(res);
});

const addClient = socket => {
    console.log("New client connected", socket.id);
    clients[socket.id] = socket;
};

const removeClient = socket => {
    console.log("Client disconnected", socket.id);
    delete clients[socket.id];
};

function join_waintin_list(joueur)
{
    const size_needed = 2;
    waiting_list.push(joueur);

    if (waiting_list.length >= size_needed)
    {
        const [a, b] = waiting_list;
        if (state_game == false)
        {
            const game_morpion = new Morpion();
            add_to_game(game_morpion, a, b);
        }
    }
}

function add_to_game(game_morpion, joueur1, joueur2)
{
    waiting_list.splice(index, 1);
    waiting_list.splice(index, 2);
    
    joueur_en_cours.push(joueur1, joueur2);

    state_game = true;
    joinGame(socket);
}

function add_symbol(game_morpion, x, y, symbole)
{
    if (!check_coord(x) || !check_coord(y)) {
        throw new Error('x or y must be between 0 and 2 included.');
    }
    if (!is_case_empty(game_morpion, x, y)) {
        throw new Error('x or y need to be empty.');
    }

    if_every_case_taken(game_morpion);
    if_have_a_winner(game_morpion);
}

function check_coord(z)
{
    return z >= 0 && z <= 2;
}

function is_case_empty(game_morpion, x, y)
{
    return game_morpion.game[x][y] != "";
}

function if_every_case_taken(game_morpion)
{
    if (game_morpion.game != "")
    {
        console.log('Partie finie');
        quit_game(game_morpion, j1, j2, null);
    }
}

function if_have_a_winner(game_morpion)
{
    const state = game_morpion;

    const state1 = check_coord(0) || check_coord(0) && check_coord(0) || check_coord(1) && check_coord(0) || check_coord(2)
    const state2 = check_coord(1) || check_coord(0) && check_coord(1) || check_coord(1) && check_coord(1) || check_coord(2)
    const state3 = check_coord(2) || check_coord(0) && check_coord(2) || check_coord(1) && check_coord(2) || check_coord(2)

    const state4 = check_coord(0) || check_coord(0) && check_coord(1) || check_coord(0) && check_coord(2) || check_coord(0)
    const state5 = check_coord(0) || check_coord(1) && check_coord(1) || check_coord(1) && check_coord(2) || check_coord(1)
    const state6 = check_coord(0) || check_coord(2) && check_coord(1) || check_coord(2) && check_coord(2) || check_coord(2)

    const state7 = check_coord(0) || check_coord(0) && check_coord(1) || check_coord(1) && check_coord(2) || check_coord(2)
    const state8 = check_coord(0) || check_coord(2) && check_coord(1) || check_coord(1) && check_coord(2) || check_coord(0)

    //recup de qui a gagne
    //joueur_winner = j

    if (state1 || state2 || state3 || state4 || state5 || state6 || state7 || state8)
    {
        quit_game(game_morpion, j1, j2, /*joueur_winner*/);
    }
}

function quit_game(game_morpion, j1, j2, joueur_win)
{
    delete game_morpion;
    game_morpion.reset();
    winner(joueur_win)
    redirect_out_player(j1) || redirect_out_player(j2);
    state_game = false;
}

function redirect_out_player(joueur)
{
    console.log('Rediction en dehors de la partie');
}

function winner(joueur)
{
    const joueur_gagnant = joueur;
    add_score(joueur);
}

function add_score(joueur)
{
    joueur.add_score(1);
}