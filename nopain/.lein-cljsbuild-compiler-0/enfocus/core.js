goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('domina.css');
goog.require('goog.fx');
enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3822__auto____11641 = enfocus.core.debug;
if(cljs.core.truth_(and__3822__auto____11641))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____11641;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core._EQ_.call(null,nl,window))
{return cljs.core.PersistentVector.fromArray([nl], true);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__11642_SHARP_){
if(cljs.core.string_QMARK_.call(null,p1__11642_SHARP_))
{return cljs.core.PersistentVector.fromArray([goog.dom.createTextNode(p1__11642_SHARP_)], true);
} else
{if("\uFDD0'else")
{return enfocus.core.nodes__GT_coll.call(null,p1__11642_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__11662__11663 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
if(G__11662__11663)
{var G__11665__11667 = cljs.core.first.call(null,G__11662__11663);
var vec__11666__11668 = G__11665__11667;
var attr__11669 = cljs.core.nth.call(null,vec__11666__11668,0,null);
var value__11670 = cljs.core.nth.call(null,vec__11666__11668,1,null);
var G__11662__11671 = G__11662__11663;
var G__11665__11672 = G__11665__11667;
var G__11662__11673 = G__11662__11671;
while(true){
var vec__11674__11675 = G__11665__11672;
var attr__11676 = cljs.core.nth.call(null,vec__11674__11675,0,null);
var value__11677 = cljs.core.nth.call(null,vec__11674__11675,1,null);
var G__11662__11678 = G__11662__11673;
goog.style.setStyle(obj,cljs.core.name.call(null,attr__11676),value__11677);
var temp__3974__auto____11679 = cljs.core.next.call(null,G__11662__11678);
if(temp__3974__auto____11679)
{var G__11662__11680 = temp__3974__auto____11679;
{
var G__11681 = cljs.core.first.call(null,G__11662__11680);
var G__11682 = G__11662__11680;
G__11665__11672 = G__11681;
G__11662__11673 = G__11682;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__11689__11690 = cljs.core.seq.call(null,values);
if(G__11689__11690)
{var attr__11691 = cljs.core.first.call(null,G__11689__11690);
var G__11689__11692 = G__11689__11690;
while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr__11691),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__11691));
}
var temp__3974__auto____11693 = cljs.core.next.call(null,G__11689__11692);
if(temp__3974__auto____11693)
{var G__11689__11694 = temp__3974__auto____11693;
{
var G__11695 = cljs.core.first.call(null,G__11689__11694);
var G__11696 = G__11689__11694;
attr__11691 = G__11695;
G__11689__11692 = G__11696;
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
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child))
{return false;
} else
{if((parent === child))
{return false;
} else
{if((child.parentNode === parent))
{return true;
} else
{if("\uFDD0'else")
{{
var G__11697 = parent;
var G__11698 = child.parentNode;
parent = G__11697;
child = G__11698;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__11702 = e.relatedTarget;
var this__11703 = e.currentTarget;
if((function (){var and__3822__auto____11704 = !((re__11702 === this__11703));
if(and__3822__auto____11704)
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this__11703,re__11702));
} else
{return and__3822__auto____11704;
}
})())
{return func.call(null,e);
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var G__11724__11725 = cljs.core.seq.call(null,ats);
if(G__11724__11725)
{var G__11727__11729 = cljs.core.first.call(null,G__11724__11725);
var vec__11728__11730 = G__11727__11729;
var k__11731 = cljs.core.nth.call(null,vec__11728__11730,0,null);
var v__11732 = cljs.core.nth.call(null,vec__11728__11730,1,null);
var G__11724__11733 = G__11724__11725;
var G__11727__11734 = G__11727__11729;
var G__11724__11735 = G__11724__11733;
while(true){
var vec__11736__11737 = G__11727__11734;
var k__11738 = cljs.core.nth.call(null,vec__11736__11737,0,null);
var v__11739 = cljs.core.nth.call(null,vec__11736__11737,1,null);
var G__11724__11740 = G__11724__11735;
add_map_attrs.call(null,elem,k__11738,v__11739);
var temp__3974__auto____11741 = cljs.core.next.call(null,G__11724__11740);
if(temp__3974__auto____11741)
{var G__11724__11742 = temp__3974__auto____11741;
{
var G__11743 = cljs.core.first.call(null,G__11724__11742);
var G__11744 = G__11724__11742;
G__11727__11734 = G__11743;
G__11724__11735 = G__11744;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
add_map_attrs.cljs$lang$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$lang$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__11752 = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core.instance_QMARK_.call(null,DocumentFragment,child))
{goog.dom.appendChild(div__11752,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var G__11753__11754 = cljs.core.seq.call(null,domina.nodes.call(null,child));
if(G__11753__11754)
{var node__11755 = cljs.core.first.call(null,G__11753__11754);
var G__11753__11756 = G__11753__11754;
while(true){
goog.dom.appendChild(div__11752,node__11755);
var temp__3974__auto____11757 = cljs.core.next.call(null,G__11753__11756);
if(temp__3974__auto____11757)
{var G__11753__11758 = temp__3974__auto____11757;
{
var G__11759 = cljs.core.first.call(null,G__11753__11758);
var G__11760 = G__11753__11758;
node__11755 = G__11759;
G__11753__11756 = G__11760;
continue;
}
} else
{}
break;
}
} else
{}
}
goog.dom.appendChild(goog.dom.getDocument().body,div__11752);
return div__11752;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__11763 = div.childNodes;
var frag__11764 = document.createDocumentFragment();
goog.dom.append(frag__11764,child__11763);
goog.dom.removeNode(div);
return frag__11764;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__11768 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__11769 = [cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join('');
return cljs.core.PersistentVector.fromArray([[cljs.core.str(sym__11769)].join(''),text.replace(re__11768,(function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(sym__11769),cljs.core.str(c),cljs.core.str(d)].join('');
}))], true);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__11774 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__11775 = enfocus.core.nodes__GT_coll.call(null,id_nodes__11774);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__11765_SHARP_){
var id__11776 = p1__11765_SHARP_.getAttribute("id");
var rid__11777 = id__11776.replace(sym,"");
return p1__11765_SHARP_.setAttribute("id",rid__11777);
}),nod_col__11775));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__11785 = (new goog.net.XhrIo());
var callback__11791 = (function (req){
var text__11787 = req.getResponseText();
var vec__11786__11788 = enfocus.core.replace_ids.call(null,text__11787);
var sym__11789 = cljs.core.nth.call(null,vec__11786__11788,0,null);
var txt__11790 = cljs.core.nth.call(null,vec__11786__11788,1,null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,cljs.core.PersistentVector.fromArray([sym__11789,txt__11790], true));
});
goog.events.listen(req__11785,goog.net.EventType.COMPLETE,(function (){
callback__11791.call(null,req__11785);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__11785.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa__11800 = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag__11801 = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa__11800));
var G__11802__11803 = cljs.core.seq.call(null,dfa__11800);
if(G__11802__11803)
{var df__11804 = cljs.core.first.call(null,G__11802__11803);
var G__11802__11805 = G__11802__11803;
while(true){
goog.dom.append(frag__11801,df__11804);
var temp__3974__auto____11806 = cljs.core.next.call(null,G__11802__11805);
if(temp__3974__auto____11806)
{var G__11802__11807 = temp__3974__auto____11806;
{
var G__11808 = cljs.core.first.call(null,G__11802__11807);
var G__11809 = G__11802__11807;
df__11804 = G__11808;
G__11802__11805 = G__11809;
continue;
}
} else
{}
break;
}
} else
{}
return frag__11801;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__11811 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod__11811))
{return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,nod__11811),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod__11811))], true);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__11821 = enfocus.core.create_sel_str.call(null,sel);
var cache__11822 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str__11821)].join(''));
if(cljs.core.truth_(cache__11822))
{return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,cache__11822),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache__11822))], true);
} else
{var vec__11823__11824 = enfocus.core.get_cached_dom.call(null,uri);
var sym__11825 = cljs.core.nth.call(null,vec__11823__11824,0,null);
var tdom__11826 = cljs.core.nth.call(null,vec__11823__11824,1,null);
var dom__11827 = enfocus.core.create_hidden_dom.call(null,tdom__11826);
var tsnip__11828 = domina.nodes.call(null,enfocus.core.css_select.call(null,sym__11825,dom__11827,sel));
var snip__11829 = cljs.core.first.call(null,tsnip__11828);
enfocus.core.remove_node_return_child.call(null,dom__11827);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str__11821)].join(''),cljs.core.PersistentVector.fromArray([sym__11825,snip__11829.outerHTML], true));
return cljs.core.PersistentVector.fromArray([sym__11825,snip__11829], true);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__11836 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__11837 = cljs.core.map.call(null,func,pnod_col__11836);
if((cljs.core.count.call(null,result__11837) <= 1))
{return cljs.core.first.call(null,result__11837);
} else
{return result__11837;
}
});
});
/**
* wrapper function for transforms, maps the transform to all nodes returned
* by the selector and provides the ability to chain transforms with the chain command.
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__1 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2 = (function (pnodes,chain){
var pnod_col__11841 = enfocus.core.nodes__GT_coll.call(null,pnodes);
cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__11841));
if(!((chain == null)))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,pnodes);
case 2:
return trans__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__1 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2 = (function (pnodes,chain){
var pnod_col__11870 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__11871 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__11870));
var partial_cback__11872 = (function (){
cljs.core.swap_BANG_.call(null,cnt__11871,cljs.core.dec);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__11871)))
{if(!((callback == null)))
{callback.call(null,pnodes);
} else
{}
if(!((chain == null)))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});
var G__11873__11874 = cljs.core.seq.call(null,pnod_col__11870);
if(G__11873__11874)
{var pnod__11875 = cljs.core.first.call(null,G__11873__11874);
var G__11873__11876 = G__11873__11874;
while(true){
func.call(null,pnod__11875,partial_cback__11872);
var temp__3974__auto____11877 = cljs.core.next.call(null,G__11873__11876);
if(temp__3974__auto____11877)
{var G__11873__11878 = temp__3974__auto____11877;
{
var G__11879 = cljs.core.first.call(null,G__11873__11878);
var G__11880 = G__11873__11878;
pnod__11875 = G__11879;
G__11873__11876 = G__11880;
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
trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,pnodes);
case 2:
return trans__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.domina_chain = (function() {
var domina_chain = null;
var domina_chain__1 = (function (func){
return (function() {
var trans = null;
var trans__1 = (function (nodes){
return trans.call(null,nodes,null);
});
var trans__2 = (function (nodes,chain){
func.call(null,nodes);
if(!((chain == null)))
{return chain.call(null,nodes);
} else
{return null;
}
});
trans = function(nodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,nodes);
case 2:
return trans__2.call(this,nodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
var domina_chain__2 = (function (values,func){
return (function() {
var trans = null;
var trans__1 = (function (nodes){
return trans.call(null,nodes,null);
});
var trans__2 = (function (nodes,chain){
var vnodes__11886 = cljs.core.mapcat.call(null,(function (p1__11842_SHARP_){
return domina.nodes.call(null,p1__11842_SHARP_);
}),values);
func.call(null,nodes,vnodes__11886);
if(!((chain == null)))
{return chain.call(null,nodes);
} else
{return null;
}
});
trans = function(nodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,nodes);
case 2:
return trans__2.call(this,nodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
domina_chain = function(values,func){
switch(arguments.length){
case 1:
return domina_chain__1.call(this,values);
case 2:
return domina_chain__2.call(this,values,func);
}
throw('Invalid arity: ' + arguments.length);
};
domina_chain.cljs$lang$arity$1 = domina_chain__1;
domina_chain.cljs$lang$arity$2 = domina_chain__2;
return domina_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__11881_SHARP_,p2__11882_SHARP_){
domina.destroy_children_BANG_.call(null,p1__11881_SHARP_);
return domina.append_BANG_.call(null,p1__11881_SHARP_,p2__11882_SHARP_);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__11888){
var values = cljs.core.seq(arglist__11888);;
return en_content__delegate(values);
});
en_content.cljs$lang$arity$variadic = en_content__delegate;
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.domina_chain.call(null,(function (p1__11887_SHARP_){
return domina.set_html_BANG_.call(null,p1__11887_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var pairs__11911 = cljs.core.partition.call(null,2,values);
return enfocus.core.domina_chain.call(null,(function (p1__11889_SHARP_){
var G__11912__11913 = cljs.core.seq.call(null,pairs__11911);
if(G__11912__11913)
{var G__11915__11917 = cljs.core.first.call(null,G__11912__11913);
var vec__11916__11918 = G__11915__11917;
var name__11919 = cljs.core.nth.call(null,vec__11916__11918,0,null);
var value__11920 = cljs.core.nth.call(null,vec__11916__11918,1,null);
var G__11912__11921 = G__11912__11913;
var G__11915__11922 = G__11915__11917;
var G__11912__11923 = G__11912__11921;
while(true){
var vec__11924__11925 = G__11915__11922;
var name__11926 = cljs.core.nth.call(null,vec__11924__11925,0,null);
var value__11927 = cljs.core.nth.call(null,vec__11924__11925,1,null);
var G__11912__11928 = G__11912__11923;
domina.set_attr_BANG_.call(null,p1__11889_SHARP_,name__11926,value__11927);
var temp__3974__auto____11929 = cljs.core.next.call(null,G__11912__11928);
if(temp__3974__auto____11929)
{var G__11912__11930 = temp__3974__auto____11929;
{
var G__11931 = cljs.core.first.call(null,G__11912__11930);
var G__11932 = G__11912__11930;
G__11915__11922 = G__11931;
G__11912__11923 = G__11932;
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
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__11933){
var values = cljs.core.seq(arglist__11933);;
return en_set_attr__delegate(values);
});
en_set_attr.cljs$lang$arity$variadic = en_set_attr__delegate;
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.domina_chain.call(null,(function (p1__11890_SHARP_){
var G__11940__11941 = cljs.core.seq.call(null,values);
if(G__11940__11941)
{var name__11942 = cljs.core.first.call(null,G__11940__11941);
var G__11940__11943 = G__11940__11941;
while(true){
domina.remove_attr_BANG_.call(null,p1__11890_SHARP_,name__11942);
var temp__3974__auto____11944 = cljs.core.next.call(null,G__11940__11943);
if(temp__3974__auto____11944)
{var G__11940__11945 = temp__3974__auto____11944;
{
var G__11946 = cljs.core.first.call(null,G__11940__11945);
var G__11947 = G__11940__11945;
name__11942 = G__11946;
G__11940__11943 = G__11947;
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
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__11948){
var values = cljs.core.seq(arglist__11948);;
return en_remove_attr__delegate(values);
});
en_remove_attr.cljs$lang$arity$variadic = en_remove_attr__delegate;
return en_remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_set_prop = (function() { 
var en_set_prop__delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (node){
var h__11960 = cljs.core.mapcat.call(null,(function (p__11955){
var vec__11956__11957 = p__11955;
var n__11958 = cljs.core.nth.call(null,vec__11956__11957,0,null);
var v__11959 = cljs.core.nth.call(null,vec__11956__11957,1,null);
return cljs.core.list.call(null,cljs.core.name.call(null,n__11958),v__11959);
}),cljs.core.partition.call(null,2,forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h__11960));
}));
};
var en_set_prop = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_prop__delegate.call(this, forms);
};
en_set_prop.cljs$lang$maxFixedArity = 0;
en_set_prop.cljs$lang$applyTo = (function (arglist__11961){
var forms = cljs.core.seq(arglist__11961);;
return en_set_prop__delegate(forms);
});
en_set_prop.cljs$lang$arity$variadic = en_set_prop__delegate;
return en_set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.domina_chain.call(null,(function (p1__11962_SHARP_){
var G__11970__11971 = cljs.core.seq.call(null,values);
if(G__11970__11971)
{var val__11972 = cljs.core.first.call(null,G__11970__11971);
var G__11970__11973 = G__11970__11971;
while(true){
domina.add_class_BANG_.call(null,p1__11962_SHARP_,val__11972);
var temp__3974__auto____11974 = cljs.core.next.call(null,G__11970__11973);
if(temp__3974__auto____11974)
{var G__11970__11975 = temp__3974__auto____11974;
{
var G__11976 = cljs.core.first.call(null,G__11970__11975);
var G__11977 = G__11970__11975;
val__11972 = G__11976;
G__11970__11973 = G__11977;
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
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__11978){
var values = cljs.core.seq(arglist__11978);;
return en_add_class__delegate(values);
});
en_add_class.cljs$lang$arity$variadic = en_add_class__delegate;
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.domina_chain.call(null,(function (p1__11963_SHARP_){
var G__11986__11987 = cljs.core.seq.call(null,values);
if(G__11986__11987)
{var val__11988 = cljs.core.first.call(null,G__11986__11987);
var G__11986__11989 = G__11986__11987;
while(true){
domina.remove_class_BANG_.call(null,p1__11963_SHARP_,val__11988);
var temp__3974__auto____11990 = cljs.core.next.call(null,G__11986__11989);
if(temp__3974__auto____11990)
{var G__11986__11991 = temp__3974__auto____11990;
{
var G__11992 = cljs.core.first.call(null,G__11986__11991);
var G__11993 = G__11986__11991;
val__11988 = G__11992;
G__11986__11989 = G__11993;
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
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__11994){
var values = cljs.core.seq(arglist__11994);;
return en_remove_class__delegate(values);
});
en_remove_class.cljs$lang$arity$variadic = en_remove_class__delegate;
return en_remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.en_set_class = (function() { 
var en_set_class__delegate = function (values){
return enfocus.core.domina_chain.call(null,(function (p1__11979_SHARP_){
return domina.set_classes_BANG_.call(null,p1__11979_SHARP_,values);
}));
};
var en_set_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_class__delegate.call(this, values);
};
en_set_class.cljs$lang$maxFixedArity = 0;
en_set_class.cljs$lang$applyTo = (function (arglist__11995){
var values = cljs.core.seq(arglist__11995);;
return en_set_class__delegate(values);
});
en_set_class.cljs$lang$arity$variadic = en_set_class__delegate;
return en_set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var G__12004__12005 = cljs.core.seq.call(null,forms);
if(G__12004__12005)
{var fun__12006 = cljs.core.first.call(null,G__12004__12005);
var G__12004__12007 = G__12004__12005;
while(true){
fun__12006.call(null,pnod);
var temp__3974__auto____12008 = cljs.core.next.call(null,G__12004__12007);
if(temp__3974__auto____12008)
{var G__12004__12009 = temp__3974__auto____12008;
{
var G__12010 = cljs.core.first.call(null,G__12004__12009);
var G__12011 = G__12004__12009;
fun__12006 = G__12010;
G__12004__12007 = G__12011;
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
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__12012){
var forms = cljs.core.seq(arglist__12012);;
return en_do__GT___delegate(forms);
});
en_do__GT_.cljs$lang$arity$variadic = en_do__GT___delegate;
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__11996_SHARP_,p2__11997_SHARP_){
return domina.append_BANG_.call(null,p1__11996_SHARP_,p2__11997_SHARP_);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__12015){
var values = cljs.core.seq(arglist__12015);;
return en_append__delegate(values);
});
en_append.cljs$lang$arity$variadic = en_append__delegate;
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__12013_SHARP_,p2__12014_SHARP_){
return domina.prepend_BANG_.call(null,p1__12013_SHARP_,p2__12014_SHARP_);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__12018){
var values = cljs.core.seq(arglist__12018);;
return en_prepend__delegate(values);
});
en_prepend.cljs$lang$arity$variadic = en_prepend__delegate;
return en_prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__12016_SHARP_,p2__12017_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12016_SHARP_,p2__12017_SHARP_);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__12021){
var values = cljs.core.seq(arglist__12021);;
return en_before__delegate(values);
});
en_before.cljs$lang$arity$variadic = en_before__delegate;
return en_before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__12019_SHARP_,p2__12020_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12019_SHARP_,p2__12020_SHARP_);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__12024){
var values = cljs.core.seq(arglist__12024);;
return en_after__delegate(values);
});
en_after.cljs$lang$arity$variadic = en_after__delegate;
return en_after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__12022_SHARP_,p2__12023_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12022_SHARP_,p2__12023_SHARP_);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__12026){
var values = cljs.core.seq(arglist__12026);;
return en_substitute__delegate(values);
});
en_substitute.cljs$lang$arity$variadic = en_substitute__delegate;
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.en_remove_node = (function en_remove_node(){
return enfocus.core.domina_chain.call(null,(function (p1__12025_SHARP_){
return domina.detach_BANG_.call(null,p1__12025_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__12028 = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem__12028,mattr);
enfocus.core.at.call(null,elem__12028,enfocus.core.en_content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__12028),enfocus.core.en_remove_node.call(null)));
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__12031 = document.createDocumentFragment();
goog.dom.append(frag__12031,pnod.childNodes);
return goog.dom.replaceNode(frag__12031,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
var pairs__12052 = cljs.core.partition.call(null,2,values);
return enfocus.core.domina_chain.call(null,(function (p1__12029_SHARP_){
var G__12053__12054 = cljs.core.seq.call(null,pairs__12052);
if(G__12053__12054)
{var G__12056__12058 = cljs.core.first.call(null,G__12053__12054);
var vec__12057__12059 = G__12056__12058;
var name__12060 = cljs.core.nth.call(null,vec__12057__12059,0,null);
var value__12061 = cljs.core.nth.call(null,vec__12057__12059,1,null);
var G__12053__12062 = G__12053__12054;
var G__12056__12063 = G__12056__12058;
var G__12053__12064 = G__12053__12062;
while(true){
var vec__12065__12066 = G__12056__12063;
var name__12067 = cljs.core.nth.call(null,vec__12065__12066,0,null);
var value__12068 = cljs.core.nth.call(null,vec__12065__12066,1,null);
var G__12053__12069 = G__12053__12064;
domina.set_style_BANG_.call(null,p1__12029_SHARP_,name__12067,value__12068);
var temp__3974__auto____12070 = cljs.core.next.call(null,G__12053__12069);
if(temp__3974__auto____12070)
{var G__12053__12071 = temp__3974__auto____12070;
{
var G__12072 = cljs.core.first.call(null,G__12053__12071);
var G__12073 = G__12053__12071;
G__12056__12063 = G__12072;
G__12053__12064 = G__12073;
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
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__12074){
var values = cljs.core.seq(arglist__12074);;
return en_set_style__delegate(values);
});
en_set_style.cljs$lang$arity$variadic = en_set_style__delegate;
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__12075){
var values = cljs.core.seq(arglist__12075);;
return en_remove_style__delegate(values);
});
en_remove_style.cljs$lang$arity$variadic = en_remove_style__delegate;
return en_remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.en_focus = (function en_focus(){
return enfocus.core.chainable_standard.call(null,(function (node){
return node.focus();
}));
});
/**
* calls the blur function on the selected node
*/
enfocus.core.en_blur = (function en_blur(){
return enfocus.core.chainable_standard.call(null,(function (node){
return node.blur();
}));
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.en_set_data = (function en_set_data(ky,val){
return enfocus.core.domina_chain.call(null,(function (p1__12076_SHARP_){
return domina.set_data_BANG_.call(null,p1__12076_SHARP_,ky,val);
}));
});
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
enfocus.core.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj__12090 = (new Object());
obj__12090.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__12091 = enfocus.core.mouse_enter_leave.call(null,func);
callback__12091.listen = func;
callback__12091.scope = opt_scope;
if(cljs.core.truth_(opt_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__12091);
} else
{return goog.events.listen(elm,cljs.core.name.call(null,event),callback__12091);
}
});
obj__12090.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__12092 = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var G__12093__12094 = cljs.core.seq.call(null,listeners__12092);
if(G__12093__12094)
{var obj__12095 = cljs.core.first.call(null,G__12093__12094);
var G__12093__12096 = G__12093__12094;
while(true){
var listener__12097 = obj__12095.listener;
if(cljs.core.truth_((function (){var and__3822__auto____12099 = (function (){var or__3824__auto____12098 = cljs.core.not.call(null,func);
if(or__3824__auto____12098)
{return or__3824__auto____12098;
} else
{return cljs.core._EQ_.call(null,listener__12097.listen,func);
}
})();
if(cljs.core.truth_(and__3822__auto____12099))
{var or__3824__auto____12100 = cljs.core.not.call(null,opt_scope);
if(or__3824__auto____12100)
{return or__3824__auto____12100;
} else
{return cljs.core._EQ_.call(null,listener__12097.scope,opt_scope);
}
} else
{return and__3822__auto____12099;
}
})()))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__12097);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener__12097);
}
} else
{}
var temp__3974__auto____12101 = cljs.core.next.call(null,G__12093__12096);
if(temp__3974__auto____12101)
{var G__12093__12102 = temp__3974__auto____12101;
{
var G__12103 = cljs.core.first.call(null,G__12093__12102);
var G__12104 = G__12093__12102;
obj__12095 = G__12103;
G__12093__12096 = G__12104;
continue;
}
} else
{}
break;
}
} else
{}
return listeners__12092;
});
return obj__12090;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"\uFDD0'mouseover"),"\uFDD0'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"\uFDD0'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__12108 = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,(function (pnod){
if((function (){var and__3822__auto____12109 = cljs.core._EQ_.call(null,"\uFDD0'resize",event);
if(and__3822__auto____12109)
{return (window === pnod);
} else
{return and__3822__auto____12109;
}
})())
{return goog.events.listen(enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if((wrapper__12108 == null))
{return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper(pnod,wrapper__12108,func);
}
}
}));
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__12117 = (function (p1__12105_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__12105_SHARP_,"\uFDD0'mouseenter"))?"\uFDD0'mouseover":((cljs.core._EQ_.call(null,p1__12105_SHARP_,"\uFDD0'mouseleave"))?"\uFDD0'mouseout":(("\uFDD0'else")?p1__12105_SHARP_:null))));
});
return enfocus.core.chainable_standard.call(null,(function (pnod){
var G__12118__12119 = cljs.core.seq.call(null,event_list);
if(G__12118__12119)
{var ev__12120 = cljs.core.first.call(null,G__12118__12119);
var G__12118__12121 = G__12118__12119;
while(true){
goog.events.removeAll(pnod,get_name__12117.call(null,ev__12120));
var temp__3974__auto____12122 = cljs.core.next.call(null,G__12118__12121);
if(temp__3974__auto____12122)
{var G__12118__12123 = temp__3974__auto____12122;
{
var G__12124 = cljs.core.first.call(null,G__12118__12123);
var G__12125 = G__12118__12123;
ev__12120 = G__12124;
G__12118__12121 = G__12125;
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
}));
};
var en_remove_listeners = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listeners__delegate.call(this, event_list);
};
en_remove_listeners.cljs$lang$maxFixedArity = 0;
en_remove_listeners.cljs$lang$applyTo = (function (arglist__12126){
var event_list = cljs.core.seq(arglist__12126);;
return en_remove_listeners__delegate(event_list);
});
en_remove_listeners.cljs$lang$arity$variadic = en_remove_listeners__delegate;
return en_remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function() {
var en_unlisten = null;
var en_unlisten__1 = (function (event){
return enfocus.core.en_remove_listeners.call(null,event);
});
var en_unlisten__2 = (function (event,func){
var wrapper__12128 = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,(function (pnod){
if((wrapper__12128 == null))
{return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper(pnod,wrapper__12128,func);
}
}));
});
en_unlisten = function(event,func){
switch(arguments.length){
case 1:
return en_unlisten__1.call(this,event);
case 2:
return en_unlisten__2.call(this,event,func);
}
throw('Invalid arity: ' + arguments.length);
};
en_unlisten.cljs$lang$arity$1 = en_unlisten__1;
en_unlisten.cljs$lang$arity$2 = en_unlisten__2;
return en_unlisten;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__12130 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__12130,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__12130.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__12132 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__12132,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__12132.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__12139 = goog.style.getContentBoxSize(pnod);
var start__12140 = [csize__12139.width,csize__12139.height];
var wth__12141 = ((cljs.core._EQ_.call(null,"\uFDD0'curwidth",wth))?csize__12139.width:wth);
var hgt__12142 = ((cljs.core._EQ_.call(null,"\uFDD0'curheight",hgt))?csize__12139.height:hgt);
var end__12143 = [wth__12141,hgt__12142];
var anim__12144 = (new goog.fx.dom.Resize(pnod,start__12140,end__12143,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__12144,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__12144.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__12151 = goog.style.getPosition(pnod);
var start__12152 = [cpos__12151.x,cpos__12151.y];
var xpos__12153 = ((cljs.core._EQ_.call(null,"\uFDD0'curx",xpos))?cpos__12151.x:xpos);
var ypos__12154 = ((cljs.core._EQ_.call(null,"\uFDD0'cury",ypos))?cpos__12151.y:ypos);
var end__12155 = [xpos__12153,ypos__12154];
var anim__12156 = (new goog.fx.dom.Slide(pnod,start__12152,end__12155,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__12156,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__12156.play();
}),callback);
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_text = (function en_get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.en_get_data = (function() {
var en_get_data = null;
var en_get_data__1 = (function (ky){
return en_get_data.call(null,ky,false);
});
var en_get_data__2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,ky,bubble);
}));
});
en_get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return en_get_data__1.call(this,ky);
case 2:
return en_get_data__2.call(this,ky,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
en_get_data.cljs$lang$arity$1 = en_get_data__1;
en_get_data.cljs$lang$arity$2 = en_get_data__2;
return en_get_data;
})()
;
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col__12166 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__12167 = ((cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__12168 = cljs.core.filter.call(null,ttest__12167,pnod_col__12166);
if((chain == null))
{return trans.call(null,res__12168);
} else
{return trans.call(null,res__12168,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
filt.cljs$lang$arity$1 = filt__1;
filt.cljs$lang$arity$2 = filt__2;
return filt;
})()
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,"\uFDD0'selected",enfocus.core.selected_options);
enfocus.core.register_filter.call(null,"\uFDD0'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12169_SHARP_){
if(cljs.core.symbol_QMARK_.call(null,p1__12169_SHARP_))
{return enfocus.core.css_syms.call(null,p1__12169_SHARP_);
} else
{if(cljs.core.keyword_QMARK_.call(null,p1__12169_SHARP_))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__12169_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__12169_SHARP_))
{return create_sel_str.call(null,p1__12169_SHARP_);
} else
{if(cljs.core.string_QMARK_.call(null,p1__12169_SHARP_))
{return p1__12169_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
create_sel_str.cljs$lang$arity$1 = create_sel_str__1;
create_sel_str.cljs$lang$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
enfocus.core.log_debug.call(null,dom_node);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,css_sel));
var sel__12172 = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret__12173 = domina.css.sel.call(null,dom_node,sel__12172);
return ret__12173;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
css_select.cljs$lang$arity$1 = css_select__1;
css_select.cljs$lang$arity$2 = css_select__2;
css_select.cljs$lang$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){
var or__3824__auto____12175 = func;
if(cljs.core.truth_(or__3824__auto____12175))
{return or__3824__auto____12175;
} else
{return enfocus.core.en_remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){
if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,trans)))
{return cljs.core.first.call(null,trans).call(null,node);
} else
{var G__12195__12196 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans));
if(G__12195__12196)
{var G__12198__12200 = cljs.core.first.call(null,G__12195__12196);
var vec__12199__12201 = G__12198__12200;
var sel__12202 = cljs.core.nth.call(null,vec__12199__12201,0,null);
var t__12203 = cljs.core.nth.call(null,vec__12199__12201,1,null);
var G__12195__12204 = G__12195__12196;
var G__12198__12205 = G__12198__12200;
var G__12195__12206 = G__12195__12204;
while(true){
var vec__12207__12208 = G__12198__12205;
var sel__12209 = cljs.core.nth.call(null,vec__12207__12208,0,null);
var t__12210 = cljs.core.nth.call(null,vec__12207__12208,1,null);
var G__12195__12211 = G__12195__12206;
enfocus.core.nil_t.call(null,t__12210).call(null,enfocus.core.css_select.call(null,id_mask,node,sel__12209));
var temp__3974__auto____12212 = cljs.core.next.call(null,G__12195__12211);
if(temp__3974__auto____12212)
{var G__12195__12213 = temp__3974__auto____12212;
{
var G__12214 = cljs.core.first.call(null,G__12195__12213);
var G__12215 = G__12195__12213;
G__12198__12205 = G__12214;
G__12195__12206 = G__12215;
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
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;
if (goog.isDef(var_args)) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return i_at__delegate.call(this, id_mask, node, trans);
};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__12216){
var id_mask = cljs.core.first(arglist__12216);
var node = cljs.core.first(cljs.core.next(arglist__12216));
var trans = cljs.core.rest(cljs.core.next(arglist__12216));
return i_at__delegate(id_mask, node, trans);
});
i_at.cljs$lang$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;
if (goog.isDef(var_args)) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return at__delegate.call(this, node, trans);
};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__12217){
var node = cljs.core.first(arglist__12217);
var trans = cljs.core.rest(arglist__12217);
return at__delegate(node, trans);
});
at.cljs$lang$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){
if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,trans)))
{return cljs.core.first.call(null,trans).call(null,node);
} else
{return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__12224){
var vec__12225__12226 = p__12224;
var ky__12227 = cljs.core.nth.call(null,vec__12225__12226,0,null);
var sel__12228 = cljs.core.nth.call(null,vec__12225__12226,1,null);
var ext__12229 = cljs.core.nth.call(null,vec__12225__12226,2,null);
return cljs.core.PersistentVector.fromArray([ky__12227,ext__12229.call(null,enfocus.core.css_select.call(null,"",node,sel__12228))], true);
}),cljs.core.partition.call(null,3,trans)));
}
};
var from = function (node,var_args){
var trans = null;
if (goog.isDef(var_args)) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return from__delegate.call(this, node, trans);
};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__12230){
var node = cljs.core.first(arglist__12230);
var trans = cljs.core.rest(arglist__12230);
return from__delegate(node, trans);
});
from.cljs$lang$arity$variadic = from__delegate;
return from;
})()
;
Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
return cljs.core.PersistentVector.fromArray([content], true);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
return content;
});
