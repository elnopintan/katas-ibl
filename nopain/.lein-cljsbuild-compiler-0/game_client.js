goog.provide('nopain.game_client');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('nopain.counter');
goog.require('nopain.execs');
goog.require('enfocus.core');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('fetch.remotes');
nopain.game_client.timer = (new goog.Timer(2000));
nopain.game_client.player_name = cljs.core.atom.cljs$lang$arity$1(null);
nopain.game_client.player_set = cljs.core.atom.cljs$lang$arity$1(cljs.core.PersistentHashSet.EMPTY);
nopain.game_client.fill_coins = (function fill_coins(n){
return enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#coins"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([[cljs.core.str(n),cljs.core.str(" Coins")].join('')], 0))], 0));
});
nopain.game_client.steal = (function steal(event){
var map__7768__7769 = enfocus.core.from.cljs$lang$arity$variadic(event.currentTarget.parentNode,cljs.core.array_seq(["\uFDD0'victim",cljs.core.PersistentVector.fromArray(["h3"], true),enfocus.core.en_get_text()], 0));
var map__7768__7770 = ((cljs.core.seq_QMARK_(map__7768__7769))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__7768__7769):map__7768__7769);
var victim__7771 = cljs.core._lookup.cljs$lang$arity$3(map__7768__7770,"\uFDD0'victim",null);
return fetch.remotes.remote_callback("steal",cljs.core.PersistentVector.fromArray([cljs.core.deref(nopain.game_client.player_name),victim__7771], true),(function (n){
return nopain.game_client.fill_coins(n);
}));
});
enfocus.core.load_remote_dom("/player","t-player/player");
nopain.game_client.t_player = (function t_player(p_name){
var vec__7779__7780 = (function (){
return enfocus.core.get_cached_dom("t-player/player");
}).call(null);
var id_sym7772__7781 = cljs.core.nth.cljs$lang$arity$3(vec__7779__7780,0,null);
var pnod7773__7782 = cljs.core.nth.cljs$lang$arity$3(vec__7779__7780,1,null);
var pnod7773__7783 = enfocus.core.create_hidden_dom(pnod7773__7782);
enfocus.core.i_at.cljs$lang$arity$variadic(id_sym7772__7781,pnod7773__7783,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["h3"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([p_name], 0)),cljs.core.PersistentVector.fromArray(["button"], true),enfocus.core.en_listen("\uFDD0'click",nopain.game_client.steal)], 0));
enfocus.core.reset_ids(id_sym7772__7781,pnod7773__7783);
return enfocus.core.remove_node_return_child(pnod7773__7783);
});
enfocus.core.load_remote_dom("/new","t-new/new");
nopain.game_client.t_new = (function t_new(the_new){
var vec__7791__7792 = (function (){
return enfocus.core.get_cached_dom("t-new/new");
}).call(null);
var id_sym7784__7793 = cljs.core.nth.cljs$lang$arity$3(vec__7791__7792,0,null);
var pnod7785__7794 = cljs.core.nth.cljs$lang$arity$3(vec__7791__7792,1,null);
var pnod7785__7795 = enfocus.core.create_hidden_dom(pnod7785__7794);
enfocus.core.i_at.cljs$lang$arity$variadic(id_sym7784__7793,pnod7785__7795,cljs.core.array_seq([cljs.core.PersistentVector.fromArray([".new"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([the_new], 0))], 0));
enfocus.core.reset_ids(id_sym7784__7793,pnod7785__7795);
return enfocus.core.remove_node_return_child(pnod7785__7795);
});
enfocus.core.load_remote_dom("/thief","t-thief/thief");
nopain.game_client.t_thief = (function t_thief(t_name,coins){
var vec__7803__7804 = (function (){
return enfocus.core.get_cached_dom("t-thief/thief");
}).call(null);
var id_sym7796__7805 = cljs.core.nth.cljs$lang$arity$3(vec__7803__7804,0,null);
var pnod7797__7806 = cljs.core.nth.cljs$lang$arity$3(vec__7803__7804,1,null);
var pnod7797__7807 = enfocus.core.create_hidden_dom(pnod7797__7806);
enfocus.core.i_at.cljs$lang$arity$variadic(id_sym7796__7805,pnod7797__7807,cljs.core.array_seq([cljs.core.PersistentVector.fromArray([".name"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([t_name], 0)),cljs.core.PersistentVector.fromArray(["#coins"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([[cljs.core.str(coins),cljs.core.str(" Coins")].join('')], 0))], 0));
enfocus.core.reset_ids(id_sym7796__7805,pnod7797__7807);
return enfocus.core.remove_node_return_child(pnod7797__7807);
});
nopain.game_client.update_players = (function update_players(players){
var curr_players__7816 = cljs.core.deref(nopain.game_client.player_set);
var added_players__7817 = clojure.set.difference.cljs$lang$arity$2(players,curr_players__7816);
cljs.core.swap_BANG_.cljs$lang$arity$3(nopain.game_client.player_set,clojure.set.union,players);
var G__7818__7819 = cljs.core.seq(added_players__7817);
if(G__7818__7819)
{var player__7820 = cljs.core.first(G__7818__7819);
var G__7818__7821 = G__7818__7819;
while(true){
if(cljs.core.not_EQ_.cljs$lang$arity$2(player__7820,cljs.core.deref(nopain.game_client.player_name)))
{enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#players"], true),enfocus.core.en_append.cljs$lang$arity$variadic(cljs.core.array_seq([nopain.game_client.t_player(player__7820)], 0))], 0));
} else
{}
var temp__3974__auto____7822 = cljs.core.next(G__7818__7821);
if(temp__3974__auto____7822)
{var G__7818__7823 = temp__3974__auto____7822;
{
var G__7824 = cljs.core.first(G__7818__7823);
var G__7825 = G__7818__7823;
player__7820 = G__7824;
G__7818__7821 = G__7825;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
nopain.game_client.get_coins = (function get_coins(){
return fetch.remotes.remote_callback("get-coins",cljs.core.PersistentVector.fromArray([cljs.core.deref(nopain.game_client.player_name)], true),(function (coins){
return nopain.game_client.fill_coins(coins);
}));
});
nopain.game_client.register = (function register(){
var name__7827 = document.getElementById("registerinput").value;
return fetch.remotes.remote_callback("register",cljs.core.PersistentVector.fromArray([name__7827], true),(function (coins){
cljs.core.reset_BANG_(nopain.game_client.player_name,name__7827);
nopain.game_client.timer.start();
return enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#register"], true),enfocus.core.en_substitute.cljs$lang$arity$variadic(cljs.core.array_seq([nopain.game_client.t_thief(name__7827,coins)], 0))], 0));
}));
});
nopain.game_client.setup = (function setup(){
return enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#registerbutton"], true),enfocus.core.en_listen("\uFDD0'click",nopain.game_client.register)], 0));
});
nopain.game_client.update_news = (function update_news(){
return fetch.remotes.remote_callback("read-news",cljs.core.PersistentVector.EMPTY,(function (news){
return enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#news"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$lang$arity$2(nopain.game_client.t_new,news)], 0))], 0));
}));
});
nopain.game_client.start_game = (function start_game(){
return nopain.game_client.setup();
});
nopain.game_client.stop_game = (function stop_game(){
nopain.game_client.timer.stop();
return cljs.core.reset_BANG_(nopain.game_client.player_set,cljs.core.PersistentHashSet.EMPTY);
});
nopain.game_client.paint_game = (function paint_game(){
return fetch.remotes.remote_callback("get-players",cljs.core.PersistentVector.EMPTY,(function (new_players){
nopain.game_client.update_news();
nopain.game_client.get_coins();
return nopain.game_client.update_players(new_players);
}));
});
goog.events.listen(nopain.game_client.timer,goog.Timer.TICK,nopain.game_client.paint_game);
(nopain.execs.add_f.cljs$lang$arity$3 ? nopain.execs.add_f.cljs$lang$arity$3("game",nopain.game_client.start_game,nopain.game_client.stop_game) : nopain.execs.add_f.call(null,"game",nopain.game_client.start_game,nopain.game_client.stop_game));
