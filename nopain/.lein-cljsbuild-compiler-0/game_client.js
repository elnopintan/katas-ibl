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
enfocus.core.load_remote_dom.call(null,"/player","t-player/player");
nopain.game_client.t_player = (function t_player(name){
var vec__7771__7772 = (function (){
return enfocus.core.get_cached_dom.call(null,"t-player/player");
}).call(null);
var id_sym7764__7773 = cljs.core.nth.call(null,vec__7771__7772,0,null);
var pnod7765__7774 = cljs.core.nth.call(null,vec__7771__7772,1,null);
var pnod7765__7775 = enfocus.core.create_hidden_dom.call(null,pnod7765__7774);
enfocus.core.i_at.call(null,id_sym7764__7773,pnod7765__7775,cljs.core.PersistentVector.fromArray(["h3"], true),enfocus.core.en_content.call(null,name));
enfocus.core.reset_ids.call(null,id_sym7764__7773,pnod7765__7775);
return enfocus.core.remove_node_return_child.call(null,pnod7765__7775);
});
nopain.game_client.update_players = (function update_players(players){
var curr_players__7784 = cljs.core.deref.call(null,nopain.game_client.player_set);
var added_players__7785 = clojure.set.difference.call(null,players,curr_players__7784);
cljs.core.swap_BANG_.call(null,nopain.game_client.player_set,clojure.set.union,players);
var G__7786__7787 = cljs.core.seq.call(null,added_players__7785);
if(G__7786__7787)
{var player__7788 = cljs.core.first.call(null,G__7786__7787);
var G__7786__7789 = G__7786__7787;
while(true){
enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#players"], true),enfocus.core.en_append.call(null,nopain.game_client.t_player.call(null,player__7788)));
var temp__3974__auto____7790 = cljs.core.next.call(null,G__7786__7789);
if(temp__3974__auto____7790)
{var G__7786__7791 = temp__3974__auto____7790;
{
var G__7792 = cljs.core.first.call(null,G__7786__7791);
var G__7793 = G__7786__7791;
player__7788 = G__7792;
G__7786__7789 = G__7793;
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
nopain.game_client.register = (function register(){
var name__7795 = document.getElementById("registerinput").value;
return fetch.remotes.remote_callback.call(null,"register",cljs.core.PersistentVector.fromArray([name__7795], true),(function (){
cljs.core.reset_BANG_.call(null,nopain.game_client.player_name,name__7795);
nopain.game_client.timer.start();
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#register"], true),enfocus.core.en_substitute.call(null,name__7795));
}));
});
nopain.game_client.setup = (function setup(){
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#registerbutton"], true),enfocus.core.en_listen.call(null,"\uFDD0'click",nopain.game_client.register));
});
nopain.game_client.start_game = (function start_game(){
return nopain.game_client.setup.call(null);
});
nopain.game_client.stop_game = (function stop_game(){
return nopain.game_client.timer.stop();
});
nopain.game_client.paint_game = (function paint_game(){
return fetch.remotes.remote_callback.call(null,"get-players",cljs.core.PersistentVector.EMPTY,(function (new_players){
return nopain.game_client.update_players.call(null,new_players);
}));
});
goog.events.listen(nopain.game_client.timer,goog.Timer.TICK,nopain.game_client.paint_game);
nopain.execs.add_f.call(null,"game",nopain.game_client.start_game,nopain.game_client.stop_game);
