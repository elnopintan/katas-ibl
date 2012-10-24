goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__12247 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__12248 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__12249 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__12248,"caption":table_section_wrapper__12248,"optgroup":opt_wrapper__12247,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__12249,"thead":table_section_wrapper__12248,"th":cell_wrapper__12249,"option":opt_wrapper__12247,"tbody":table_section_wrapper__12248,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__12248});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___12262 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__12266 = (((function (){var and__3822__auto____12263 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____12263)
{return no_tbody_QMARK___12262;
} else
{return and__3822__auto____12263;
}
})())?(function (){var and__3822__auto____12264 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____12264))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____12264;
}
})():(((function (){var and__3822__auto____12265 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____12265)
{return no_tbody_QMARK___12262;
} else
{return and__3822__auto____12265;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__12267__12268 = cljs.core.seq.call(null,tbody__12266);
if(G__12267__12268)
{var child__12269 = cljs.core.first.call(null,G__12267__12268);
var G__12267__12270 = G__12267__12268;
while(true){
if((function (){var and__3822__auto____12271 = cljs.core._EQ_.call(null,child__12269.nodeName,"tbody");
if(and__3822__auto____12271)
{return cljs.core._EQ_.call(null,child__12269.childNodes.length,0);
} else
{return and__3822__auto____12271;
}
})())
{child__12269.parentNode.removeChild(child__12269);
} else
{}
var temp__3974__auto____12272 = cljs.core.next.call(null,G__12267__12270);
if(temp__3974__auto____12272)
{var G__12267__12273 = temp__3974__auto____12272;
{
var G__12274 = cljs.core.first.call(null,G__12267__12273);
var G__12275 = G__12267__12273;
child__12269 = G__12274;
G__12267__12270 = G__12275;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__12289 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__12290 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__12289)))].join('').toLowerCase();
var vec__12288__12291 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__12290,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__12292 = cljs.core.nth.call(null,vec__12288__12291,0,null);
var start_wrap__12293 = cljs.core.nth.call(null,vec__12288__12291,1,null);
var end_wrap__12294 = cljs.core.nth.call(null,vec__12288__12291,2,null);
var div__12298 = (function (){var wrapper__12296 = (function (){var div__12295 = document.createElement("div");
div__12295.innerHTML = [cljs.core.str(start_wrap__12293),cljs.core.str(html__12289),cljs.core.str(end_wrap__12294)].join('');
return div__12295;
})();
var level__12297 = depth__12292;
while(true){
if((level__12297 > 0))
{{
var G__12300 = wrapper__12296.lastChild;
var G__12301 = (level__12297 - 1);
wrapper__12296 = G__12300;
level__12297 = G__12301;
continue;
}
} else
{return wrapper__12296;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__12298,html__12289);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____12299 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____12299)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__12289);
} else
{return and__3822__auto____12299;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__12298,html__12289);
} else
{}
return div__12298.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3822__auto____12306 = content;
if(and__3822__auto____12306)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____12306;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2369__auto____12307 = (((content == null))?null:content);
return (function (){var or__3824__auto____12308 = (domina.nodes[goog.typeOf(x__2369__auto____12307)]);
if(or__3824__auto____12308)
{return or__3824__auto____12308;
} else
{var or__3824__auto____12309 = (domina.nodes["_"]);
if(or__3824__auto____12309)
{return or__3824__auto____12309;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____12314 = nodeseq;
if(and__3822__auto____12314)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____12314;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2369__auto____12315 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____12316 = (domina.single_node[goog.typeOf(x__2369__auto____12315)]);
if(or__3824__auto____12316)
{return or__3824__auto____12316;
} else
{var or__3824__auto____12317 = (domina.single_node["_"]);
if(or__3824__auto____12317)
{return or__3824__auto____12317;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3822__auto____12319 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____12319))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____12319;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__12320){
var mesg = cljs.core.seq(arglist__12320);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__12321){
var mesg = cljs.core.seq(arglist__12321);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t12329))
{
/**
* @constructor
*/
domina.t12329 = (function (class_name,by_class,meta12330){
this.class_name = class_name;
this.by_class = by_class;
this.meta12330 = meta12330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t12329.cljs$lang$type = true;
domina.t12329.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"domina/t12329");
});
domina.t12329.prototype.domina$DomContent$ = true;
domina.t12329.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__12332 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__12332.class_name)));
});
domina.t12329.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__12333 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__12333.class_name)));
});
domina.t12329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12331){
var this__12334 = this;
return this__12334.meta12330;
});
domina.t12329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12331,meta12330){
var this__12335 = this;
return (new domina.t12329(this__12335.class_name,this__12335.by_class,meta12330));
});
domina.t12329;
} else
{}
return (new domina.t12329(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__12336_SHARP_){
return p1__12336_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__12337_SHARP_,p2__12338_SHARP_){
return goog.dom.insertChildAt(p1__12337_SHARP_,p2__12338_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12340_SHARP_,p2__12339_SHARP_){
return goog.dom.insertSiblingBefore(p2__12339_SHARP_,p1__12340_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12342_SHARP_,p2__12341_SHARP_){
return goog.dom.insertSiblingAfter(p2__12341_SHARP_,p1__12342_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12344_SHARP_,p2__12343_SHARP_){
return goog.dom.replaceNode(p2__12343_SHARP_,p1__12344_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__12346 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__12346)))
{return null;
} else
{return s__12346;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__12353__12354 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12353__12354)
{var n__12355 = cljs.core.first.call(null,G__12353__12354);
var G__12353__12356 = G__12353__12354;
while(true){
goog.style.setStyle(n__12355,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12357 = cljs.core.next.call(null,G__12353__12356);
if(temp__3974__auto____12357)
{var G__12353__12358 = temp__3974__auto____12357;
{
var G__12359 = cljs.core.first.call(null,G__12353__12358);
var G__12360 = G__12353__12358;
n__12355 = G__12359;
G__12353__12356 = G__12360;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12361){
var content = cljs.core.first(arglist__12361);
var name = cljs.core.first(cljs.core.next(arglist__12361));
var value = cljs.core.rest(cljs.core.next(arglist__12361));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__12368__12369 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12368__12369)
{var n__12370 = cljs.core.first.call(null,G__12368__12369);
var G__12368__12371 = G__12368__12369;
while(true){
n__12370.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12372 = cljs.core.next.call(null,G__12368__12371);
if(temp__3974__auto____12372)
{var G__12368__12373 = temp__3974__auto____12372;
{
var G__12374 = cljs.core.first.call(null,G__12368__12373);
var G__12375 = G__12368__12373;
n__12370 = G__12374;
G__12368__12371 = G__12375;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12376){
var content = cljs.core.first(arglist__12376);
var name = cljs.core.first(cljs.core.next(arglist__12376));
var value = cljs.core.rest(cljs.core.next(arglist__12376));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__12383__12384 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12383__12384)
{var n__12385 = cljs.core.first.call(null,G__12383__12384);
var G__12383__12386 = G__12383__12384;
while(true){
n__12385.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____12387 = cljs.core.next.call(null,G__12383__12386);
if(temp__3974__auto____12387)
{var G__12383__12388 = temp__3974__auto____12387;
{
var G__12389 = cljs.core.first.call(null,G__12383__12388);
var G__12390 = G__12383__12388;
n__12385 = G__12389;
G__12383__12386 = G__12390;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__12396__12397 = pair.split(/\s*:\s*/);
var k__12398 = cljs.core.nth.call(null,vec__12396__12397,0,null);
var v__12399 = cljs.core.nth.call(null,vec__12396__12397,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____12400 = k__12398;
if(cljs.core.truth_(and__3822__auto____12400))
{return v__12399;
} else
{return and__3822__auto____12400;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__12398.toLowerCase()),v__12399);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__12403 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__12403))
{return domina.parse_style_attributes.call(null,style__12403);
} else
{if(cljs.core.truth_(style__12403.cssText))
{return domina.parse_style_attributes.call(null,style__12403.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__12409 = domina.single_node.call(null,content);
var attrs__12410 = node__12409.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__12401_SHARP_){
var attr__12411 = attrs__12410.item(p1__12401_SHARP_);
var value__12412 = attr__12411.nodeValue;
if((function (){var and__3822__auto____12413 = cljs.core.not_EQ_.call(null,null,value__12412);
if(and__3822__auto____12413)
{return cljs.core.not_EQ_.call(null,"",value__12412);
} else
{return and__3822__auto____12413;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__12411.nodeName.toLowerCase())],[attr__12411.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__12410.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__12433__12434 = cljs.core.seq.call(null,styles);
if(G__12433__12434)
{var G__12436__12438 = cljs.core.first.call(null,G__12433__12434);
var vec__12437__12439 = G__12436__12438;
var name__12440 = cljs.core.nth.call(null,vec__12437__12439,0,null);
var value__12441 = cljs.core.nth.call(null,vec__12437__12439,1,null);
var G__12433__12442 = G__12433__12434;
var G__12436__12443 = G__12436__12438;
var G__12433__12444 = G__12433__12442;
while(true){
var vec__12445__12446 = G__12436__12443;
var name__12447 = cljs.core.nth.call(null,vec__12445__12446,0,null);
var value__12448 = cljs.core.nth.call(null,vec__12445__12446,1,null);
var G__12433__12449 = G__12433__12444;
domina.set_style_BANG_.call(null,content,name__12447,value__12448);
var temp__3974__auto____12450 = cljs.core.next.call(null,G__12433__12449);
if(temp__3974__auto____12450)
{var G__12433__12451 = temp__3974__auto____12450;
{
var G__12452 = cljs.core.first.call(null,G__12433__12451);
var G__12453 = G__12433__12451;
G__12436__12443 = G__12452;
G__12433__12444 = G__12453;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__12473__12474 = cljs.core.seq.call(null,attrs);
if(G__12473__12474)
{var G__12476__12478 = cljs.core.first.call(null,G__12473__12474);
var vec__12477__12479 = G__12476__12478;
var name__12480 = cljs.core.nth.call(null,vec__12477__12479,0,null);
var value__12481 = cljs.core.nth.call(null,vec__12477__12479,1,null);
var G__12473__12482 = G__12473__12474;
var G__12476__12483 = G__12476__12478;
var G__12473__12484 = G__12473__12482;
while(true){
var vec__12485__12486 = G__12476__12483;
var name__12487 = cljs.core.nth.call(null,vec__12485__12486,0,null);
var value__12488 = cljs.core.nth.call(null,vec__12485__12486,1,null);
var G__12473__12489 = G__12473__12484;
domina.set_attr_BANG_.call(null,content,name__12487,value__12488);
var temp__3974__auto____12490 = cljs.core.next.call(null,G__12473__12489);
if(temp__3974__auto____12490)
{var G__12473__12491 = temp__3974__auto____12490;
{
var G__12492 = cljs.core.first.call(null,G__12473__12491);
var G__12493 = G__12473__12491;
G__12476__12483 = G__12492;
G__12473__12484 = G__12493;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__12500__12501 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12500__12501)
{var node__12502 = cljs.core.first.call(null,G__12500__12501);
var G__12500__12503 = G__12500__12501;
while(true){
goog.dom.classes.add(node__12502,class$);
var temp__3974__auto____12504 = cljs.core.next.call(null,G__12500__12503);
if(temp__3974__auto____12504)
{var G__12500__12505 = temp__3974__auto____12504;
{
var G__12506 = cljs.core.first.call(null,G__12500__12505);
var G__12507 = G__12500__12505;
node__12502 = G__12506;
G__12500__12503 = G__12507;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__12514__12515 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12514__12515)
{var node__12516 = cljs.core.first.call(null,G__12514__12515);
var G__12514__12517 = G__12514__12515;
while(true){
goog.dom.classes.remove(node__12516,class$);
var temp__3974__auto____12518 = cljs.core.next.call(null,G__12514__12517);
if(temp__3974__auto____12518)
{var G__12514__12519 = temp__3974__auto____12518;
{
var G__12520 = cljs.core.first.call(null,G__12514__12519);
var G__12521 = G__12514__12519;
node__12516 = G__12520;
G__12514__12517 = G__12521;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__12529 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__12530__12531 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12530__12531)
{var node__12532 = cljs.core.first.call(null,G__12530__12531);
var G__12530__12533 = G__12530__12531;
while(true){
goog.dom.classes.set(node__12532,classes__12529);
var temp__3974__auto____12534 = cljs.core.next.call(null,G__12530__12533);
if(temp__3974__auto____12534)
{var G__12530__12535 = temp__3974__auto____12534;
{
var G__12536 = cljs.core.first.call(null,G__12530__12535);
var G__12537 = G__12530__12535;
node__12532 = G__12536;
G__12530__12533 = G__12537;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__12544__12545 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12544__12545)
{var node__12546 = cljs.core.first.call(null,G__12544__12545);
var G__12544__12547 = G__12544__12545;
while(true){
goog.dom.setTextContent(node__12546,value);
var temp__3974__auto____12548 = cljs.core.next.call(null,G__12544__12547);
if(temp__3974__auto____12548)
{var G__12544__12549 = temp__3974__auto____12548;
{
var G__12550 = cljs.core.first.call(null,G__12544__12549);
var G__12551 = G__12544__12549;
node__12546 = G__12550;
G__12544__12547 = G__12551;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__12558__12559 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12558__12559)
{var node__12560 = cljs.core.first.call(null,G__12558__12559);
var G__12558__12561 = G__12558__12559;
while(true){
goog.dom.forms.setValue(node__12560,value);
var temp__3974__auto____12562 = cljs.core.next.call(null,G__12558__12561);
if(temp__3974__auto____12562)
{var G__12558__12563 = temp__3974__auto____12562;
{
var G__12564 = cljs.core.first.call(null,G__12558__12563);
var G__12565 = G__12558__12563;
node__12560 = G__12564;
G__12558__12561 = G__12565;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___12582 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___12583 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__12584 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___12585 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__12584);
if(cljs.core.truth_((function (){var and__3822__auto____12586 = allows_inner_html_QMARK___12582;
if(and__3822__auto____12586)
{var and__3822__auto____12588 = (function (){var or__3824__auto____12587 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____12587))
{return or__3824__auto____12587;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___12583);
}
})();
if(cljs.core.truth_(and__3822__auto____12588))
{return !(special_tag_QMARK___12585);
} else
{return and__3822__auto____12588;
}
} else
{return and__3822__auto____12586;
}
})()))
{var value__12589 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__12592__12593 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12592__12593)
{var node__12594 = cljs.core.first.call(null,G__12592__12593);
var G__12592__12595 = G__12592__12593;
while(true){
goog.events.removeAll(node__12594);
node__12594.innerHTML = value__12589;
var temp__3974__auto____12596 = cljs.core.next.call(null,G__12592__12595);
if(temp__3974__auto____12596)
{var G__12592__12597 = temp__3974__auto____12596;
{
var G__12598 = cljs.core.first.call(null,G__12592__12597);
var G__12599 = G__12592__12597;
node__12594 = G__12598;
G__12592__12595 = G__12599;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e12590){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e12590))
{var e__12591 = e12590;
domina.replace_children_BANG_.call(null,content,value__12589);
} else
{if("\uFDD0'else")
{throw e12590;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__12605 = domina.single_node.call(null,node).__domina_data;
var value__12606 = (cljs.core.truth_(m__12605)?cljs.core._lookup.call(null,m__12605,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____12607 = bubble;
if(cljs.core.truth_(and__3822__auto____12607))
{return (value__12606 == null);
} else
{return and__3822__auto____12607;
}
})()))
{var temp__3974__auto____12608 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____12608))
{var parent__12609 = temp__3974__auto____12608;
return get_data.call(null,parent__12609,key,true);
} else
{return null;
}
} else
{return value__12606;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__12615 = (function (){var or__3824__auto____12614 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____12614))
{return or__3824__auto____12614;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__12615,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__12627 = domina.nodes.call(null,parent_content);
var children__12628 = domina.nodes.call(null,child_content);
var first_child__12636 = (function (){var frag__12629 = document.createDocumentFragment();
var G__12630__12631 = cljs.core.seq.call(null,children__12628);
if(G__12630__12631)
{var child__12632 = cljs.core.first.call(null,G__12630__12631);
var G__12630__12633 = G__12630__12631;
while(true){
frag__12629.appendChild(child__12632);
var temp__3974__auto____12634 = cljs.core.next.call(null,G__12630__12633);
if(temp__3974__auto____12634)
{var G__12630__12635 = temp__3974__auto____12634;
{
var G__12638 = cljs.core.first.call(null,G__12630__12635);
var G__12639 = G__12630__12635;
child__12632 = G__12638;
G__12630__12633 = G__12639;
continue;
}
} else
{}
break;
}
} else
{}
return frag__12629;
})();
var other_children__12637 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__12627) - 1),(function (){
return first_child__12636.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__12627))
{f.call(null,cljs.core.first.call(null,parents__12627),first_child__12636);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12610_SHARP_,p2__12611_SHARP_){
return f.call(null,p1__12610_SHARP_,p2__12611_SHARP_);
}),cljs.core.rest.call(null,parents__12627),other_children__12637));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3822__auto____12641 = obj;
if(cljs.core.truth_(and__3822__auto____12641))
{return obj.length;
} else
{return and__3822__auto____12641;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__12645__12646 = list_thing;
if(G__12645__12646)
{if((function (){var or__3824__auto____12647 = (G__12645__12646.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12647)
{return or__3824__auto____12647;
} else
{return G__12645__12646.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12645__12646.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12645__12646);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12645__12646);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__12648__12649 = content;
if(G__12648__12649)
{if((function (){var or__3824__auto____12650 = (G__12648__12649.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12650)
{return or__3824__auto____12650;
} else
{return G__12648__12649.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12648__12649.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12648__12649);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12648__12649);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__12651__12652 = content;
if(G__12651__12652)
{if((function (){var or__3824__auto____12653 = (G__12651__12652.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12653)
{return or__3824__auto____12653;
} else
{return G__12651__12652.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12651__12652.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12651__12652);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12651__12652);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
