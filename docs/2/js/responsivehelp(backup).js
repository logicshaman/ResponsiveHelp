/*! Responsive Help V1 Aug 7, 2019 MIT
		Author: Eulr A. Masauding */

// The Responsive Width
// function dynamicWW(){return verge.viewport().width};
function dynamicWW(){return verge.viewportW()};

// RESPONSIVE PLUGIN
function responsiveHelp(MNW,MXW,STU){

	$MNW = MNW||500; // $MNW is the Default Site Min Width
	$MXW = MXW||1200; // $MXW is thge Default Site Max Width
	$TU	 = STU||"rem"; // $TU is the Scale To Use

	var $ = jQuery; // Secure $ as jQuery

	function PGF(){ // producing accesible variables throughout responsiveHelp() function
		$DWW = dynamicWW(); // Dynamic Window Width
		$WWS = $DWW - $MNW, // Window Width Scope
		$SWR = $MXW - $MNW; // Site Width Range
		$MAX = $MXW < $DWW; // position checker
		$MIN = $MNW > $DWW; // position checker
	}PGF();
	$(window).resize(function(){PGF()});

	//Handles the custom break points
	function CstmBrkPnt(o){
		var ob = o||{},
				n = ob.mnw,
				x = ob.mxw,
				mn = $MIN,
				mx = $MAX,
				swr = $SWR,
				wws = $WWS;
		if(n&&!x){
			var mn = $DWW < n,
					swr = $MXW - n,
					wws = $DWW - n;
		}else if(!n&&x){
			var mx = $DWW > x,
					swr = x - $MNW;
		}else if(n&&x){
			var mn = $DWW < n,
					mx = $DWW > x,
					swr = x - n,
					wws = $DWW - n;
		}
		return {max:mn,min:mx,SWR:swr,WWS:wws}
	}

	//Calculate 1 up to 4 values
	function $ingleVal(a,b, z){
		var cbp= CstmBrkPnt(z),
				r  = b - a,
				i	 = r / cbp.SWR;
		if(cbp.max){
			return b+(z.scale||$TU)
		}else if(cbp.min){
			return a+(z.scale||$TU)
		}else{
			return (a+(i*cbp.WWS))+(z.scale||$TU)
		}
	}
	function $TwoVals(a,b,c,d, z){
		var cbp = CstmBrkPnt(z),
				tbp = c - a,
				rlp = d - b,
				itb = tbp / cbp.SWR,
				irl = rlp / cbp.SWR,
				ds	= z.scale||$TU,
				tbs = z.scaleTB,
				rls = z.scaleRL;
		if(cbp.max){
			return [c+(tbs||ds), d+(rls||ds)]
		}else if(cbp.min){
			return [a+(tbs||ds), b+(rls||ds)]
		}else{
			return [(a+(itb*cbp.WWS))+(tbs||ds), (b+(irl*cbp.WWS))+(rls||ds)]
		}
	}
	function T$RL$B(a,b,c,d,e,f, z){
		var cbp = CstmBrkPnt(z),
				tp	= d - a,
				rlp = e - b,
				bp	= f - c,
				it  = tp / cbp.swr,
				irl = rlp / cbp.swr,
				ib  = bp / cbp.swr,
				ds	= z.scale||$TU,
				ts  = z.scaleT,
				bs  = z.scaleB,
				rls = z.scaleRL;
		if($MAX){
			return [d+(ts+ds), e+(rls+ds), f+(bs+ds)]
		}else if($MIN){
			return [a+(ts+ds), b+(rls+ds), c+(bs+ds)]
		}else{
			return [a+(it*cbp.WWS), b+(irl*cbp.WWS), c+(ib*cbp.WWS)]
		}
	}
	function T$R$B$L(a,b,c,d,e,f,g,h, z){
		var cbp= CstmBrkPnt(z),
				tp = e  - a,
				rp = f  - b,
				bp = g  - c,
				lp = h  - d,
				it = tp / $MXW,
				ir = rp / $MXW,
				ib = bp / $MXW,
				il = lp / $MXW,
				ds = z.scale||$TU,
				ts = z.scaleT,
				rs = z.scaleR,
				bs = z.scaleB,
				ls = z.scaleL;
		if($MAX){
			return [e+(ts+ds),f+(rs+ds),g+(bs+ds),h+(ls+ds)]
		}else if($MIN){
			return [a+(ts+ds),b+(rs+ds),c+(bs+ds),d+(ls+ds)]
		}else{
			return [(a+(it*$WWS))+(ts+ds), (b+(ir*$WWS))+(rs+ds), (c+(ib*$WWS))+(bs+ds), (d+(il*$WWS))+(ls+ds)]
		}
	}



	$.fn.Rpadding = function(a,b,c,d, e,f,g,h, z){
		for(var i = 0; i < arguments.length; i++){ // get how many "numbers" on the argument
			if(typeof(arguments[i])==="number"){
				if((i+1)==(arguments.length-1)){
					var nums=i
				}
			}
		}
		if(nums===2){
			this.css("padding",$ingleVal(a,b, z))
		}
		if(nums===4){
			p = $TwoVals(a,b,c,d, z);
			this.css({
				paddingTop: 	p[0],
				paddingBottom:p[0],
				paddingRight: p[1],
				paddingLeft: 	p[1]
			});
		}
		if(nums===6){
			var p	= T$RL$B(a,b,c,d,e,f, z);
			this.css({
				paddingTop: 	p[0],
				paddingRight: p[1],
				paddingLeft: 	p[1],
				paddingBottom:p[2]
			});
		}
		if(nums===8){
			p	= T$R$B$L(a,b,c,d,e,f,g,h, z);
			this.css({
				paddingTop: 	p[0],
				paddingRight: p[1],
				paddingBottom:p[2],
				paddingLeft: 	p[3]
			});
		}
		return this
	}






	$.fn.testfoo = function(a,b,o){
		this.css("fontSize", $ingleVal(a,b,o));
		return this;
	};


}











	// function $TwoVals(a,b,c,d,itb,irl){
	// 	if($MAX){
	// 		return [c,d]
	// 	}else if($MIN){
	// 		return [a,b]
	// 	}else{
	// 		return [a+(itb*$WWS), b+(irl*$WWS)]
	// 	}
	// }
	// function T$RL$B(a,b,c,d,e,f,it,irl,ib){
	// 	if($MAX){
	// 		return [d,e,f]
	// 	}else if($MIN){
	// 		return [a,b,c]
	// 	}else{
	// 		return [a+(it*$WWS), b+(irl*$WWS), c+(ib*$WWS)]
	// 	}
	// }
	// function T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il){
	// 	if($MAX){
	// 		return [e,f,g,h]
	// 	}else if($MIN){
	// 		return [a,b,c,d]
	// 	}else{
	// 		return [a+(it*$WWS), b+(ir*$WWS), c+(ib*$WWS), d+(il*$WWS)]
	// 	}
	// }

	// // Responsive Text
	// $.fn.RfontSize = function(a,b,o){
	// 	this.css("fontSize", $ingleVal(a,b,o));
	// 	return this;
	// };
	// //  Responsive Line Height
	// $.fn.RlineHeight = function(a,b,o){
	// 	this.css("lineHeight",$ingleVal(a,b,o));
	// 	return this;
	// };
	// //  Responsive Letter-spacing
	// $.fn.RletterSpacing = function(a,b,o){
	// 	this.css("letterSpacing",$ingleVal(a,b,o));
	// 	return this;
	// };

	// // Responsive Width
	// $.fn.Rwidth = function(a,b,o){
	// 	this.css("width",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // Responsive Height-According-To-Width
	// $.fn.RheightByWidth = function(a,b,o){
	// 	this.css("height",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // Responsive Width with Break Points
	// function breakPointsVal(nw,xw,nbw,xbw,c2,d2){
	// 	if(typeof(c2)==="number"){nbw=c2;}
	// 	if(typeof(d2)==="number"){xbw=d2;}
	// 	var range = xw - nw,
	// 		scope = xbw - nbw,
	// 		i = range / scope,
	// 		wScope = $DWW - nbw;
	// 	if(nbw>=$DWW){
	// 		return nw
	// 	}else if(xbw<=$DWW){
	// 		return xw
	// 	}else{
	// 		return nw + (i * wScope)
	// 	}
	// }
	// $.fn.RwidthBreakPoints = function(arg){
	// 	var argN=arguments[0].length;
	// 	for (var i = 0; i < argN; i++){
	// 		var a  = arg[i][0],b=arg[i][1],c=arg[i][2],d=arg[i][3],e=arg[i][4];
	// 		if(i===0){
	// 			c=0; var c2=arg[0][2],d2="";
	// 		}else if(i===(argN-1)){
	// 			d=99999; var d2=arg[(argN-1)][3],c2="";
	// 		}else{
	// 			var c2="",d2="";
	// 		}
	// 		if($DWW>=c&&$DWW<=d){
	// 			var val= breakPointsVal(a,b,c,d,c2,d2);
	// 			this.css("width",val+(e||$TU));
	// 		}
	// 	}
	// 	return this;
	// }
	// //responsive max-width
	// $.fn.RmaxWidth = function(a,b,o){
	// 	this.css("maxWidth",$ingleVal(a,b,o));
	// 	return this;
	// }

	// // Responsive Padding
	// $.fn.Rpadding = function(arg){
	// 	if(typeof(arguments[0][0])==="number"){
	// 		var a=arg[0],b=arg[1],c=arg[2],d=arg[3],
	// 				e=arg[4],f=arg[5],g=arg[6],h=arg[7];
	// 	}else{
	// 		var a=arg[0][0],b=arg[0][1],c=arg[0][2],d=arg[0][3],
	// 				e=arg[0][4],f=arg[0][5],g=arg[0][6],h=arg[0][7],
	// 				s=arg[1][0],t=arg[1][1],u=arg[1][2],v=arg[1][3];
	// 	}
	// 	if(arguments[0].length===2||arguments[0][0].length===2){
	// 		this.css("padding",$ingleVal(a,b)+(c||$TU));
	// 	}else if(arguments[0].length===4||arguments[0][0].length===4){
	// 		var tbp = c - a,
	// 				rlp = d - b,
	// 				itb = tbp / $MXW,
	// 				irl = rlp / $MXW,
	// 				p		= $TwoVals(a,b,c,d,itb,irl);
	// 		this.css({
	// 			paddingTop: 	p[0]+(s||$TU),
	// 			paddingBottom:p[0]+(s||$TU),
	// 			paddingRight: p[1]+(t||s||$TU),
	// 			paddingLeft: 	p[1]+(t||s||$TU)
	// 		});
	// 	}else if(arguments[0].length===6||arguments[0][0].length===6){
	// 		var tp	= d - a,
	// 				rlp = e - b,
	// 				bp	= f - c,
	// 				it  = tp / $MXW,
	// 				irl = rlp / $MXW,
	// 				ib  = bp / $MXW,
	// 				p		= T$RL$B(a,b,c,d,e,f,it,irl,ib);
	// 		this.css({
	// 			paddingTop: 	p[0]+(s||$TU),
	// 			paddingRight: p[1]+(t||s||$TU),
	// 			paddingLeft: 	p[1]+(t||s||$TU),
	// 			paddingBottom:p[2]+(u||s||$TU)
	// 		});
	// 	}else if(arguments[0].length===8||arguments[0][0].length===8){
	// 		var tp = e  - a,
	// 				rp = f  - b,
	// 				bp = g  - c,
	// 				lp = h  - d,
	// 				it = tp / $MXW,
	// 				ir = rp / $MXW,
	// 				ib = bp / $MXW,
	// 				il = lp / $MXW,
	// 				p		= T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il);
	// 		this.css({
	// 			paddingTop: 	p[0]+(s||$TU),
	// 			paddingRight: p[1]+(t||s||$TU),
	// 			paddingBottom:p[2]+(v||s||$TU),
	// 			paddingLeft: 	p[3]+(u||t||s||$TU)
	// 		});
	// 	}
	// 	return this;
	// }

	// // Responsive Margin
	// $.fn.Rmargin = function(arg){
	// 	if(typeof(arguments[0][0])==="number"){
	// 		var a=arg[0],b=arg[1],c=arg[2],d=arg[3],
	// 				e=arg[4],f=arg[5],g=arg[6],h=arg[7];
	// 	}else{
	// 		var a=arg[0][0],b=arg[0][1],c=arg[0][2],d=arg[0][3],
	// 				e=arg[0][4],f=arg[0][5],g=arg[0][6],h=arg[0][7],
	// 				s=arg[1][0],t=arg[1][1],u=arg[1][2],v=arg[1][3];
	// 	}
	// 	if(arguments[0].length===2||arguments[0][0].length===2){
	// 		this.css("margin",$ingleVal(a,b,o));
	// 	}
	// 	if(arguments[0].length===4||arguments[0][0].length===4){
	// 		var	tbm = c - a,
	// 				rlm = d - b,
	// 				itb = tbm / $MXW,
	// 				irl = rlm / $MXW,
	// 				m		= $TwoVals(a,b,c,d,itb,irl);
	// 		if(a==="auto"||c==="auto"){tb="auto";s=t=""}
	// 		if(b==="auto"||d==="auto"){rl="auto";s=t=""}
	// 		var tb = m[0]+(s||$TU),
	// 				rl = m[1]+(t||s||$TU);
	// 		this.css({
	// 			marginTop:	 tb,
	// 			marginBottom:tb,
	// 			marginRight: rl,
	// 			marginLeft:	 rl
	// 		});
	// 	}
	// 	if(arguments[0].length===6||arguments[0][0].length===6){
	// 		var	tm = d - a,
	// 				rlm= e - b,
	// 				bm = f - c,
	// 				it = tm / $MXW,
	// 				irl= rlm / $MXW,
	// 				ib = bm / $MXW,
	// 				m	 = T$RL$B(a,b,c,d,e,f,it,irl,ib);
	// 		if(a==="auto"||d==="auto"){top  ="auto";s=t=u=""}
	// 		if(b==="auto"||e==="auto"){rl ="auto";s=t=u=""}
	// 		if(c==="auto"||f==="auto"){btm="auto";s=t=u=""}
	// 		var top= m[0]+(s||$TU),
	// 				rl = m[1]+(t||s||$TU),
	// 				btm= m[2]+(u||s||$TU);
	// 		this.css({
	// 			marginTop:	 top,
	// 			marginRight: rl,
	// 			marginLeft:	 rl,
	// 			marginBottom:btm
	// 		});
	// 	}
	// 	if(arguments[0].length===8||arguments[0][0].length===8){
	// 		var	tm = e - a,
	// 				rm = f - b,
	// 				bm = g - c,
	// 				lm = h - d,
	// 				it = tm / $MXW,
	// 				ir = rm / $MXW,
	// 				ib = bm / $MXW,
	// 				il = lm / $MXW,
	// 				m	 = T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il);
	// 		if(e==="auto"||a==="auto"){top="auto";s=t=u=v=""}
	// 		if(f==="auto"||b==="auto"){r 	="auto";s=t=u=v=""}
	// 		if(g==="auto"||c==="auto"){btm="auto";s=t=u=v=""}
	// 		if(h==="auto"||d==="auto"){l 	="auto";s=t=u=v=""}
	// 		var	top= m[0]+(s||$TU),
	// 				r  = m[1]+(t||s||$TU),
	// 				btm= m[2]+(u||s||$TU),
	// 				l  = m[3]+(v||t||s||$TU);
	// 		this.css({
	// 			marginTop:	 top,
	// 			marginRight: r,
	// 			marginBottom:btm,
	// 			marginLeft:	 l
	// 		});
	// 	}
	// 	return this;
	// }

	// // Responsive Radius
	// $.fn.RborderRadius = function(arg){
	// 	if(typeof(arguments[0][0])==="number"){
	// 		var a=arg[0],b=arg[1],c=arg[2],d=arg[3],
	// 				e=arg[4],f=arg[5],g=arg[6],h=arg[7];
	// 	}else{
	// 		var a=arg[0][0],b=arg[0][1],c=arg[0][2],d=arg[0][3],
	// 				e=arg[0][4],f=arg[0][5],g=arg[0][6],h=arg[0][7],
	// 				s=arg[1][0],t=arg[1][1],u=arg[1][2],v=arg[1][3];
	// 	}

	// 	if(arguments[0].length===2||arguments[0].length===2){
	// 		this.css("borderRadius",$ingleVal(a,b,o));
	// 	}
	// 	if(arguments[0].length===4||arguments[0].length===4){
	// 		var tbr = c - a,
	// 				rlr = d - b,
	// 				itb = tbr / $MXW,
	// 				irl = rlr / $MXW,
	// 				r		= $TwoVals(a,b,c,d,itb,irl);
	// 		this.css({
	// 			borderTopLeftRadius: 		r[0]+(s||$TU),
	// 			borderTopRightRadius: 	r[0]+(s||$TU),
	// 			borderBottomLeftRadius: r[1]+(t||s||$TU),
	// 			borderBottomRightRadius:r[1]+(t||s||$TU)
	// 		});
	// 	}
	// 	if(arguments[0].length===6||arguments[0].length===6){
	// 		var tr	= d - a,
	// 				rlr = e - b,
	// 				br	= f - c,
	// 				it  = tr / $MXW,
	// 				irl = rlr / $MXW,
	// 				ib  = br / $MXW,
	// 				r		= T$RL$B(a,b,c,d,e,f,it,irl,ib);
	// 		this.css({
	// 			borderTopLeftRadius: 		r[0]+(s||$TU),
	// 			borderTopRightRadius: 	r[1]+(t||s||$TU),
	// 			borderBottomLeftRadius: r[1]+(t||s||$TU),
	// 			borderBottomRightRadius:r[2]+(u||s||$TU)
	// 		});
	// 	}
	// 	if(arguments[0].length===8||arguments[0].length===8){
	// 		var tr	= e  - a,
	// 				rr	= f  - b,
	// 				br	= g  - c,
	// 				lr	= h  - d,
	// 				it = tr / $MXW,
	// 				ir = rr / $MXW,
	// 				ib = br / $MXW,
	// 				il = lr / $MXW,
	// 				r		= T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il);
	// 		this.css({
	// 			borderTopLeftRadius: 		r[0]+(s||$TU),
	// 			borderTopRightRadius: 	r[1]+(t||s||$TU),
	// 			borderBottomRightRadius:r[2]+(u||s||$TU),
	// 			borderBottomLeftRadius: r[3]+(v||t||s||$TU)
	// 		});
	// 	}

	// 	return this;
	// }

	// // Individualized Values Counters
	// // responsive top
	// $.fn.Rtop = function(a,b,o){
	// 	this.css("top",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive right
	// $.fn.Rright = function(a,b,o){
	// 	this.css("right",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive bottom
	// $.fn.Rbottom = function(a,b,o){
	// 	this.css("bottom",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive left
	// $.fn.Rleft = function(a,b,o){
	// 	this.css("left",$ingleVal(a,b,o));
	// 	return this;
	// }

	// // responsive padding-top
	// $.fn.RpaddingTop = function(a,b,o){
	// 	this.css("paddingTop",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive padding-right
	// $.fn.RpaddingRight = function(a,b,o){
	// 	this.css("paddingRight",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive padding-bottom
	// $.fn.RpaddingBottom = function(a,b,o){
	// 	this.css("paddingBottom",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive padding-left
	// $.fn.RpaddingLeft = function(a,b,o){
	// 	this.css("paddingLeft",$ingleVal(a,b,o));
	// 	return this;
	// }

	// // responsive margin-top
	// $.fn.RmarginTop = function(a,b,o){
	// 	this.css("marginTop",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive margin-right
	// $.fn.RmarginRight = function(a,b,o){
	// 	this.css("marginRight",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive margin-bottom
	// $.fn.RmarginBottom = function(a,b,o){
	// 	this.css("marginBottom",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive margin-left
	// $.fn.RmarginLeft = function(a,b,o){
	// 	this.css("marginLeft",$ingleVal(a,b,o));
	// 	return this;
	// }

	// // responsive border-top-right-radius
	// $.fn.RborderTopRightRadius = function(a,b,o){
	// 	this.css("borderTopRightRadius",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive border-top-left-radius
	// $.fn.RborderTopLeftRadius = function(a,b,o){
	// 	this.css("borderTopLeftRadius",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive border-bottom-right-radius
	// $.fn.RborderBottomRightRadius = function(a,b,o){
	// 	this.css("borderBottomRightRadius",$ingleVal(a,b,o));
	// 	return this;
	// }
	// // responsive border-bottom-left-radius
	// $.fn.RborderBottomLeftRadius = function(a,b,o){
	// 	this.css("borderBottomLeftRadius",$ingleVal(a,b,o));
	// 	return this;
	// }

	// // Dual Values Counters
	// // Responsive padding top-and bottom
	// $.fn.RpaddingTopBottom = function(a,b,o){
	// 	var val = $ingleVal(a,b),
	// 			ext = s||$TU;
	// 	this.css({
	// 		paddingTop:val+ext,
	// 		paddingBottom:val+ext
	// 	});
	// 	return this;
	// }
	// // Responsive Padding Top-and Bottom
	// $.fn.RpaddingRightLeft = function(a,b,o){
	// 	var val = $ingleVal(a,b),
	// 			ext = s||$TU;
	// 	this.css({
	// 		paddingRight:val+ext,
	// 		paddingLeft:val+ext
	// 	});
	// 	return this;
	// }
	// // Responsive margin top-and bottom
	// $.fn.RmarginTopBottom = function(a,b,o){
	// 	var val = $ingleVal(a,b),
	// 			ext = s||$TU;
	// 	if(a==="auto"){val="auto";ext=""}
	// 	if(b==="auto"){val="auto";ext=""}
	// 	this.css({
	// 		marginTop:val+ext,
	// 		marginBottom:val+ext
	// 	});
	// 	return this;
	// }
	// // Responsive margin top-and bottom
	// $.fn.RmarginRightLeft = function(a,b,o){
	// 	var val = $ingleVal(a,b),
	// 			ext = s||$TU;
	// 	if(a==="auto"){val="auto";ext=""}
	// 	if(b==="auto"){val="auto";ext=""}
	// 	this.css({
	// 		marginRight:val+ext,
	// 		marginLeft:val+ext
	// 	});
	// 	return this;
	// }

	// // Multiple Values
	// $.fn.Rcss = function(arg){
	// 	if(arg.fontSize){
	// 		var a=arg.fontSize[0],b=arg.fontSize[1],o=arg.fontSize[2];
	// 		this.RfontSize(a,b,o);
	// 	}
	// 	if(arg.lineHeight){
	// 		var a=arg.lineHeight[0],b=arg.lineHeight[1],o=arg.lineHeight[2];
	// 		this.RlineHeight(a,b,o);
	// 	}
	// 	if(arg.letterSpacing){
	// 		var a=arg.letterSpacing[0],b=arg.letterSpacing[1],o=arg.letterSpacing[2];
	// 		this.RletterSpacing(a,b,o);
	// 	}

	// 	if(arg.width){
	// 		var a=arg.width[0],b=arg.width[1],o=arg.width[2];
	// 		this.Rwidth(a,b,o);
	// 	}
	// 	if(arg.heightByWidth||arg.heightBW){
	// 		if(arg.heightByWidth){
	// 			var a=arg.heightByWidth[0],b=arg.heightByWidth[1],o=arg.heightByWidth[2];
	// 		}
	// 		if(arg.heightBW){
	// 			var a=arg.heightBW[0],b=arg.heightBW[1],o=arg.heightBW[2];
	// 		}
	// 		this.RheightByWidth(a,b,o);
	// 	}
	// 	if(arg.widthBreakPoints||arg.widthBP){
	// 		if(arg.widthBreakPoints){
	// 			this.RwidthBreakPoints(arg.widthBreakPoints)
	// 		}
	// 		if(arg.widthBP){
	// 			this.RwidthBreakPoints(arg.widthBP)
	// 		}
	// 	}
	// 	if(arg.maxWidth){
	// 		var a=arg.maxWidth[0],b=arg.maxWidth[1],o=arg.maxWidth[2];
	// 		this.RmaxWidth(a,b,o);
	// 	}

	// 	if(arg.padding){
	// 		this.Rpadding(arg.padding);
	// 	}
	// 	if(arg.margin){
	// 		this.Rmargin(arg.margin);
	// 	}
	// 	if(arg.borderRadius){
	// 		this.RborderRadius(arg.borderRadius);
	// 	}

	// 	if(arg.top){
	// 		var a=arg.top[0],b=arg.top[1],o=arg.top[2];
	// 		this.Rtop(a,b,o);
	// 	}
	// 	if(arg.right){
	// 		var a=arg.right[0],b=arg.right[1],o=arg.right[2];
	// 		this.Rright(a,b,o);
	// 	}
	// 	if(arg.bottom){
	// 		var a=arg.bottom[0],b=arg.bottom[1],o=arg.bottom[2];
	// 		this.Rbottom(a,b,o);
	// 	}
	// 	if(arg.left){
	// 		var a=arg.left[0],b=arg.left[1],o=arg.left[2];
	// 		this.Rleft(a,b,o);
	// 	}

	// 	if(arg.paddingTop){
	// 		var a=arg.paddingTop[0],b=arg.paddingTop[1],o=arg.paddingTop[2];
	// 		this.RpaddingTop(a,b,o);
	// 	}
	// 	if(arg.paddingRight){
	// 		var a=arg.paddingRight[0],b=arg.paddingRight[1],o=arg.paddingRight[2];
	// 		this.RpaddingRight(a,b,o);
	// 	}
	// 	if(arg.paddingBottom){
	// 		var a=arg.paddingBottom[0],b=arg.paddingBottom[1],o=arg.paddingBottom[2];
	// 		this.RpaddingBottom(a,b,o);
	// 	}
	// 	if(arg.paddingLeft){
	// 		var a=arg.paddingLeft[0],b=arg.paddingLeft[1],o=arg.paddingLeft[2];
	// 		this.RpaddingLeft(a,b,o);
	// 	}
	// 	if(arg.paddingTopBottom){
	// 		var a=arg.paddingTopBottom[0],b=arg.paddingTopBottom[1],o=arg.paddingTopBottom[2];
	// 		this.RpaddingTopBottom(a,b,o);
	// 	}
	// 	if(arg.paddingRightLeft){
	// 		var a=arg.paddingRightLeft[0],b=arg.paddingRightLeft[1],o=arg.paddingRightLeft[2];
	// 		this.RpaddingRightLeft(a,b,o);
	// 	}

	// 	if(arg.marginTop){
	// 		var a=arg.marginTop[0],b=arg.marginTop[1],o=arg.marginTop[2];
	// 		this.RmarginTop(a,b,o);
	// 	}
	// 	if(arg.marginRight){
	// 		var a=arg.marginRight[0],b=arg.marginRight[1],o=arg.marginRight[2];
	// 		this.RmarginRight(a,b,o);
	// 	}
	// 	if(arg.marginBottom){
	// 		var a=arg.marginBottom[0],b=arg.marginBottom[1],o=arg.marginBottom[2];
	// 		this.RmarginBottom(a,b,o);
	// 	}
	// 	if(arg.marginLeft){
	// 		var a=arg.marginLeft[0],b=arg.marginLeft[1],o=arg.marginLeft[2];
	// 		this.RmarginLeft(a,b,o);
	// 	}
	// 	if(arg.marginTopBottom){
	// 		var a=arg.marginTopBottom[0],b=arg.marginTopBottom[1],o=arg.marginTopBottom[2];
	// 		this.RmarginTopBottom(a,b,o);
	// 	}
	// 	if(arg.marginRightLeft){
	// 		var a=arg.marginRightLeft[0],b=arg.marginRightLeft[1],o=arg.marginRightLeft[2];
	// 		this.RmarginRightLeft (a,b,o);
	// 	}

	// 	if(arg.css){
	// 		for (var i = 0; i < arg.css.length; i++){
	// 			var c=arg.css[i][2],d=arg.css[i][3],l=arg.css[i].length;
	// 			if((l===3||l===4)&&typeof(c)==="number"){var n=c;}else{var n=0;}
	// 			if(i===4&&typeof(d)==="number"){var x=d;}else{var x=99999;}
	// 			if($DWW>n&&$DWW<x){this.css(arg.css[i][0],arg.css[i][1]);}
	// 		}
	// 	}

	// 	if(arg.parent==="on"){
	// 		return this.parent();
	// 	}else{
	// 		return this;
	// 	}

	// }

// }; // func ends
























===================================================


$.fn.Rpadding = function(a,b,c,d, e,f,g,h, z){
		for(var i = 0; i < arguments.length; i++){ // get how many "numbers" on the argument
			if(typeof(arguments[i])==="number"){
				var nums=i
			}
		}
		var halfNum = (nums+1) / 2, // nums is + 1 because array is 0 based
						val = [[],[],[],[]]; // This var is to retain the push values because push is shitty
		for (var i = 1; i < halfNum+1; i++) {
			// var result = [TotalVal(arguments[i],arguments[(halfNum-1)+i],z)],

			// console.log(i);
			var loopA = arguments[i],
					loopB = arguments[(halfNum-1)+i],
							G = MV(),
						cbp = CBP(G,z),
						 r  = loopB - loopA,
						bit = r / cbp.SWR;
			if(cbp.bMinW){
				// return loopA
				val[i-1].push(loopA)
			}else if(cbp.bMaxW){
				// return loopB
				val[i-1].push(loopB)
			}else{
				// return loopA+(i*cbp.scp)
				val[i-1].push(loopA+(bit*cbp.scp))
			}
			// console.log(arguments[i]);


			// toPush = val[i-1].push(result);
		}
		// ScaleAssign(val,halfNum,z);
		console.log(val);
		// return this
	}




// THIS IS NOT WORKING WELL RIGHT NOW. I can fix this if time is okay
	$.fn.RwidthBreakPoints = function(a,b,z){ // Responsive Width with Break Points
		var ddw=MV().DWW, arg=arguments[0], argL=arguments[0].length;
		for (var i = 0; i < argL; i++){
			var zL=arguments[0][i].length
			for (var i2 = 0; i2 < zL; i2++) {
				if(typeof(arguments[0][i][i2])==="object"){
					zA=arguments[0][i][i2];
				}
			}

			if(i===0){var start=true,last=false;
			}else if(i===(argL-1)){var start=false,last=true;
			}else{var start=false,last=false;}

			var minR = zA.minRange||MNSW, maxR = zA.maxRange||MXSW;
			// get and set default val from sibling array of minRange val through array.reverse
			if(!start){var minR=zA.minRange||arguments[0][i-1].reverse()[0].minRange||MNSW}
			if(!last ){var maxR=zA.maxRange||arguments[0][i+1].reverse()[0].minRange||MXSW}

				// console.log(arg[i][0]+" | "+arg[i][1]+" | "+arg[i].reverse());
				// console.log(arg[i]);
			if(((ddw>=minR||start)&&(ddw<=maxR||last))||argL===1){
				// console.log("fofo");
				if(typeof(arg[i][1])==="number"){
					// console.log("fefe");
					// console.log(minR);
					// console.log(maxR);
					// console.log(arguments[0][i-1].reverse()[0].minRange);
					console.log(arguments[0][i+1][0]);
					console.log(maxR);
					// var sureObj=arg[i].reverse()[0];
					// this.css("width",Values(arg[i][0],arg[i][1],arg[i].reverse()[0]));
				}else{
					console.log("fofo");
					// this.css("width",Values(arg[i][0],arg[i][0],arg[i].reverse()[0]));
				}
			}
		}
		return this;
	}

------------------------------------------




// THIS WORKS BUT NEEDS IMPROVEMENT
function Values(a) { // Determine and Calculates Paired Values
		for(var i = 1; i <= a.length; i++){ // a = arguments[0]
			if(typeof(a[i])==="string"){a[i]=0;}//if "string" or "auto" default it to 0
			if(typeof(a[i])==="number"){var nums=i+1;}//how many "numbers" + 1 cause array is 0 based
		}
		var halfNum = nums / 2,
						obj = a[nums],
						val = [[],[],[],[]]; //to retain the push values because push overwrites values inside loop
		for(var i = 1; i <= halfNum; i++){
			var loopA = a[i-1],
					loopB = a[(i-1)+halfNum],
							G = MV(),
						 ob = obj||{},
							n = ob.minRange||MNSW,
							x = ob.maxRange||MXSW,
					bMinW = G.DWW <= n,
					bMaxW = G.DWW >= x,
						swr = x - n,
							r = loopB - loopA,
						bit = r / swr,
					scope = G.DWW - n;
			if(bMinW){
				val[i-1].push(loopA)
			}else if(bMaxW){
				val[i-1].push(loopB)
			}else{
				val[i-1].push(loopA+(bit*scope))
			}
		}
		var s = ob.scale,
			stb = ob.scaleTB, srl = ob.scaleRL,
			 st = ob.scaleT, sb = ob.scaleB, sr = ob.scaleR, sl = ob.scaleL;
		if(halfNum===1){var scl = [s||STU]}
		if(halfNum===2){var scl = [stb||s||STU,srl||s||STU]}
		if(halfNum===3){var scl = [st||stb||s||STU,srl||s||STU,sb||stb||s||STU]}
		if(halfNum===4){var scl = [st||stb||s||STU,sr||srl||s||STU,sb||stb||s||STU,sl||srl||s||STU]}
		var product = [[],[],[],[]];
		for (var i = 0; i < halfNum; i++){ // starts at 0 because it deals with var val
			product[i].push(val[i]+scl[i]) // combine val values here
		}
		return product.join(' ');
	}

-----------------------------------------

// a little advence


// var vals = a[mainI][1].length;
for(var i=0;i<vals;i++){if(typeof(a[i])==="object"){vals--}}
var halfNum = vals / 2,
				obj = a[vals],
				 ob = obj||{}
				val = [],
					s = ob.scale||STU,
				stb = ob.scaleTB, srl = ob.scaleRL,
				 st = ob.scaleT, sb = ob.scaleB, sr = ob.scaleR, sl = ob.scaleL;
if(halfNum===1){var scl = [s]}
if(halfNum===2){var scl = [stb||s,srl||s]}
if(halfNum===3){var scl = [st||stb||s,srl||s,sb||stb||s]}
if(halfNum===4){var scl = [st||stb||s,sr||srl||s,sb||stb||s,sl||srl||s]}
for(var i = 0; i <= (halfNum-1); i++){
	var loopA = a[i],
			loopB = a[i+halfNum],
					G = MV();
	if(typeof(a[i])==="number"){
			var n = ob.minRange||MNSW,
					x = ob.maxRange||MXSW,
			bMinW = G.DWW <= n,
			bMaxW = G.DWW >= x,
				swr = x - n,
					r = loopB - loopA,
				bit = r / swr,
			scope = G.DWW - n;
		if(bMinW){
			val.push(loopA+scl[i])
		}else if(bMaxW){
			val.push(loopA+scl[i])
		}else{
			val.push((loopA+(bit*scope))+scl[i])
		}
	}else{
		val.push("auto")
	}
}


// =====================================================


// FULLY WORKING BUT ALREADY HAVE IMPROVE (JUST BACKUP)
$.fn.RwidthBreakPoints = function(a){
	var G=MV(), aL=a.length;
	for (var i = 0; i < aL; i++){
		var w = a[i].width,
			mnW = a[i].minWidth||w||a[i].maxWidth,
			mxW = a[i].maxWidth||w||a[i].minWidth,
			scl = a[i].scale;

		if(i===0){var start=true,last=false;
		}else if(i===(aL-1)){var start=false,last=true;
		}else{var start=false,last=false;}

		var minR = a[i].minRange||MNSW,
				maxR = a[i].maxRange||MXSW;
		if(!start){minR=a[i].minRange||a[i-1].maxRange||MNSW}
		if(!last) {maxR=a[i].maxRange||a[i+1].minRange||MXSW}

		if(((G.DWW>=minR||start)&&(G.DWW<=maxR||last))||aL===1){
			var eRange = mxW  - mnW,
					dRange = maxR - minR,
						 bit = eRange / dRange,
					wScope = G.DWW - minR;
			if(G.DWW <= minR){
				var val = mnW||w;
			}else if(G.DWW >= maxR){
				var val = mxW||w;
			}else{
				var val = mnW + (bit * wScope);
			}
			this.css("width",val+(scl||STU));
		}
	}
	return this;
}



	$.fn.RfontSize=function(a){this.css('fontSize', Values(a));return this}
	$.fn.RlineHeight=function(a){this.css("lineHeight",Values(a));return this}
	$.fn.RletterSpacing=function(a){this.css("letterSpacing",Values(a));return this}

	$.fn.Rwidth=function(a){this.css("width",Values(a));return this}
	$.fn.Rheight=function(a){this.css("height",Values(a));return this}
	$.fn.RmaxWidth=function(a){this.css("maxWidth",Values(a));return this}
	$.fn.RminWidth=function(a){this.css("minWidth",Values(a));return this}

	$.fn.Rtop=function(a){this.css("top",Values(a));return this}
	$.fn.Rright=function(a){this.css("right",Values(a));return this}
	$.fn.Rbottom=function(a){this.css("bottom",Values(a));return this}
	$.fn.Rleft=function(a){this.css("left",Values(a));return this}

	$.fn.Rpadding=function(a){this.css("padding",Values(a));return this}
	$.fn.RpaddingTop=function(a){this.css("paddingTop",Values(a));return this}
	$.fn.RpaddingRight=function(a){this.css("paddingRight",Values(a));return this}
	$.fn.RpaddingBottom=function(a){this.css("paddingBottom",Values(a));return this}
	$.fn.RpaddingLeft=function(a){this.css("paddingLeft",Values(a));return this}
	$.fn.RpaddingTopBottom=function(a){var val=Values(a);
		this.css({paddingTop:val,paddingBottom:val});return this}
	$.fn.RpaddingRightLeft=function(a){var val=Values(a);
		this.css({paddingRight:val,paddingLeft:val});return this}

	$.fn.Rmargin=function(a){
		console.log("foo");
		this.css("margin",Values(a));return this
	}
	$.fn.RmarginTop=function(a){this.css("marginTop",Values(a));return this}
	$.fn.RmarginRight=function(a){this.css("marginRight",Values(a));return this}
	$.fn.RmarginBottom=function(a){this.css("marginBottom",Values(a));return this}
	$.fn.RmarginLeft=function(a){this.css("marginLeft",Values(a));return this}
	$.fn.RmarginTopBottom=function(a){var val=Values(a);
		this.css({marginTop:val,marginBottom:val});return this}
	$.fn.RmarginRightLeft=function(a){var val=Values(a);
		this.css({marginRight:val,marginLeft:val});return this}

	$.fn.RborderRadius=function(a){this.css("borderRadius",Values(a));return this}
	$.fn.RborderTopRightRadius=function(a){this.css("borderTopRightRadius",Values(a));return this}
	$.fn.RborderTopLeftRadius=function(a){this.css("borderTopLeftRadius",Values(a));return this}
	$.fn.RborderBottomRightRadius=function(a){this.css("borderBottomRightRadius",Values(a));return this}
	$.fn.RborderBottomLeftRadius=function(a){this.css("borderBottomLeftRadius",Values(a));return this}

	// Multiple Values In One
	$.fn.Rcss = function(a){
		if(a.fontSize){this.RfontSize(a.fontSize)}
		if(a.lineHeight){this.RlineHeight(a.lineHeight)}
		if(a.letterSpacing){this.RletterSpacing(a.letterSpacing)}
		if(a.width){this.Rwidth(a.width)}
		if(a.height){this.Rheight(a.height)}
		if(a.minWidth){this.RminWidth(a.minWidth)}
		if(a.maxWidth){this.RmaxWidth(a.maxWidth)}
		if(a.padding){this.Rpadding(a.padding)}
		if(a.paddingTop){this.RpaddingTop(a.paddingTop)}
		if(a.paddingRight){this.RpaddingRight(a.paddingRight)}
		if(a.paddingBottom){this.RpaddingBottom(a.paddingBottom)}
		if(a.paddingLeft){this.RpaddingLeft(a.paddingLeft)}
		if(a.paddingTopBottom){this.RpaddingTopBottom(a.paddingTopBottom)}
		if(a.paddingRightLeft){this.RpaddingRightLeft(a.paddingRightLeft)}
		if(a.margin){this.Rmargin(a.margin)}
		if(a.marginTop){this.RmarginTop(a.marginTop)}
		if(a.marginRight){this.RmarginRight(a.marginRight)}
		if(a.marginBottom){this.RmarginBottom(a.marginBottom)}
		if(a.marginLeft){this.RmarginLeft(a.marginLeft)}
		if(a.marginTopBottom){this.RmarginTopBottom(a.marginTopBottom)}
		if(a.marginRightLeft){this.RmarginRightLeft (a.marginRightLeft)}
		if(a.borderRadius){this.RborderRadius(a.borderRadius)}
		if(a.borderTopRightRadius){this.RborderTopRightRadius(a.borderTopRightRadius)}
		if(a.borderTopLeftRadius){this.RborderTopLeftRadius(a.borderTopLeftRadius)}
		if(a.borderBottomRightRadius){this.RborderBottomRightRadius(a.borderBottomRightRadius)}
		if(a.borderBottomLeftRadius){this.RborderBottomLeftRadius(a.borderBottomLeftRadius)}
		if(a.top){this.Rtop(a.top)}
		if(a.right){this.Rright(a.right)}
		if(a.bottom){this.Rbottom(a.bottom)}
		if(a.left){this.Rleft(a.left)}
		if(a.css){ // css with break points
			var G=MV();
			for (var i = 0; i < a.css.length; i++){
				var c=a.css[i][2],d=a.css[i][3],l=a.css[i].length;
				if((l===3||l===4)&&typeof(c)==="number"){
					var n=c;}else{var n=0;
				}
				if(i===4&&typeof(d)==="number"){
					var x=d;}else{var x=99999;
				}
				if(G.DWW>n&&G.DWW<x){
					this.css(a.css[i][0],a.css[i][1]);
				}
			}
		}

		if(a.parent==="on"){ // optional to not to constantly call parent() on jQuery function
			return this.parent();
		}else{
			return this;
		}
	}


// ================================================