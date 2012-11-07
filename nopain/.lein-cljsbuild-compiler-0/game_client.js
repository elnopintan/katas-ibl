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
nopain.game_client.player_name = cljs.core.atom.call(null,null);
nopain.game_client.player_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
nopain.game_client.fill_coins = (function fill_coins(n){
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#coins"], true),enfocus.core.en_content.call(null,[cljs.core.str(n),cljs.core.str(" Coins")].join('')));
});
nopain.game_client.steal = (function steal(event){
var map__17654__17655 = enfocus.core.from.call(null,event.currentTarget.parentNode,"\uFDD0'victim",cljs.core.PersistentVector.fromArray(["h3"], true),enfocus.core.en_get_text.call(null));
var map__17654__17656 = ((cljs.core.seq_QMARK_.call(null,map__17654__17655))?cljs.core.apply.call(null,cljs.core.hash_map,map__17654__17655):map__17654__17655);
var victim__17657 = cljs.core._lookup.call(null,map__17654__17656,"\uFDD0'victim",null);
return fetch.remotes.remote_callback.call(null,"steal",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,nopain.game_client.player_name),victim__17657], true),(function (n){
return nopain.game_client.fill_coins.call(null,n);
}));
});
enfocus.core.load_remote_dom.call(null,"/player","t-player/player");
nopain.game_client.t_player = (function t_player(p_name){
var vec__17665__17666 = (function (){
return enfocus.core.get_cached_dom.call(null,"t-player/player");
}).call(null);
var id_sym17658__17667 = cljs.core.nth.call(null,vec__17665__17666,0,null);
var pnod17659__17668 = cljs.core.nth.call(null,vec__17665__17666,1,null);
var pnod17659__17669 = enfocus.core.create_hidden_dom.call(null,pnod17659__17668);
enfocus.core.i_at.call(null,id_sym17658__17667,pnod17659__17669,cljs.core.PersistentVector.fromArray(["h3"], true),enfocus.core.en_content.call(null,p_name),cljs.core.PersistentVector.fromArray(["button"], true),enfocus.core.en_listen.call(null,"\uFDD0'click",nopain.game_client.steal));
enfocus.core.reset_ids.call(null,id_sym17658__17667,pnod17659__17669);
return enfocus.core.remove_node_return_child.call(null,pnod17659__17669);
});
enfocus.core.load_remote_dom.call(null,"/new","t-new/new");
nopain.game_client.t_new = (function t_new(the_new){
var vec__17677__17678 = (function (){
return enfocus.core.get_cached_dom.call(null,"t-new/new");
}).call(null);
var id_sym17670__17679 = cljs.core.nth.call(null,vec__17677__17678,0,null);
var pnod17671__17680 = cljs.core.nth.call(null,vec__17677__17678,1,null);
var pnod17671__17681 = enfocus.core.create_hidden_dom.call(null,pnod17671__17680);
enfocus.core.i_at.call(null,id_sym17670__17679,pnod17671__17681,cljs.core.PersistentVector.fromArray([".new"], true),enfocus.core.en_content.call(null,the_new));
enfocus.core.reset_ids.call(null,id_sym17670__17679,pnod17671__17681);
return enfocus.core.remove_node_return_child.call(null,pnod17671__17681);
});
enfocus.core.load_remote_dom.call(null,"/thief","t-thief/thief");
nopain.game_client.t_thief = (function t_thief(t_name,coins){
var vec__17689__17690 = (function (){
return enfocus.core.get_cached_dom.call(null,"t-thief/thief");
}).call(null);
var id_sym17682__17691 = cljs.core.nth.call(null,vec__17689__17690,0,null);
var pnod17683__17692 = cljs.core.nth.call(null,vec__17689__17690,1,null);
var pnod17683__17693 = enfocus.core.create_hidden_dom.call(null,pnod17683__17692);
enfocus.core.i_at.call(null,id_sym17682__17691,pnod17683__17693,cljs.core.PersistentVector.fromArray([".name"], true),enfocus.core.en_content.call(null,t_name),cljs.core.PersistentVector.fromArray(["#coins"], true),enfocus.core.en_content.call(null,[cljs.core.str(coins),cljs.core.str(" Coins")].join('')));
enfocus.core.reset_ids.call(null,id_sym17682__17691,pnod17683__17693);
return enfocus.core.remove_node_return_child.call(null,pnod17683__17693);
});
nopain.game_client.update_players = (function update_players(players){
var curr_players__17702 = cljs.core.deref.call(null,nopain.game_client.player_set);
var added_players__17703 = clojure.set.difference.call(null,players,curr_players__17702);
cljs.core.swap_BANG_.call(null,nopain.game_client.player_set,clojure.set.union,players);
var G__17704__17705 = cljs.core.seq.call(null,added_players__17703);
if(G__17704__17705)
{var player__17706 = cljs.core.first.call(null,G__17704__17705);
var G__17704__17707 = G__17704__17705;
while(true){
if(cljs.core.not_EQ_.call(null,player__17706,cljs.core.deref.call(null,nopain.game_client.player_name)))
{enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#players"], true),enfocus.core.en_append.call(null,nopain.game_client.t_player.call(null,player__17706)));
} else
{}
var temp__3974__auto____17708 = cljs.core.next.call(null,G__17704__17707);
if(temp__3974__auto____17708)
{var G__17704__17709 = temp__3974__auto____17708;
{
var G__17710 = cljs.core.first.call(null,G__17704__17709);
var G__17711 = G__17704__17709;
player__17706 = G__17710;
G__17704__17707 = G__17711;
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
return fetch.remotes.remote_callback.call(null,"get-coins",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,nopain.game_client.player_name)], true),(function (coins){
return nopain.game_client.fill_coins.call(null,coins);
}));
});
nopain.game_client.register = (function register(){
var name__17713 = document.getElementById("registerinput").value;
return fetch.remotes.remote_callback.call(null,"register",cljs.core.PersistentVector.fromArray([name__17713], true),(function (coins){
cljs.core.reset_BANG_.call(null,nopain.game_client.player_name,name__17713);
nopain.game_client.timer.start();
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#register"], true),enfocus.core.en_substitute.call(null,nopain.game_client.t_thief.call(null,name__17713,coins)));
}));
});
nopain.game_client.setup = (function setup(){
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#registerbutton"], true),enfocus.core.en_listen.call(null,"\uFDD0'click",nopain.game_client.register));
});
nopain.game_client.update_news = (function update_news(){
return fetch.remotes.remote_callback.call(null,"read-news",cljs.core.PersistentVector.EMPTY,(function (news){
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#news"], true),enfocus.core.en_content.call(null,cljs.core.map.call(null,nopain.game_client.t_new,news)));
}));
});
nopain.game_client.start_game = (function start_game(){
return nopain.game_client.setup.call(null);
});
nopain.game_client.stop_game = (function stop_game(){
return nopain.game_client.timer.stop();
});
nopain.game_client.paint_game = (function paint_game(){
return fetch.remotes.remote_callback.call(null,"get-players",cljs.core.PersistentVector.EMPTY,(function (new_players){
nopain.game_client.update_news.call(null);
nopain.game_client.get_coins.call(null);
return nopain.game_client.update_players.call(null,new_players);
}));
});
goog.events.listen(nopain.game_client.timer,goog.Timer.TICK,nopain.game_client.paint_game);
nopain.execs.add_f.call(null,"game",nopain.game_client.start_game,nopain.game_client.stop_game);
