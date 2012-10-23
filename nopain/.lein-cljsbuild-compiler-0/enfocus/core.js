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
if(cljs.core.truth_((function (){var and__3822__auto____7691 = enfocus.core.debug;
if(cljs.core.truth_(and__3822__auto____7691))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____7691;
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
return cljs.core.mapcat.call(null,(function (p1__7692_SHARP_){
if(cljs.core.string_QMARK_.call(null,p1__7692_SHARP_))
{return cljs.core.PersistentVector.fromArray([goog.dom.createTextNode(p1__7692_SHARP_)], true);
} else
{if("\uFDD0'else")
{return enfocus.core.nodes__GT_coll.call(null,p1__7692_SHARP_);
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
var G__7712__7713 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
if(G__7712__7713)
{var G__7715__7717 = cljs.core.first.call(null,G__7712__7713);
var vec__7716__7718 = G__7715__7717;
var attr__7719 = cljs.core.nth.call(null,vec__7716__7718,0,null);
var value__7720 = cljs.core.nth.call(null,vec__7716__7718,1,null);
var G__7712__7721 = G__7712__7713;
var G__7715__7722 = G__7715__7717;
var G__7712__7723 = G__7712__7721;
while(true){
var vec__7724__7725 = G__7715__7722;
var attr__7726 = cljs.core.nth.call(null,vec__7724__7725,0,null);
var value__7727 = cljs.core.nth.call(null,vec__7724__7725,1,null);
var G__7712__7728 = G__7712__7723;
goog.style.setStyle(obj,cljs.core.name.call(null,attr__7726),value__7727);
var temp__3974__auto____7729 = cljs.core.next.call(null,G__7712__7728);
if(temp__3974__auto____7729)
{var G__7712__7730 = temp__3974__auto____7729;
{
var G__7731 = cljs.core.first.call(null,G__7712__7730);
var G__7732 = G__7712__7730;
G__7715__7722 = G__7731;
G__7712__7723 = G__7732;
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
var G__7739__7740 = cljs.core.seq.call(null,values);
if(G__7739__7740)
{var attr__7741 = cljs.core.first.call(null,G__7739__7740);
var G__7739__7742 = G__7739__7740;
while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr__7741),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__7741));
}
var temp__3974__auto____7743 = cljs.core.next.call(null,G__7739__7742);
if(temp__3974__auto____7743)
{var G__7739__7744 = temp__3974__auto____7743;
{
var G__7745 = cljs.core.first.call(null,G__7739__7744);
var G__7746 = G__7739__7744;
attr__7741 = G__7745;
G__7739__7742 = G__7746;
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
var G__7747 = parent;
var G__7748 = child.parentNode;
parent = G__7747;
child = G__7748;
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
var re__7752 = e.relatedTarget;
var this__7753 = e.currentTarget;
if((function (){var and__3822__auto____7754 = !((re__7752 === this__7753));
if(and__3822__auto____7754)
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this__7753,re__7752));
} else
{return and__3822__auto____7754;
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
{var G__7774__7775 = cljs.core.seq.call(null,ats);
if(G__7774__7775)
{var G__7777__7779 = cljs.core.first.call(null,G__7774__7775);
var vec__7778__7780 = G__7777__7779;
var k__7781 = cljs.core.nth.call(null,vec__7778__7780,0,null);
var v__7782 = cljs.core.nth.call(null,vec__7778__7780,1,null);
var G__7774__7783 = G__7774__7775;
var G__7777__7784 = G__7777__7779;
var G__7774__7785 = G__7774__7783;
while(true){
var vec__7786__7787 = G__7777__7784;
var k__7788 = cljs.core.nth.call(null,vec__7786__7787,0,null);
var v__7789 = cljs.core.nth.call(null,vec__7786__7787,1,null);
var G__7774__7790 = G__7774__7785;
add_map_attrs.call(null,elem,k__7788,v__7789);
var temp__3974__auto____7791 = cljs.core.next.call(null,G__7774__7790);
if(temp__3974__auto____7791)
{var G__7774__7792 = temp__3974__auto____7791;
{
var G__7793 = cljs.core.first.call(null,G__7774__7792);
var G__7794 = G__7774__7792;
G__7777__7784 = G__7793;
G__7774__7785 = G__7794;
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
var div__7802 = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core.instance_QMARK_.call(null,DocumentFragment,child))
{goog.dom.appendChild(div__7802,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var G__7803__7804 = cljs.core.seq.call(null,domina.nodes.call(null,child));
if(G__7803__7804)
{var node__7805 = cljs.core.first.call(null,G__7803__7804);
var G__7803__7806 = G__7803__7804;
while(true){
goog.dom.appendChild(div__7802,node__7805);
var temp__3974__auto____7807 = cljs.core.next.call(null,G__7803__7806);
if(temp__3974__auto____7807)
{var G__7803__7808 = temp__3974__auto____7807;
{
var G__7809 = cljs.core.first.call(null,G__7803__7808);
var G__7810 = G__7803__7808;
node__7805 = G__7809;
G__7803__7806 = G__7810;
continue;
}
} else
{}
break;
}
} else
{}
}
goog.dom.appendChild(goog.dom.getDocument().body,div__7802);
return div__7802;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__7813 = div.childNodes;
var frag__7814 = document.createDocumentFragment();
goog.dom.append(frag__7814,child__7813);
goog.dom.removeNode(div);
return frag__7814;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__7818 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__7819 = [cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join('');
return cljs.core.PersistentVector.fromArray([[cljs.core.str(sym__7819)].join(''),text.replace(re__7818,(function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(sym__7819),cljs.core.str(c),cljs.core.str(d)].join('');
}))], true);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__7824 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__7825 = enfocus.core.nodes__GT_coll.call(null,id_nodes__7824);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7815_SHARP_){
var id__7826 = p1__7815_SHARP_.getAttribute("id");
var rid__7827 = id__7826.replace(sym,"");
return p1__7815_SHARP_.setAttribute("id",rid__7827);
}),nod_col__7825));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__7835 = (new goog.net.XhrIo());
var callback__7841 = (function (req){
var text__7837 = req.getResponseText();
var vec__7836__7838 = enfocus.core.replace_ids.call(null,text__7837);
var sym__7839 = cljs.core.nth.call(null,vec__7836__7838,0,null);
var txt__7840 = cljs.core.nth.call(null,vec__7836__7838,1,null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,cljs.core.PersistentVector.fromArray([sym__7839,txt__7840], true));
});
goog.events.listen(req__7835,goog.net.EventType.COMPLETE,(function (){
callback__7841.call(null,req__7835);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__7835.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa__7850 = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag__7851 = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa__7850));
var G__7852__7853 = cljs.core.seq.call(null,dfa__7850);
if(G__7852__7853)
{var df__7854 = cljs.core.first.call(null,G__7852__7853);
var G__7852__7855 = G__7852__7853;
while(true){
goog.dom.append(frag__7851,df__7854);
var temp__3974__auto____7856 = cljs.core.next.call(null,G__7852__7855);
if(temp__3974__auto____7856)
{var G__7852__7857 = temp__3974__auto____7856;
{
var G__7858 = cljs.core.first.call(null,G__7852__7857);
var G__7859 = G__7852__7857;
df__7854 = G__7858;
G__7852__7855 = G__7859;
continue;
}
} else
{}
break;
}
} else
{}
return frag__7851;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__7861 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod__7861))
{return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,nod__7861),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod__7861))], true);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__7871 = enfocus.core.create_sel_str.call(null,sel);
var cache__7872 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str__7871)].join(''));
if(cljs.core.truth_(cache__7872))
{return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,cache__7872),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache__7872))], true);
} else
{var vec__7873__7874 = enfocus.core.get_cached_dom.call(null,uri);
var sym__7875 = cljs.core.nth.call(null,vec__7873__7874,0,null);
var tdom__7876 = cljs.core.nth.call(null,vec__7873__7874,1,null);
var dom__7877 = enfocus.core.create_hidden_dom.call(null,tdom__7876);
var tsnip__7878 = domina.nodes.call(null,enfocus.core.css_select.call(null,sym__7875,dom__7877,sel));
var snip__7879 = cljs.core.first.call(null,tsnip__7878);
enfocus.core.remove_node_return_child.call(null,dom__7877);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str__7871)].join(''),cljs.core.PersistentVector.fromArray([sym__7875,snip__7879.outerHTML], true));
return cljs.core.PersistentVector.fromArray([sym__7875,snip__7879], true);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__7886 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__7887 = cljs.core.map.call(null,func,pnod_col__7886);
if((cljs.core.count.call(null,result__7887) <= 1))
{return cljs.core.first.call(null,result__7887);
} else
{return result__7887;
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
var pnod_col__7891 = enfocus.core.nodes__GT_coll.call(null,pnodes);
cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__7891));
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
var pnod_col__7920 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__7921 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__7920));
var partial_cback__7922 = (function (){
cljs.core.swap_BANG_.call(null,cnt__7921,cljs.core.dec);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__7921)))
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
var G__7923__7924 = cljs.core.seq.call(null,pnod_col__7920);
if(G__7923__7924)
{var pnod__7925 = cljs.core.first.call(null,G__7923__7924);
var G__7923__7926 = G__7923__7924;
while(true){
func.call(null,pnod__7925,partial_cback__7922);
var temp__3974__auto____7927 = cljs.core.next.call(null,G__7923__7926);
if(temp__3974__auto____7927)
{var G__7923__7928 = temp__3974__auto____7927;
{
var G__7929 = cljs.core.first.call(null,G__7923__7928);
var G__7930 = G__7923__7928;
pnod__7925 = G__7929;
G__7923__7926 = G__7930;
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
var vnodes__7936 = cljs.core.mapcat.call(null,(function (p1__7892_SHARP_){
return domina.nodes.call(null,p1__7892_SHARP_);
}),values);
func.call(null,nodes,vnodes__7936);
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
return enfocus.core.domina_chain.call(null,values,(function (p1__7931_SHARP_,p2__7932_SHARP_){
domina.destroy_children_BANG_.call(null,p1__7931_SHARP_);
return domina.append_BANG_.call(null,p1__7931_SHARP_,p2__7932_SHARP_);
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
en_content.cljs$lang$applyTo = (function (arglist__7938){
var values = cljs.core.seq(arglist__7938);;
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
return enfocus.core.domina_chain.call(null,(function (p1__7937_SHARP_){
return domina.set_html_BANG_.call(null,p1__7937_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var pairs__7961 = cljs.core.partition.call(null,2,values);
return enfocus.core.domina_chain.call(null,(function (p1__7939_SHARP_){
var G__7962__7963 = cljs.core.seq.call(null,pairs__7961);
if(G__7962__7963)
{var G__7965__7967 = cljs.core.first.call(null,G__7962__7963);
var vec__7966__7968 = G__7965__7967;
var name__7969 = cljs.core.nth.call(null,vec__7966__7968,0,null);
var value__7970 = cljs.core.nth.call(null,vec__7966__7968,1,null);
var G__7962__7971 = G__7962__7963;
var G__7965__7972 = G__7965__7967;
var G__7962__7973 = G__7962__7971;
while(true){
var vec__7974__7975 = G__7965__7972;
var name__7976 = cljs.core.nth.call(null,vec__7974__7975,0,null);
var value__7977 = cljs.core.nth.call(null,vec__7974__7975,1,null);
var G__7962__7978 = G__7962__7973;
domina.set_attr_BANG_.call(null,p1__7939_SHARP_,name__7976,value__7977);
var temp__3974__auto____7979 = cljs.core.next.call(null,G__7962__7978);
if(temp__3974__auto____7979)
{var G__7962__7980 = temp__3974__auto____7979;
{
var G__7981 = cljs.core.first.call(null,G__7962__7980);
var G__7982 = G__7962__7980;
G__7965__7972 = G__7981;
G__7962__7973 = G__7982;
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
en_set_attr.cljs$lang$applyTo = (function (arglist__7983){
var values = cljs.core.seq(arglist__7983);;
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
return enfocus.core.domina_chain.call(null,(function (p1__7940_SHARP_){
var G__7990__7991 = cljs.core.seq.call(null,values);
if(G__7990__7991)
{var name__7992 = cljs.core.first.call(null,G__7990__7991);
var G__7990__7993 = G__7990__7991;
while(true){
domina.remove_attr_BANG_.call(null,p1__7940_SHARP_,name__7992);
var temp__3974__auto____7994 = cljs.core.next.call(null,G__7990__7993);
if(temp__3974__auto____7994)
{var G__7990__7995 = temp__3974__auto____7994;
{
var G__7996 = cljs.core.first.call(null,G__7990__7995);
var G__7997 = G__7990__7995;
name__7992 = G__7996;
G__7990__7993 = G__7997;
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__7998){
var values = cljs.core.seq(arglist__7998);;
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
var h__8010 = cljs.core.mapcat.call(null,(function (p__8005){
var vec__8006__8007 = p__8005;
var n__8008 = cljs.core.nth.call(null,vec__8006__8007,0,null);
var v__8009 = cljs.core.nth.call(null,vec__8006__8007,1,null);
return cljs.core.list.call(null,cljs.core.name.call(null,n__8008),v__8009);
}),cljs.core.partition.call(null,2,forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h__8010));
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
en_set_prop.cljs$lang$applyTo = (function (arglist__8011){
var forms = cljs.core.seq(arglist__8011);;
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
return enfocus.core.domina_chain.call(null,(function (p1__8012_SHARP_){
var G__8020__8021 = cljs.core.seq.call(null,values);
if(G__8020__8021)
{var val__8022 = cljs.core.first.call(null,G__8020__8021);
var G__8020__8023 = G__8020__8021;
while(true){
domina.add_class_BANG_.call(null,p1__8012_SHARP_,val__8022);
var temp__3974__auto____8024 = cljs.core.next.call(null,G__8020__8023);
if(temp__3974__auto____8024)
{var G__8020__8025 = temp__3974__auto____8024;
{
var G__8026 = cljs.core.first.call(null,G__8020__8025);
var G__8027 = G__8020__8025;
val__8022 = G__8026;
G__8020__8023 = G__8027;
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
en_add_class.cljs$lang$applyTo = (function (arglist__8028){
var values = cljs.core.seq(arglist__8028);;
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
return enfocus.core.domina_chain.call(null,(function (p1__8013_SHARP_){
var G__8036__8037 = cljs.core.seq.call(null,values);
if(G__8036__8037)
{var val__8038 = cljs.core.first.call(null,G__8036__8037);
var G__8036__8039 = G__8036__8037;
while(true){
domina.remove_class_BANG_.call(null,p1__8013_SHARP_,val__8038);
var temp__3974__auto____8040 = cljs.core.next.call(null,G__8036__8039);
if(temp__3974__auto____8040)
{var G__8036__8041 = temp__3974__auto____8040;
{
var G__8042 = cljs.core.first.call(null,G__8036__8041);
var G__8043 = G__8036__8041;
val__8038 = G__8042;
G__8036__8039 = G__8043;
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
en_remove_class.cljs$lang$applyTo = (function (arglist__8044){
var values = cljs.core.seq(arglist__8044);;
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
return enfocus.core.domina_chain.call(null,(function (p1__8029_SHARP_){
return domina.set_classes_BANG_.call(null,p1__8029_SHARP_,values);
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
en_set_class.cljs$lang$applyTo = (function (arglist__8045){
var values = cljs.core.seq(arglist__8045);;
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
var G__8054__8055 = cljs.core.seq.call(null,forms);
if(G__8054__8055)
{var fun__8056 = cljs.core.first.call(null,G__8054__8055);
var G__8054__8057 = G__8054__8055;
while(true){
fun__8056.call(null,pnod);
var temp__3974__auto____8058 = cljs.core.next.call(null,G__8054__8057);
if(temp__3974__auto____8058)
{var G__8054__8059 = temp__3974__auto____8058;
{
var G__8060 = cljs.core.first.call(null,G__8054__8059);
var G__8061 = G__8054__8059;
fun__8056 = G__8060;
G__8054__8057 = G__8061;
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__8062){
var forms = cljs.core.seq(arglist__8062);;
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
return enfocus.core.domina_chain.call(null,values,(function (p1__8046_SHARP_,p2__8047_SHARP_){
return domina.append_BANG_.call(null,p1__8046_SHARP_,p2__8047_SHARP_);
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
en_append.cljs$lang$applyTo = (function (arglist__8065){
var values = cljs.core.seq(arglist__8065);;
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
return enfocus.core.domina_chain.call(null,values,(function (p1__8063_SHARP_,p2__8064_SHARP_){
return domina.prepend_BANG_.call(null,p1__8063_SHARP_,p2__8064_SHARP_);
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
en_prepend.cljs$lang$applyTo = (function (arglist__8068){
var values = cljs.core.seq(arglist__8068);;
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
return enfocus.core.domina_chain.call(null,values,(function (p1__8066_SHARP_,p2__8067_SHARP_){
return domina.insert_before_BANG_.call(null,p1__8066_SHARP_,p2__8067_SHARP_);
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
en_before.cljs$lang$applyTo = (function (arglist__8071){
var values = cljs.core.seq(arglist__8071);;
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
return enfocus.core.domina_chain.call(null,values,(function (p1__8069_SHARP_,p2__8070_SHARP_){
return domina.insert_after_BANG_.call(null,p1__8069_SHARP_,p2__8070_SHARP_);
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
en_after.cljs$lang$applyTo = (function (arglist__8074){
var values = cljs.core.seq(arglist__8074);;
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
return enfocus.core.domina_chain.call(null,values,(function (p1__8072_SHARP_,p2__8073_SHARP_){
return domina.swap_content_BANG_.call(null,p1__8072_SHARP_,p2__8073_SHARP_);
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
en_substitute.cljs$lang$applyTo = (function (arglist__8076){
var values = cljs.core.seq(arglist__8076);;
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
return enfocus.core.domina_chain.call(null,(function (p1__8075_SHARP_){
return domina.detach_BANG_.call(null,p1__8075_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__8078 = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem__8078,mattr);
enfocus.core.at.call(null,elem__8078,enfocus.core.en_content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__8078),enfocus.core.en_remove_node.call(null)));
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__8081 = document.createDocumentFragment();
goog.dom.append(frag__8081,pnod.childNodes);
return goog.dom.replaceNode(frag__8081,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
var pairs__8102 = cljs.core.partition.call(null,2,values);
return enfocus.core.domina_chain.call(null,(function (p1__8079_SHARP_){
var G__8103__8104 = cljs.core.seq.call(null,pairs__8102);
if(G__8103__8104)
{var G__8106__8108 = cljs.core.first.call(null,G__8103__8104);
var vec__8107__8109 = G__8106__8108;
var name__8110 = cljs.core.nth.call(null,vec__8107__8109,0,null);
var value__8111 = cljs.core.nth.call(null,vec__8107__8109,1,null);
var G__8103__8112 = G__8103__8104;
var G__8106__8113 = G__8106__8108;
var G__8103__8114 = G__8103__8112;
while(true){
var vec__8115__8116 = G__8106__8113;
var name__8117 = cljs.core.nth.call(null,vec__8115__8116,0,null);
var value__8118 = cljs.core.nth.call(null,vec__8115__8116,1,null);
var G__8103__8119 = G__8103__8114;
domina.set_style_BANG_.call(null,p1__8079_SHARP_,name__8117,value__8118);
var temp__3974__auto____8120 = cljs.core.next.call(null,G__8103__8119);
if(temp__3974__auto____8120)
{var G__8103__8121 = temp__3974__auto____8120;
{
var G__8122 = cljs.core.first.call(null,G__8103__8121);
var G__8123 = G__8103__8121;
G__8106__8113 = G__8122;
G__8103__8114 = G__8123;
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
en_set_style.cljs$lang$applyTo = (function (arglist__8124){
var values = cljs.core.seq(arglist__8124);;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__8125){
var values = cljs.core.seq(arglist__8125);;
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
return enfocus.core.domina_chain.call(null,(function (p1__8126_SHARP_){
return domina.set_data_BANG_.call(null,p1__8126_SHARP_,ky,val);
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
var obj__8140 = (new Object());
obj__8140.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__8141 = enfocus.core.mouse_enter_leave.call(null,func);
callback__8141.listen = func;
callback__8141.scope = opt_scope;
if(cljs.core.truth_(opt_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__8141);
} else
{return goog.events.listen(elm,cljs.core.name.call(null,event),callback__8141);
}
});
obj__8140.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__8142 = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var G__8143__8144 = cljs.core.seq.call(null,listeners__8142);
if(G__8143__8144)
{var obj__8145 = cljs.core.first.call(null,G__8143__8144);
var G__8143__8146 = G__8143__8144;
while(true){
var listener__8147 = obj__8145.listener;
if(cljs.core.truth_((function (){var and__3822__auto____8149 = (function (){var or__3824__auto____8148 = cljs.core.not.call(null,func);
if(or__3824__auto____8148)
{return or__3824__auto____8148;
} else
{return cljs.core._EQ_.call(null,listener__8147.listen,func);
}
})();
if(cljs.core.truth_(and__3822__auto____8149))
{var or__3824__auto____8150 = cljs.core.not.call(null,opt_scope);
if(or__3824__auto____8150)
{return or__3824__auto____8150;
} else
{return cljs.core._EQ_.call(null,listener__8147.scope,opt_scope);
}
} else
{return and__3822__auto____8149;
}
})()))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__8147);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener__8147);
}
} else
{}
var temp__3974__auto____8151 = cljs.core.next.call(null,G__8143__8146);
if(temp__3974__auto____8151)
{var G__8143__8152 = temp__3974__auto____8151;
{
var G__8153 = cljs.core.first.call(null,G__8143__8152);
var G__8154 = G__8143__8152;
obj__8145 = G__8153;
G__8143__8146 = G__8154;
continue;
}
} else
{}
break;
}
} else
{}
return listeners__8142;
});
return obj__8140;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"\uFDD0'mouseover"),"\uFDD0'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"\uFDD0'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__8158 = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,(function (pnod){
if((function (){var and__3822__auto____8159 = cljs.core._EQ_.call(null,"\uFDD0'resize",event);
if(and__3822__auto____8159)
{return (window === pnod);
} else
{return and__3822__auto____8159;
}
})())
{return goog.events.listen(enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if((wrapper__8158 == null))
{return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper(pnod,wrapper__8158,func);
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
var get_name__8167 = (function (p1__8155_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__8155_SHARP_,"\uFDD0'mouseenter"))?"\uFDD0'mouseover":((cljs.core._EQ_.call(null,p1__8155_SHARP_,"\uFDD0'mouseleave"))?"\uFDD0'mouseout":(("\uFDD0'else")?p1__8155_SHARP_:null))));
});
return enfocus.core.chainable_standard.call(null,(function (pnod){
var G__8168__8169 = cljs.core.seq.call(null,event_list);
if(G__8168__8169)
{var ev__8170 = cljs.core.first.call(null,G__8168__8169);
var G__8168__8171 = G__8168__8169;
while(true){
goog.events.removeAll(pnod,get_name__8167.call(null,ev__8170));
var temp__3974__auto____8172 = cljs.core.next.call(null,G__8168__8171);
if(temp__3974__auto____8172)
{var G__8168__8173 = temp__3974__auto____8172;
{
var G__8174 = cljs.core.first.call(null,G__8168__8173);
var G__8175 = G__8168__8173;
ev__8170 = G__8174;
G__8168__8171 = G__8175;
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
en_remove_listeners.cljs$lang$applyTo = (function (arglist__8176){
var event_list = cljs.core.seq(arglist__8176);;
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
var wrapper__8178 = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,(function (pnod){
if((wrapper__8178 == null))
{return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper(pnod,wrapper__8178,func);
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
var anim__8180 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__8180,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__8180.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__8182 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__8182,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__8182.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__8189 = goog.style.getContentBoxSize(pnod);
var start__8190 = [csize__8189.width,csize__8189.height];
var wth__8191 = ((cljs.core._EQ_.call(null,"\uFDD0'curwidth",wth))?csize__8189.width:wth);
var hgt__8192 = ((cljs.core._EQ_.call(null,"\uFDD0'curheight",hgt))?csize__8189.height:hgt);
var end__8193 = [wth__8191,hgt__8192];
var anim__8194 = (new goog.fx.dom.Resize(pnod,start__8190,end__8193,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__8194,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__8194.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__8201 = goog.style.getPosition(pnod);
var start__8202 = [cpos__8201.x,cpos__8201.y];
var xpos__8203 = ((cljs.core._EQ_.call(null,"\uFDD0'curx",xpos))?cpos__8201.x:xpos);
var ypos__8204 = ((cljs.core._EQ_.call(null,"\uFDD0'cury",ypos))?cpos__8201.y:ypos);
var end__8205 = [xpos__8203,ypos__8204];
var anim__8206 = (new goog.fx.dom.Slide(pnod,start__8202,end__8205,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__8206,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__8206.play();
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
var pnod_col__8216 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__8217 = ((cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__8218 = cljs.core.filter.call(null,ttest__8217,pnod_col__8216);
if((chain == null))
{return trans.call(null,res__8218);
} else
{return trans.call(null,res__8218,chain);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__8219_SHARP_){
if(cljs.core.symbol_QMARK_.call(null,p1__8219_SHARP_))
{return enfocus.core.css_syms.call(null,p1__8219_SHARP_);
} else
{if(cljs.core.keyword_QMARK_.call(null,p1__8219_SHARP_))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__8219_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__8219_SHARP_))
{return create_sel_str.call(null,p1__8219_SHARP_);
} else
{if(cljs.core.string_QMARK_.call(null,p1__8219_SHARP_))
{return p1__8219_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var sel__8222 = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret__8223 = domina.css.sel.call(null,dom_node,sel__8222);
return ret__8223;
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
var or__3824__auto____8225 = func;
if(cljs.core.truth_(or__3824__auto____8225))
{return or__3824__auto____8225;
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
{var G__8245__8246 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans));
if(G__8245__8246)
{var G__8248__8250 = cljs.core.first.call(null,G__8245__8246);
var vec__8249__8251 = G__8248__8250;
var sel__8252 = cljs.core.nth.call(null,vec__8249__8251,0,null);
var t__8253 = cljs.core.nth.call(null,vec__8249__8251,1,null);
var G__8245__8254 = G__8245__8246;
var G__8248__8255 = G__8248__8250;
var G__8245__8256 = G__8245__8254;
while(true){
var vec__8257__8258 = G__8248__8255;
var sel__8259 = cljs.core.nth.call(null,vec__8257__8258,0,null);
var t__8260 = cljs.core.nth.call(null,vec__8257__8258,1,null);
var G__8245__8261 = G__8245__8256;
enfocus.core.nil_t.call(null,t__8260).call(null,enfocus.core.css_select.call(null,id_mask,node,sel__8259));
var temp__3974__auto____8262 = cljs.core.next.call(null,G__8245__8261);
if(temp__3974__auto____8262)
{var G__8245__8263 = temp__3974__auto____8262;
{
var G__8264 = cljs.core.first.call(null,G__8245__8263);
var G__8265 = G__8245__8263;
G__8248__8255 = G__8264;
G__8245__8256 = G__8265;
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
i_at.cljs$lang$applyTo = (function (arglist__8266){
var id_mask = cljs.core.first(arglist__8266);
var node = cljs.core.first(cljs.core.next(arglist__8266));
var trans = cljs.core.rest(cljs.core.next(arglist__8266));
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
at.cljs$lang$applyTo = (function (arglist__8267){
var node = cljs.core.first(arglist__8267);
var trans = cljs.core.rest(arglist__8267);
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
{return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__8274){
var vec__8275__8276 = p__8274;
var ky__8277 = cljs.core.nth.call(null,vec__8275__8276,0,null);
var sel__8278 = cljs.core.nth.call(null,vec__8275__8276,1,null);
var ext__8279 = cljs.core.nth.call(null,vec__8275__8276,2,null);
return cljs.core.PersistentVector.fromArray([ky__8277,ext__8279.call(null,enfocus.core.css_select.call(null,"",node,sel__8278))], true);
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
from.cljs$lang$applyTo = (function (arglist__8280){
var node = cljs.core.first(arglist__8280);
var trans = cljs.core.rest(arglist__8280);
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
