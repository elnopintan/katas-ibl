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
var opt_wrapper__8297 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__8298 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__8299 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__8298,"caption":table_section_wrapper__8298,"optgroup":opt_wrapper__8297,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__8299,"thead":table_section_wrapper__8298,"th":cell_wrapper__8299,"option":opt_wrapper__8297,"tbody":table_section_wrapper__8298,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__8298});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___8312 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__8316 = (((function (){var and__3822__auto____8313 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____8313)
{return no_tbody_QMARK___8312;
} else
{return and__3822__auto____8313;
}
})())?(function (){var and__3822__auto____8314 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____8314))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____8314;
}
})():(((function (){var and__3822__auto____8315 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____8315)
{return no_tbody_QMARK___8312;
} else
{return and__3822__auto____8315;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__8317__8318 = cljs.core.seq.call(null,tbody__8316);
if(G__8317__8318)
{var child__8319 = cljs.core.first.call(null,G__8317__8318);
var G__8317__8320 = G__8317__8318;
while(true){
if((function (){var and__3822__auto____8321 = cljs.core._EQ_.call(null,child__8319.nodeName,"tbody");
if(and__3822__auto____8321)
{return cljs.core._EQ_.call(null,child__8319.childNodes.length,0);
} else
{return and__3822__auto____8321;
}
})())
{child__8319.parentNode.removeChild(child__8319);
} else
{}
var temp__3974__auto____8322 = cljs.core.next.call(null,G__8317__8320);
if(temp__3974__auto____8322)
{var G__8317__8323 = temp__3974__auto____8322;
{
var G__8324 = cljs.core.first.call(null,G__8317__8323);
var G__8325 = G__8317__8323;
child__8319 = G__8324;
G__8317__8320 = G__8325;
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
var html__8339 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__8340 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__8339)))].join('').toLowerCase();
var vec__8338__8341 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__8340,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__8342 = cljs.core.nth.call(null,vec__8338__8341,0,null);
var start_wrap__8343 = cljs.core.nth.call(null,vec__8338__8341,1,null);
var end_wrap__8344 = cljs.core.nth.call(null,vec__8338__8341,2,null);
var div__8348 = (function (){var wrapper__8346 = (function (){var div__8345 = document.createElement("div");
div__8345.innerHTML = [cljs.core.str(start_wrap__8343),cljs.core.str(html__8339),cljs.core.str(end_wrap__8344)].join('');
return div__8345;
})();
var level__8347 = depth__8342;
while(true){
if((level__8347 > 0))
{{
var G__8350 = wrapper__8346.lastChild;
var G__8351 = (level__8347 - 1);
wrapper__8346 = G__8350;
level__8347 = G__8351;
continue;
}
} else
{return wrapper__8346;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__8348,html__8339);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____8349 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____8349)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__8339);
} else
{return and__3822__auto____8349;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__8348,html__8339);
} else
{}
return div__8348.childNodes;
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
if((function (){var and__3822__auto____8356 = content;
if(and__3822__auto____8356)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____8356;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2369__auto____8357 = (((content == null))?null:content);
return (function (){var or__3824__auto____8358 = (domina.nodes[goog.typeOf(x__2369__auto____8357)]);
if(or__3824__auto____8358)
{return or__3824__auto____8358;
} else
{var or__3824__auto____8359 = (domina.nodes["_"]);
if(or__3824__auto____8359)
{return or__3824__auto____8359;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____8364 = nodeseq;
if(and__3822__auto____8364)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____8364;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2369__auto____8365 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____8366 = (domina.single_node[goog.typeOf(x__2369__auto____8365)]);
if(or__3824__auto____8366)
{return or__3824__auto____8366;
} else
{var or__3824__auto____8367 = (domina.single_node["_"]);
if(or__3824__auto____8367)
{return or__3824__auto____8367;
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
if(cljs.core.truth_((function (){var and__3822__auto____8369 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____8369))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____8369;
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
log_debug.cljs$lang$applyTo = (function (arglist__8370){
var mesg = cljs.core.seq(arglist__8370);;
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
log.cljs$lang$applyTo = (function (arglist__8371){
var mesg = cljs.core.seq(arglist__8371);;
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
if((void 0 === domina.t8379))
{
/**
* @constructor
*/
domina.t8379 = (function (class_name,by_class,meta8380){
this.class_name = class_name;
this.by_class = by_class;
this.meta8380 = meta8380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t8379.cljs$lang$type = true;
domina.t8379.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"domina/t8379");
});
domina.t8379.prototype.domina$DomContent$ = true;
domina.t8379.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__8382 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__8382.class_name)));
});
domina.t8379.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__8383 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__8383.class_name)));
});
domina.t8379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8381){
var this__8384 = this;
return this__8384.meta8380;
});
domina.t8379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8381,meta8380){
var this__8385 = this;
return (new domina.t8379(this__8385.class_name,this__8385.by_class,meta8380));
});
domina.t8379;
} else
{}
return (new domina.t8379(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__8386_SHARP_){
return p1__8386_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__8387_SHARP_,p2__8388_SHARP_){
return goog.dom.insertChildAt(p1__8387_SHARP_,p2__8388_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__8390_SHARP_,p2__8389_SHARP_){
return goog.dom.insertSiblingBefore(p2__8389_SHARP_,p1__8390_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__8392_SHARP_,p2__8391_SHARP_){
return goog.dom.insertSiblingAfter(p2__8391_SHARP_,p1__8392_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__8394_SHARP_,p2__8393_SHARP_){
return goog.dom.replaceNode(p2__8393_SHARP_,p1__8394_SHARP_);
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
var s__8396 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__8396)))
{return null;
} else
{return s__8396;
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
var G__8403__8404 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8403__8404)
{var n__8405 = cljs.core.first.call(null,G__8403__8404);
var G__8403__8406 = G__8403__8404;
while(true){
goog.style.setStyle(n__8405,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____8407 = cljs.core.next.call(null,G__8403__8406);
if(temp__3974__auto____8407)
{var G__8403__8408 = temp__3974__auto____8407;
{
var G__8409 = cljs.core.first.call(null,G__8403__8408);
var G__8410 = G__8403__8408;
n__8405 = G__8409;
G__8403__8406 = G__8410;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8411){
var content = cljs.core.first(arglist__8411);
var name = cljs.core.first(cljs.core.next(arglist__8411));
var value = cljs.core.rest(cljs.core.next(arglist__8411));
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
var G__8418__8419 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8418__8419)
{var n__8420 = cljs.core.first.call(null,G__8418__8419);
var G__8418__8421 = G__8418__8419;
while(true){
n__8420.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____8422 = cljs.core.next.call(null,G__8418__8421);
if(temp__3974__auto____8422)
{var G__8418__8423 = temp__3974__auto____8422;
{
var G__8424 = cljs.core.first.call(null,G__8418__8423);
var G__8425 = G__8418__8423;
n__8420 = G__8424;
G__8418__8421 = G__8425;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__8426){
var content = cljs.core.first(arglist__8426);
var name = cljs.core.first(cljs.core.next(arglist__8426));
var value = cljs.core.rest(cljs.core.next(arglist__8426));
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
var G__8433__8434 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8433__8434)
{var n__8435 = cljs.core.first.call(null,G__8433__8434);
var G__8433__8436 = G__8433__8434;
while(true){
n__8435.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____8437 = cljs.core.next.call(null,G__8433__8436);
if(temp__3974__auto____8437)
{var G__8433__8438 = temp__3974__auto____8437;
{
var G__8439 = cljs.core.first.call(null,G__8433__8438);
var G__8440 = G__8433__8438;
n__8435 = G__8439;
G__8433__8436 = G__8440;
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
var vec__8446__8447 = pair.split(/\s*:\s*/);
var k__8448 = cljs.core.nth.call(null,vec__8446__8447,0,null);
var v__8449 = cljs.core.nth.call(null,vec__8446__8447,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____8450 = k__8448;
if(cljs.core.truth_(and__3822__auto____8450))
{return v__8449;
} else
{return and__3822__auto____8450;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__8448.toLowerCase()),v__8449);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__8453 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__8453))
{return domina.parse_style_attributes.call(null,style__8453);
} else
{if(cljs.core.truth_(style__8453.cssText))
{return domina.parse_style_attributes.call(null,style__8453.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__8459 = domina.single_node.call(null,content);
var attrs__8460 = node__8459.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__8451_SHARP_){
var attr__8461 = attrs__8460.item(p1__8451_SHARP_);
var value__8462 = attr__8461.nodeValue;
if((function (){var and__3822__auto____8463 = cljs.core.not_EQ_.call(null,null,value__8462);
if(and__3822__auto____8463)
{return cljs.core.not_EQ_.call(null,"",value__8462);
} else
{return and__3822__auto____8463;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__8461.nodeName.toLowerCase())],[attr__8461.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__8460.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__8483__8484 = cljs.core.seq.call(null,styles);
if(G__8483__8484)
{var G__8486__8488 = cljs.core.first.call(null,G__8483__8484);
var vec__8487__8489 = G__8486__8488;
var name__8490 = cljs.core.nth.call(null,vec__8487__8489,0,null);
var value__8491 = cljs.core.nth.call(null,vec__8487__8489,1,null);
var G__8483__8492 = G__8483__8484;
var G__8486__8493 = G__8486__8488;
var G__8483__8494 = G__8483__8492;
while(true){
var vec__8495__8496 = G__8486__8493;
var name__8497 = cljs.core.nth.call(null,vec__8495__8496,0,null);
var value__8498 = cljs.core.nth.call(null,vec__8495__8496,1,null);
var G__8483__8499 = G__8483__8494;
domina.set_style_BANG_.call(null,content,name__8497,value__8498);
var temp__3974__auto____8500 = cljs.core.next.call(null,G__8483__8499);
if(temp__3974__auto____8500)
{var G__8483__8501 = temp__3974__auto____8500;
{
var G__8502 = cljs.core.first.call(null,G__8483__8501);
var G__8503 = G__8483__8501;
G__8486__8493 = G__8502;
G__8483__8494 = G__8503;
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
var G__8523__8524 = cljs.core.seq.call(null,attrs);
if(G__8523__8524)
{var G__8526__8528 = cljs.core.first.call(null,G__8523__8524);
var vec__8527__8529 = G__8526__8528;
var name__8530 = cljs.core.nth.call(null,vec__8527__8529,0,null);
var value__8531 = cljs.core.nth.call(null,vec__8527__8529,1,null);
var G__8523__8532 = G__8523__8524;
var G__8526__8533 = G__8526__8528;
var G__8523__8534 = G__8523__8532;
while(true){
var vec__8535__8536 = G__8526__8533;
var name__8537 = cljs.core.nth.call(null,vec__8535__8536,0,null);
var value__8538 = cljs.core.nth.call(null,vec__8535__8536,1,null);
var G__8523__8539 = G__8523__8534;
domina.set_attr_BANG_.call(null,content,name__8537,value__8538);
var temp__3974__auto____8540 = cljs.core.next.call(null,G__8523__8539);
if(temp__3974__auto____8540)
{var G__8523__8541 = temp__3974__auto____8540;
{
var G__8542 = cljs.core.first.call(null,G__8523__8541);
var G__8543 = G__8523__8541;
G__8526__8533 = G__8542;
G__8523__8534 = G__8543;
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
var G__8550__8551 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8550__8551)
{var node__8552 = cljs.core.first.call(null,G__8550__8551);
var G__8550__8553 = G__8550__8551;
while(true){
goog.dom.classes.add(node__8552,class$);
var temp__3974__auto____8554 = cljs.core.next.call(null,G__8550__8553);
if(temp__3974__auto____8554)
{var G__8550__8555 = temp__3974__auto____8554;
{
var G__8556 = cljs.core.first.call(null,G__8550__8555);
var G__8557 = G__8550__8555;
node__8552 = G__8556;
G__8550__8553 = G__8557;
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
var G__8564__8565 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8564__8565)
{var node__8566 = cljs.core.first.call(null,G__8564__8565);
var G__8564__8567 = G__8564__8565;
while(true){
goog.dom.classes.remove(node__8566,class$);
var temp__3974__auto____8568 = cljs.core.next.call(null,G__8564__8567);
if(temp__3974__auto____8568)
{var G__8564__8569 = temp__3974__auto____8568;
{
var G__8570 = cljs.core.first.call(null,G__8564__8569);
var G__8571 = G__8564__8569;
node__8566 = G__8570;
G__8564__8567 = G__8571;
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
var classes__8579 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__8580__8581 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8580__8581)
{var node__8582 = cljs.core.first.call(null,G__8580__8581);
var G__8580__8583 = G__8580__8581;
while(true){
goog.dom.classes.set(node__8582,classes__8579);
var temp__3974__auto____8584 = cljs.core.next.call(null,G__8580__8583);
if(temp__3974__auto____8584)
{var G__8580__8585 = temp__3974__auto____8584;
{
var G__8586 = cljs.core.first.call(null,G__8580__8585);
var G__8587 = G__8580__8585;
node__8582 = G__8586;
G__8580__8583 = G__8587;
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
var G__8594__8595 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8594__8595)
{var node__8596 = cljs.core.first.call(null,G__8594__8595);
var G__8594__8597 = G__8594__8595;
while(true){
goog.dom.setTextContent(node__8596,value);
var temp__3974__auto____8598 = cljs.core.next.call(null,G__8594__8597);
if(temp__3974__auto____8598)
{var G__8594__8599 = temp__3974__auto____8598;
{
var G__8600 = cljs.core.first.call(null,G__8594__8599);
var G__8601 = G__8594__8599;
node__8596 = G__8600;
G__8594__8597 = G__8601;
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
var G__8608__8609 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8608__8609)
{var node__8610 = cljs.core.first.call(null,G__8608__8609);
var G__8608__8611 = G__8608__8609;
while(true){
goog.dom.forms.setValue(node__8610,value);
var temp__3974__auto____8612 = cljs.core.next.call(null,G__8608__8611);
if(temp__3974__auto____8612)
{var G__8608__8613 = temp__3974__auto____8612;
{
var G__8614 = cljs.core.first.call(null,G__8608__8613);
var G__8615 = G__8608__8613;
node__8610 = G__8614;
G__8608__8611 = G__8615;
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
var allows_inner_html_QMARK___8632 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___8633 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__8634 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___8635 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__8634);
if(cljs.core.truth_((function (){var and__3822__auto____8636 = allows_inner_html_QMARK___8632;
if(and__3822__auto____8636)
{var and__3822__auto____8638 = (function (){var or__3824__auto____8637 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____8637))
{return or__3824__auto____8637;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___8633);
}
})();
if(cljs.core.truth_(and__3822__auto____8638))
{return !(special_tag_QMARK___8635);
} else
{return and__3822__auto____8638;
}
} else
{return and__3822__auto____8636;
}
})()))
{var value__8639 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__8642__8643 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__8642__8643)
{var node__8644 = cljs.core.first.call(null,G__8642__8643);
var G__8642__8645 = G__8642__8643;
while(true){
goog.events.removeAll(node__8644);
node__8644.innerHTML = value__8639;
var temp__3974__auto____8646 = cljs.core.next.call(null,G__8642__8645);
if(temp__3974__auto____8646)
{var G__8642__8647 = temp__3974__auto____8646;
{
var G__8648 = cljs.core.first.call(null,G__8642__8647);
var G__8649 = G__8642__8647;
node__8644 = G__8648;
G__8642__8645 = G__8649;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e8640){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e8640))
{var e__8641 = e8640;
domina.replace_children_BANG_.call(null,content,value__8639);
} else
{if("\uFDD0'else")
{throw e8640;
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
var m__8655 = domina.single_node.call(null,node).__domina_data;
var value__8656 = (cljs.core.truth_(m__8655)?cljs.core._lookup.call(null,m__8655,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____8657 = bubble;
if(cljs.core.truth_(and__3822__auto____8657))
{return (value__8656 == null);
} else
{return and__3822__auto____8657;
}
})()))
{var temp__3974__auto____8658 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____8658))
{var parent__8659 = temp__3974__auto____8658;
return get_data.call(null,parent__8659,key,true);
} else
{return null;
}
} else
{return value__8656;
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
var m__8665 = (function (){var or__3824__auto____8664 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____8664))
{return or__3824__auto____8664;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__8665,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__8677 = domina.nodes.call(null,parent_content);
var children__8678 = domina.nodes.call(null,child_content);
var first_child__8686 = (function (){var frag__8679 = document.createDocumentFragment();
var G__8680__8681 = cljs.core.seq.call(null,children__8678);
if(G__8680__8681)
{var child__8682 = cljs.core.first.call(null,G__8680__8681);
var G__8680__8683 = G__8680__8681;
while(true){
frag__8679.appendChild(child__8682);
var temp__3974__auto____8684 = cljs.core.next.call(null,G__8680__8683);
if(temp__3974__auto____8684)
{var G__8680__8685 = temp__3974__auto____8684;
{
var G__8688 = cljs.core.first.call(null,G__8680__8685);
var G__8689 = G__8680__8685;
child__8682 = G__8688;
G__8680__8683 = G__8689;
continue;
}
} else
{}
break;
}
} else
{}
return frag__8679;
})();
var other_children__8687 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__8677) - 1),(function (){
return first_child__8686.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__8677))
{f.call(null,cljs.core.first.call(null,parents__8677),first_child__8686);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8660_SHARP_,p2__8661_SHARP_){
return f.call(null,p1__8660_SHARP_,p2__8661_SHARP_);
}),cljs.core.rest.call(null,parents__8677),other_children__8687));
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
var and__3822__auto____8691 = obj;
if(cljs.core.truth_(and__3822__auto____8691))
{return obj.length;
} else
{return and__3822__auto____8691;
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
{if((function (){var G__8695__8696 = list_thing;
if(G__8695__8696)
{if((function (){var or__3824__auto____8697 = (G__8695__8696.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8697)
{return or__3824__auto____8697;
} else
{return G__8695__8696.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8695__8696.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8695__8696);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8695__8696);
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
{if((function (){var G__8698__8699 = content;
if(G__8698__8699)
{if((function (){var or__3824__auto____8700 = (G__8698__8699.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8700)
{return or__3824__auto____8700;
} else
{return G__8698__8699.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8698__8699.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8698__8699);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8698__8699);
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
{if((function (){var G__8701__8702 = content;
if(G__8701__8702)
{if((function (){var or__3824__auto____8703 = (G__8701__8702.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8703)
{return or__3824__auto____8703;
} else
{return G__8701__8702.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8701__8702.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8701__8702);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8701__8702);
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
