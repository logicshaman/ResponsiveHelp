/*! ResponsiveHelp V1 | Aug 20, 2019 | MIT | Author: Eulr A. Masauding */
function responsiveHelp(minimumSiteWidth,maximumSiteWidth,defaultScaleToUse){
	var MNSW = minimumSiteWidth ||500, // Set default minimum width
	    MXSW = maximumSiteWidth ||1200, // Set default maximum width
	     STU = defaultScaleToUse||"rem", // Set default scale to use
	       $ = jQuery; // Secure $ as jQuery
	$.fn.Rcss = function(a,b){ // Worker
		var DWW = window.innerWidth; // window width
		for(var mainI = 0; mainI < a.length; mainI++){
			var attrValCount = a[mainI][1].length;
			for(var srchI = 0; srchI < attrValCount; srchI++){
				var objL = a[mainI][1][srchI].length,
					theObj = a[mainI][1][srchI][objL-1];
				if(attrValCount===1){var first=true,last=true} // check range position
				else if(srchI===0){var first=true,last=false}
				else if(srchI===(attrValCount-1)){var first=false,last=true}
				else{var first=false,last=false}
				var minR = theObj.minRange||MNSW, // set default points
						maxR = theObj.maxRange||MXSW; // set default points
				if(!first){ // set default points
					var objL = a[mainI][1][srchI-1].length,
							minR = theObj.minRange||a[mainI][1][srchI-1][objL-1].maxRange||MNSW}
				else if(!last){ // set default points
					var objL = a[mainI][1][srchI+1].length,
							maxR = theObj.maxRange||a[mainI][1][srchI+1][objL-1].minRange||MXSW}
				if((DWW>=minR||(DWW<=minR&&first))&&(DWW<=maxR||(DWW>=maxR&&last))){ // range gate
					if(typeof(a[mainI][1][srchI][0])==="string"){ // filter string values
						this.css(a[mainI][0],a[mainI][1][srchI][0]); // on-air
					}
					if(typeof(a[mainI][1][srchI][0])==="number"){ // filter numbers values
						var vals = a[mainI][1][srchI].length;
						for(var i=0;i<vals;i++){if(typeof(a[mainI][1][srchI][i])==="object"){vals--}}
						var halfNum = vals / 2,
										obj = a[mainI][1][srchI][vals],
										 ob = obj||{},
										val = [],
											s = ob.scale||STU, // scale
										stb = ob.scaleTB, srl = ob.scaleRL, // scale
										 st = ob.scaleT, sb = ob.scaleB, sr = ob.scaleR, sl = ob.scaleL; // scale
						if(halfNum===1){var scl = [s]} // scale distribution
						if(halfNum===2){var scl = [stb||s,srl||s]} // scale distribution
						if(halfNum===3){var scl = [st||stb||s,srl||s,sb||stb||s]} // scale distribution
						if(halfNum===4){var scl = [st||stb||s,sr||srl||s,sb||stb||s,sl||srl||s]} // scale distribution
						for(var i = 0; i <= (halfNum-1); i++){
							var loopA = a[mainI][1][srchI][i],
									loopB = a[mainI][1][srchI][i+halfNum],
											n = minR,
											x = maxR,
									bMinW = DWW <= n,
									bMaxW = DWW >= x,
										swr = x - n,
											r = loopB - loopA,
										bit = r / swr,
									scope = DWW - n;
							if(bMinW){
								val.push(loopA+scl[i])
							}else if(bMaxW){
								val.push(loopB+scl[i])
							}else{
								val.push((loopA+(bit*scope))+scl[i])
							}
						}
						this.css(a[mainI][0],val.join(' ')); // release
					}
				}
			}
		}if(!b){return this}else if(b==="off"){return this.parent()}else{return this.parents(b)} // chain jQuery
	}
}