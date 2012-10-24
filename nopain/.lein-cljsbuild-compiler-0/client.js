goog.provide('nopain.client');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('fetch.remotes');
nopain.client.timer = (new goog.Timer(2000));
nopain.client.timer.start();
nopain.client.curr_slide = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos"],{"\uFDD0'name":"","\uFDD0'pos":-1}));
nopain.client.refreshSlides = (function refreshSlides(){
var map__7695__7696 = cljs.core.deref.call(null,nopain.client.curr_slide);
var map__7695__7697 = ((cljs.core.seq_QMARK_.call(null,map__7695__7696))?cljs.core.apply.call(null,cljs.core.hash_map,map__7695__7696):map__7695__7696);
var pos__7698 = cljs.core._lookup.call(null,map__7695__7697,"\uFDD0'pos",null);
var name__7699 = cljs.core._lookup.call(null,map__7695__7697,"\uFDD0'name",null);
return fetch.remotes.remote_callback.call(null,"get-slide",cljs.core.PersistentVector.fromArray([name__7699,pos__7698], true),(function (r){
if(cljs.core.truth_(r))
{cljs.core.reset_BANG_.call(null,nopain.client.curr_slide,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos"],{"\uFDD0'name":(new cljs.core.Keyword("\uFDD0'name")).call(null,r),"\uFDD0'pos":(new cljs.core.Keyword("\uFDD0'pos")).call(null,r)}));
enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#main"], true),enfocus.core.en_content.call(null,(new cljs.core.Keyword("\uFDD0'html")).call(null,r)));
return SyntaxHighlighter.highlight();
} else
{return null;
}
}));
});
goog.events.listen(nopain.client.timer,goog.Timer.TICK,nopain.client.refreshSlides);
