import{b as h,la as $}from"./chunk-UVJ4NX35.js";import{ea as d,ka as f,ra as p}from"./chunk-GDNDWUAB.js";var b=(()=>{let r=class r{constructor(){this.baseUrl=$.apiUrl,this.http=f(h),this.orderComplete=!1}createOrder(t){return this.http.post(this.baseUrl+"orders",t)}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(t){return this.http.get(this.baseUrl+"orders/"+t)}};r.\u0275fac=function(s){return new(s||r)},r.\u0275prov=d({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var w=(()=>{let r=class r{transform(t,...s){if(t&&"address"in t&&t.name){let{line1:i,line2:n,city:o,state:a,country:c,postal_code:m}=t?.address;return`${t.name}, ${i}${n?", "+n:""}, 
        ${o}, ${a}, ${m}, ${c}`}else if(t&&"line1"in t){let{line1:i,line2:n,city:o,state:a,country:c,postalCode:m}=t;return`${t.name}, ${i}${n?", "+n:""}, 
        ${o}, ${a}, ${m}, ${c}`}else return"Unknown address"}};r.\u0275fac=function(s){return new(s||r)},r.\u0275pipe=p({name:"address",type:r,pure:!0,standalone:!0});let e=r;return e})();var F=(()=>{let r=class r{transform(t,...s){if(t&&"card"in t){let{brand:i,last4:n,exp_month:o,exp_year:a}=t.card;return`${i.toUpperCase()} **** **** **** ${n}, Exp: ${o}/${a}`}else if(t&&"last4"in t){let{brand:i,last4:n,expMonth:o,expYear:a}=t;return`${i.toUpperCase()} **** **** **** ${n}, Exp: ${o}/${a}`}else return"Unknown payment method"}};r.\u0275fac=function(s){return new(s||r)},r.\u0275pipe=p({name:"paymentCard",type:r,pure:!0,standalone:!0});let e=r;return e})();export{b as a,w as b,F as c};
